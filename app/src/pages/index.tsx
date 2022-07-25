
import useSWR from 'swr'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'


const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
	const { data, error } = useSWR('/api/hello', fetcher)

	if (error) return <div>failed to load...</div>

	if (!data) return <div>now loading...</div>

	const route = useRouter()
	return (
		<div>
			<h1>My Top Page</h1>
			<button onClick={() => {
				route.push('/abouts')
			}}>
				Go About Page!!
			</button>

			{ data.name }
		</div>
	)
}

export default Home