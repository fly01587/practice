
import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
//* 此类型组件不接收 searchParams props 
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | 这是个测试网址',
    default: '这是个测试网址',
  },
 description: 'Next.js服务端渲染SEO优化实战案例，提供React网站搜索引擎优化解决方案，详解如何解决网站收录问题和提升关键词排名。',
  metadataBase: new URL('https://my-nextjs-kohl.vercel.app'),
  keywords: [
    "Next.js SEO优化方案", 
    "服务端渲染SEO实战", 
    "React网站搜索引擎优化",
    "SEO测试最佳实践",
    "网站收录问题排查"
  ],
  openGraph:{
    title: '这是个测试网址',
    description: '这是一个测试服务端渲染的地址',
    url: 'https://my-nextjs-kohl.vercel.app',
    images:"/hero-mobile.png",
     type: 'website'
  }
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  
  return (
    <html lang="zh-CN">
      <head>
      <meta name="google-site-verification" content="yQ_l54LWdSS8raYaMrHttCm1x4P7SyFvOSX6VBtEgSA" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
