'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Leaf, Award, CheckCircle2, Circle, Bus, Trash2, Battery, TreePine } from 'lucide-react';

export default function EcoBadgePage() {
    const t = useTranslations('Index'); // Provide localized titles
    const [tasks, setTasks] = useState([
        { id: 't1', title: 'Toplu Taşıma Kullan', desc: 'Gezi sırasında Yozgat şehir içi otobüslerini tercih et.', icon: Bus, completed: false },
        { id: 't2', title: 'Plastik Şişeyi Geri Dönüştür', desc: 'İçtiğin suyun şişesini geri dönüşüm kutusuna at.', icon: Trash2, completed: false },
        { id: 't3', title: 'Atık Pilleri Kutuya At', desc: 'Elektronik rehberlik için kullandığın pilleri atık pil kutusuna bırak.', icon: Battery, completed: false },
        { id: 't4', title: 'Milli Parkta Çöp Topla', desc: 'Çamlık Milli Parkı yürüyüşünde gördüğün bir çöpü doğadan arındır.', icon: TreePine, completed: false }
    ]);
    const [hasBadge, setHasBadge] = useState(false);

    // Sayfa yüklendiğinde LocalStorage'dan görevleri al
    useEffect(() => {
        const savedTasks = localStorage.getItem('scantravel_eco_tasks');
        if (savedTasks) {
            const parsed = JSON.parse(savedTasks);
            setTasks(parsed);
            checkBadge(parsed);
        }
    }, []);

    const toggleTask = (id: string) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
        localStorage.setItem('scantravel_eco_tasks', JSON.stringify(newTasks));
        checkBadge(newTasks);
    };

    const checkBadge = (currentTasks: any[]) => {
        const allCompleted = currentTasks.every(t => t.completed);
        setHasBadge(allCompleted);
    };

    const completedCount = tasks.filter(t => t.completed).length;
    const progressPercent = (completedCount / tasks.length) * 100;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-500 mb-6 shadow-iner border-4 border-white dark:border-slate-900">
                        <Leaf className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Çevre Dostu Rozeti
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Doğaya saygılı bir turist olarak aşağıdaki görevleri tamamlayın ve Scan&Travel Çevre Dostu Kullanıcı Rozeti'nin sahibi olun!
                    </p>
                </div>

                {/* Badge Status Section */}
                <div className={`
          relative overflow-hidden rounded-3xl p-8 mb-12 border transition-all duration-700
          ${hasBadge
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-400 text-white shadow-2xl shadow-emerald-500/30'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'
                    }
        `}>
                    {hasBadge && (
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    )}

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className={`shrink-0 w-32 h-32 rounded-full flex items-center justify-center border-4 transition-all duration-700 shadow-xl
              ${hasBadge ? 'bg-white text-emerald-500 border-emerald-400/50 scale-110' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700'}
            `}>
                            <Award className="w-16 h-16" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-2">
                                {hasBadge ? 'Tebrikler! Rozeti Kazandınız!' : 'Henüz Rozeti Kazanmadınız'}
                            </h2>
                            <p className={hasBadge ? 'text-emerald-50' : 'text-slate-500 dark:text-slate-400'}>
                                {hasBadge
                                    ? 'Tüm görevleri eksiksiz tamamlayarak Yozgat doğasının korunmasına katkıda bulundunuz. Teşekkür ederiz!'
                                    : 'Rozeti kazanmak için listedeki tüm görevleri yerine getirmeye çalışın.'}
                            </p>

                            {/* Progress Bar */}
                            <div className="mt-6 w-full bg-black/10 dark:bg-white/10 rounded-full h-3 backdrop-blur-sm overflow-hidden">
                                <div
                                    className={`h-3 rounded-full transition-all duration-1000 ${hasBadge ? 'bg-white' : 'bg-emerald-500'}`}
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>
                            <div className="text-sm font-medium mt-2 flex justify-between">
                                <span>{completedCount} / {tasks.length} Görev</span>
                                <span>{progressPercent}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Task List */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        Görev Listesi
                        <span className="text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                            {tasks.length} Görev
                        </span>
                    </h3>

                    <div className="grid gap-4">
                        {tasks.map((task) => {
                            const Icon = task.icon;
                            return (
                                <button
                                    key={task.id}
                                    onClick={() => toggleTask(task.id)}
                                    className={`
                    w-full flex items-center gap-6 p-6 rounded-2xl border transition-all duration-300 text-left group
                    ${task.completed
                                            ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20'
                                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700'}
                  `}
                                >
                                    <div className={`p-4 rounded-full transition-colors ${task.completed ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 dark:group-hover:bg-emerald-900 dark:group-hover:text-emerald-400'}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className={`text-lg font-semibold mb-1 transition-colors ${task.completed ? 'text-emerald-900 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
                                            {task.title}
                                        </h4>
                                        <p className={`text-sm ${task.completed ? 'text-emerald-700 dark:text-emerald-500' : 'text-slate-500 dark:text-slate-400'}`}>
                                            {task.desc}
                                        </p>
                                    </div>

                                    <div className="shrink-0">
                                        {task.completed ? (
                                            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                        ) : (
                                            <Circle className="w-8 h-8 text-slate-300 dark:text-slate-700 group-hover:text-emerald-300 transition-colors" />
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}
