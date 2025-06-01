import { User, Mail, Calendar, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<div className="space-y-6">
				{/* Header */}
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-bold">Profile</h1>
						<p className="text-muted-foreground">Manage your account settings and preferences</p>
					</div>
					<Button>Edit Profile</Button>
				</div>

				{/* Profile Card */}
				<Card className="p-6">
					<div className="flex items-start space-x-6">
						<div className="bg-primary/10 rounded-full p-4">
							<User size={40} className="text-primary" />
						</div>
						<div className="flex-1 space-y-4">
							<div>
								<h2 className="text-2xl font-semibold">John Doe</h2>
								<p className="text-muted-foreground">Software Developer</p>
							</div>

							<div className="grid gap-3 md:grid-cols-2">
								<div className="flex items-center space-x-3">
									<Mail size={16} className="text-muted-foreground" />
									<span className="text-sm">john@example.com</span>
								</div>
								<div className="flex items-center space-x-3">
									<Phone size={16} className="text-muted-foreground" />
									<span className="text-sm">+1 (555) 123-4567</span>
								</div>
								<div className="flex items-center space-x-3">
									<Calendar size={16} className="text-muted-foreground" />
									<span className="text-sm">Joined January 2024</span>
								</div>
								<div className="flex items-center space-x-3">
									<MapPin size={16} className="text-muted-foreground" />
									<span className="text-sm">San Francisco, CA</span>
								</div>
							</div>
						</div>
					</div>
				</Card>

				{/* Quick Actions */}
				<div className="grid gap-4 md:grid-cols-3">
					<Card className="p-4">
						<h3 className="font-semibold mb-2">Account Security</h3>
						<p className="text-sm text-muted-foreground mb-3">Manage your password and two-factor authentication</p>
						<Button variant="outline" size="sm">
							Security Settings
						</Button>
					</Card>

					<Card className="p-4">
						<h3 className="font-semibold mb-2">Notifications</h3>
						<p className="text-sm text-muted-foreground mb-3">Control how you receive notifications</p>
						<Button variant="outline" size="sm">
							Manage Notifications
						</Button>
					</Card>

					<Card className="p-4">
						<h3 className="font-semibold mb-2">Privacy</h3>
						<p className="text-sm text-muted-foreground mb-3">Control your privacy and data settings</p>
						<Button variant="outline" size="sm">
							Privacy Settings
						</Button>
					</Card>
				</div>
			</div>
		</div>
	);
}
