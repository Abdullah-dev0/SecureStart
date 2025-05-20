"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth-client";

import SocialLogin from "./SocialLogin";

export function SignupForm() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		startTransition(async () => {
			const formData = new FormData(e.currentTarget);
			const email = formData.get("email") as string;
			const password = formData.get("password") as string;
			const name = formData.get("name") as string;
			const image = formData.get("image") as string;
			const confirmPassword = formData.get("confirmPassword") as string;

			if (password !== confirmPassword) {
				toast.error("Passwords do not match");
				return;
			}
			// Handle form submission logic here
			await signUp.email(
				{
					email: email,
					password: password,
					name: name,
					image: image,
				},
				{
					onSuccess: () => {
						toast.success("Sign up successful");
						router.push("/dashboard");
					},
					onError: (error) => {
						toast.error(error.error.message);
					},
				},
			);
		});
	};

	return (
		<div className="flex flex-col gap-6">
			<Card className="overflow-hidden">
				<CardContent className="max-w-lg  mx-auto w-full">
					<form className="md:p-8" onSubmit={onSubmit}>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="text-2xl font-bold">Create an account</h1>
								<p className="text-balance text-muted-foreground">Sign up to get started</p>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="name">Full Name</Label>
								<Input id="name" type="text" name="name" placeholder="John Doe" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" name="email" placeholder="m@example.com" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<Input id="password" name="password" type="password" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="confirmPassword">Confirm Password</Label>
								<Input id="confirmPassword" name="confirmPassword" type="password" required />
							</div>
							<Button type="submit" className="w-full" disabled={isPending}>
								{isPending ? "Signing up..." : "Sign Up"}
							</Button>
							<div className="relative  text-center">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-border" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-background px-3 py-1 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer rounded-md hover:bg-accent">
										Or continue with
									</span>
								</div>
							</div>
							<SocialLogin />
							<div className="text-center text-sm">
								Already have an account?{" "}
								<Link href="/signin" className="underline underline-offset-4">
									Sign in
								</Link>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
