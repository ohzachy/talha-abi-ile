import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight, Leaf, MapPin, Users } from 'lucide-react';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30">

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-400/20 blur-[100px] mix-blend-multiply dark:mix-blend-overlay"></div>
          <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-teal-400/20 blur-[100px] mix-blend-multiply dark:mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-medium">{t('title')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Yozgat'ın <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Güzelliklerini</span> Keşfedin.
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            GençBizz, Yozgat'ı teknoloji ile harmanlayarak sizlere sunan yenilikçi bir turist rehberidir. Çevre dostu rozetlerle doğayı koruyun, harika mekanları sesli dinleyerek gezin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/places"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
            >
              <MapPin className="w-5 h-5" />
              Keşfetmeye Başla
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>

            <a
              href="#about"
              className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 px-8 py-4 rounded-full font-medium transition-all w-full sm:w-auto"
            >
              Biz Kimiz?
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / GENÇBİZZ NEDİR? ===== */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-emerald-500 font-semibold tracking-wide uppercase text-sm">
                <Leaf className="w-5 h-5" />
                GençBizz Nedir?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Teknoloji ve Turizmin Buluşma Noktası</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                GençBizz, Yozgat'ın tarihi ve turistik mekanlarını dijitalleştirerek erişilebilir kılan, çok dilli bir rehber platformudur.
                Amacımız, şehrimizin kültürel mirasını modern arayüzler ve etkileşimli özellikler (360 derece haritalar, akıllı lokasyon takibi, sesli okuma) ile hem yerli hem de yabancı turistlere en iyi şekilde sunmaktır.
              </p>
            </div>

            {/* Feature Cards Grid Instead of Image placeholder */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Akıllı Rota</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Bulunduğunuz konumdan en yakın turistik noktalara yol tarifi alın.</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 translate-y-8">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-500/20 text-teal-500 rounded-2xl flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Çevre Dostu</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Toplu taşıma kullanın, görevleri yapın ve rozetinizi kazanın.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BİZ KİMİZ? (TEAM) ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Biz Kimiz?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            Tutkulu gençlerden oluşan ekibimiz, şehrimizin dijital dönüşümüne katkı sağlamak için farklı departmanlarda (Yazılım, Tasarım, İçerik) özveriyle çalışmaktadır.
            Amacımız sürdürülebilir bir turizm bilinci oluşturmaktır.
          </p>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="text-emerald-500 font-bold text-2xl mb-4 tracking-widest uppercase">Ekip Logosu Gelecek</div>
            <p className="text-slate-500 dark:text-slate-400">Şirket departmanları tanımlanıp görevli kişiler buraya listelenecektir.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
