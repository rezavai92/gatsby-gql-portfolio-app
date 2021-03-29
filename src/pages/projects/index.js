import React from 'react'
import Layout from '../../components/layout'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'gatsby'
export default function Project({data}) {

  const filteredEdges=  data.allMarkdownRemark.edges.filter((e)=>{

      return  e.node.fileAbsolutePath.includes("projects")
    })

    console.log(filteredEdges)
    return (
        <Layout>

        <h1 style={{textAlign:"center"}}>Welcome to the project section</h1>
        <div className="blogs container" >
        
        {
          filteredEdges.map((e)=>{
           
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

                 <Link to={`/projects/${e.node.fields.slug}`} style={{color:"white"}} >Details</Link>
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
query projects {
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
