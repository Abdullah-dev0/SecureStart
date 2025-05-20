"use client";

import { User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { signOut } from "@/lib/auth-client";

import { Button } from "../ui/button";

const DashboardNav = () => {
	const router = useRouter();
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
	return (
		<div className="flex items-center justify-between p-5">
			<Image src="/logo.png" alt="logo" width={100} height={100} />
			<Button variant="outline" onClick={() => handleLogout()}>
				Logout
			</Button>
			<div className="flex items-center gap-4 ml-auto">
				<Button variant="outline">
					<User size={16} />
					Profile
				</Button>
			</div>
		</div>
	);
};

export default DashboardNav;
