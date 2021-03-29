
const path = require('path')
exports.onCreateNode = ({ node,actions }) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {

        const slug = path.basename(node.fileAbsolutePath,'.md')

        createNodeField({
          node,
          name :"slug",
          value : slug
    
        })

    }
  }


  exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const result = await graphql(`
     query{
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
    
    `)
  
    const {createPage} = actions
    //console.log(JSON.stringify(result, null, 4))
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => { 
      if(node.fileAbsolutePath.includes('blogs')){

        createPage({
          path:    `/blog/${node.fields.slug}`  ,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      }


     else if (node.fileAbsolutePath.includes('projects')){

      createPage({
        path:    `/projects/${node.fields.slug}`  ,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })

     } 

    }
    
    
    )
  
  
  }