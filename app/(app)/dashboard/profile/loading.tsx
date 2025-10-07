import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileLoading() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<div className="space-y-6">
				{/* Header Skeleton */}
				<div className="flex items-center justify-between">
					<div>
						<Skeleton className="h-9 w-[150px] mb-2" />
						<Skeleton className="h-5 w-[300px]" />
					</div>
				</div>

				{/* Profile Card Skeleton */}
				<Card className="p-6">
					<div className="flex items-start space-x-6">
						{/* Avatar Skeleton */}
						<div className="bg-primary/10 rounded-full p-4">
							<Skeleton className="w-10 h-10 rounded-full" />
						</div>

						<div className="flex-1 space-y-4">
							{/* Name and Status Skeleton */}
							<div>
								<Skeleton className="h-8 w-[200px] mb-2" />
								<Skeleton className="h-5 w-[150px]" />
							</div>

							{/* Grid Info Skeleton */}
							<div className="grid gap-3 md:grid-cols-2">
								{/* Email */}
								<div className="flex items-center space-x-3">
									<Skeleton className="w-4 h-4" />
									<Skeleton className="h-4 w-[180px]" />
								</div>
								{/* Joined Date */}
								<div className="flex items-center space-x-3">
									<Skeleton className="w-4 h-4" />
									<Skeleton className="h-4 w-[150px]" />
								</div>
								{/* User ID */}
								<div className="flex items-center space-x-3">
									<Skeleton className="w-4 h-4" />
									<Skeleton className="h-3 w-[200px]" />
								</div>
								{/* Verification Status */}
								<div className="flex items-center space-x-3">
									<Skeleton className="w-2 h-2 rounded-full" />
									<Skeleton className="h-4 w-[120px]" />
								</div>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
