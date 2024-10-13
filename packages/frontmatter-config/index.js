const path = require('node:path');
const { config: dotenvConfig } = require('dotenv');

dotenvConfig({
  path: path.join(process.cwd(), '.env'),
});

// @ts-ignore
module.exports = async (config) => ({
  ...config,
  'frontMatter.extends': [
    'https://dnbhub.xyz/frontmatter/settings.global.json',
  ],
  'frontMatter.preview.host': `https://${process.env.HOSTNAME}:${process.env.PORT}`,
  'frontMatter.taxonomy.seoTitleLength': process.env.SEO_TITLE_LENGTH,
  'frontMatter.site.baseURL': `${process.env.WEBSITE_URL}`,
  'frontMatter.framework.id': 'hugo',
  'frontMatter.content.publicFolder': 'static',
  'frontmatter.content.autoUpdateDate': true,
  'frontMatter.dashboard.content.card.fields.date': true,
  'frontMatter.taxonomy.dateFormat': "YYYY-MM-dd'T'HH:mm:ssxxx",
  'frontMatter.taxonomy.noPropertyValueQuotes': ['date'],
  'frontMatter.taxonomy.dateField': 'publishDate',
  'frontMatter.taxonomy.modifiedField': 'lastmod',
});
