
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
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  keywords: ["测试seo的检索", "用来测试检索seo"],
  openGraph:{
    images:"../public/hero-mobile.png"
  }
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
