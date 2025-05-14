import React from "react";

interface CodeSnippetProps {
	code: string;
	language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
	const formatCode = (code: string) => {
		return code.split("\n").map((line, i) => (
			<div key={i} className="table-row">
				<div className="table-cell pr-4 text-right text-slate-500 select-none w-10">{i + 1}</div>
				<div className="table-cell text-left">
					<pre className="whitespace-pre">{line}</pre>
				</div>
			</div>
		));
	};

	return (
		<div className="bg-slate-900 text-white overflow-auto p-4 text-sm font-mono">
			<div className="table w-full">{formatCode(code)}</div>
		</div>
	);
};

export default CodeSnippet;
