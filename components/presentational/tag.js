import PropTypes from 'prop-types'

const Tag = props => {
	return (
		<span 
		className="border rounded-full border-marine py-1 px-2 m-0.5"
		>
			{props.text}
		</span>
	)
}

Tag.propTypes = {
	text: PropTypes.string.isRequired
}

export default Tag
