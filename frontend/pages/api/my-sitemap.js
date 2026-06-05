import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { SITE_URL } from '../../lib/siteUrl';

const WORDPRESS_BASE = 'https://srv757671.hstgr.cloud/wp-json/wp/v2';
const RESERVED_SLUGS = new Set([
    'admin',
    'api',
    'blog',
    'blogs',
    'study-destination',
    'study-destinations',
    'contact',
    'contact-us',
    'about',
    'aboutUs',
    'login',
    'signup',
    'registered-student-login',
    'student-dashboard',
    'college-predictor',
    'counselor',
    'terms',
    'testimonial',
]);

const fetchAllBlogSlugs = async () => {
    const slugs = new Set();
    const perPage = 100;
    const maxPages = 20;

    for (let page = 1; page <= maxPages; page += 1) {
        const res = await fetch(
            `${WORDPRESS_BASE}/blogs?_fields=slug&per_page=${perPage}&page=${page}`
        );

        if (!res.ok) {
            break;
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
            break;
        }

        data.forEach((item) => {
            if (item?.slug && !RESERVED_SLUGS.has(item.slug)) {
                slugs.add(item.slug);
            }
        });

        if (data.length < perPage) {
            break;
        }
    }

    return Array.from(slugs);
};

const sitemap= async (req, res) => {

    const blogSlugs = await fetchAllBlogSlugs();

    const links = [
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/aboutUs', changefreq: 'daily', priority: 0.3 },
        { url: '/terms', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations', changefreq: 'daily', priority: 0.3 },

        // Countries
        { url: '/study-destinations/study-mbbs-in-russia', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-china', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-australia', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-hungary', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-kyrgyzstan', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-uk', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-bangladesh', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-georgia', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-kazakhstan', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-nepal', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-tajikistan', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-ukraine', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-uzbekistan', changefreq: 'daily', priority: 0.3 },
        
        
        //MBBS in russia universities
        { url: '/study-destinations/study-mbbs-in-russia/bashkir-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/immanuel-kant-baltic-federal-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/kazan-federal-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/krasnoyarsk-state-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/national-research-nuclear-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/north-western-state-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/northern-state-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/orenburg-state-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/petrozavodsk-state-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/tambov-state-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/ulyanovsk-state-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-russia/ural-state-medical-university', changefreq: 'daily', priority: 0.3 },

        // MBBS In tajikistan

        // MBBS In China
        { url: '/study-destinations/study-mbbs-in-china/zhejiang-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-china/nanjing-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-china/xiamen-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-china/southeast-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-china/xinjiang-university', changefreq: 'daily', priority: 0.3 },
        
        // MBBS In Nepal
         { url: '/study-destinations/study-mbbs-in-nepal/kathmandu-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/nepal-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/lumbini-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/devdaha-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/nobel-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/chitwan-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/b&c-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/birat-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/college-of-medical-science', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/manipal-college-of-medical-science', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/kist-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/janaki-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/national-medical-college', changefreq: 'daily', priority: 0.3 },
         { url: '/study-destinations/study-mbbs-in-nepal/nepalgunj-medical-college', changefreq: 'daily', priority: 0.3 },  

        // Study in Germany 
        { url: '/study-destinations/study-in-germany/ausbildung', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/bachelors-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/masters-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/md-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/hotel-management-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/mbbs-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/nursing-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/pharmacy-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/vocational-courses-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/education-system-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/ms-in-economics-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/phd-in-germany', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-in-germany/masters-in-public-health-in-germany', changefreq: 'daily', priority: 0.3 },

        // Study in Tajikistan
        { url: '/study-destinations/study-mbbs-in-tajikistan/khatlon-state-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-tajikistan/tajik-national-university', changefreq: 'daily', priority: 0.3 },  
        { url: '/study-destinations/study-mbbs-in-tajikistan/medical-social-institute-of-tajikistan', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-tajikistan/avicenna-tajik-state-medical-university', changefreq: 'daily', priority: 0.3 },

        // MBBS in Georgia
        { url: '/study-destinations/study-mbbs-in-georgia/georgian-national-university-seu', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-georgia/east-european-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-georgia/tbilisi-state-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-georgia/new-vision-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-georgia/david-tvildiani-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-georgia/international-black-sea-university', changefreq: 'daily', priority: 0.3 },
        
        //MBBS in Krgystan
        { url: '/study-destinations/study-mbbs-in-kyrgyzstan/jalal-abad-international-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-kyrgyzstan/osh-state-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-kyrgyzstan/jalal-abad-state-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-kyrgyzstan/osh-international-state-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-kyrgyzstan/central-asian-international-medical-university', changefreq: 'daily', priority: 0.3 },
        { url: '/study-destinations/study-mbbs-in-kyrgyzstan/royal-metropolitan-university', changefreq: 'daily', priority: 0.3 },

        
                ...blogSlugs.map((slug) => ({
                    url: `/${slug}`,
                    changefreq: 'weekly',
                    priority: 0.7,
                })),
    ];

    const stream = new SitemapStream({
        hostname: SITE_URL,
    });

    res.writeHead(200, {
        "Content-Type": "application/xml"
    });

    const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());
    res.end(xmlString);
}

export default sitemap;