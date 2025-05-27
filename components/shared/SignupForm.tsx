"use client";

import Link from "next/link";
import { useActionState } from "react";

import { signUpAction } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import SocialLogin from "./SocialLogin";

export function SignupForm() {
	const [state, action, pending] = useActionState(signUpAction, undefined);
	console.log("SignupForm state:", state);
	return (
		<div className="flex flex-col gap-6">
			<Card className="overflow-hidden">
				<CardContent className="max-w-lg  mx-auto w-full">
					<form className="md:p-8" action={action}>
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
							<Button type="submit" className="w-full" disabled={pending}>
								{pending ? "Signing up..." : "Sign Up"}
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
