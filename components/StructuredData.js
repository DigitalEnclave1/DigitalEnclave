// components/StructuredData.js
export default function StructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DigitalEnclave",
      "url": "https://DigitalEnclave.com",
      "logo": "https://DigitalEnclave.com/logo.png",
      "description": "DigitalEnclave IT Company | Website, App & Digital Marketing Services",
      "sameAs": [
        "https://facebook.com/DigitalEnclave",
        "https://twitter.com/DigitalEnclave",
        "https://linkedin.com/company/DigitalEnclave"
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://DigitalEnclave.com"
      },
      "offers": {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Website Development, App Development, Digital Marketing"
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }