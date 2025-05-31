import {
	Code,
	Fingerprint,
	KeyRound,
	KeySquare,
	ListChecks,
	LogIn,
	Mail,
	Palette,
	ScanLine,
	ShieldCheck,
	Users,
} from "lucide-react";

// Features list
export const features = [
	{ name: "Email & Password", icon: Mail, description: "Classic email and password authentication." },
	{ name: "Social Logins", icon: Users, description: "Integrate with Google, GitHub, etc." },
	{ name: "Magic Links", icon: KeyRound, description: "Passwordless login with magic links." },
	{ name: "One-Time Passwords", icon: ScanLine, description: "Secure OTP for multi-factor authentication." },
	{ name: "User Management", icon: Users, description: "Manage your users and their roles." },
	{ name: "Customizable UI", icon: Palette, description: "Easily customize the look and feel." },
	{ name: "Secure Sessions", icon: ShieldCheck, description: "Robust session management." },
	{ name: "Developer Friendly", icon: Code, description: "Simple APIs for quick integration." },
	{ name: "Audit Logs", icon: ListChecks, description: "Track important authentication events." },
];

// Integration options
export const integrations = ["Email/Password", "Google", "GitHub", "MagicLink", "OTP", "SAML", "OpenID", "LDAP"];

// Authentication strategies
export const authStrategies = [
	{
		name: "Email & Password",
		icon: <Mail className="h-5 w-5" />,
		description: "Traditional login with email verification and secure password management.",
	},
	{
		name: "Magic Links",
		icon: <KeySquare className="h-5 w-5" />,
		description: "Passwordless authentication with secure links sent directly to users' email.",
	},
	{
		name: "Social Login",
		icon: <LogIn className="h-5 w-5" />,
		description: "Sign in with Google, Facebook, Twitter, GitHub, and other popular providers.",
	},
	{
		name: "Passkeys",
		icon: <Fingerprint className="h-5 w-5" />,
		description: "WebAuthn-based authentication using biometrics and security keys.",
	},
];
