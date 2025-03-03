
import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
//* 此类型组件不接收 searchParams props 
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | 这是个测试网址',
    default: '这是个测试网址',
  },
  description: '这是一个测试服务端渲染的地址',
  metadataBase: new URL('https://my-nextjs-kohl.vercel.app'),
  keywords: ["Next.js SEO测试", "服务端渲染优化"],
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
