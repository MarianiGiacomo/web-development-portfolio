import Layout from '../../components/container/layout'
import WebApp from '../../components/container/webapp'
import data from '../../data/webapps/third-app'

export default function ThirdApp() {
	return ( 
		<Layout>
			<WebApp data={data} />
		</Layout>
	)

}
