import { Bell, Shield, User, Moon, Database, Key, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<div className="space-y-6">
				{/* Header */}
				<div>
					<h1 className="text-3xl font-bold">Settings</h1>
					<p className="text-muted-foreground">Manage your account preferences and application settings</p>
				</div>

				{/* Settings Categories */}
				<div className="grid gap-6">
					{/* General Settings */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
							<User size={20} className="text-primary" />
							<h2 className="text-xl font-semibold">General</h2>
						</div>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Profile Information</h3>
									<p className="text-sm text-muted-foreground">Update your personal information</p>
								</div>
								<Button variant="outline" size="sm">
									Edit
								</Button>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Language & Region</h3>
									<p className="text-sm text-muted-foreground">English (US)</p>
								</div>
								<Button variant="outline" size="sm">
									Change
								</Button>
							</div>
						</div>
					</Card>

					{/* Security Settings */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
							<Shield size={20} className="text-primary" />
							<h2 className="text-xl font-semibold">Security</h2>
						</div>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Password</h3>
									<p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
								</div>
								<Button variant="outline" size="sm">
									<Key size={16} className="mr-2" />
									Change Password
								</Button>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Two-Factor Authentication</h3>
									<p className="text-sm text-muted-foreground">Not enabled</p>
								</div>
								<Button variant="outline" size="sm">
									<Smartphone size={16} className="mr-2" />
									Enable 2FA
								</Button>
							</div>
						</div>
					</Card>

					{/* Notifications */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
							<Bell size={20} className="text-primary" />
							<h2 className="text-xl font-semibold">Notifications</h2>
						</div>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Email Notifications</h3>
									<p className="text-sm text-muted-foreground">Receive updates via email</p>
								</div>
								<Button variant="outline" size="sm">
									Configure
								</Button>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Push Notifications</h3>
									<p className="text-sm text-muted-foreground">Browser notifications enabled</p>
								</div>
								<Button variant="outline" size="sm">
									Manage
								</Button>
							</div>
						</div>
					</Card>

					{/* Appearance */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
							<Moon size={20} className="text-primary" />
							<h2 className="text-xl font-semibold">Appearance</h2>
						</div>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Theme</h3>
									<p className="text-sm text-muted-foreground">System preference</p>
								</div>
								<Button variant="outline" size="sm">
									Change Theme
								</Button>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Display Density</h3>
									<p className="text-sm text-muted-foreground">Comfortable</p>
								</div>
								<Button variant="outline" size="sm">
									Adjust
								</Button>
							</div>
						</div>
					</Card>

					{/* Privacy & Data */}
					<Card className="p-6">
						<div className="flex items-center space-x-3 mb-4">
							<Database size={20} className="text-primary" />
							<h2 className="text-xl font-semibold">Privacy & Data</h2>
						</div>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Data Export</h3>
									<p className="text-sm text-muted-foreground">Download your data</p>
								</div>
								<Button variant="outline" size="sm">
									Export Data
								</Button>
							</div>
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">Delete Account</h3>
									<p className="text-sm text-muted-foreground">Permanently delete your account</p>
								</div>
								<Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
									Delete Account
								</Button>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
