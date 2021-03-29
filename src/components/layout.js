import React from 'react'
import Header from './header'
//import * as containerStyle from './container.module.css'



export default function Layout({children}) {
    return (
        <div  style={{color:"white"}}  >
            <Header/>
            <div  >
                {children}
            </div>

            <footer style={{textAlign:"center"}} >
               @Copyright 2021 WebMaster 
            </footer>
        </div>
    )
}
