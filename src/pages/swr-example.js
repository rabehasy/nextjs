import useSWR from 'swr'
import Layout, { siteTitle } from '../components/layout'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SwrExample() {
    const { data, error } = useSWR(
        "https://api.github.com/repos/vercel/swr",
        fetcher
    );

    if (error) {
        return (
            <Layout>
                <p>An error occurred</p>
            </Layout>
        )
    }
    if (!data) {
        return (
            <Layout>
                <p>Loading</p>
            </Layout>
        )
    }

    return (
        <Layout>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👁 {data.subscribers_count}</strong>{" "}
            <strong>✨ {data.stargazers_count}</strong>{" "}
            <strong>🍴 {data.forks_count}</strong>
        </Layout>
    );
}
