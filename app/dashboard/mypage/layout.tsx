'use client';
import { HomeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navs = [
    { name: 'home', href: '/dashboard/mypage', icon: HomeIcon },
    { name: 'first', href: '/dashboard/mypage/first', icon: HomeIcon },
    { name: 'two', href: '/dashboard/mypage/two', icon: HomeIcon },
    { name: 'three', href: '/dashboard/mypage/three', icon: HomeIcon },
]
export default function MyLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className='flex flex-col '>
            <div className='flex p-[10px]'>
                {navs.map((nav) => {
                    return (
                        <Link
                            key={nav.name}
                            href={nav.href}
                            className={clsx(
                                'flex mx-[5px] h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                {
                                    'bg-sky-100 text-blue-600': pathname === nav.href
                                }
                            )}>{nav.name}</Link>
                    )
                })}
            </div>
            <div>{children}</div>
        </div>
    )
}
