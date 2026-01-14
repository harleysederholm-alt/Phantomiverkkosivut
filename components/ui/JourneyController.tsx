"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useState, useEffect, useCallback, useRef } from "react";

interface JourneyControllerProps {
    children: React.ReactNode;
}

export default function JourneyController({ children }: JourneyControllerProps) {
    const { language } = useLanguage();
    const [isJourneyActive, setIsJourneyActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showCountdown, setShowCountdown] = useState(false);
    const [countdown, setCountdown] = useState(3);

    const animationFrameRef = useRef<number | null>(null);
    const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const journeyStartTimeRef = useRef<number>(0);
    const pausedAtRef = useRef<number>(0);
    const totalPausedTimeRef = useRef<number>(0);
    const isPausedRef = useRef<boolean>(false); // Ref for animation loop to avoid stale closure

    // 6 minute journey - enough time to read all content during presentation
    const JOURNEY_DURATION = 360000;

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
        };
    }, []);

    const getTotalScrollHeight = useCallback(() => {
        return document.documentElement.scrollHeight - window.innerHeight;
    }, []);

    // Linear easing - constant speed throughout for consistent readability
    const smoothEase = (t: number): number => {
        // No easing - same speed from start to finish
        // All content gets equal reading time
        return t;
    };

    // Smooth continuous scroll animation
    const animateScroll = useCallback(() => {
        // Use ref to avoid stale closure issues
        if (isPausedRef.current) return;

        const now = performance.now();
        const elapsedTime = now - journeyStartTimeRef.current - totalPausedTimeRef.current;
        const progressRatio = Math.min(elapsedTime / JOURNEY_DURATION, 1);

        const totalHeight = getTotalScrollHeight();

        // Use smooth cubic easing - visible from the start
        const eased = smoothEase(progressRatio);
        const easedScrollY = eased * totalHeight;

        window.scrollTo({
            top: easedScrollY,
            behavior: 'instant'
        });

        setProgress(Math.round(progressRatio * 100));

        if (progressRatio < 1) {
            animationFrameRef.current = requestAnimationFrame(animateScroll);
        } else {
            // Journey complete
            setIsJourneyActive(false);
            setProgress(0);
        }
    }, [getTotalScrollHeight]);

    const startJourney = useCallback(() => {
        // Scroll to top first
        window.scrollTo({ top: 0, behavior: 'instant' });

        setIsJourneyActive(true);
        setIsPaused(false);
        isPausedRef.current = false; // Keep ref in sync
        setProgress(0);
        totalPausedTimeRef.current = 0;
        journeyStartTimeRef.current = performance.now();

        // Start animation immediately
        animationFrameRef.current = requestAnimationFrame(animateScroll);
    }, [animateScroll]);

    const initiateJourney = useCallback(() => {
        if (isJourneyActive || showCountdown) return;

        setShowCountdown(true);
        setCountdown(3);

        countdownIntervalRef.current = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    if (countdownIntervalRef.current) {
                        clearInterval(countdownIntervalRef.current);
                    }
                    setShowCountdown(false);
                    startJourney();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, [isJourneyActive, showCountdown, startJourney]);

    const togglePause = useCallback(() => {
        if (!isJourneyActive) return;

        if (isPaused) {
            // Resume - calculate total paused time
            totalPausedTimeRef.current += performance.now() - pausedAtRef.current;
            setIsPaused(false);
            isPausedRef.current = false; // Keep ref in sync
            animationFrameRef.current = requestAnimationFrame(animateScroll);
        } else {
            // Pause
            pausedAtRef.current = performance.now();
            setIsPaused(true);
            isPausedRef.current = true; // Keep ref in sync
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    }, [isPaused, isJourneyActive, animateScroll]);

    const stopJourney = useCallback(() => {
        setIsJourneyActive(false);
        setIsPaused(false);
        setProgress(0);
        setShowCountdown(false);
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Spacebar and Escape handlers
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Spacebar: Start journey OR toggle pause
            if (e.code === 'Space' && e.target === document.body) {
                e.preventDefault();

                if (!isJourneyActive && !showCountdown) {
                    initiateJourney();
                } else if (isJourneyActive) {
                    togglePause();
                }
            }

            // Escape: Stop and return to top
            if (e.code === 'Escape' && (isJourneyActive || showCountdown)) {
                stopJourney();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isJourneyActive, showCountdown, initiateJourney, togglePause, stopJourney]);

    // Scroll detection to end journey
    useEffect(() => {
        if (!isJourneyActive || isPaused) return;

        const handleWheel = (e: WheelEvent) => {
            // User is manually scrolling - stop the journey
            if (Math.abs(e.deltaY) > 10) {
                stopJourney();
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [isJourneyActive, isPaused, stopJourney]);

    // Expose journey functions to window for other components
    useEffect(() => {
        (window as unknown as Record<string, unknown>).__journeyController = {
            start: initiateJourney,
            stop: stopJourney,
            togglePause,
            isActive: isJourneyActive,
            isPaused
        };
    }, [initiateJourney, stopJourney, togglePause, isJourneyActive, isPaused]);

    return (
        <>
            {children}

            {/* MINIMAL PLAY/PAUSE BUTTON - Top Left Corner */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
                onClick={() => isJourneyActive ? togglePause() : initiateJourney()}
                className="fixed top-4 left-4 z-[85] group"
                title={isJourneyActive
                    ? (isPaused ? (language === 'fi' ? 'Jatka (Space)' : 'Resume (Space)') : (language === 'fi' ? 'Tauko (Space)' : 'Pause (Space)'))
                    : (language === 'fi' ? 'Aloita matka (Space)' : 'Start Journey (Space)')}
            >
                {/* Clean, borderless button */}
                <div className="relative w-12 h-12 flex items-center justify-center transition-all duration-300">
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-emerald-400/0 group-hover:bg-emerald-400/20 transition-all duration-300 blur-xl scale-150" />

                    {/* The icon */}
                    {isJourneyActive && !isPaused ? (
                        // Pause icon when playing
                        <svg className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    ) : (
                        // Play icon when stopped or paused
                        <svg className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}

                    {/* Progress ring when active */}
                    {isJourneyActive && (
                        <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-60" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="48"
                                fill="none"
                                stroke="rgba(16,185,129,0.15)"
                                strokeWidth="2"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="48"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="2"
                                strokeDasharray={`${progress * 3.02} 302`}
                                strokeLinecap="round"
                                className="transition-all duration-200"
                            />
                        </svg>
                    )}
                </div>
            </motion.button>

            {/* Minimal progress bar at top */}
            <AnimatePresence>
                {isJourneyActive && (
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 right-0 z-[84] h-1 bg-black/50"
                        style={{ transformOrigin: 'left' }}
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                            style={{ width: `${progress}%` }}
                        />
                        {isPaused && (
                            <div className="absolute right-4 top-3 text-amber-400 text-xs font-mono animate-pulse">
                                [{language === 'fi' ? 'TAUKO' : 'PAUSED'}]
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* COUNTDOWN OVERLAY */}
            <AnimatePresence>
                {showCountdown && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md pointer-events-none"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-emerald-400/70 font-mono text-xl mb-8 tracking-[0.3em]"
                        >
                            {language === 'fi' ? 'MATKA ALKAA' : 'JOURNEY BEGINS'}
                        </motion.p>
                        <motion.div
                            key={countdown}
                            initial={{ scale: 0.3, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 2, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="text-[12rem] font-black text-emerald-400 font-mono leading-none"
                            style={{
                                textShadow: '0 0 80px rgba(16, 185, 129, 0.9), 0 0 160px rgba(16, 185, 129, 0.5), 0 0 240px rgba(16, 185, 129, 0.3)'
                            }}
                        >
                            {countdown}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
