import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Popular from '../components/popular';


export default function Home({movies}) {
  return (
    <>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Popular  movies={movies} />
        
      
    </>
  )
}


export async function getServerSideProps(){
  const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8dee759e16031ba5946c50bd60ab96db&language=en-US&page=1`)
  const movies = await request.json();

  return{
    props: {
      movies
    }
  }

}