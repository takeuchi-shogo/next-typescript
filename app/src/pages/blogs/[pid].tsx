
import type { NextPage } from 'next'
import { useRouter } from 'next/router'


const Blog: NextPage = () => {

	const route = useRouter()
	const { pid } = route.query

	return (
		<div>
			<h1>Blog Page { pid }</h1>
		</div>
	)
}

export default Blog