"use client";
import { Copy, Check } from "lucide-react";
import Prism from "prismjs";
import React, { useState, useEffect, useRef } from "react";
// Import prism styles and languages
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

interface CodeSnippetProps {
	code: string;
	language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = "jsx" }) => {
	const [copied, setCopied] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const codeRef = useRef<HTMLPreElement>(null);

	const copyCode = () => {
		navigator.clipboard
			.writeText(code)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch((err) => console.error("Failed to copy: ", err));
	};

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient && codeRef.current) {
			Prism.highlightElement(codeRef.current);
		}
	}, [isClient, code, language]);

	if (!isClient) {
		return null;
	}

	return (
		<div className="relative border border-muted/50 bg-card">
			<div className="overflow-x-auto">
				<div className="absolute top-3 right-3 z-10">
					<button
						onClick={copyCode}
						className="text-muted-foreground hover:text-foreground transition-colors p-1 bg-card/50"
						aria-label={copied ? "Copied!" : "Copy code"}
						title={copied ? "Copied!" : "Copy code"}>
						{copied ? <Check size={18} /> : <Copy size={18} />}
					</button>
				</div>
				<pre
					className="line-numbers"
					style={{
						margin: 0,
						padding: "1rem",
						borderRadius: "0.375rem",
						background: "transparent",
						fontSize: "0.875rem",
						lineHeight: "1.5",
					}}>
					<code ref={codeRef} className={`language-${language}`}>
						{code}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default CodeSnippet;
