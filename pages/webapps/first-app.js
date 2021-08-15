import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data/webapps/first-app'

export default function FirstApp() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
