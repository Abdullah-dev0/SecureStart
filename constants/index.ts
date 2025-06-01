// Code snippets for different authentication strategies
export const authCodeSnippets = {
	oauth: `// OAuth authentication with multiple providers
import { signIn } from "better-auth-kit";

export function OAuthButtons() {
  return (
    <div className="flex flex-col space-y-3">
      <button 
        onClick={() => signIn('google')} 
        className="flex items-center justify-center gap-2 p-2 rounded-md">
        <GoogleIcon /> Continue with Google
      </button>
      
      <button 
        onClick={() => signIn('github')} 
        className="flex items-center justify-center gap-2 p-2 rounded-md">
        <GithubIcon /> Continue with GitHub
      </button>
      
      <button 
        onClick={() => signIn('microsoft')} 
        className="flex items-center justify-center gap-2 p-2 rounded-md">
        <MicrosoftIcon /> Continue with Microsoft
      </button>
    </div>
  );
}`,
	emailPassword: `// Email & Password authentication
import { useState } from 'react';
import { signIn } from 'better-auth-kit';

export function EmailPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await signIn('credentials', { email, password });
      if (result.error) {
        setError(result.error);
      }
    } catch (err) {
      setError('Authentication failed. Try again.');
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 rounded"
        />
      </div>
      {error && <div className="text-destructive">{error}</div>}
      <button 
        type="submit" 
        className="w-full p-2 rounded">
        Sign In
      </button>
    </form>
  );
}`,
	magicLink: `// Magic Link authentication
import { useState } from 'react';
import { sendMagicLink } from 'better-auth-kit';

export function MagicLinkForm() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await sendMagicLink(email);
      setIsSent(true);
    } catch (err) {
      setError('Failed to send login link. Please try again.');
    }
  }
  
  return (
    <div className="space-y-4">
      {!isSent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded"
            />
          </div>
          {error && <div className="text-destructive">{error}</div>}
          <button 
            type="submit" 
            className="w-full p-2 rounded">
            Send Login Link
          </button>
        </form>
      ) : (
        <div className="text-center p-4 rounded">
          <h3 className="font-semibold">Login Link Sent!</h3>
          <p className="mt-2">
            Check your email for a login link. It will expire in 15 minutes.
          </p>
        </div>
      )}
    </div>
  );
}`,
};

// Code examples
export const cloneCode = `git clone https://github.com/Abdullah-dev0/SecureStart.git`;

export const usageCode = `// The auth logic is already written for you
// Just focus on building your app features

// In app/dashboard

export default function Dashboard() {
	return (
		<div className="container mx-auto py-8 px-4">
			<div className="mb-8">
				<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
				<p className="text-muted-foreground">Welcome to your dashboard. Here&apos;s your profile information.</p>
			</div>
			<Suspense
				fallback={
					<div className="flex justify-center items-center h-64">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
					</div>
				}>
				<UserProfile />
			</Suspense>
		</div>
	);
}`;

export const steps = [
	{
		title: "Clone the Repository",
		description: "Get the starter kit from GitHub",
		code: `git clone https://github.com/Abdullah-dev0/SecureStart.git
cd SecureStart`,
	},
	{
		title: "Install Dependencies",
		description: "Install all required packages",
		code: "npm install",
	},
	{
		title: "Set Up Environment Variables",
		description: "Configure your environment settings",
		code: `cp .env.example .env.local
# Update .env.local with your credentials`,
	},
	{
		title: "Set Up Prisma",
		description: "Generate Prisma client and push database schema",
		code: `npx prisma generate
npx prisma db push`,
	},
	{
		title: "Run the Application",
		description: "Start the development server",
		code: "npm run dev",
	},
];
