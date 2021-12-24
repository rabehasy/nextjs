import Layout, { siteTitle } from '../components/layout'

export async function getStaticProps(context) {
    return {
        notFound: true // triggers 404
    }
}

export default function ForceNotFound() {
    return (
        <Layout> ForceNotFound </Layout>
    )
}
