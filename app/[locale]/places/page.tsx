import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { MapPin, ArrowRight } from 'lucide-react';
import { places } from '@/data/places';

export default async function PlacesPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations('Index'); // You might want to create a 'Places' namespace later

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Keşfetmeye Hazır Mısın?</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Yozgat'ın tarihi dokusunu ve doğal güzelliklerini keşfet. Gitmek istediğin yeri seç ve maceraya başla.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {places.map((place) => {
                        const name = locale === 'en' ? place.name_en : place.name_tr;
                        const description = locale === 'en' ? place.description_en : place.description_tr;

                        return (
                            <Link
                                key={place.id}
                                href={`/places/${place.id}`}
                                className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={place.image_url}
                                        alt={name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>

                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
                                        <div className="flex items-center text-emerald-300 text-sm font-medium">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            Yozgat Merkez
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-grow">
                                        {description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <span className="text-emerald-500 font-semibold group-hover:text-emerald-600 transition-colors">
                                            {locale === 'en' ? 'View Details' : 'Detayları İncele'}
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
