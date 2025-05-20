import DashboardNav from "@/components/shared/DashboardNav";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<DashboardNav />
			{children}
		</>
	);
}
