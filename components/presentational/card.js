import Link from 'next/link'

export const Card = ({link, heading, text, classes}) => {
	return (
		<Link href={link}>
			<a className={`sm:w-2/5 block m-2 p-2 border-solid border-2 rounded-md overflow-scroll border-marine ${classes?? ''}`} >
				<h2 className="font-medium">{heading} &rarr;</h2>
				<p className="font-light">{text}</p>
			</a>
		</Link>
	)
}
