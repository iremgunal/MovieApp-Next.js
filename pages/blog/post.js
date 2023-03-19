import Link from "next/link"
import Head from "next/head"



export default function Post(){
    return (
        <>
        <Head>
        <title>Blog Post</title>
    </Head>
        <h2>Post Page</h2>
        <Link href='/'>
            Geri Dön
        </Link>
        </>
    )
}