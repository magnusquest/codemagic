'use client'

import dynamic from 'next/dynamic'
import '@tldraw/tldraw/tldraw.css'
import { MakeRealButton } from './components/MakeRealButton'
import { TldrawLogo } from './components/TldrawLogo'
import { ResponseShapeUtil } from './ResponseShape/ResponseShape'
import { RiskyButCoolAPIKeyInput } from './components/RiskyButCoolAPIKeyInput'
import LandingPage from './components/LandingPage'

const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
	ssr: false,
})

const shapeUtils = [ResponseShapeUtil]

export default function App() {
	return (
		<div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
			<LandingPage />
		</div>
		// <div className="fixed inset-0 overflow-hidden">
		// 	<Tldraw persistenceKey="make-real" shareZone={<MakeRealButton />} shapeUtils={shapeUtils}>
		// 		<TldrawLogo />
		// 		<RiskyButCoolAPIKeyInput />
		// 	</Tldraw>
		// </div>
	)
}
