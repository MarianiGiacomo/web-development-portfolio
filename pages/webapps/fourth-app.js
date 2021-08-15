import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data/webapps/fourth-app'

export default function FourthApp() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
