    import Layout, { siteTitle } from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function FontawesomeExample() {
    return (
        <Layout>

            <a href="https://nextjs.org/docs" >
                <FontAwesomeIcon style={{fontSize:"25px"}} icon={faSearch}></FontAwesomeIcon>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>

        </Layout>
    )
}
