import PropTypes from 'prop-types'

const Anchor = ({ href, newWindow, classes, children }) => {
	return (
		<a 
			href={href} 
			target={newWindow? '_blank' : '_self'}
			rel="noopener noreferrer"	
			className={`text-turchese underline ${classes?? ''}`}
		>
			{ children }	
		</a>
	)
}

Anchor.propTypes = {
	href: PropTypes.string.isRequired,
	newWindow: PropTypes.bool.isRequired,
}

export default Anchor
