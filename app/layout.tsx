import type { Metadata } from "next";
import { Lato } from "next/font/google";

import { ThemeProvider } from "@/providers/themeProviders";
import "./globals.css";

const latoFont = Lato({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Better Auth Kit",
	description: "A starter kit for authentication using Better Auth and Next.js",
	keywords: ["authentication", "Next.js", "Better Auth", "auth kit", "starter kit"],
	authors: [
		{
			name: "Abdullah",
		},
	],
	creator: "Better Auth Kit",
	publisher: "Better Auth Kit",
	robots: {
		index: true,
		follow: true,
	},
	metadataBase: new URL("https://better-auth-kit.vercel.app"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://better-auth-kit.vercel.app",
		title: "Better Auth Kit",
		description: "A starter kit for authentication using Better Auth and Next.js",
		siteName: "Better Auth Kit",
	},
	twitter: {
		card: "summary_large_image",
		title: "Better Auth Kit",
		description: "A starter kit for authentication using Better Auth and Next.js",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* // please remove the background color from the body tag if you dont want it  */}
			<body className={`${latoFont.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
