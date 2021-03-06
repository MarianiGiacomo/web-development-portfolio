import PropTypes from 'prop-types'
import Tag from '../presentational/tag'
import Image from 'next/image'

const WebApp = ({ data }) => {
	return (
		<>
			{
				data.img?
				<div className="rounded-lg border border-pearl lg:w-3/5 lg:m-auto mb-5 p-3" >
					<Image 
						width={data.img.width?? ''} 
						height={data.img?.height?? ''} 
						src={data.img.src?? ''}
						alt={data.img.alt?? ''}
					/>
				</div>
					: ''
			}
			<h1 className="text-2xl font-medium mb-1 mt-4">{data.title?? ''}</h1>
			<p className="mb-2">{data.intro?? ''}</p>
			<h2 className="text-xl font-medium mb-1 mt-4">Technologies</h2>
			{
				data.technologies?.frontend?	
				<p className="mb-2 mt-4">
					<span className="font-medium">Frontend</span>:&nbsp;
					{data.technologies.frontend.map( (t, i) => <Tag key={i} text={t} />)}	
				</p>
				: ''
			}
			{
				data.technologies?.backend?	
				<p className="mb-2 mt-3">
					<span className="font-medium">Backend</span>:&nbsp;
					{data.technologies.backend.map( (t, i) => <Tag key={i} text={t} />)}	
				</p>
				: ''
			}
			{
				data.links? 
					(
						<>
							<h2 className="text-xl font-medium mb-1 mt-4" >Links</h2>
							<ol>
							{ 
								Object.entries(data.links).map((l, i) => {
									return (
										<li key={i} >
											<a href={l[1]} target="_blank" rel="noopener noreferrer">
												{l[0]}
											</a>
										</li>
									)
								})
							}
							</ol>
						</>
					) 
					: '' 
			}
		</>
	)
}

WebApp.propTypes = {
	data: PropTypes.object.isRequired
}

export default WebApp
