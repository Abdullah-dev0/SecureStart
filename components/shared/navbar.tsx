import { Github, Star } from "lucide-react";
import Link from "next/link";

const Header = () => {
	return (
		<header className="fixed top-0 w-full  border-b border-border z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center space-x-3">
						<span className="text-xl font-bold text-foreground">SecureStart</span>
					</div>

					<div className="flex items-center space-x-4">
						<Link
							href="https://github.com/Abdullah-dev0/SecureStart"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center space-x-2 px-4 py-2  hover:text-foreground transition-colors">
							<Github size={20} />
							<span className="hidden sm:inline">GitHub</span>
						</Link>
						<button className="flex items-center cursor-pointer space-x-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg transition-colors">
							<Star size={16} color="black" />
							<span className="text-sm font-medium text-gray-900">Star</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
