"use client";
import {
	Check,
	Download,
	Github,
	ShieldCheck,
	Mail,
	KeyRound,
	ScanLine,
	Users,
	MessageCircle,
	Twitter,
	ListChecks,
	Palette,
	Code,
	Fingerprint,
	KeySquare,
	LogIn,
	ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import CodeSnippet from "../components/shared/CodeSnippet";
import Navbar from "../components/shared/navbar";

const HomePage = () => {
	const [activeTab, setActiveTab] = useState("oauth");

	const cloneCode = `git clone https://github.com/username/better-auth-kit.git`;

	const usageCode = `// The auth logic is already written for you
// Just focus on building your app features

// In pages/dashboard.js
import { useAuth } from '../auth/hooks';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={signOut}>Sign out</button>
      {/* Your app content here */}
    </div>
  );
}`;

	// Authentication tab data
	const authTabs = [
		{
			id: "oauth",
			title: "OAuth",
			icon: <LogIn className="h-4 w-4 mr-2" />,
			description: "One-click login with Google, GitHub, and other providers. Easy to integrate and user-friendly.",
		},
		{
			id: "emailPassword",
			title: "Email & Password",
			icon: <Mail className="h-4 w-4 mr-2" />,
			description: "Classic email and password authentication with secure password hashing and account recovery.",
		},
		{
			id: "magicLink",
			title: "Magic Links",
			icon: <KeySquare className="h-4 w-4 mr-2" />,
			description: "Passwordless authentication by sending secure, time-limited login links to user's email.",
		},
	];

	// Code snippets for different authentication strategies
	const authCodeSnippets = {
		oauth: `// OAuth authentication with multiple providers
import { signIn } from "better-auth-kit";

export function OAuthButtons() {
  return (
    <div className="flex flex-col space-y-3">
      <button 
        onClick={() => signIn('google')} 
        className="flex items-center justify-center gap-2 bg-white text-gray-800 p-2 rounded-md border">
        <GoogleIcon /> Continue with Google
      </button>
      
      <button 
        onClick={() => signIn('github')} 
        className="flex items-center justify-center gap-2 bg-gray-900 text-white p-2 rounded-md">
        <GithubIcon /> Continue with GitHub
      </button>
      
      <button 
        onClick={() => signIn('microsoft')} 
        className="flex items-center justify-center gap-2 bg-[#2F2F2F] text-white p-2 rounded-md">
        <MicrosoftIcon /> Continue with Microsoft
      </button>
    </div>
  );
}`,
		emailPassword: `// Email & Password authentication
import { useState } from 'react';
import { signIn } from 'better-auth-kit';

export function EmailPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await signIn('credentials', { email, password });
      if (result.error) {
        setError(result.error);
      }
    } catch (err) {
      setError('Authentication failed. Try again.');
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white p-2 rounded">
        Sign In
      </button>
    </form>
  );
}`,
		magicLink: `// Magic Link authentication
import { useState } from 'react';
import { sendMagicLink } from 'better-auth-kit';

export function MagicLinkForm() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await sendMagicLink(email);
      setIsSent(true);
    } catch (err) {
      setError('Failed to send login link. Please try again.');
    }
  }
  
  return (
    <div className="space-y-4">
      {!isSent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded">
            Send Login Link
          </button>
        </form>
      ) : (
        <div className="text-center p-4 border rounded bg-green-50">
          <h3 className="font-semibold text-green-700">Login Link Sent!</h3>
          <p className="text-gray-600 mt-2">
            Check your email for a login link. It will expire in 15 minutes.
          </p>
        </div>
      )}
    </div>
  );
}`,
	};

	// Tab Container Component
	const TabsContainer = () => {
		return (
			<>
				{authTabs.map((tab) => (
					<button
						key={tab.id}
						className={`p-6 rounded-xl border w-full text-left ${
							activeTab === tab.id
								? "border-violet-500/50 bg-violet-500/5 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
								: "border-border/40 bg-card hover:shadow-md hover:border-violet-500/30"
						} transition-all duration-300 cursor-pointer`}
						onClick={() => setActiveTab(tab.id)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setActiveTab(tab.id);
							}
						}}
						aria-selected={activeTab === tab.id}
						role="tab"
						tabIndex={0}>
						<div className="flex items-center mb-2">
							<div
								className={`rounded-full ${
									activeTab === tab.id ? "bg-violet-500/20" : "bg-primary/10"
								} w-8 h-8 flex items-center justify-center mr-3`}>
								{tab.icon}
							</div>
							<h3 className="text-lg font-semibold">{tab.title}</h3>
						</div>
						<p className="text-muted-foreground text-sm mb-3">{tab.description}</p>
						<div className="flex justify-between items-center mt-3">
							<div
								className={`inline-flex items-center justify-center text-xs px-3 py-1 rounded-md ${
									activeTab === tab.id
										? "bg-gradient-to-r from-violet-600 to-blue-600 text-white"
										: "bg-transparent border border-border/60 hover:bg-background/80 text-foreground"
								}`}>
								View Code Example
								<ArrowRight className="ml-2 h-3 w-3" />
							</div>
						</div>
					</button>
				))}
			</>
		);
	};

	// Code Tab Content Component
	const CodeTabContent = () => {
		// Ensure activeTab is always one of the valid keys
		const validTab = activeTab as keyof typeof authCodeSnippets;
		return <CodeSnippet code={authCodeSnippets[validTab]} language="jsx" />;
	};

	const features = [
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

	const integrations = ["Email/Password", "Google", "GitHub", "MagicLink", "OTP", "SAML", "OpenID", "LDAP"];

	const authStrategies = [
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

	return (
		<div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
			<Navbar />
			{/* Hero Section */}
			<section className="relative pt-28 pb-20 md:pt-32 md:pb-24 lg:pb-32 overflow-hidden">
				<div className="px-4 md:px-6">
					<div className="flex flex-col items-center text-center space-y-10">
						<div className="space-y-4 max-w-3xl">
							<h1
								className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in opacity-0"
								style={{ animationDelay: "0.1s" }}>
								Authentication{" "}
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">
									Starter Kit
								</span>{" "}
								for Next.js
							</h1>
							<p
								className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in opacity-0"
								style={{ animationDelay: "0.3s" }}>
								BetterAuth is a ready-to-use authentication starter kit for Next.js applications. Download once,
								customize to your needs, and focus on building your app features instead of auth logic.
							</p>
						</div>

						<div
							className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in opacity-0"
							style={{ animationDelay: "0.5s" }}>
							<Button
								size="lg"
								className="h-12 px-8 font-medium bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
								<Download className="h-5 w-5" />
								Download Starter Kit
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="h-12 px-8 font-medium border-border/60 hover:bg-background/80">
								<Github className="h-5 w-5" />
								View on GitHub
							</Button>
						</div>

						<div
							className="w-full max-w-sm sm:max-w-3xl  mt-12 rounded-xl overflow-hidden border shadow-xl animate-fade-in opacity-0"
							style={{ animationDelay: "0.7s" }}>
							<div className="bg-slate-900 text-white px-4 py-2 flex items-center gap-2">
								<div className="flex gap-1.5">
									<div className="w-3 h-3 rounded-full bg-red-500" />
									<div className="w-3 h-3 rounded-full bg-yellow-500" />
									<div className="w-3 h-3 rounded-full bg-green-500" />
								</div>
								<div className="text-xs text-slate-400 font-mono">terminal</div>
							</div>
							<CodeSnippet code={cloneCode} language="bash" />
						</div>

						<div
							className="w-full max-w-sm sm:max-w-3xl rounded-xl overflow-hidden border shadow-xl animate-fade-in opacity-0"
							style={{ animationDelay: "0.9s" }}>
							<div className="bg-slate-900 text-white px-4 py-2 flex items-center gap-2">
								<div className="flex gap-1.5">
									<div className="w-3 h-3 rounded-full bg-red-500" />
									<div className="w-3 h-3 rounded-full bg-yellow-500" />
									<div className="w-3 h-3 rounded-full bg-green-500" />
								</div>
								<div className="text-xs text-slate-400 font-mono">pages/dashboard.js</div>
							</div>
							<CodeSnippet code={usageCode} language="jsx" />
							<div className="bg-gradient-to-t from-slate-900 to-transparent h-6 w-full" />
						</div>
					</div>
				</div>
			</section>
			{/* Multiple Authentication Strategies Section */}
			<section className="py-16 overflow-hidden">
				<div className="container px-4 md:px-6">
					<div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
						<h2 className="text-3xl font-bold mb-4">Multiple Authentication Strategies</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Choose from various authentication methods or combine them for enhanced security.
						</p>
					</div>

					{/* Authentication Strategy Tabs */}
					<div
						className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 animate-fade-in opacity-0"
						style={{ animationDelay: "0.3s" }}>
						{/* Left Column - Strategies */}
						<div className="flex flex-col space-y-6">
							<TabsContainer />
						</div>

						{/* Right Column - Code Preview */}
						<div
							className="p-1 rounded-xl border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-fade-in opacity-0"
							style={{ animationDelay: "0.5s" }}>
							<div className="bg-slate-900 text-white px-4 py-2 flex items-center gap-2 rounded-t-lg">
								<div className="flex gap-1.5">
									<div className="w-3 h-3 rounded-full bg-red-500" />
									<div className="w-3 h-3 rounded-full bg-yellow-500" />
									<div className="w-3 h-3 rounded-full bg-green-500" />
								</div>
								<div className="text-xs text-slate-400 font-mono">auth-example.tsx</div>
							</div>
							<CodeTabContent />
							<div className="bg-gradient-to-t from-slate-900 to-transparent h-6 w-full" />
						</div>
					</div>

					{/* Authentication Strategy Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
						{authStrategies.map((strategy, index) => (
							<div
								key={strategy.name}
								className="p-6 rounded-xl bg-card border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(120,113,255,0.2)] hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in opacity-0"
								style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
								<div className="flex flex-col gap-4">
									<div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
										{strategy.icon}
									</div>
									<h3 className="text-xl font-semibold">{strategy.name}</h3>
									<p className="text-muted-foreground text-sm">{strategy.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Features Section */}
			<section id="features" className="py-16 bg-background/50">
				<div className="container px-4 md:px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Everything You Need for Authentication</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							A comprehensive suite of tools to secure your application and manage users effectively.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature) => (
							<div key={feature.name} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
								<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
									<feature.icon className="text-primary h-6 w-6" />
								</div>
								<h3 className="text-xl font-bold mb-2">{feature.name}</h3>
								<p className="text-muted-foreground">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Auth Methods Section (Renamed to Integrations) */}
			<section id="auth-methods" className="py-16">
				<div className="container px-4 md:px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Integrations</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Connect with your favorite tools and services, or implement your own custom flow.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{integrations.map((method) => (
							<div
								key={method}
								className="p-4 rounded-lg border bg-card flex items-center gap-3 hover:shadow-md transition-all">
								<Check className="text-green-500 h-5 w-5 flex-shrink-0" />
								<span>{method}</span>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Get Started Section */}
			<section id="get-started" className="py-16 bg-background/50 border max-w-4xl mx-auto rounded-xl ">
				<div className="container px-4 md:px-6 ">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
						<p className="text-muted-foreground mb-8">
							Download the starter kit and have authentication set up in your Next.js app in minutes.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								size="lg"
								className="h-12 px-8 font-medium bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
								<Download className="h-5 w-5" />
								Download Starter Kit
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="h-12 px-8 font-medium border-border/60 hover:bg-background/80">
								View Documentation
							</Button>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<footer className="py-12 bg-background/30">
				<div className="container px-4 md:px-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<div className="h-8 w-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
								<span className="text-lg font-bold">BetterAuth</span>
							</div>
							<p className="text-sm text-muted-foreground">
								The complete authentication solution for modern applications.
							</p>
						</div>
						<div>
							<h5 className="font-semibold mb-3">Product</h5>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href="#features" className="text-muted-foreground hover:text-primary">
										Features
									</Link>
								</li>
								<li>
									<Link href="/pricing" className="text-muted-foreground hover:text-primary">
										Pricing
									</Link>
								</li>
								<li>
									<Link href="/documentation" className="text-muted-foreground hover:text-primary">
										Documentation
									</Link>
								</li>
								<li>
									<Link href="/status" className="text-muted-foreground hover:text-primary">
										Status
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h5 className="font-semibold mb-3">Resources</h5>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href="/support" className="text-muted-foreground hover:text-primary">
										Support
									</Link>
								</li>
								<li>
									<Link href="/api-reference" className="text-muted-foreground hover:text-primary">
										API Reference
									</Link>
								</li>
								<li>
									<Link href="/community" className="text-muted-foreground hover:text-primary">
										Community
									</Link>
								</li>
								<li>
									<a
										href="https://github.com/yourusername/better-auth-kit"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-primary">
										Open Source
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h5 className="font-semibold mb-3">Legal</h5>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href="/privacy" className="text-muted-foreground hover:text-primary">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href="/terms" className="text-muted-foreground hover:text-primary">
										Terms of Service
									</Link>
								</li>
								<li>
									<Link href="/license" className="text-muted-foreground hover:text-primary">
										License
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40">
						<div className="text-sm text-muted-foreground mb-4 md:mb-0">
							© {new Date().getFullYear()} BetterAuth Kit. All rights reserved.
						</div>
						<div className="flex space-x-4">
							<a
								href="https://twitter.com/yourusername"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary">
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="https://github.com/yourusername/better-auth-kit"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary">
								<Github className="h-5 w-5" />
							</a>
							<Link href="/contact" className="text-muted-foreground hover:text-primary">
								<MessageCircle className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;
