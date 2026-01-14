"use client";

import dynamic from "next/dynamic";

const SceneContainer = dynamic(() => import("./SceneContainer"), {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-deep-void" />
});

export default function SceneLoader() {
    return <SceneContainer />;
}
