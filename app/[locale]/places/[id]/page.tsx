'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { places } from '@/data/places';
import { Link } from '@/i18n/routing';
import { ArrowLeft, MapPin, Navigation, Volume2 } from 'lucide-react';

export default function PlaceDetails() {
    const params = useParams();
    const id = params.id as string;
    const locale = params.locale as string;

    const place = places.find(p => p.id === id);

    if (!place) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Mekan bulunamadı / Place not found</h1>
            </div>
        );
    }

    const name = locale === 'en' ? place.name_en : place.name_tr;
    const description = locale === 'en' ? place.description_en : place.description_tr;

    const handleTTS = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop any ongoing speech
            const msg = new SpeechSynthesisUtterance();
            msg.text = description;
            msg.lang = locale === 'en' ? 'en-US' : 'tr-TR';
            window.speechSynthesis.speak(msg);
        } else {
            alert("Tarayıcınız sesli okumayı desteklemiyor.");
        }
    };

    const handleRoute = () => {
        // Generate Google Maps Directions URL
        const url = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
            {/* Hero Image Section */}
            <div className="relative w-full h-[50vh] min-h-[400px]">
                <Image
                    src={place.image_url}
                    alt={name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-black/40 to-black/20" />

                {/* Top Navbar / Back Button */}
                <div className="absolute top-0 left-0 right-0 p-8">
                    <Link
                        href="/places"
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all shadow-lg"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-md">
                            {name}
                        </h1>
                        <div className="flex items-center text-slate-800 dark:text-slate-200 text-lg font-medium drop-shadow-md">
                            <MapPin className="w-5 h-5 mr-2 text-emerald-500" />
                            Yozgat Merkez
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 lg:px-12 mt-12 max-w-5xl">
                <div className="grid md:grid-cols-3 gap-12">

                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">
                                    {locale === 'en' ? 'About Local' : 'Hakkında'}
                                </h2>
                                <button
                                    onClick={handleTTS}
                                    className="flex items-center gap-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 dark:bg-emerald-500/20 dark:hover:bg-emerald-500/30 dark:text-emerald-400 px-4 py-2 rounded-full font-medium transition-colors"
                                >
                                    <Volume2 className="w-5 h-5" />
                                    {locale === 'en' ? 'Listen' : 'Sesli Dinle'}
                                </button>
                            </div>

                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
                                <Navigation className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                {locale === 'en' ? 'How to go?' : 'Nasıl Gidilir?'}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
                                {locale === 'en'
                                    ? 'Get directions from your current location using Google Maps.'
                                    : 'Mevcut konumunuzdan Google Haritalar ile yol tarifi alın.'}
                            </p>
                            <button
                                onClick={handleRoute}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
                            >
                                {locale === 'en' ? 'Get Directions' : 'Yol Tarifi Al'}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
