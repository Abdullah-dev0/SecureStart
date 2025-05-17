import { Github, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="py-12">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					<div>
						<div className="flex items-center gap-2 mb-4">
							<div className="h-8 w-8 rounded-full bg-primary" />
							<span className="text-lg font-bold">BetterAuth</span>
						</div>
						<p className="text-sm text-muted-foreground">
							The complete authentication solution for modern applications.
						</p>
					</div>
					<div>
						<h5 className="font-semibold mb-3">Product</h5>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#features" className="text-muted-foreground hover:text-primary">
									Features
								</Link>
							</li>
							<li>
								<Link href="/pricing" className="text-muted-foreground hover:text-primary">
									Pricing
								</Link>
							</li>
							<li>
								<Link href="/documentation" className="text-muted-foreground hover:text-primary">
									Documentation
								</Link>
							</li>
							<li>
								<Link href="/status" className="text-muted-foreground hover:text-primary">
									Status
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h5 className="font-semibold mb-3">Resources</h5>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/support" className="text-muted-foreground hover:text-primary">
									Support
								</Link>
							</li>
							<li>
								<Link href="/api-reference" className="text-muted-foreground hover:text-primary">
									API Reference
								</Link>
							</li>
							<li>
								<Link href="/community" className="text-muted-foreground hover:text-primary">
									Community
								</Link>
							</li>
							<li>
								<Link
									href="https://github.com/yourusername/better-auth-kit"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-primary">
									Open Source
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h5 className="font-semibold mb-3">Legal</h5>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/privacy" className="text-muted-foreground hover:text-primary">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="/terms" className="text-muted-foreground hover:text-primary">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="/license" className="text-muted-foreground hover:text-primary">
									License
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
					<div className="text-sm text-muted-foreground mb-4 md:mb-0">
						© {new Date().getFullYear()} BetterAuth Kit. All rights reserved.
					</div>
					<div className="flex space-x-4">
						<Link
							href="https://twitter.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary">
							<Twitter className="h-5 w-5" />
						</Link>
						<Link
							href="https://github.com/yourusername/better-auth-kit"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary">
							<Github className="h-5 w-5" />
						</Link>
						<Link href="/contact" className="text-muted-foreground hover:text-primary">
							<MessageCircle className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
