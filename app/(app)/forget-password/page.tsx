"use client";

import { ArrowLeft, CheckCircle, KeyRound, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgetPassword } from "@/lib/auth-client";

const ForgetPassword = () => {
	const [isPending, setIsPending] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
		evt.preventDefault();
		const formData = new FormData(evt.currentTarget);
		const email = String(formData.get("email"));

		if (!email) {
			return toast.error("Please enter your email.");
		}

		await forgetPassword({
			email,
			redirectTo: "/reset-password",
			fetchOptions: {
				onRequest: () => {
					setIsPending(true);
				},
				onResponse: () => {
					setIsPending(false);
				},
				onError: (ctx) => {
					toast.error(ctx.error.message);
				},
				onSuccess: () => {
					setIsSubmitted(true);
					toast.success("Reset link sent to your email.");
				},
			},
		});
	}

	if (isSubmitted) {
		return (
			<div className="min-h-screen flex items-center justify-center p-4">
				<div className="w-full max-w-md">
					<Card>
						<CardContent className="p-8 text-center">
							<div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<CheckCircle className="w-8 h-8" />
							</div>
							<h2 className="text-2xl font-bold mb-4">Check your email</h2>
							<p className="mb-6">We&apos;ve sent a password reset link to Email</p>

							<Link href="/signin">
								<Button variant="outline" className="w-full">
									<ArrowLeft className="w-4 h-4 mr-2" />
									Back to Sign In
								</Button>
							</Link>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="w-full max-w-lg">
				{/* Logo/Brand area */}
				<div className="text-center mb-8">
					<div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
						<KeyRound className="w-8 h-8" />
					</div>
					<h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
					<p>No worries, we&apos;ll send you reset instructions</p>
				</div>

				<Card>
					<CardHeader className="space-y-1 pb-6">
						<CardTitle className="text-2xl font-semibold text-center">Reset Password</CardTitle>
						<CardDescription className="text-center">
							Enter your email address and we&apos;ll send you a link to reset your password
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div className="space-y-2">
								<Label htmlFor="email" className="text-sm font-medium">
									Email Address
								</Label>
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
									<Input
										id="email"
										name="email"
										disabled={isPending}
										type="email"
										placeholder="Enter your email address"
										className="pl-10 h-12"
										required
									/>
								</div>
							</div>

							<Button type="submit" disabled={isPending} className="w-full h-12 font-medium">
								Send Reset Link
							</Button>
						</form>

						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="px-2">Or</span>
							</div>
						</div>

						<Link href="/signin" aria-disabled={isPending} className="block">
							<Button variant="outline" disabled={isPending} className="w-full h-12">
								<ArrowLeft className="w-4 h-4 mr-2" />
								Back to Sign In
							</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default ForgetPassword;
