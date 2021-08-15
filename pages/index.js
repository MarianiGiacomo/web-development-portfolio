import Image from 'next/image'
import Head from 'next/head'

import Layout, { siteTitle } from '../components/container/layout'
import { Card } from '../components/presentational/card'
import Tag from '../components/presentational/tag'

import data from '../data'
import { extractUniqueTech, boldName } from '../helpers'

export default function Home() {
	const { firstName, lastName, home, profileImg, webApps } = { ...data }
  return (
		<Layout home>

			<Head>
        <title>{siteTitle}</title>
      </Head>
		
			<section className="text-2xl sm:flex sm:flex-row mt-5 justify-center">
				<div className="mt-5 text-center">
					<Image
						priority
						src={profileImg.src}
						height={profileImg.height}
						width={profileImg.width}
						alt={`${firstName} ${lastName}`}
						className="rounded-full h-24 w-24 border-2 border-mint border-solid"
					/>
				</div>
				<div className="p-2 mt-5">
					<h1 className="mb-5">{boldName(home.heading, firstName, lastName)}</h1>
					<h2 className="md:ml-9 md:pl-9">{home.intro}</h2>
				</div>
      </section>

			<section>
				<h2 className="text-xl font-medium mb-1 mt-3 text-center">Projects</h2>
				<div className="sm:flex sm:flex-wrap gap-5 justify-between mt-8 mb-5 mr-auto ml-auto w-11/12">
					{
						Object.entries(webApps).map( (e, i) => {		
							return <Card 
								link={ `/webapps/${e[0]}` }
								heading={e[1].title?? ''}
								text={e[1].short?? ''}
								key={i}
							/>
						})
					}
				</div>
			</section>
			
			<section>
				<h2 className="text-xl font-medium mb-1 mt-3 text-center">Technologies</h2>
				<div className="flex flex-wrap mb-10 mt-3">
					{ Array.from(extractUniqueTech(webApps)).map( (t, i) => <Tag key={i} text={t} />)}
				</div>
			</section>

		</Layout>
  )
}
