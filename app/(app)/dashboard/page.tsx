import Image from "next/image";
import { Suspense } from "react";

import { getUser } from "@/actions/user.action";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UserProfile = async () => {
	const user = await getUser();

	const formatDate = (dateString: Date) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<Card className="md:col-span-2">
				<CardHeader>
					<CardTitle className="text-2xl">User Profile</CardTitle>
					<CardDescription>Your account information and details</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2">
						<div>
							<p className="text-sm font-medium text-muted-foreground">Name</p>
							<p className="text-lg font-semibold">{user.name || "Not provided"}</p>
						</div>
						<div>
							<p className="text-sm font-medium text-muted-foreground">Email</p>
							<p className="text-lg">{user.email}</p>
						</div>
						<div>
							<p className="text-sm font-medium text-muted-foreground">User ID</p>
							<p className="text-sm font-mono bg-muted px-2 py-1 rounded">{user.id}</p>
						</div>
						<div>
							<p className="text-sm font-medium text-muted-foreground">Email Verified</p>
							<div className="flex items-center gap-2">
								<div className={`w-2 h-2 rounded-full ${user.emailVerified ? "bg-green-500" : "bg-red-500"}`} />
								<span className={user.emailVerified ? "text-green-600" : "text-red-600"}>
									{user.emailVerified ? "Verified" : "Not Verified"}
								</span>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Account Status Card */}
			<Card>
				<CardHeader>
					<CardTitle>Account Status</CardTitle>
					<CardDescription>Current account information</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div>
						<p className="text-sm font-medium text-muted-foreground">Created At</p>
						<p className="text-sm">{user.createdAt ? formatDate(user.createdAt) : "Unknown"}</p>
					</div>
					<div>
						<p className="text-sm font-medium text-muted-foreground">Updated At</p>
						<p className="text-sm">{user.updatedAt ? formatDate(user.updatedAt) : "Unknown"}</p>
					</div>
					<div>
						<p className="text-sm font-medium text-muted-foreground">Avatar</p>
						{user.image ? (
							<div className="flex items-center gap-2">
								<Image src={user.image} alt="User avatar" className="w-8 h-8 rounded-full" width={32} height={32} />
								<span className="text-sm text-green-600">Set</span>
							</div>
						) : (
							<span className="text-sm text-muted-foreground">Not set</span>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default function Dashboard() {
	return (
		<div className="container mx-auto py-8 px-4">
			<div className="mb-8">
				<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
				<p className="text-muted-foreground">Welcome to your dashboard. Here&apos;s your profile information.</p>
			</div>
			<Suspense
				fallback={
					<div className="flex justify-center items-center h-64">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
					</div>
				}>
				<UserProfile />
			</Suspense>
		</div>
	);
}
