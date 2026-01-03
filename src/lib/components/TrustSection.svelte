<script lang="ts">
    import { Users, Quote, CheckCircle2, Star, ArrowRight } from 'lucide-svelte';

    const partners = [
        { name: 'Yara', type: 'Fertilizantes' },
        { name: 'Husqvarna', type: 'Maquinaria' },
        { name: 'Bayer', type: 'Protección' },
        { name: 'Caja Piura', type: 'Respaldo Finan.' },
        { name: 'EcoFert', type: 'Bio-Insumos' },
        { name: 'TechAgro', type: 'Tecnología' }
    ];
</script>

<section class="relative overflow-hidden bg-[#FCFBF9] py-24">
    <div class="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03]"></div>

    <div class="relative mx-auto max-w-7xl px-6">
        
        <div class="mb-16 flex flex-col items-end justify-between gap-12 lg:flex-row">
            <div class="max-w-2xl">
                <div class="mb-4 flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#2ECC71] uppercase">
                    <Users size={18} />
                    <span>Respaldo y Comunidad Chakra</span>
                </div>
                <h2 class="text-5xl font-black leading-[1.1] text-slate-900 lg:text-6xl tracking-tighter">
                    Crecemos <br />
                    <span class="text-[#0066FF]">junto a ti.</span>
                </h2>
                <p class="mt-6 text-xl leading-relaxed text-slate-600">
                    No somos un prestamista, somos un motor de crecimiento. Unimos capital ético, tecnología y la mejor red de insumos del país.
                </p>
            </div>

            <div class="flex gap-10 rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/50">
                <div class="text-center sm:text-left">
                    <p class="text-4xl font-black text-[#0066FF]">98%</p>
                    <p class="mt-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase leading-tight">
                        Tasa de <br />Cosecha Exitosa
                    </p>
                </div>
                <div class="h-full w-[1px] bg-slate-100"></div>
                <div class="text-center sm:text-left">
                    <p class="text-4xl font-black text-[#2ECC71]">+1.2k</p>
                    <p class="mt-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase leading-tight">
                        Familias <br />Impulsadas
                    </p>
                </div>
            </div>
        </div>

        <div class="grid items-stretch gap-12 lg:grid-cols-12">
            
            <div class="relative lg:col-span-7">
                <div class="absolute top-8 -left-4 z-20 flex rotate-[-2deg] items-center gap-2 rounded-xl bg-[#2ECC71] px-5 py-2 text-xs font-black tracking-tighter text-white uppercase shadow-xl">
                    <CheckCircle2 size={16} />
                    Impacto Verificado 2024
                </div>

                <div class="group relative h-full overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl transition-transform duration-500 hover:rotate-[0.5deg]">
                    <img
                        src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80"
                        alt="Agricultor Don Alberto"
                        class="h-full min-h-[550px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>

                    <div class="absolute right-10 bottom-10 left-10">
                        <Quote class="mb-6 text-[#2ECC71] opacity-90" size={54} fill="currentColor" />
                        <p class="mb-8 text-2xl font-medium italic leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
                            "Faltaban dos semanas para la siembra y el banco seguía pidiéndome papeles. <span class="text-[#2ECC71] font-bold italic">Con Chakra, mi historial fue mi propia tierra.</span>"
                        </p>
                        <div class="flex items-center gap-4 border-t border-white/10 pt-6">
                            <div>
                                <p class="text-2xl font-black tracking-tight text-white">Don Alberto Quispitupa</p>
                                <p class="text-xs font-bold tracking-[0.2em] text-[#2ECC71] uppercase">Productor de Papa • Junín, Perú</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-6 lg:col-span-5">
                <div class="flex-1 rounded-[3rem] border border-slate-100 bg-white p-10 shadow-sm relative overflow-hidden group">
                    <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#0066FF]/5 transition-transform group-hover:scale-150"></div>
                    
                    <h3 class="relative z-10 mb-2 text-2xl font-black text-slate-900">Tu palabra vale.</h3>
                    <p class="relative z-10 mb-10 leading-relaxed text-slate-600">
                        No necesitas caridad, necesitas aliados que entiendan la velocidad del campo. Unimos a los mejores para que nada detenga tu siembra.
                    </p>

                    <p class="mb-6 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Red Estratégica de Insumos y Respaldo
                    </p>
                    
                    <div class="grid grid-cols-2 gap-x-6 gap-y-8">
                        {#each partners as p}
                            <div class="group/item flex flex-col border-l-2 border-slate-100 pl-4 transition-all hover:border-[#0066FF]">
                                <p class="text-lg font-black text-slate-400 transition-colors group-hover/item:text-slate-900">{p.name}</p>
                                <p class="text-[9px] font-bold text-[#2ECC71] uppercase tracking-tighter">{p.type}</p>
                            </div>
                        {/each}
                    </div>
                </div>

                <button class="group flex w-full items-center justify-between overflow-hidden rounded-[2rem] bg-[#0066FF] p-2 transition-all hover:bg-[#0052cc] hover:shadow-2xl hover:shadow-blue-200">
                    <span class="ml-8 text-xl font-black text-white">EMPEZAR AHORA</span>
                    <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:rotate-[-45deg]">
                        <ArrowRight size={28} />
                    </div>
                </button>
            </div>
        </div>
    </div>
</section>