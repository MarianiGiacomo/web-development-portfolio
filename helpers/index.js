const extractTechs = (data) => {
	// If it is an array, they are the skills
	if(Array.isArray(data)) {
		return data
	} else {
		const frontendTech = extractTechs(data.technologies.frontend?? [])
		const backendTech = extractTechs(data.technologies.backend?? [])
		return frontendTech.concat(backendTech)
	}
}

export const extractUniqueTech = (data) => {
	const skills = new Set()
	const addToSet = (techs) => {
		techs.forEach( t => skills.add(t))
	}
	Object.values(data).forEach( k => {
		const techs = extractTechs(k)
		addToSet(techs)
	}) 
	return skills
}

export const boldName = (text, firstName, lastName) => {
	if(text.includes(`${firstName} ${lastName}`)) {
		return (
		<> 
			{text.split(`${firstName} ${lastName}`)[0]} <b>{`${firstName} ${lastName}`}</b> {text.split(`${firstName} ${lastName}`)[1]}
		</>
		)
	} else if(text.includes(`${lastName} ${firstName}`)) {
		return (
		<> 
			{text.split(`${lastName} ${firstName}`)[0]} <b>{`${lastName} ${firstName}`}</b> {text.split(`${lastName} ${firstName}`)[1]}
		</>
		)
	} else	if(text.includes(`${firstName}, ${lastName}`)) {
		return (
		<> 
			{text.split(`${firstName}, ${lastName}`)[0]} <b>{`${firstName}, ${lastName}`}</b> {text.split(`${firstName}, ${lastName}`)[1]}
		</>
		)
	} else if(text.includes(`${lastName}, ${firstName}`)) {
		return (
		<> 
			{text.split(`${lastName}, ${firstName}`)[0]} <b>{`${lastName}, ${firstName}`}</b> {text.split(`${lastName}, ${firstName}`)[1]}
		</>
		)
	} else {
		return text;
	}
}