import React from 'react'
import Helmet from 'react-helmet'

const Head = props => {
  return (
    <Helmet>
      <html lang="en"/>
      <title>{props.title}</title>
      <meta name="description" content={props.description}/>
      <meta name="theme-color" content="#22297c"/>
    </Helmet>
  )
}

export default Head
