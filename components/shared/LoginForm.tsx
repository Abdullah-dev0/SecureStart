"use client";

import { Apple } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
	return (
		<div className="flex flex-col gap-6">
			<Card className="overflow-hidden">
				<CardContent className="md:max-w-xl max-w-lg mx-auto w-full">
					<form className="md:p-8" action={() => {}} method="POST">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="text-2xl font-bold">Welcome back</h1>
								<p className="text-balance text-muted-foreground">Login to your Account</p>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="m@example.com" required />
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<Link href="/forgot-password" className="ml-auto text-sm underline-offset-2 hover:underline">
										Forgot your password?
									</Link>
								</div>
								<Input id="password" type="password" required />
							</div>
							<Button type="submit" className="w-full">
								Login
							</Button>
							<div className="relative my-2 text-center">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-border" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-background px-3 py-1 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer rounded-md hover:bg-accent">
										Or continue with
									</span>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4 justify-center">
								<Button variant="outline" className="w-full">
									<Apple className="h-5 w-5" />
									<span className="sr-only">Login with Apple</span>
								</Button>
								<Button variant="outline" className="w-full">
									<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
										<path
											fill="#FFC107"
											d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
										/>
										<path
											fill="#FF3D00"
											d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
										/>
										<path
											fill="#4CAF50"
											d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
										/>
										<path
											fill="#1976D2"
											d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
										/>
									</svg>
									<span className="sr-only">Login with Google</span>
								</Button>
							</div>
							<div className="text-center text-sm">
								Don&apos;t have an account?{" "}
								<Link href="/signup" className="underline underline-offset-4">
									Sign up
								</Link>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
