import path from 'node:path';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({
  path: path.join(process.cwd(), ".env")
});

export default async (/** @type {any} */ config) => {
  return {
    ...config,
    "frontMatter.extends": [
      "https://dnbhub.xyz/frontmatter/settings.global.json"
    ],
    "frontMatter.preview.host": `https://${process.env.HOSTNAME}:${process.env.PORT}`,
    "frontMatter.taxonomy.seoTitleLength": process.env.SEO_TITLE_LENGTH,
    "frontMatter.site.baseURL": "https://kollitsch.dev/",
  };
};
