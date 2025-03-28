import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/components/analytics/posthog-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Roo Code – Your AI-Powered Dev Team in VS Code",
    description: "Roo Code puts an entire AI dev team right in your editor, outpacing closed tools with deep project-wide context, multi-step agentic coding, and unmatched developer-centric flexibility.",
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png' },
        ],
        other: [
            {
                rel: 'android-chrome-192x192',
                url: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                rel: 'android-chrome-512x512',
                url: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            },
        ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                {/* google site name: https://developers.google.com/search/docs/appearance/site-names */}
                <div itemScope itemType="https://schema.org/WebSite">
                    <link itemProp="url" href="https://roocode.com" />
                    <meta itemProp="name" content="Roo Code" />
                </div>
                <PostHogProvider>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                        {children}
                    </ThemeProvider>
                </PostHogProvider>
            </body>
        </html>
    );
}
