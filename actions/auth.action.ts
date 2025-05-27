"use server";
import { APIError } from "better-auth/api";
import { headers } from "next/headers";

import { type ErrorCode, auth } from "@/lib/auth";

export async function signUpAction(initialstate: any, formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const name = formData.get("name") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	if (password !== confirmPassword) {
		return {
			error: {
				message: "Passwords do not match",
				code: 400,
			},
		};
	}
	try {
		await auth.api.signUpEmail({
			body: {
				email,
				password,
				name,
			},
			headers: await headers(),
		});
	} catch (err) {
		if (err instanceof APIError) {
			const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN";

			switch (errCode) {
				case "USER_ALREADY_EXISTS":
					return { error: "Oops! Something went wrong. Please try again." };
				default:
					return { error: err.message };
			}
		}
		return {
			error: {
				message: "An unexpected error occurred during sign up",
				code: 500,
			},
		};
	}
}
