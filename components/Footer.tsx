'use client';

import { useTranslations } from 'next-intl';
import { Leaf } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function Footer() {
    const t = useTranslations('Index'); // Re-using general translations or could have its own

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-emerald-500 text-white p-1.5 rounded-lg">
                                <Leaf className="w-5 h-5" />
                            </div>
                            <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">GençBizz</span>
                        </Link>
                        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                            Yozgat'ın tarihi dokusunu ve doğal güzelliklerini keşfet. Doğa ile dost bir turizm için bize katıl.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-slate-900 uppercase dark:text-white">Hızlı Linkler</h2>
                            <ul className="text-slate-500 dark:text-slate-400 font-medium space-y-4">
                                <li>
                                    <Link href="/" className="hover:text-emerald-500">Ana Sayfa</Link>
                                </li>
                                <li>
                                    <Link href="/places" className="hover:text-emerald-500">Gezilecek Yerler</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-slate-900 uppercase dark:text-white">Oyunlaştırma</h2>
                            <ul className="text-slate-500 dark:text-slate-400 font-medium space-y-4">
                                <li>
                                    <Link href="/eco-badge" className="hover:text-emerald-500">Çevre Dostu Rozeti</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-slate-200 sm:mx-auto dark:border-slate-800 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">
                        © {new Date().getFullYear()} <Link href="/" className="hover:underline">GençBizz Yozgat™</Link>. Tüm Hakları Saklıdır.
                    </span>
                </div>
            </div>
        </footer>
    );
}
