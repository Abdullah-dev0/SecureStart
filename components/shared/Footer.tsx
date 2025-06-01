import { Github, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className=" py-12 w-full">
			<div className="px-4 sm:px-6 lg:px-8 w-full">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center space-x-3 mb-4 md:mb-0">
						<span className="text-xl font-bold text-foreground">SecureStart</span>
					</div>

					<div className="flex items-center space-x-6">
						<Link
							href="https://github.com/Abdullah-dev0/SecureStart"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
							<Github size={20} />
							<span>GitHub</span>
						</Link>

						<div className="flex items-center space-x-2 text-muted-foreground">
							<span>Made with</span>
							<Heart size={16} className="text-red-500" />
							<span>by Abdullah</span>
						</div>
					</div>
				</div>

				<div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
					<p>If this starter kit helped you, consider giving it a ⭐️ on GitHub</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
