import Head from 'next/head'

export default function FilmDetay({movie}){
    console.log(movie);
 return (
    <div className='movie'>
        <Head>
            <title>{movie.title}</title>
        </Head>
        <div className="cover" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}></div>
        <h3> {movie.title}</h3>
        <h5>Süre: {movie.runtime} dakika</h5>
        <h5>Yayın tarihi: {movie.release_date} </h5>
     
        <div className="summary">
            {movie.overview}
        </div>

        <style jsx>{`
        .movie{
           
            width:1200px;
            margin:0px auto;
            padding:20px;
            position:relative;
            color: whitesmoke;

            h3{
                font-size:30px;
                font-weight:bold;
                margin-bottom:20px;

            }
            .summary{
                margin:20px auto;
                font-size:18px;
                color: whitesmoke;
                font-weight:bold;
                line-height:1.7;
              
            }
            .cover{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:500px;
                background-size:cover;
                opacity:.5;
                z-index:-1;
                
                
                &::before{
                    content:'';
                    background: linear-gradient(to bottom, transparent , #010101);
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                }
            }

        }
        `}</style>

    </div>

    
  
 )
}

export async function getServerSideProps({params}){
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=8dee759e16031ba5946c50bd60ab96db&language=tr-TR
    `)
    const movie = await request.json()
   return{
    props:{
        movie
    }
   }
  
  }