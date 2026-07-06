import { useEffect } from 'react'

export default function SEOHead({ title, description, path = '', faqSchema = null }) {
  const siteUrl = 'https://aipathshalaglobal.com'
  const fullUrl = `${siteUrl}${path}`

  useEffect(() => {
    // 1. Update Document Title
    const baseTitle = 'A and I Pathshala Global'
    document.title = title ? `${title} - ${baseTitle}` : `${baseTitle} - Teach The World`

    // 2. Helper to manage meta tags
    const updateMetaTag = (attrName, attrValue, contentValue) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attrName, attrValue)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', contentValue || '')
    }

    // 3. Update Standard Meta Tags
    updateMetaTag('name', 'description', description || 'Empowering Innovation & Education – Globally. From AI workshops to digital solutions and language learning.')
    updateMetaTag('property', 'og:title', title ? `${title} - ${baseTitle}` : baseTitle)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:url', fullUrl)
    updateMetaTag('property', 'og:type', 'website')
    updateMetaTag('name', 'twitter:card', 'summary_large_image')

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    // 5. Build and Inject JSON-LD Schema
    const schemas = []

    // A. Organization Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      'name': 'A and I Pathshala Global',
      'url': siteUrl,
      'logo': `${siteUrl}/logo.png`,
      'description': 'Empowering innovation and education through IT services and technical training.',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+977-9828249123',
        'contactType': 'customer support',
        'email': 'info@aipathshalaglobal.com',
        'areaServed': 'Worldwide'
      }
    })

    // B. Breadcrumb Schema
    const breadcrumbs = [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': siteUrl }
    ]
    if (path && path !== '/') {
      const parts = path.split('/').filter(Boolean)
      let currentPath = ''
      parts.forEach((part, index) => {
        currentPath += `/${part}`
        breadcrumbs.push({
          '@type': 'ListItem',
          'position': index + 2,
          'name': part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          'item': `${siteUrl}${currentPath}`
        })
      })
    }
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs
    })

    // C. FAQ Schema (If applicable)
    if (faqSchema && faqSchema.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqSchema.map(faq => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a
          }
        }))
      })
    }

    // D. Inject all schemas as a single script
    const scriptId = 'pathsala-seo-jsonld'
    let script = document.getElementById(scriptId)
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.text = JSON.stringify(schemas)

    // Cleanup on unmount
    return () => {
      const activeScript = document.getElementById(scriptId)
      if (activeScript) {
        activeScript.remove()
      }
    }
  }, [title, description, path, faqSchema])

  return null
}
