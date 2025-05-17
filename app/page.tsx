import { Check, Download, Github } from "lucide-react";

import { Button } from "@/components/ui/button";

import AuthTabs from "../components/shared/AuthTabs";
import CodeSnippet from "../components/shared/CodeSnippet";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/navbar";
import { cloneCode, usageCode } from "../constants/auth";
import { features, integrations } from "../constants/features";

const HomePage = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
			<Navbar />
			<section className="relative pt-28 pb-20 md:pt-32 md:pb-24 lg:pb-32 overflow-hidden">
				<div className="px-4 md:px-6">
					<div className="flex flex-col items-center text-center space-y-10">
						<div className="space-y-4 max-w-3xl">
							<h1
								className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in opacity-0"
								style={{ animationDelay: "0.1s" }}>
								Authentication{" "}
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
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
							<Button size="lg" className="h-12 px-8 font-medium">
								<Download className="h-5 w-5" />
								Download Starter Kit
							</Button>
							<Button size="lg" variant="outline" className="h-12 px-8 font-medium hover:bg-background/80">
								<Github className="h-5 w-5" />
								View on GitHub
							</Button>
						</div>

						<div
							className="w-full max-w-sm sm:max-w-3xl mt-12 rounded-xl overflow-hidden animate-fade-in opacity-0"
							style={{ animationDelay: "0.7s" }}>
							<div className="bg-card px-4 py-2 flex items-center gap-2">
								<div className="flex gap-1.5">
									<div className="w-3 h-3 rounded-full bg-destructive/60" />
									<div className="w-3 h-3 rounded-full bg-green-500/60" />
									<div className="w-3 h-3 rounded-full bg-yellow-500/60" />
								</div>
								<div className="text-xs text-muted-foreground font-mono">terminal</div>
							</div>
							<CodeSnippet code={cloneCode} language="bash" />
						</div>

						<div
							className="w-full max-w-sm sm:max-w-3xl rounded-xl overflow-hidden animate-fade-in opacity-0"
							style={{ animationDelay: "0.7s" }}>
							<div className="bg-card px-4 py-2 flex items-center gap-2">
								<div className="flex gap-1.5">
									<div className="w-3 h-3 rounded-full bg-destructive/60" />
									<div className="w-3 h-3 rounded-full bg-green-500/60" />
									<div className="w-3 h-3 rounded-full bg-yellow-500/60" />
								</div>
								<div className="text-xs text-muted-foreground font-mono">terminal</div>
							</div>
							<CodeSnippet code={usageCode} language="tsx" />
						</div>
					</div>
				</div>
			</section>
			{/* Multiple Authentication Strategies Section */}
			<section className="overflow-hidden">
				<div className="container px-4 md:px-6">
					<div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
						<h2 className="md:text-4xl  text-xl font-bold mb-4">Multiple Authentication Strategies</h2>
						<p className="text-muted-foreground max-w-4xl mx-auto md:text-lg">
							Choose from various authentication methods or combine them for enhanced security.
						</p>
					</div>
					<AuthTabs />
				</div>
			</section>
			{/* Features Section */}
			<section id="features" className="mt-22">
				<div className="container px-4 md:px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Everything You Need for Authentication</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							A comprehensive suite of tools to secure your application and manage users effectively.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature) => (
							<div key={feature.name} className="p-6 rounded-lg bg-card hover:shadow-lg transition-all">
								<div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
									<feature.icon className="h-6 w-6" />
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
								className="p-4 rounded-lg bg-card flex items-center gap-3 hover:shadow-md transition-all">
								<Check className="text-success h-5 w-5 flex-shrink-0" />
								<span>{method}</span>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Get Started Section */}
			<section id="get-started" className="py-16  max-w-4xl mx-auto rounded-xl ">
				<div className="container px-4 md:px-6 ">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
						<p className="text-muted-foreground mb-8">
							Download the starter kit and have authentication set up in your Next.js app in minutes.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button size="lg" className="h-12 px-8 font-medium">
								<Download className="h-5 w-5" />
								Download Starter Kit
							</Button>
							<Button size="lg" variant="outline" className="h-12 px-8 font-medium hover:bg-background/80">
								View Documentation
							</Button>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default HomePage;
