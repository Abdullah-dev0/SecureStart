import { Calendar, Mail, User } from "lucide-react";
import Image from "next/image";

import { getUser } from "@/actions/user.action";
import { Card } from "@/components/ui/card";

export default async function ProfilePage() {
	// Fetch user data (will be cached by Better Auth)
	const user = await getUser();

	const formatDate = (dateString: Date) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<div className="space-y-6">
				{/* Header */}
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-bold">Profile</h1>
						<p className="text-muted-foreground">Manage your account settings and preferences</p>
					</div>
				</div>

				{/* Profile Card */}
				<Card className="p-6">
					<div className="flex items-start space-x-6">
						<div className="bg-primary/10 rounded-full p-4">
							{user.image ? (
								<Image src={user.image} alt={user.name || "User"} width={40} height={40} className="rounded-full" />
							) : (
								<User size={40} className="text-primary" />
							)}
						</div>
						<div className="flex-1 space-y-4">
							<div>
								<h2 className="text-2xl font-semibold">{user.name || "User"}</h2>
								<p className="text-muted-foreground">
									{user.emailVerified ? "Verified Account" : "Unverified Account"}
								</p>
							</div>

							<div className="grid gap-3 md:grid-cols-2">
								<div className="flex items-center space-x-3">
									<Mail size={16} className="text-muted-foreground" />
									<span className="text-sm">{user.email}</span>
								</div>
								<div className="flex items-center space-x-3">
									<Calendar size={16} className="text-muted-foreground" />
									<span className="text-sm">Joined {user.createdAt ? formatDate(user.createdAt) : "Unknown"}</span>
								</div>
								<div className="flex items-center space-x-3">
									<User size={16} className="text-muted-foreground" />
									<span className="text-xs font-mono">{user.id}</span>
								</div>
								<div className="flex items-center space-x-3">
									<div className={`w-2 h-2 rounded-full ${user.emailVerified ? "bg-green-500" : "bg-amber-500"}`} />
									<span className={`text-sm ${user.emailVerified ? "text-green-600" : "text-amber-600"}`}>
										{user.emailVerified ? "Email Verified" : "Email Not Verified"}
									</span>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
