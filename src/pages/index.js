import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import {ListGroup} from 'react-bootstrap'
export default function Home() {
  return (<Layout>
     
     
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}} >
        <div style={{width:"90%",margin:"5% 0% 2% 2%"}} >
          <h1 style={{color :"gray"}} >
            We provide the best tech solution!
          </h1>
          <ul style={{padding:"5%"}} >
            <li>
              WEB DESIGN & DEVELOPMENT
            </li>
            <li>
              MOBILE APP DEVELOPMENT
            </li>
            <li>
                VR SOLUTION
            </li>
            <li>
              ROBOTICS
            </li>
          </ul>
        </div>
          <div>
          <img src="banner.png" style={{maxWidth:"100%"}} />
          </div>
      </div>


  </Layout>)
   

  
}
