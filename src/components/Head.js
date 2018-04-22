import React from 'react'
import Helmet from 'react-helmet'

const Head = props => {

  const domain = 'https://rafael.do'

  const image = {
    avatar: `${domain}/public/images/blog/avatar.jpg`
  }

  const pathname = props.location.pathname === '/' ? '' : props.location.pathname
  const title = `${props.title}${props.location.pathname === '/' ? '' : ' | rafael.do'}`

  return (
    <Helmet>
      <html
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
        itemScope
        itemType="http://schema.org/WebSite"
        lang={props.language || 'en'}/>

      <title>{title}</title>
      <meta name="description" content={props.description}/>
      <meta property="og:type" content="article"/>
      <meta name="twitter:card" content={props.twitterCard || 'summary'}/>
      <meta name="twitter:site" content="@rebelliard"/>
      <meta name="twitter:creator" content="@rebelliard"/>
      <meta property="fb:profile_id" content="100007638546934"/>
      <meta property="og:site_name" content={props.title}/>
      <meta property="og:publisher" content="https://www.facebook.com/rebelliard"/>
      <meta property="article:publisher" content="https://www.facebook.com/rebelliard"/>
      <meta property="article:author" itemProp="author" content="https://www.facebook.com/rebelliard"/>
      <meta name="twitter:title" content={props.title}/>
      <meta property="og:title" content={props.title}/>

      <link rel="canonical" href={`${domain}${pathname}`}/>
      <meta name="twitter:url" content={`${domain}${pathname}`}/>
      <meta property="og:url" content={`${domain}${pathname}`}/>

      <meta name="twitter:description" content={props.description}/>
      <meta property="og:description" content={props.description}/>

      {props.image
        ? <meta name="og:image" content={image.avatar}/>
        : <meta name="og:image" content={props.image}/>}

      {props.image
        ? <meta name="twitter:image:src" content={image.avatar}/>
        : <meta name="twitter:image:src" content={props.image}/>}

      <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon/apple-icon-180x180.png"/>
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/public/favicon/apple-icon-144x144.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/public/favicon/android-icon-192x192.png"/>
      <link rel="shortcut icon" href="/public/favicon/favicon.ico"/>
      <link rel="manifest" href="/public/favicon/manifest.json"/>

      <meta name="theme-color" content="#22297c"/>
      <meta name="msapplication-TileColor" content="#22297c"/>
      <meta name="msapplication-TileImage" content={`${domain}/public/favicon/ms-icon-144x144.png`}/>
      <meta name="msapplication-config" content="/public/favicon/browserconfig.xml"/>
    </Helmet>
  )
}

export default Head
