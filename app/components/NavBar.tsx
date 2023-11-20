import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import wand from '@/public/magic-wand.svg'

export default function NavBar() {
	return (
		<header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
			<Link className="flex items-center gap-2" href="/">
				<Image src={wand} width={24} height={24} alt="magic-wand.svg" />
				<span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">CodeMagic</span>
			</Link>
			<nav className="hidden md:flex items-center gap-6">
				<Link
					className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
					href="/features"
				>
					Features
				</Link>
				<Link
					className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
					href="/pricing"
				>
					Pricing
				</Link>
				<Link
					className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
					href="/about"
				>
					About
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
	)
}
