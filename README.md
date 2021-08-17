This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Configuration

To configure the text, profile picture, and links displayed in the portfolio, you to configure the files under `/data`.

#### Example of `data/index.js`
```
import firstApp from  './webapps/first-app'
import secondApp from './webapps/second-app'
import thirdApp from './webapps/third-app'
import fourthApp from './webapps/fourth-app'
import articles from './publications

const firstName = 'Firstname'
const lastName = 'Lastname'

export default {
	firstName,
	lastName,
	gitHub: 'https//yourgithubprofile',
	twitter: 'https//yourtwitterprofile',
	linkedin: 'https://yourlinkedinprofile',
	email: 'your@email',
	blog: 'https//yourblog',
  // Displayed on the homepage
	profileImg: {
		src: '/images/profile.png', 
		width: 150,
		height: 150
	},
  // The text displayed in the homepage near your profile picture
	home: {
		heading: `Hi!, I am ${firstName} ${lastName}.`,
		intro: `This is my web development portfolio`
	},
  // The projects to show
  // Configure them under dat/webapps/your-app.js
  // and import them on top of this file
	webApps: { 
		'first-app': firstApp,
		'second-app': secondApp,
		'third-app': thirdApp,
		'fourth-app': fourthApp
	},
	publications: {
  // The intro text displayed in the publications page
		intro: `Here are my publications`,
    // The publications configured under data/publications/index.js
		articles,
	}
}
```

