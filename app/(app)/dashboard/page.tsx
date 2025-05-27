import React, { Suspense } from "react";

import { getUser } from "@/actions/user.action";

const GetSession = async () => {
	const data = await getUser();
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default function Dashboard() {
	return (
		<Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
			<p>Dashboard</p>
			<GetSession />
		</Suspense>
	);
}
