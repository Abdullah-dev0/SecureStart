// filepath: c:\Users\Abdullah\Documents\coding\better-auth-kit\app\signup\page.tsx
import { SignupForm } from "@/components/shared/SignupForm";

export default function SignupPage() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
			<div className="w-full max-w-sm md:max-w-3xl">
				<SignupForm />
			</div>
		</div>
	);
}
