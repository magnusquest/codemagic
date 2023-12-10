'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { makeReal } from '../makeReal'
import { useEffect } from 'react'

import InnerHTML from 'dangerously-set-html-content';


export default function Dashboard() {

	const [prompt, setPrompt] = useState('')
	const [html, setHtml] = useState('<div>Site content will appear here</div>')
	const [loading, setLoading] = useState(false);
	const [contentLoaded, setContentLoaded] = useState(false);

	useEffect(() => {
		console.log(html);
		setTimeout(() => {
			console.log('setting html')
			setHtml('<div>Sample</div>')
			console.log(html);
		}, 3000)
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
		setPrompt(e.target.value)
		// call makeReal with prompt

	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('submit')
		console.log(prompt)
		setLoading(true);
		setContentLoaded(false);
		setHtml('<div></div>'); // clear html
		makeReal(prompt, "").then((res) => {
			console.log(res);
			setHtml(res);
			setContentLoaded(true);
		}).catch((err) => {
			console.log(err);
		}).finally(() => {
			setLoading(false);
		});
	}

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
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col">
							<label>Input full stack prompt:</label>
							<textarea rows={4} cols={40} className="border border-black w-36" defaultValue={''} onChange={e => setPrompt(e.target.value)}/>
						</div>
						<button type="submit" className="mt-5 p-5 bg-blue-500 rounded-lg">Submit</button>
					</form>
					<label>OpenAI Key: </label>
					<input id="openai_key_risky_but_cool" className="mt-5 border border-black" defaultValue="" />
					<section className="mt-5">
						{loading ? <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div> : null}
						{/* <div dangerouslySetInnerHTML={{__html: html}}></div> */}
						{contentLoaded ? <div className="border border-purple-400 p-5"><InnerHTML html={html} /></div> : <div>Site content will appear here</div> }
					</section>
				</main>
			</div>
		</>
	)
}
