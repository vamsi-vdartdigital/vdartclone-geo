import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Digital Transformation Consulting & Strategy Services | VDart Digital',
  description = 'VDart Digital partners with organizations to deliver end-to-end digital transformation services—driving innovation, operational agility, and measurable business outcomes.',
  keywords = 'digital transformation, cloud services, cybersecurity, AI consulting, data analytics, managed services, enterprise solutions',
  canonical = '',
  ogImage = 'https://images.unsplash.com/photo-1644325349124-d1756b79dd42?w=1200',
  ogType = 'website',
  schema = null // Additional schema for specific pages
}) => {
  const siteUrl = window.location.origin;
  const currentUrl = canonical || window.location.href;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VDart Digital',
    description: description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Alpharetta',
      addressRegion: 'GA',
      addressCountry: 'USA'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://www.facebook.com/vdartdigital',
      'https://www.linkedin.com/company/vdartdigital',
      'https://twitter.com/vdartdigital'
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="VDart Digital" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Additional SEO/GEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="VDart Digital" />
    </Helmet>
  );
};

export default SEO;