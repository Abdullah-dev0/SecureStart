"use client";

import { CheckCircle, KeyRound, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { resetPassword } from "@/lib/auth-client";

interface ResetPasswordFormProps {
	token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
	const [isPending, setIsPending] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
		evt.preventDefault();
		const formData = new FormData(evt.currentTarget);

		const password = String(formData.get("password"));
		if (!password) {
			return toast.error("Please enter your password.");
		}

		const confirmPassword = String(formData.get("confirmPassword"));

		if (password !== confirmPassword) {
			return toast.error("Passwords do not match.");
		}

		await resetPassword({
			newPassword: password,
			token,
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
					toast.success("Password reset successfully.");
					setIsSuccess(true);
				},
			},
		});
	}

	// Success state
	if (isSuccess) {
		return (
			<div className="flex flex-col gap-6">
				<div className="animate-fade-in">
					<div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
						<div className="flex items-start gap-3">
							<CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
							<div className="flex-1">
								<h3 className="text-sm font-medium text-green-800 dark:text-green-200">Password Reset Successful!</h3>
								<p className="text-sm text-green-700 dark:text-green-300 mt-1">
									Your password has been successfully reset. You will be redirected to the login page.
								</p>
							</div>
						</div>
					</div>
				</div>

				<Card className="overflow-hidden">
					<CardContent className="max-w-lg mx-auto w-full">
						<div className="md:p-8 text-center">
							<div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
								<CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
							</div>
							<h2 className="text-2xl font-bold mb-4">Password Reset Complete</h2>
							<p className="text-muted-foreground mb-6">You can now sign in with your new password.</p>
							<Link href="/signin">
								<Button className="w-full">Continue to Sign In</Button>
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-6">
			<Card className="overflow-hidden">
				<CardContent className="max-w-lg mx-auto w-full">
					<form className="md:p-8" onSubmit={handleSubmit}>
						<div className="flex flex-col gap-6">
							{/* Header */}
							<div className="flex flex-col items-center text-center">
								<div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
									<KeyRound className="w-8 h-8 text-blue-600 dark:text-blue-400" />
								</div>
								<h1 className="text-2xl font-bold">Reset your password</h1>
								<p className="text-balance text-muted-foreground">Enter your new password below</p>
							</div>{" "}
							{/* Password Field */}
							<div className="grid gap-2">
								<Label htmlFor="password">New Password</Label>
								<div className={`relative ${isPending ? "cursor-not-allowed" : ""}`}>
									<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
									<Input
										id="password"
										type="password"
										name="password"
										disabled={isPending}
										placeholder="Enter your new password"
										className="pl-10 pr-10"
										required
										minLength={6}
									/>
								</div>
								<p className="text-xs text-muted-foreground">Password must be at least 6 characters long</p>
							</div>
							{/* Confirm Password Field */}
							<div className="grid gap-2">
								<Label htmlFor="confirmPassword">Confirm New Password</Label>
								<div className={`relative ${isPending ? "cursor-not-allowed" : ""}`}>
									<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
									<Input
										id="confirmPassword"
										type="password"
										name="confirmPassword"
										disabled={isPending}
										placeholder="Confirm your new password"
										className="pl-10 pr-10"
										required
										minLength={6}
									/>
								</div>
							</div>
							{/* Submit Button */}
							<div className={isPending ? "cursor-not-allowed" : ""}>
								<Button type="submit" disabled={isPending} className="w-full">
									{isPending ? "Resetting password..." : "Reset Password"}
								</Button>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}

export default ResetPasswordForm;
