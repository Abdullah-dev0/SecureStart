import type { Metadata } from "next";
import { Lato } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/themeProviders";

import "./globals.css";

const latoFont = Lato({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "SecureStart",
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
	metadataBase: new URL("https://securestart.netlify.app/"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://securestart.netlify.app/",
		title: "Better Auth Kit",
		description: "A starter kit for authentication using Better Auth and Next.js",
		siteName: "Better Auth Kit",
	},
	twitter: {
		card: "summary_large_image",
		title: "Better Auth Kit",
		description: "A starter kit for authentication using Better Auth and Next.js",
		site:"https://securestart.netlify.app/"
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
					<Toaster richColors />
				</ThemeProvider>
			</body>
		</html>
	);
}
