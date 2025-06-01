"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { authTabs, authCodeSnippets } from "../../constants";

import CodeSnippet from "./CodeSnippet";

const AuthTabs = () => {
	const [activeTab, setActiveTab] = useState("oauth");

	// Tab Container Component
	const TabsContainer = () => {
		return (
			<>
				{authTabs.map((tab) => (
					<button
						key={tab.id}
						className={`p-6 rounded-xl w-full text-left ${
							activeTab === tab.id ? "bg-primary/5 shadow-md" : "bg-card hover:shadow-md"
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
								className={`bg-primary/10 rounded-full p-2 flex items-center justify-center ${
									activeTab === tab.id ? "bg-primary/20" : "hover:bg-background/10"
								} transition-colors duration-300`}>
								{tab.icon}
							</div>
							<h3 className="text-lg ml-2 font-semibold">{tab.title}</h3>
						</div>
						<p className="text-muted-foreground text-sm mb-3">{tab.description}</p>
						<div className="flex justify-between items-center mt-3">
							<div
								className={`inline-flex items-center justify-center text-xs px-3 py-2 rounded-md ${
									activeTab === tab.id
										? "bg-primary text-primary-foreground"
										: "bg-transparent hover:bg-background/80 text-foreground"
								}`}>
								View Code Example
								<ArrowRight size={18} className="flex items-center justify-center" />
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

	return (
		<div
			className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 animate-fade-in opacity-0"
			style={{ animationDelay: "0.3s" }}>
			{/* Left Column - Strategies */}
			<div className="flex flex-col space-y-6">
				<TabsContainer />
			</div>

			{/* Right Column - Code Preview */}
			<div className="p-1 rounded-xl animate-fade-in opacity-0 md:col-span-2" style={{ animationDelay: "0.5s" }}>
				<div className="bg-card px-4 py-2 flex items-center gap-2 rounded-t-lg">
					<div className="flex gap-1.5">
						<div className="w-3 h-3 rounded-full bg-destructive/60" />
						<div className="w-3 h-3 rounded-full bg-green-500/60" />
						<div className="w-3 h-3 rounded-full bg-yellow-500/60" />
					</div>
					<div className="text-xs text-muted-foreground font-mono">auth-example.tsx</div>
				</div>
				<CodeTabContent />
			</div>
		</div>
	);
};

export default AuthTabs;
