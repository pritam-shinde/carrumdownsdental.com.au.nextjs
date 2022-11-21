import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                        <script type="application/ld+json">
                    {`{
                            "@context": "https://schema.org"
                            "@type": "Dentist",
                            "name": "Carrum Downs Dental Group",
                            "image": "https://d3kk1vdl9fuovr.cloudfront.net/wp-content/uploads/2016/06/CD_logo_lanscape.png",
                            "@id": "",
                            "url": "https://carrumdownsdental.com.au/",
                            "telephone": "0397821200",
                            "priceRange": "$$"
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Shop, T5/100 Hall Rd",
                                "addressLocality": "Carrum Downs",
                                "addressRegion": "VIC",
                                "postalCode": "3201",
                                "addressCountry": "AU"
                            }
                        "aggregateRating":
                        {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "reviewCount": "91"
                        }
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -38.0886367,
                                "longitude": 145.1825171
                            }
                            "openingHoursSpecification": [{
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                        "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday"
                                ],
                                "opens": "09:00",
                                "closes": "18:00"

                        
                            }
                        ],
                            "sameAs": [
                                "https://www.facebook.com/CarrumDownsDental/",
                                "https://twitter.com/CarrumDownsGrp",
                                "https://www.instagram.com/cddentalgroup/",
                                "https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg",
                                "https://www.pinterest.com.au/CarrumDownsGrp/"
                            ] 
                        }`

                    }
                </script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
