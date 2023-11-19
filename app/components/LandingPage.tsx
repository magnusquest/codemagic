import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Component() {
	return (
		<div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
			<header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
				<Link className="flex items-center gap-2" href="#">
					<svg
						className=" h-6 w-6 text-zinc-500 dark:text-zinc-400"
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
					</svg>
					<span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">AI DevOps</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6">
					<Link
						className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
						href="#"
					>
						Features
					</Link>
					<Link
						className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
						href="#"
					>
						Pricing
					</Link>
					<Link
						className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
						href="#"
					>
						About
					</Link>
					<Link
						className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
						href="#"
					>
						Contact
					</Link>
				</nav>
				<div className="flex items-center gap-4">
					<Button className="hidden md:block" variant="outline">
						Try Free
					</Button>
					<Button className="md:hidden" variant="outline">
						Menu
					</Button>
				</div>
			</header>
			<main className="flex flex-1 flex-col justify-center p-4 md:p-10 text-center">
				<h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50 md:text-5xl">
					Automate your Full-Stack Development
				</h1>
				<p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400 md:text-xl">
					With the power of AI, we automate the complete development process for you.
				</p>
				<Button className="mt-6 w-full max-w-[14rem] mx-auto" variant="default">
					Get Started
				</Button>
			</main>
			<footer className="flex items-center justify-center h-16 border-t border-zinc-200 dark:border-zinc-800">
				<p className="text-sm text-zinc-500 dark:text-zinc-400">© AI DevOps</p>
			</footer>
		</div>
	)
}
