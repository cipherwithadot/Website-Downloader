// Downloads all the crawlable files of and website without cloudfare as of now

// The files are saved in the same structure as the structure of the website, by using the `bySiteStructure` filenameGenerator

// Links to other websites are filtered out by the urlFilter

const scrape = require('website-scraper');
const websiteUrl = 'WEBSITE_URL_HERE';

scrape({
    urls: [websiteUrl],
    urlFilter: function (url) {
        return url.indexOf(websiteUrl) === 0;
    },
    recursive: true,
    maxDepth: 50,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: './node-website'
}).then((data) => {
    console.log("Entire website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
