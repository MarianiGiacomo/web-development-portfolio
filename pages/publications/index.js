import Layout from '../../components/container/layout'
import Anchor from '../../components/presentational/anchor'

import data from '../../data'
import { boldName } from '../../helpers'

export default function Publications() {
	const { firstName, lastName, publications }  = { ...data }
	return ( 
		<Layout>
			<h1 className="text-2xl font-medium mb-1 mt-4" >Publications</h1>
			<p className="mt-3">
				{ publications.intro }
			</p>
			<ul>
					{
						publications.articles.map( (p, i) => {
							return (
								<div key={i} className="mt-3">
								<li>
									<Anchor href={p.url} newWindow>
										{ boldName(p.title, firstName, lastName)}
									</Anchor>
								</li>
								</div>
							)
						})
					}
			</ul>
		</Layout>
	)
}