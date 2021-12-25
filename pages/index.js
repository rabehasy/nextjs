import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
            <Link href="/contact-page.html">
                <a>{' '}Contact</a>
            </Link> -
            <Link href="/not-found">
                <a>{' '}Error page</a>
            </Link> -
            <Link href="/force-not-found">
                <a>{' '}Force not found</a>
            </Link> -
            <Link href="/sitemap.xml">
                <a>{' '}Sitemap XML</a>
            </Link>
        </section>
    </Layout>
  )
}
