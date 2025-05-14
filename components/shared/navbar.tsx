"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-40 transition-all duration-300",
				scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40" : "bg-transparent",
			)}>
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<div className="flex items-center gap-2">
					<Link href="/" className="flex items-center space-x-2">
						<div className="h-8 w-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
						<span className="text-xl font-bold">BetterAuth</span>
					</Link>
				</div>

				{/* Desktop Menu */}
				<nav className="hidden md:flex items-center space-x-6">
					<a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
						Features
					</a>
					<a href="#auth-methods" className="text-sm font-medium transition-colors hover:text-primary">
						Auth Methods
					</a>
					<a href="#get-started" className="text-sm font-medium transition-colors hover:text-primary">
						Get Started
					</a>
					<a
						href="https://github.com/yourusername/better-auth"
						className="text-sm font-medium transition-colors hover:text-primary"
						target="_blank"
						rel="noopener noreferrer">
						GitHub
					</a>
					<Button size="sm" className="ml-4">
						Documentation
					</Button>
				</nav>

				{/* Mobile Menu Button */}
				<Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					<Menu />
				</Button>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-background border-b">
					<nav className="container flex flex-col py-4 px-4 gap-2">
						<a
							href="#features"
							className="text-sm font-medium py-2 transition-colors hover:text-primary"
							onClick={() => setMobileMenuOpen(false)}>
							Features
						</a>
						<a
							href="#auth-methods"
							className="text-sm font-medium py-2 transition-colors hover:text-primary"
							onClick={() => setMobileMenuOpen(false)}>
							Auth Methods
						</a>
						<a
							href="#get-started"
							className="text-sm font-medium py-2 transition-colors hover:text-primary"
							onClick={() => setMobileMenuOpen(false)}>
							Get Started
						</a>
						<a
							href="https://github.com/yourusername/better-auth"
							className="text-sm font-medium py-2 transition-colors hover:text-primary"
							onClick={() => setMobileMenuOpen(false)}>
							GitHub
						</a>
						<Button size="sm" className="mt-2 w-full">
							Documentation
						</Button>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Navbar;
