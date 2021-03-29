import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'

import {Card,Button} from 'react-bootstrap'
//import * as blogStyle from '../styles/blogs.css'
const path = require('path')




export default function Blog({data}) {

 // console.log(data)
  //const {frontmatter,html} = data.allMarkdownRemark.edges.node
 
  const edges = data.allMarkdownRemark.edges;
  
  console.log(edges)
  // console.log(frontmatter,html)
    return (
         <Layout>

           <h1 style={{textAlign:"center"}}>Welcome to the blog section</h1>
           <div className="blogs container" >
           
           {
             edges.map((e)=>{
               if(e.node.fileAbsolutePath.includes("blogs"))
               return(
                <Card style={{ width: '100%' , maxHeight:"100%"  }}>
                <Card.Img variant="top" src={`${e.node.id}.png`} />
                <Card.Body>
                  <Card.Title style={{color:"black"}} >{e.node.frontmatter.title}</Card.Title>
                  <Card.Text style={{color:"black"}} >
                    <h6 style={{color:"silver"}} >{e.node.frontmatter.date}</h6>
                    {e.node.excerpt}
                  </Card.Text>
                  <Button variant="primary">

                    <Link to={`/blog/${e.node.fields.slug}`} style={{color:"white"}} >Read More</Link>
                  </Button>
                </Card.Body>
              </Card>
               )
             })
           }
           </div>
         </Layout>
    )
}

export const query  =  graphql`
query blogs {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter{
          title
          date
        }
        fields {
          slug
        }
        fileAbsolutePath
        excerpt
      }
    }
    
  }
}

`
