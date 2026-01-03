<script lang="ts">
	import {
		ShieldCheck,
		Zap,
		Award,
		ArrowRight,
		TrendingUp,
		BarChart3,
		Users,
		Box,
		MapPin,
		Search,
		UserMinus,
		UserPlus,
		LineChart,
		MousePointerClick,
		Sparkles
	} from 'lucide-svelte';

	const deapBenefits = [
		{
			title: 'Caja Inmediata (24h)',
			desc: 'Transforme facturas de 180 días en efectivo hoy mismo. Liquidamos sus despachos en menos de 24 horas.',
			icon: Zap,
			color: 'text-amber-600',
			bg: 'bg-amber-50'
		},
		{
			title: 'Radar de Expansión',
			desc: 'Use nuestros mapas de calor de consumo para saber exactamente dónde abrir su próxima sucursal.',
			icon: MapPin,
			color: 'text-orange-600',
			bg: 'bg-orange-50'
		},

		{
			title: 'Ingenieros, no Cobradores',
			desc: 'Libere a su equipo técnico de la cobranza. Ya no más visitas para pedir pagos; solo para vender tecnología.',
			icon: Award,
			color: 'text-blue-600',
			bg: 'bg-blue-50'
		},
		{
			title: 'Nuevos Clientes Listos',
			desc: 'Le enviamos agricultores con crédito aprobado que solo pueden comprar en nuestra red de aliados.',
			icon: UserPlus,
			color: 'text-[#2ECC71]',
			bg: 'bg-emerald-50'
		},
		{
			title: 'Inventario Inteligente',
			desc: 'Sepa qué se va a sembrar antes de que suceda. Optimice su stock basándose en demanda real financiada.',
			icon: LineChart,
			color: 'text-purple-600',
			bg: 'bg-purple-50'
		},
		{
			title: 'Blindaje de Cartera',
			desc: 'Usted selecciona a quién referir. Nosotros filtramos con Agro-Score. Si Chakra aprueba, usted tiene el pago garantizado. El riesgo de morosidad se vuelve nuestro, no suyo.',
			icon: ShieldCheck,
			color: 'text-red-600',
			bg: 'bg-red-50'
		}
	];
</script>

<main class="overflow-hidden bg-white">
	<section class="bg-white py-24">
		<div class="mx-auto max-w-7xl px-6">
			<div class="mt-12 mb-16 text-center">
				<span class="mb-4 block text-xs font-black tracking-[0.2em] text-[#0066FF] uppercase"
					>Beneficios de Élite</span
				>
				<h2 class="text-4xl font-black tracking-tighter text-slate-900 md:text-6xl">
					No es una alianza, es su <br />
					<span class="text-[#2ECC71]">ventaja competitiva.</span>
				</h2>
				<!-- <p class="mx-auto max-w-3xl text-xl text-slate-500 mt-2">
					Usted pone la tecnología, nosotros ponemos la liquidez y la inteligencia para que su
					negocio no deje de crecer.
				</p> -->
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each deapBenefits as benefit}


					<div
						class="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8"
					>
						<div
							class="absolute top-0 right-0 p-4 opacity-10 transition-transform group-hover:scale-110"
						>
							<benefit.icon size={80} />
						</div>
						<h4 class="mb-4 text-xl font-black">{benefit.title}</h4>
						<p class="text-sm leading-relaxed text-slate-600">
							{benefit.desc}
						</p>
					</div>
				{/each}
			</div>

		</div>
	</section>

	<section class="mx-4 rounded-[4rem] border border-slate-100 bg-slate-50 py-24 md:mx-10">
		<div class="mx-auto max-w-7xl px-6">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<h3
						class="mb-8 text-4xl leading-tight font-black tracking-tighter text-slate-900 md:text-5xl"
					>
						No es solo dinero; <br />
						<span class="text-[#0066FF]">es saber qué vender hoy.</span>
					</h3>
					<p class="mb-8 text-lg font-medium text-slate-600">
						Le entregamos el control total de su zona. Nuestra data satelital y financiera le
						permite anticiparse a la competencia.
					</p>

					<div class="grid gap-4">
						<div
							class="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
						>
							<div class="rounded-lg bg-blue-50 p-3 text-blue-600"><BarChart3 size={20} /></div>
							<div>
								<p
									class="mb-1 text-left text-xs font-bold tracking-widest text-slate-900 uppercase"
								>
									Tráfico Garantizado
								</p>
								<p class="text-left text-sm text-slate-500">
									Clientes con crédito aprobado son dirigidos a su tienda.
								</p>
							</div>
						</div>
						<div
							class="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
						>
							<div class="rounded-lg bg-emerald-50 p-3 text-emerald-600"><Box size={20} /></div>
							<div>
								<p
									class="mb-1 text-left text-xs font-bold tracking-widest text-slate-900 uppercase"
								>
									Stock Optimizados
								</p>
								<p class="text-left text-sm text-slate-500">
									Reduzca mermas sabiendo exactamente qué insumos pedirá el campo.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="group relative rounded-[3rem] bg-slate-900 p-8 shadow-2xl">
					<div
						class="absolute -inset-1 rounded-[3.1rem] bg-gradient-to-r from-[#0066FF] to-[#2ECC71] opacity-25 blur transition duration-1000 group-hover:opacity-50"
					></div>
					<div class="relative rounded-[2.5rem] bg-slate-900 p-8">
						<div class="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
							<div class="flex items-center gap-3">
								<div class="h-3 w-3 animate-pulse rounded-full bg-red-500"></div>
								<span class="text-xs font-bold tracking-widest text-white uppercase"
									>Live Market Intelligence</span
								>
							</div>
						</div>

						<div class="space-y-6">
							<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
								<p class="mb-2 text-[10px] font-black tracking-tighter text-slate-400 uppercase">
									Próxima demanda (Tu Zona)
								</p>
								<div class="flex items-center justify-between">
									<span class="font-bold text-white">Maquinaria de Cosecha</span>
									<span class="text-lg font-black text-[#2ECC71]">+58%</span>
								</div>
							</div>
							<div class="rounded-2xl border border-[#0066FF]/30 bg-[#0066FF]/10 p-6">
								<p class="mb-2 text-[10px] font-black tracking-widest text-[#0066FF] uppercase">
									Nuevos Clientes Asignados
								</p>
								<div class="flex items-center justify-between">
									<span class="font-bold text-white">Créditos Listos para Despacho</span>
									<span class="text-3xl font-black text-white">42</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="px-6 py-32">
		<div class="mx-auto max-w-5xl">
			<div
				class="relative overflow-hidden rounded-[4rem] bg-slate-900 p-12 shadow-[0_50px_100px_-20px_rgba(0,102,255,0.3)] md:p-24"
			>
				<div
					class="absolute top-0 right-0 -mt-40 -mr-40 h-96 w-96 bg-[#2ECC71] opacity-20 blur-[120px]"
				></div>
				<div
					class="absolute bottom-0 left-0 -mb-40 -ml-40 h-96 w-96 bg-[#0066FF] opacity-30 blur-[120px]"
				></div>

				<div class="relative z-10 text-center">
					<div
						class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-2 text-xs font-black text-white backdrop-blur-sm"
					>
						<Sparkles size={14} class="text-[#2ECC71]" /> CUPOS LIMITADOS POR ZONA
					</div>

					<h2
						class="mb-8 text-5xl leading-tight font-black tracking-tighter text-white md:text-7xl"
					>
						¿Va a esperar a que su <br />
						<span class="text-[#2ECC71]">competencia</span> se una?
					</h2>

					<p class="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-slate-400 md:text-2xl">
						Estamos seleccionando solo a los proveedores más confiables por región. <b> Asegure su
						exclusividad</b> y empiece a cobrar al contado mañana mismo.
					</p>

					<div class="flex flex-col items-center gap-6">
						<button
							class="group relative flex items-center gap-4 rounded-[2rem] bg-[#0066FF] px-12 py-8 text-2xl font-black text-white shadow-2xl shadow-blue-500/40 transition-all hover:scale-105"
						>
							QUIERO SER ALIADO CHAKRA
							<ArrowRight class="transition-transform group-hover:translate-x-2" />
							<!-- <div
								class="absolute -top-12 -right-3 animate-bounce rounded-full bg-[#2ECC71] px-3 py-1 text-[10px] text-slate-900"
							>
								EFECTIVO HOY
							</div> -->
						</button>

						<div
							class="mt-4 flex items-center gap-8 text-sm font-bold tracking-widest text-slate-500 uppercase"
						>
							<span class="flex items-center gap-2"
								><ShieldCheck size={16} class="text-[#2ECC71]" /> Pago Seguro</span
							>
							<span class="flex items-center gap-2"
								><ShieldCheck size={16} class="text-[#2ECC71]" /> Sin Costo Fijo</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
