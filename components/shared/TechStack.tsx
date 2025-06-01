import { Mail } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiPrisma, SiTypescript } from "react-icons/si";

const techStack = [
	{
		name: "Next.js 15",
		description: "React framework with App Router",
		icon: SiNextdotjs,
		color: "from-black to-gray-800 dark:from-white dark:to-gray-200",
		textColor: "text-white dark:text-black",
		features: ["Server Components", "App Router", "TypeScript", "Performance"],
		category: "Frontend",
	},
	{
		name: "BetterAuth",
		description: "Modern authentication library",
		icon: FaGoogle,
		color: "from-emerald-500 to-green-600",
		textColor: "text-white",
		features: ["OAuth Integration", "JWT Sessions", "Security First", "Type Safe"],
		category: "Authentication",
	},
	{
		name: "Neon DB",
		description: "Serverless PostgreSQL platform",
		icon: SiPostgresql,
		color: "from-blue-500 to-blue-700",
		textColor: "text-white",
		features: ["Auto-scaling", "Branching", "Fast Queries", "Serverless"],
		category: "Database",
	},
	{
		name: "Prisma",
		description: "Next-generation ORM",
		icon: SiPrisma,
		color: "from-indigo-500 to-purple-600",
		textColor: "text-white",
		features: ["Type Safety", "Migrations", "Schema Management", "Query Builder"],
		category: "ORM",
	},
	{
		name: "TypeScript",
		description: "Typed JavaScript at scale",
		icon: SiTypescript,
		color: "from-blue-600 to-blue-800",
		textColor: "text-white",
		features: ["Static Typing", "IntelliSense", "Error Prevention", "Refactoring"],
		category: "Language",
	},
	{
		name: "Nodemailer",
		description: "Email sending made simple",
		icon: Mail,
		color: "from-red-500 to-rose-600",
		textColor: "text-white",
		features: ["SMTP Support", "Templates", "Security", "Reliability"],
		category: "Email",
	},
];

const TechStack = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-20">
				<div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
					<span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
					Modern Technology Stack
				</div>
				<p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
					Carefully selected technologies engineered for{" "}
					<span className="font-semibold text-foreground">optimal performance</span>
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{techStack.map((tech, index) => (
					<div key={index} className="group relative">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

						<div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group-hover:-translate-y-2">
							<div className="flex items-start space-x-6">
								<div
									className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
									<tech.icon size={32} className={tech.textColor} />
								</div>

								<div className="flex-1 min-w-0">
									<div className="flex items-center justify-between mb-2">
										<h3 className="font-bold text-foreground text-xl group-hover:text-primary transition-colors duration-300">
											{tech.name}
										</h3>
										<span className="px-2 py-1 text-xs bg-muted/70 rounded-md text-muted-foreground font-medium border border-border/30">
											{tech.category}
										</span>
									</div>
									<p className="text-muted-foreground mb-4 leading-relaxed text-sm">{tech.description}</p>

									<div className="space-y-3">
										<div className="flex flex-wrap gap-2">
											{tech.features.map((feature, featureIndex) => (
												<span
													key={featureIndex}
													className="inline-flex items-center px-3 py-1.5 text-xs bg-gradient-to-r from-muted to-muted/70 rounded-lg text-muted-foreground font-medium border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default">
													<span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
													{feature}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="mt-20 text-center">
				<div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-full border border-border/50 backdrop-blur-sm">
					<div className="flex -space-x-1">
						<div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
						<div
							className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"
							style={{ animationDelay: "0.5s" }}
						/>
						<div
							className="w-3 h-3 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"
							style={{ animationDelay: "1s" }}
						/>
					</div>
					<p className="text-muted-foreground font-medium">
						All technologies are production-ready with active community support
					</p>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
