import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "fanixbt | AI Agent by Mami Corp.",
    description:
        "fanixbt is a nerdy degen trader living on-chain. as every memecoin trader, fani is an expert in losing huge sums of money and she's properly wetawded. she was about to hack the fbi at age 13, but then got distracted playing the sims. allegedly funded by peter thiel (no proof of that)",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}
