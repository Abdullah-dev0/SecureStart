"use client";

import { CheckCircle, Copy, Terminal, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { steps } from "@/constants";

const SetupGuide = () => {
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const handleCopy = (code: string, index: number) => {
		navigator.clipboard.writeText(code);
		toast.success("Code copied to clipboard!", {
			duration: 2000,
		});

		// Show tick for 2 seconds
		setCopiedIndex(index);
		setTimeout(() => {
			setCopiedIndex(null);
		}, 2000);
	};
	return (
		<section className="py-20 w-full max-w-4xl">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Get Started in 5 Minutes</h2>
					<p className="text-xl text-muted-foreground">
						Follow these simple steps to set up your authentication system
					</p>
				</div>

				<div className="space-y-8">
					{steps.map((step, index) => (
						<div key={index} className="flex gap-6">
							<div className="flex-shrink-0">
								<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
									{index + 1}
								</div>
							</div>

							<div className="flex-1">
								<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
								<p className="text-muted-foreground mb-4">{step.description}</p>{" "}
								<div className="bg-secondary rounded-lg p-4 relative">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center space-x-2">
											<Terminal size={16} className="text-muted-foreground" />
											<span className="text-muted-foreground text-sm">Terminal</span>
										</div>
										<button
											onClick={() => handleCopy(step.code, index)}
											className="text-muted-foreground hover:text-foreground transition-colors">
											{copiedIndex === index ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
										</button>
									</div>
									<pre className="text-accent-foreground text-sm overflow-x-auto">
										<code>{step.code}</code>
									</pre>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 p-6 bg-muted rounded-xl border">
					<div className="flex items-start space-x-3">
						<CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
						<div>
							<h4 className="font-semibold mb-2">You&apos;re all set!</h4>
							<p className="text-muted-foreground">
								Visit <code className="bg-muted px-2 py-1 rounded">http://localhost:3000</code>to see your
								authentication system in action.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SetupGuide;
