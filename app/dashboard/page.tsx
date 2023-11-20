import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
	return (
		<>
			<div className="flex h-screen">
				<aside className="flex flex-col w-64 border-r border-zinc-200 dark:border-zinc-700">
					<div className="p-4">
						<h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Primary</h2>
						<nav className="mt-4">
							<Link
								className="block py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
								href="#"
							>
								Item 1
							</Link>
							<Link
								className="block py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
								href="#"
							>
								Item 2
							</Link>
							<Link
								className="block py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
								href="#"
							>
								Item 3
							</Link>
						</nav>
					</div>
				</aside>
				<main className="flex-1 p-6">
					<h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Dashboard</h1>
					<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
						Manage your full-stack development process here.
					</p>
				</main>
			</div>
		</>
	)
}
