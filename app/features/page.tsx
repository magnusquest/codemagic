export default function Features() {
	return (
		<div
			id="features"
			className="my-auto mx-auto grid max-w-4xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 py-12"
		>
			<div className="grid gap-1">
				<h3 className="text-lg font-bold">One-Click</h3>
				<p className="text-sm text-zinc-500 dark:text-zinc-400">
					Our AI technology automates the entire development process in One-Click, eliminating the
					need for manual coding.
				</p>
			</div>
			<div className="grid gap-1">
				<h3 className="text-lg font-bold">Full-Stack Automation</h3>
				<p className="text-sm text-zinc-500 dark:text-zinc-400">
					From front-end design to back-end infrastructure, our platform takes care of everything.
				</p>
			</div>
			<div className="grid gap-1">
				<h3 className="text-lg font-bold">Customizable</h3>
				<p className="text-sm text-zinc-500 dark:text-zinc-400">
					Customize your website through natural language. Just tell us what you want, and our AI
					will build it.
				</p>
			</div>
		</div>
	)
}
