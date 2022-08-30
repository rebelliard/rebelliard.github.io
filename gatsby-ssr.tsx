exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: 'en',
    prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#',
    itemScope: true,
    itemType: 'http://schema.org/WebSite',
  })
}
