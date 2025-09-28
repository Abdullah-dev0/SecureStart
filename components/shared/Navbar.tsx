import { Star } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<header className="fixed top-0 w-full  border-b border-border z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center space-x-3">
						<span className="text-xl font-bold text-foreground">SecureStart</span>
					</div>
					<div className="flex items-center space-x-4">
						<Link href="/signin">
							<Button>Sign in</Button>
						</Link>
						<Link href="https://github.com/Abdullah-dev0/SecureStart" target="_blank" rel="noopener noreferrer">
							<button className="flex items-center cursor-pointer space-x-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg transition-colors">
								<Star size={16} color="black" />
								<span className="text-sm font-medium text-gray-900">Star</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
