import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data/webapps/second-app'

export default function SecondApp() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
