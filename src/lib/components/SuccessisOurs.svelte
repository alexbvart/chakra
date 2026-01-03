<script lang="ts">
  import { MessageCircle, ArrowRight, ShieldCheck, Zap, Globe, Lock } from 'lucide-svelte';

  const benefits = [
    { icon: Zap, title: "Desembolso Ágil", desc: "Capital en tu cuenta en 48h" },
    { icon: ShieldCheck, title: "Sin Trámites Eternos", desc: "Evaluamos tu tierra, no solo tus papeles" },
    { icon: Globe, title: "Soporte Local", desc: "Atención técnica en tu propia lengua" }
  ];
</script>

<section class="relative py-24 bg-[#0A0F1C] overflow-hidden">
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0066FF] opacity-[0.15] blur-[120px] rounded-full"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2ECC71] opacity-[0.1] blur-[120px] rounded-full"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      
      <div class="text-left">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          <span class="flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Convocatoria de Campaña Abierta
        </div>

        <h2 class="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
          El motor de tu <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#2ECC71]">
            próxima cosecha.
          </span>
        </h2>
        
        <p class="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
          Únete a la red financiera que entiende el campo. Solicita tu crédito hoy y asegura tus insumos antes de que empiece la temporada.
        </p>

        <div class="space-y-4">
          {#each benefits as benefit}
            <div class="flex items-center gap-4 group">
              <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2ECC71] group-hover:bg-[#2ECC71]/10 transition-colors">
                <svelte:component this={benefit.icon} size={24} />
              </div>
              <div>
                <h4 class="text-white font-bold">{benefit.title}</h4>
                <p class="text-slate-500 text-sm">{benefit.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#2ECC71] blur-2xl opacity-20 scale-95"></div>
        <div class="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
          
          <h3 class="text-2xl font-black text-white mb-2">Comienza aquí</h3>
          <p class="text-slate-400 mb-8 text-sm">Proceso 100% digital respaldado por expertos.</p>

          <div class="space-y-4">
            <button class="w-full group relative overflow-hidden rounded-2xl bg-[#0066FF] py-6 text-xl font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]">
              <span class="relative z-10 flex items-center justify-center gap-3">
                REGISTRAR MI CAMPAÑA
                <ArrowRight size={22} class="group-hover:translate-x-1 transition-transform" />
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <a 
              href="https://wa.me/51972001932?text=Hola%20Chakra,%20quiero%20más%20información%20sobre%20los%20créditos%20agrícolas." 
              class="w-full flex items-center justify-center gap-3 rounded-2xl border-2 border-white/10 py-6 text-xl font-bold text-white hover:bg-white/5 transition-all"
            >
              <MessageCircle size={24} class="text-[#2ECC71]" fill="currentColor" />
              WHATSAPP DIRECTO
            </a>
          </div>

          <div class="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
            <div class="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Lock size={12} />
              Conexión Encriptada
            </div>
            <div class="flex -space-x-2">
              {#each [1,2,3] as i}
                <div class="w-8 h-8 rounded-full border-2 border-[#0A0F1C] bg-slate-800 flex items-center justify-center text-[8px] font-bold text-white">
                  IMG
                </div>
              {/each}
              <div class="w-8 h-8 rounded-full border-2 border-[#0A0F1C] bg-[#2ECC71] flex items-center justify-center text-[8px] font-bold text-white">
                +1k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-24 pt-16 border-t border-white/5 grid md:grid-cols-4 gap-12 text-slate-500">
      <div class="col-span-2">
        <div class="text-3xl font-black text-white mb-6 tracking-tighter italic">CHAKRA</div>
        <p class="max-w-sm text-sm leading-relaxed">
          Transformando el financiamiento agrícola a través de tecnología de datos y confianza humana. Miembro oficial de la red de innovación agrotecnológica del Perú.
        </p>
      </div>
      
      <div>
        <h4 class="text-white font-bold mb-6 text-xs uppercase tracking-widest">Institucional</h4>
        <ul class="text-sm space-y-3">
          <li class="hover:text-white transition-colors cursor-pointer">Inversionistas</li>
          <li class="hover:text-white transition-colors cursor-pointer">Sostenibilidad (ESG)</li>
          <li class="hover:text-white transition-colors cursor-pointer">Prensa</li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-6 text-xs uppercase tracking-widest">Legal</h4>
        <ul class="text-sm space-y-3">
          <li class="hover:text-white transition-colors cursor-pointer">Privacidad de Datos</li>
          <li class="hover:text-white transition-colors cursor-pointer">Términos de Crédito</li>
          <li class="hover:text-white transition-colors cursor-pointer">Libro de Reclamaciones</li>
        </ul>
      </div>
    </div>

    <div class="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-slate-600 uppercase border-t border-white/5 py-8">
      <p>© 2026 Chakra FinTech S.A.C.</p>
      <div class="flex gap-8">
        <span>Cusco • Lima • La Libertad</span>
        <span class="text-slate-400">Hecho con el corazón de la tierra peruana</span>
      </div>
    </div>
  </div>
</section>