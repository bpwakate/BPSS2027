// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import playformInline from "@playform/inline";

import relativeLinks from 'astro-relative-links';
const site =
  process.env['VERCEL_ENV'] !== 'production' && process.env['VERCEL_URL']
    ? `https://${process.env['VERCEL_URL']}`
    : 'https://bpwakate.net/summer2026/'


// https://astro.build/config
export default defineConfig({
    site: 'https://bpwakate.net/summer2026/',
    base: '/summer2026/',
  integrations: [starlight({
        plugins: [starlightThemeRapide()],
        title: '第66回 生物物理若手の会 夏の学校',
        favicon: 'favicon.png',
        customCss: [
            './src/styles/custom.css',
        ],
        head: [
            {
                tag: 'meta',
                attrs: { property: 'og:image', content: new URL('ogp.png', site).href },
            },
            {
                tag: 'meta',
                attrs: {
                    property: 'og:image:alt',
                    content: 'Starlight theme inspired by the Visual Studio Code Vitesse theme.',
                },
            },

            // 参考: https://www.tak-dcxi.com/article/optimization-of-google-font-loading/
            {
                tag: 'link',
                attrs: {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
            },
            {
                tag: 'link',
                attrs: {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "anonymous",
                },
            },
            {
                tag: 'link',
                attrs: {
                    rel: "preload",
                    as: "style",
                    fetchpriority: "high",
                    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Noto+Sans+JP:wght@100..900&family=Shippori+Mincho+B1:wght@700&display=swap"
                }
            },
            {
                tag: 'link',
                attrs: {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Noto+Sans+JP:wght@100..900&family=Shippori+Mincho+B1:wght@700&display=swap",
                    media: "print",
                    onload: 'this.media="all"',
                }
            }

        ],
        social: [
            { icon: 'x.com', label: ' ', href: 'https://x.com/bpwakate' },
            { icon: 'external', label: '若手の会HP', href: 'https://sites.google.com/view/bpwakate' },
        ],
        sidebar: [
            {
                label: '夏学とは',
                items: [
                    { label: 'What\'s 夏学？', slug: 'about/whats' },
                    { label: '今年の夏学の特徴は？', slug: 'about/features' },
                    { label: 'スタッフ一覧', slug: 'about/staff' },
                    { label: '過去の夏学', link: 'https://sites.google.com/view/bpwakate/%E5%A4%8F%E3%81%AE%E5%AD%A6%E6%A0%A1/%E9%81%8E%E5%8E%BB%E3%81%AE%E5%A4%8F%E5%AD%A6' },
                ],
            },
            {
                label: '参加登録',
                items: [    
                    { label: '参加方法のご案内', slug: 'registration' },
                    { label: '現地参加', slug: 'registration/onsite' },
                    { label: 'オンライン参加', slug: 'registration/online' },
                    { label: '高校生参加', slug: 'registration/highschool' },
                    { label: '参加規約', slug: 'registration/policy' },
                ],
            },
            {
                label: 'コンテンツ',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'タイムテーブル', slug: 'contents/timetable' },
                    { label: '講演', slug: 'contents/lecture/lecturer' },
                    { label: '参加者交流イベント', slug: 'contents/event' },
                ],
            },
            {
                label: '会場',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'アクセス', slug: 'location/access' },
                    { label: '宿泊・食事', slug: 'location/stay' },
                ],
            },
            {
                label: 'グッズ',
                items: [
                    { label: 'グッズ販売', slug: 'goods' },
                ],
            },
            {
                label: '協賛・支援',
                items: [
                    { label: 'ご支援のお願い', slug: 'sponsorship/request' },
                    { label: '協賛・支援一覧', slug: 'sponsorship/sponsors' },
                ],
            },
            {
                label: 'ガイド',
                items: [
                    { label: 'FAQ', slug: 'guide/faq' },
                    { label: 'お問い合わせ先', slug: 'guide/contact' },
                    { label: '参加者用Discordのご案内', slug: 'guide/discord' },
                ],
            },
      ],
      components: {
                // You can override any of Starlight's default components here.
                Hero: './src/components/override-components/Hero.astro',
                TwoColumnContent: './src/components/override-components/TwoColumnContent.astro',
                SocialIcons: './src/components/override-components/SocialIcons.astro',
                SiteTitle: './src/components/override-components/SiteTitle.astro',
                PageFrame: './src/components/override-components/PageFrame.astro',
                Footer: './src/components/override-components/Footer.astro',
      },
  	}
    ), relativeLinks(), playformInline(),],
	
		// build: {
		// 	inlineStylesheets: 'always',
		// },

  // vite: {
  //   plugins: [tailwindcss()],
  // },
});