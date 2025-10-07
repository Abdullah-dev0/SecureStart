import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
	return (
		<div className="container mx-auto py-8 px-4">
			<div className="mb-8">
				<Skeleton className="h-9 w-[200px] mb-2" />
				<Skeleton className="h-5 w-[400px]" />
			</div>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{/* Main Profile Card Skeleton */}
				<Card className="md:col-span-2">
					<CardHeader>
						<CardTitle className="text-2xl">
							<Skeleton className="h-8 w-[150px]" />
						</CardTitle>
						<CardDescription>
							<Skeleton className="h-4 w-[250px]" />
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid gap-4 md:grid-cols-2">
							{/* Name */}
							<div>
								<Skeleton className="h-4 w-[60px] mb-2" />
								<Skeleton className="h-6 w-[150px]" />
							</div>
							{/* Email */}
							<div>
								<Skeleton className="h-4 w-[60px] mb-2" />
								<Skeleton className="h-6 w-[200px]" />
							</div>
							{/* User ID */}
							<div>
								<Skeleton className="h-4 w-[60px] mb-2" />
								<Skeleton className="h-6 w-full" />
							</div>
							{/* Email Verified */}
							<div>
								<Skeleton className="h-4 w-[100px] mb-2" />
								<div className="flex items-center gap-2">
									<Skeleton className="h-2 w-2 rounded-full" />
									<Skeleton className="h-5 w-[80px]" />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Account Status Card Skeleton */}
				<Card>
					<CardHeader>
						<CardTitle>
							<Skeleton className="h-6 w-[130px]" />
						</CardTitle>
						<CardDescription>
							<Skeleton className="h-4 w-[180px]" />
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						{/* Created At */}
						<div>
							<Skeleton className="h-4 w-[80px] mb-2" />
							<Skeleton className="h-4 w-full" />
						</div>
						{/* Updated At */}
						<div>
							<Skeleton className="h-4 w-[80px] mb-2" />
							<Skeleton className="h-4 w-full" />
						</div>
						{/* Avatar */}
						<div>
							<Skeleton className="h-4 w-[60px] mb-2" />
							<div className="flex items-center gap-2">
								<Skeleton className="w-8 h-8 rounded-full" />
								<Skeleton className="h-4 w-[60px]" />
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
