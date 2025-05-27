import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthMiddleware, APIError } from "better-auth/api";

import { sendEmailAction } from "@/actions/sendEmail.action.";
import { prismaClient } from "@/lib/prisma";

const prisma = prismaClient; // Use the imported instance directly

export const auth = betterAuth({
	appName: "Authify",
	database: prismaAdapter(prisma, {
		provider: "postgresql", // or "mysql", "postgresql", ...etc mongodb with your database
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	trustedOrigins: ["http://localhost:3001", "https://authify.dev:3000", "https://betterauth-kit.netlify.app"],
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 5 * 60, // Cache duration in seconds
		},
	},
	advanced: {
		cookiePrefix: "authify",
	},

	emailVerification: {
		sendOnSignUp: true,
		expiresIn: 60 * 60,
		autoSignInAfterVerification: true,
		sendVerificationEmail: async ({ user, url }) => {
			const link = new URL(url);
			link.searchParams.set("callbackURL", "/dashboard");

			await sendEmailAction({
				to: user.email,
				subject: "Verify your email address",
				meta: {
					description: "Please verify your email address to complete the registration process.",
					link: String(link),
				},
			});
		},
	},

	emailAndPassword: {
		requireEmailVerification: true,
		enabled: true,
		autoSignIn: false,
		minPasswordLength: 6,
		verifyEmailOnSignUp: true,
		sendOnSignUp: true,
		autoSignInAfterVerification: true,
		expiresIn: 3600, // 1 hour
		sendResetPassword: async ({ user, url }) => {
			await sendEmailAction({
				to: user.email,
				subject: "Reset your password",
				meta: {
					description: "Click the link below to reset your password.",
					link: `${url}`,
				},
			});
		},
	},
	hooks: {
		before: createAuthMiddleware(async (ctx) => {
			if (ctx.path !== "/sign-up/email") {
				return;
			}
			const email = ctx.body?.email;
			const emailDomain = process.env.EMAIL_DOMAIN as string;
			if (!emailDomain.split(",").includes(email.split("@")[1])) {
				throw new APIError("BAD_REQUEST", {
					message: "Email Domain not allowed",
				});
			}
		}),
	},
});

export type ErrorCode = keyof typeof auth.$ERROR_CODES | "UNKNOWN";
