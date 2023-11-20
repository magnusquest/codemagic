import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
	const router = useRouter()
	return (
		<>
			<main className="flex flex-1 flex-col justify-center p-4 md:p-10 text-center">
				<h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50 md:text-5xl">
					One-Click Website Builder
				</h1>
				<p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400 md:text-xl">
					With the power of AI, we automate the complete development process for you.
				</p>
				<Button
					className="mt-6 w-full max-w-[14rem] mx-auto"
					variant="default"
					onClick={() => {
						router.push('/dashboard')
					}}
				>
					Get Started
				</Button>
			</main>
		</>
	)
}
