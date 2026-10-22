import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Microbe Studio · 微生物课堂',description:'Watch, read aloud, and leave your mark. 微生物视频与学习记录。'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
