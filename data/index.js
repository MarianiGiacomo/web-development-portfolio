import firstApp from  './webapps/first-app'
import secondApp from './webapps/second-app'
import thirdApp from './webapps/third-app'
import fourthApp from './webapps/fourth-app'
import articles from './publications'

const firstName = 'Firstname'
const lastName = 'Lastname'

export default {
	firstName,
	lastName,
	gitHub: 'https://github.com',
	twitter: 'https://twitter.com',
	linkedin: 'https://linkedin.com',
	email: 'your@email.com',
	blog: '/',
	profileImg: {
		src: '/images/profile.png', 
		width: 150,
		height: 150
	},
	home: {
		heading: `Hi!, I am ${firstName} ${lastName}.`,
		intro: `This is my web development portfolio`
	},
	webApps: { 
		'first-app': firstApp,
		'second-app': secondApp,
		'third-app': thirdApp,
		'fourth-app': fourthApp
	},
	publications: {
		intro: `Here are my publications`,
		articles,
	}
}