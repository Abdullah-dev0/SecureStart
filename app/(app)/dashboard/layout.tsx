import type { ReactNode } from "react";

import { getUser } from "@/actions/user.action";
import DashboardNav from "@/components/shared/DashboardNav";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
	// Fetch user data once for all dashboard pages
	const user = await getUser();

	return (
		<>
			{/* Shared navigation with user data */}
			<DashboardNav user={user} />

			{/* Pass user data to child pages via context if needed, or they can re-fetch (cached) */}
			<div className="min-h-screen">{children}</div>
		</>
	);
}
