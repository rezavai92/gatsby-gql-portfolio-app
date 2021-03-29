import React from 'react'
import {Link} from 'gatsby'
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap'
import * as style from './header.module.css'
export default function Header() {
    return (
        <nav className={style.navGrid} >

            <h2>
                <Link to="/" >
                    Web Master
                </Link>
            </h2>
           <h5>

           <Link to="/about" >  
            About
            </Link>
           </h5>
           <h5>
           <Link to="/blogs" >
                Blogs
            </Link>
           </h5>
          <h5>
          <Link to="/projects" >
                Projects
            </Link>
          </h5>
        </nav>
        
    )
}
