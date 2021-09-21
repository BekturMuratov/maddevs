function extractSchemaOrg(schemaOrgSnippets, fallback) {
  let schemaOrgSnippet = ''
  if (
    schemaOrgSnippets
    && schemaOrgSnippets.length
    && schemaOrgSnippets[0].single_snippet.length
    && schemaOrgSnippets[0].single_snippet[0].text
  ) {
    schemaOrgSnippet = schemaOrgSnippets[0].single_snippet[0].text
    // extracting only JSON object from a snippet without extra characters
    schemaOrgSnippet = schemaOrgSnippet.substring(schemaOrgSnippet.indexOf('{'), schemaOrgSnippet.lastIndexOf('}') + 1)
    return schemaOrgSnippet
  }
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fallback.data.title[0].text,
    alternativeHeadline: fallback.data.title[0].text,
    image: fallback.data.featured_image.url,
    genre: 'IT',
    publisher: {
      '@type': 'Organization',
      name: 'Mad Devs Group LTD',
      logo: {
        '@type': 'ImageObject',
        url: 'https://maddevs.io/Open-Graph.png',
      },
    },
    url: `https://maddevs.io/blog/${fallback.uid}/`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://maddevs.io/blog/',
    },
    datePublished: fallback.data.date,
    dateCreated: fallback.data.date,
    dateModified: fallback.data.date,
  })
}

export default extractSchemaOrg
