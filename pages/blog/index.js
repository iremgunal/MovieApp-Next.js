import Link from "next/link"
import Head from "next/head"

export default function Blog(){
    return(
        <>
        <Head>
        <title>Blog</title>
    </Head>
        <h2>Blog Page</h2>
        <Link href='/'>
            Geri Dön
        </Link>
        </>
    )
}