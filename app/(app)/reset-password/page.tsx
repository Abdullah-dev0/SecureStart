import { AlertCircle } from "lucide-react";
import Link from "next/link";

import { ResetPasswordForm } from "@/components/shared/ResetPasswordForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PageProps {
	searchParams: Promise<{ token?: string; error?: string }>;
}

const ResetPassword = async ({ searchParams }: PageProps) => {
	const { token, error } = await searchParams;

	// If there's an error parameter, show error UI
	if (error || !token) {
		return (
			<div className="min-h-screen flex items-center justify-center p-4">
				<div className="w-full max-w-lg">
					<div className="flex flex-col gap-6">
						{/* Error Message */}
						<div className="animate-fade-in">
							<div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
								<div className="flex items-start gap-3">
									<AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
									<div className="flex-1">
										<h3 className="text-sm font-medium text-red-800 dark:text-red-200">Reset Link Error</h3>
										<p className="text-sm text-red-700 dark:text-red-300 mt-1">{error}</p>
									</div>
								</div>
							</div>
						</div>

						{/* Error Card */}
						<Card className="overflow-hidden">
							<CardContent className="max-w-lg mx-auto w-full">
								<div className="md:p-8 text-center">
									<div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
										<AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
									</div>
									<h2 className="text-2xl font-bold mb-4">Reset Link Invalid</h2>
									<p className="text-muted-foreground mb-6">
										The password reset link is invalid or has expired. Please request a new one.
									</p>
									<div className="flex flex-col gap-3">
										<Link href="/forget-password">
											<Button className="w-full">Request New Reset Link</Button>
										</Link>
										<Link href="/signin">
											<Button variant="outline" className="w-full">
												Back to Sign In
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		);
	}

	// Normal case: show the reset form
	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="w-full max-w-lg">
				<ResetPasswordForm token={token} />
			</div>
		</div>
	);
};

export default ResetPassword;
