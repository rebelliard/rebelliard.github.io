import * as React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export interface SEOProps {
  title?: string
  description?: string
  pathname: string
  twitterCard?: string
  tags?: string[]
  image?: string
}

export function SEO({
  title,
  description,
  tags,
  twitterCard,
  image,
  pathname,
  children,
}: React.PropsWithChildren<SEOProps>) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    author,
    twitterUsername,
    facebookProfile,
    facebookProfileId,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ''}`,
    author,
    twitterUsername,
    facebookProfile,
    facebookProfileId,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={description} />
      <meta name="HandheldFriendly" content="true" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content={twitterCard || 'summary'} />
      <meta name="twitter:site" content={seo.title} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="fb:profile_id" content={facebookProfileId} />
      <meta property="og:site_name" content={title} />
      <meta property="og:publisher" content={facebookProfile} />
      <meta property="article:publisher" content={facebookProfile} />
      <meta property="article:author" itemProp="author" content={facebookProfile} />
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:label1" content="Published by" />
      <meta name="twitter:data1" content={seo.author} />

      <link rel="canonical" href={seo.url} />
      <meta name="twitter:url" content={seo.url} />
      <meta property="og:url" content={seo.url} />

      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />

      <meta name="og:image" content={seo.image} />
      <meta name="twitter:image:src" content={seo.image} />

      {tags && <meta name="twitter:label2" content="Filed under" />}

      {(tags || []).map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {tags && tags.length && <meta name="twitter:data2" content={tags.join(', ')} />}
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="theme-color" content="#22297c" />
      <meta name="msapplication-TileColor" content="#22297c" />
      <meta
        name="msapplication-TileImage"
        content={`${siteUrl}/public/favicon/ms-icon-144x144.png`}
      />
      <meta name="msapplication-config" content="/public/favicon/browserconfig.xml" />

      {children}
    </>
  )
}
