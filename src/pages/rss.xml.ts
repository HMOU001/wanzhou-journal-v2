import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const site = context.site?.toString() ?? 'https://wanzhou.blog';

  const items = posts
    .map(p => `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${site}writing/${p.slug}/</link>
      <guid isPermaLink="true">${site}writing/${p.slug}/</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${esc(p.data.excerpt)}</description>
      <category>${esc(p.data.tag)}</category>
    </item>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>晚舟手记</title>
    <link>${site}</link>
    <description>林晚舟的个人写作刊物：工程笔记、数字生活与徒步手记。</description>
    <language>zh-CN</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
}
