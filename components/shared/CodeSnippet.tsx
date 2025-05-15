import { Copy, Check } from "lucide-react";
import React, { useState } from "react";

interface CodeSnippetProps {
	code: string;
	language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
	const [copied, setCopied] = useState(false);
	const formatCode = (code: string) => {
		return code.split("\n").map((line, i) => (
			<div key={i} className="table-row">
				<div className="table-cell pr-2 md:pr-4 text-right text-slate-500 select-none w-6 md:w-10 text-xs md:text-sm">
					{i + 1}
				</div>
				<div className="table-cell text-left">
					<pre className="whitespace-pre text-xs md:text-sm">{line}</pre>
				</div>
			</div>
		));
	};

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
		<div className="relative">
			<div className="bg-slate-900 text-white overflow-x-auto overflow-y-hidden p-2 md:p-4 text-xs md:text-sm font-mono">
				<div className="absolute top-1 right-2">
					<button onClick={copyCode}>
						{copied ? (
							<>
								<Check size={18} />
							</>
						) : (
							<>
								<Copy size={18} />
							</>
						)}
					</button>
				</div>
				<div className="table min-w-full w-max">{formatCode(code)}</div>
			</div>
		</div>
	);
};

export default CodeSnippet;
