import Link from "next/link";

export default function Header() {
    return <header>
        <nav>
            <ul>
                <li>
                    <Link legacyBehavior href='/'>
                        <a>Anasayfa</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/about">
                        <a>Hakkında</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href='/blog'>
                       <a>Blog</a> 
                    </Link>
                </li>
            </ul>
        </nav>

        <style jsx>{`
        header{         
            background:#1f1f1f6e;
            border-bottom:1px solid #fff;
            
            

            ul{
               display:flex; 

               li{
                list-style-type:none;
                
                a{
                    height:60px;
                    display: flex;
                    align-items:center;
                    text-decoration: none;
                    margin-left:30px;
                    padding:0 20px;
                    font-weight:bold;
                    color:#fff;
                }
                a:hover{
                    color:steelblue;
                }
               
               }
            }
        }
        `}

        </style>

    </header>
}