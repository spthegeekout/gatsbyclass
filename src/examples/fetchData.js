import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql `
query {
  site {
    info:siteMetadata {
      title
      author
      description
      person {
        age
        name
      }
      simpleData
      complexData {
        age
        name
      }
    }
  }
}
  
`

const FetchData = () => {
  const {site:{
    info: { title },
  },
} = useStaticQuery (getData)
  return (
    <div>
      {/* <h2>Name: {data.site.info.person.name}</h2> */}
      <h2>{title}</h2>
    </div>
  )
}

export default FetchData
