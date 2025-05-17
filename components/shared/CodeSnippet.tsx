"use client";
import { Copy, Check } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeSnippetProps {
	code: string;
	language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = "jsx" }) => {
	const [copied, setCopied] = useState(false);

	const copyCode = () => {
		navigator.clipboard
			.writeText(code)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch((err) => console.error("Failed to copy: ", err));
	};

	return (
		<div className="relative border border-muted/50 bg-card">
			<div className="overflow-x-auto">
				<div className="absolute top-3 right-3 z-10">
					<button
						onClick={copyCode}
						className="text-muted-foreground hover:text-foreground transition-colors p-1  bg-card/50 "
						aria-label={copied ? "Copied!" : "Copy code"}
						title={copied ? "Copied!" : "Copy code"}>
						{copied ? <Check size={18} /> : <Copy size={18} />}
					</button>
				</div>
				<SyntaxHighlighter
					language={language}
					style={dracula}
					customStyle={{
						margin: 0,
						padding: "1rem",
						borderRadius: "0.375rem",
						background: "transparent",
						fontSize: "0.875rem",
						lineHeight: "1.5",
					}}
					showLineNumbers={true}
					lineNumberStyle={{
						minWidth: "2.5rem",
						paddingRight: "1rem",
						textAlign: "right",
						color: "var(--muted-foreground)",
						userSelect: "none",
					}}>
					{code}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default CodeSnippet;
