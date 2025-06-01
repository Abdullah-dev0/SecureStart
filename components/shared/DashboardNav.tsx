"use client";

import { ChevronDown, Home, LogOut, Menu, Search, Settings, User, UserCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { signOut } from "@/lib/auth-client";

import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DashboardNav = () => {
	const router = useRouter();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleLogout = async () => {
		await signOut({
			fetchOptions: {
				onSuccess: () => {
					toast.success("Logged out successfully");
					router.push("/signin");
				},
				onError: (error) => {
					toast.error(error.error.message);
				},
			},
		});
	};

	const handleProfileClick = () => {
		// Navigate to profile page or handle profile action
		router.push("/dashboard/profile");
	};

	const handleSettingsClick = () => {
		// Navigate to settings page or handle settings action
		router.push("/dashboard/settings");
	};

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
				{" "}
				{/* Logo Section */}
				<div className="flex items-center">
					<Link href="/dashboard" className="flex items-center space-x-2">
						<span className="hidden font-bold text-xl sm:inline-block">SecureStart</span>
					</Link>
				</div>
				{/* Navigation Links - Desktop */}
				<div className="hidden md:flex items-start ml-7">
					<Link
						href="/dashboard"
						className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
						<Home size={16} />
						<span>Dashboard</span>
					</Link>
				</div>
				{/* Right Side Actions */}
				<div className="flex items-center space-x-4 ml-auto">
					{/* User Dropdown Menu */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="flex items-center space-x-2 h-10 px-3 hover:bg-accent">
								<div className="relative">
									<UserCircle size={24} className="text-muted-foreground" />
								</div>
								<div className="hidden sm:flex flex-col items-start">
									<span className="text-sm font-medium">John Doe</span>
									<span className="text-xs text-muted-foreground">john@example.com</span>
								</div>
								<ChevronDown size={16} className="text-muted-foreground" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-56">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={handleProfileClick}>
								<User className="mr-2 h-4 w-4" />
								<span>Profile</span>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={handleSettingsClick}>
								<Settings className="mr-2 h-4 w-4" />
								<span>Settings</span>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
								<LogOut className="mr-2 h-4 w-4" />
								<span>Sign out</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<Menu size={20} />
					</Button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden border-t border-border">
					<div className="container px-4 py-4 space-y-4">
						{/* Mobile Search */}
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
							<input
								type="text"
								placeholder="Search..."
								className="w-full pl-10 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
							/>
						</div>

						{/* Mobile Navigation Links */}
						<div className="space-y-2">
							<Link
								href="/dashboard"
								className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
								onClick={() => setIsMobileMenuOpen(false)}>
								<Home size={16} />
								<span>Dashboard</span>
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default DashboardNav;
