import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prismaClient } from "@/lib/prisma";

const prisma = prismaClient; // Use the imported instance directly

export const auth = betterAuth({
	appName: "Authify",
	database: prismaAdapter(prisma, {
		provider: "postgresql", // or "mysql", "postgresql", ...etc
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
	trustedOrigins: ["http://localhost:3001", "https://authify.dev:3000"],
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 5 * 60, // Cache duration in seconds
		},
	},
	advanced: {
		cookiePrefix: "authify",
	},
	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
	},
});
