import type { Metadata } from "next";
import { Source_Code_Pro, VT323 } from "next/font/google"; // Hacker fonts
import ComplianceBanner from "@/components/ui/ComplianceBanner";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code"
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
});

export const metadata: Metadata = {
  title: "Phantomi | Zero-Trace Encrypted Messaging",
  description: "End-to-End Encrypted. RAM-Only Architecture. The Neo-Matrix of Secure Communication.",
  publisher: "Phantomi Security",
  authors: [{ name: "Phantomi Team" }],
  keywords: ["Secure Messaging", "Ram-only server", "Zero-trace", "PQC Encryption", "Privacy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${sourceCodePro.variable} ${vt323.variable} antialiased bg-black text-green-500 overflow-x-hidden selection:bg-green-500 selection:text-black font-mono`}
      >
        <div className="scanlines" />
        <LanguageProvider>
          {children}
          <ComplianceBanner />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Phantomi",
              "applicationCategory": "SecurityApplication",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Zero-Trace End-to-End Encrypted Messaging. What happens in the request, stays in the RAM.",
              "featureList": "ECDH P-521 Encryption, RAM-Only Server, Forward Secrecy, Ghost Protocol"
            })
          }}
        />
      </body>
    </html>
  );
}
