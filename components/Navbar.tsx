'use client';

import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { Leaf, Menu, Globe } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
    const t = useTranslations('Index');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const nextLocale = locale === 'tr' ? 'en' : 'tr';
        router.replace(pathname, { locale: nextLocale });
    };

    const navLinks = [
        { href: '/', label: locale === 'en' ? 'Home' : 'Ana Sayfa' },
        { href: '/places', label: locale === 'en' ? 'Places' : 'Gezilecek Yerler' },
        { href: '/eco-badge', label: locale === 'en' ? 'Eco Badge' : 'Çevre Rozeti' }
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 px-6 lg:px-12">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="bg-emerald-500 text-white p-2 rounded-xl group-hover:scale-110 transition-transform">
                        <Leaf className="w-5 h-5" />
                    </div>
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-slate-900 dark:text-white">GençBizz</span>
                </Link>

                {/* Desktop Links & Actions */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-4 py-2 rounded-full transition-colors mr-2 md:mr-0"
                    >
                        <Globe className="w-4 h-4" />
                        {locale === 'en' ? 'TR' : 'EN'}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                <div className={clsx("items-center justify-between w-full md:flex md:w-auto md:order-1", { "hidden": !isOpen, "block": isOpen })}>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-100 rounded-2xl bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-slate-900 md:dark:bg-transparent dark:border-slate-800">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        "block py-2 px-3 rounded md:p-0 transition-colors",
                                        pathname === link.href
                                            ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                                            : "text-slate-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    );
}
