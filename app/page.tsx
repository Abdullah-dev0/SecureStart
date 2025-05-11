import React from "react";

import { Button } from "@/components/ui/button";
export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Button type="button">hey Better auth</Button>
			<div className="flex flex-col gap-4">
				<Button type="button">hey Better auth</Button>
				<Button type="button">hey Better auth</Button>
				<Button type="button">hey Better auth</Button>
				<Button type="button">hey Better auth</Button>
			</div>
		</div>
	);
}
