<script lang="ts">
	import {
		Zap,
		ShoppingCart,
		Wallet,
		ShieldCheck,
		Users,
		Leaf,
		Venus,
		Tractor,
		Satellite,
		Layers,
		ArrowRight,
		Lock,
		CreditCard,
		Fingerprint,
		Share2,
		ShoppingBag,
		Database,
		TrendingUp,
		Map
	} from 'lucide-svelte';

	const roadmap = [
		{
			horizon: 'Horizonte 1: Validación y Liquidez (0-6 meses)',
			description: 'Captura del flujo de caja operativo y validación en tienda.',
			products: [
				{
					title: 'Chakra Pay (Validación)',
					desc: "Sistema de QR en tiendas aliadas. El crédito no es efectivo, es un 'vale' validado que asegura que el dinero se use en el agro.",
					icon: CreditCard,
					tag: 'Validación'
				},
				{
					title: 'Adelanto Spot (Wallet)',
					desc: 'Micro-créditos instantáneos basados en telemetría satelital para jornales y emergencias de último minuto.',
					icon: Zap,
					tag: 'Urgencia'
				},
				{
					title: 'Factoring de Cosecha',
					desc: 'Liquidez inmediata sobre granos estancados (arroz en pila) o contratos de exportación. Cobras hoy, no en 90 días.',
					icon: Wallet,
					tag: 'Flujo'
				},
				{
					title: 'Crédito Insumos (Prendado)',
					desc: 'Financiación directa en nodos de captación (Agrovets). Garantía obligatoria: Contrato de Prenda sobre Cosecha Futura.',
					icon: ShoppingCart,
					tag: 'Core'
				}
			]
		},
		{
			horizon: 'Horizonte 2: Expansión y TC Agro (6-12 meses)',
			description: 'Pivote a servicios financieros embebidos y especializados.',
			products: [
				{
					title: 'Chakra Card (TC Agro)',
					desc: 'Pivote de la validación a tarjeta física. Línea de crédito inteligente bloqueada solo para categorías de insumos y servicios agro.',
					icon: CreditCard,
					tag: 'Escala'
				},
				{
					title: 'Agro-Escudo Antifraude',
					desc: 'Identidad digital rural con biometría y geovallado. Blindamos transacciones masivas contra suplantación y desvíos.',
					icon: Fingerprint,
					tag: 'Seguridad'
				},
				{
					title: 'Crédito Mujer e Impacto',
					desc: 'Líneas especializadas para lideresas rurales y transición a insumos biológicos (Mitigación Cambio Climático).',
					icon: Leaf,
					tag: 'Impacto'
				},
				{
					title: 'Crédito Asociativo (Pool)',
					desc: 'Agrupación de agricultores para compras por volumen (descuento aliado) o ventas conjuntas a compradores finales.',
					icon: Users,
					tag: 'Social'
				}
			]
		},
		{
			horizon: 'Horizonte 3: Soberanía de Datos (12+ meses)',
			description: 'Ecosistema 360° basado en telemetría y tokenización.',
			products: [
				{
					title: 'Aliados',
					desc: "Venta de drones y y agroquimicos a travez de creditos y precios mejorados",
					icon: ShoppingBag,
					tag: 'Telemetría'
				},
				{
					title: 'Chakra Link (Conector)',
					desc: 'Conexión directa con el comprador final. Los Smart Contracts aseguran que el pago del comprador liquide el crédito automáticamente.',
					icon: Share2,
					tag: 'Trazabilidad'
				},
				{
					title: 'Shield Paramétrico',
					desc: 'Seguro de Costo de Abandono. Si el satélite detecta desastre climático (sequía/inundación), la deuda se cancela al instante.',
					icon: ShieldCheck,
					tag: 'Blindaje'
				},
				{
					title: 'Chakra Intelligence (DaaS)',
					desc: 'Monetización de la data de toda la cadena para industria bioquímica y fondos. Conocemos la oferta antes que el mercado.',
					icon: Database,
					tag: 'Monetización'
				}
			]
		}
	];


	const dataStrategy = [
		{
			title: 'Chakra Pay, TC Agro',
			evolution: 'Validación → Tarjeta Física',
			desc: 'Primero validamos el gasto en tienda vía QR. Al conocer el hábito, entregamos la TC Chakra con límites dinámicos solo para insumos.',
			icon: CreditCard,
			data: 'SKU, Lealtad a Marcas, Recurrencia'
		},
		{
			title: 'Agro-Escudo Antifraude & scoring ',
			evolution: 'Identidad Digital Rural',
			desc: 'Protección biométrica y GPS para transacciones en campo. Evitamos el robo de identidad y el desvío de insumos financiados.',
			icon: Fingerprint,
			data: 'Biometría, Geovallado, Seguridad'
		},
		{
			title: 'Aliados agro + Tech',
			evolution: 'Venta de Activos (Drones/IA)',
			desc: "Colocamos tecnología avanzada con nuestros créditos.",
			icon: ShoppingBag,
			data: 'Telemetría, Salud de Suelo, Clima'
		},
		{
			title: 'Conector de Cosecha',
			evolution: 'Finanzas Embebidas en Ventas',
			desc: 'Conectamos al productor con el comprador final. El pago del comprador entra directo a liquidar el crédito en Chakra.',
			icon: Share2,
			data: 'Precios de Mercado, Logística, Calidad'
		}
	];
</script>

<section class="relative overflow-hidden bg-slate-900 py-24 text-white">
	<div
		class="pointer-events-none absolute top-0 left-1/2 h-full w-full -translate-x-1/2 opacity-10"
	>
		<div
			class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-6">
		<div class="mb-16">
			<h2 class="mb-6 text-4xl font-black tracking-tighter md:text-6xl">
				Más que crédito, es <br />
				<span class="text-[#2ECC71]">Inteligencia de Cadena.</span>
			</h2>
			<p class="max-w-2xl text-xl font-medium text-slate-400">
				Cada producto es un sensor. Cada transacción es un dato. Construimos la base de datos más
				profunda del sector agrícola.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each dataStrategy as item}
				<div
					class="group rounded-[2.5rem] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
				>
					<div
						class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066FF] transition-transform group-hover:scale-110"
					>
						<item.icon size={28} />
					</div>

					<p class="mb-2 text-[10px] font-black tracking-widest text-[#2ECC71] uppercase">
						{item.evolution}
					</p>
					<h4 class="mb-4 text-xl font-bold">{item.title}</h4>
					<p class="mb-6 text-sm leading-relaxed text-slate-400">
						{item.desc}
					</p>

					<div class="border-t border-white/10 pt-6">
						<div
							class="flex items-center gap-2 text-[10px] font-bold tracking-tighter text-slate-500 uppercase"
						>
							<Database size={12} /> Data capturada:
						</div>
						<p class="mt-1 text-xs font-medium text-white">{item.data}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<main class="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
	<header class="border-b border-slate-200 bg-white px-6 py-24">
		<div class="mx-auto max-w-5xl text-center">
			<span
				class="mb-6 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-black tracking-widest text-emerald-700 uppercase"
			>
				Estrategia de Producto 2026
			</span>
						<h1 class="mb-8 text-6xl leading-[0.9] font-black tracking-tighter md:text-8xl">
				CHAKRA <br />
				<span class="text-[#0066FF]">OS DEL CAMPO</span>
			</h1>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
				No bancarizamos agricultores, tokenizamos el futuro del campo.
				<span class="text-slate-900"
					>Todo el ecosistema está blindado mediante prenda digital y validación satelital.</span
				>
			</p>
			<!-- <p class="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600">
				Hoja de ruta desde la inyección de liquidez hasta la tokenización total de activos
				agrícolas.
				<strong>Todo crédito respaldado por el activo más valioso: la cosecha futura.</strong>
			</p> -->
		</div>
	</header>

	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl space-y-24">
			{#each roadmap as phase, i}
				<div class="relative">
					{#if i !== roadmap.length - 1}
						<div
							class="absolute top-20 bottom-0 left-8 hidden w-1 bg-gradient-to-b from-blue-500 to-transparent lg:block"
						></div>
					{/if}

					<div class="flex flex-col items-start gap-12 lg:flex-row">
						<div class="sticky top-10 lg:w-1/3">
							<div
								class="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#0066FF] text-white shadow-xl shadow-blue-200"
							>
								<Layers size={32} />
							</div>
							<h2 class="mb-4 text-3xl font-black tracking-tight">{phase.horizon}</h2>
							<p class="leading-relaxed font-medium text-slate-500">{phase.description}</p>
						</div>

						<div class="grid gap-6 py-4 md:grid-cols-2 lg:w-2/3">
							{#each phase.products as product}
								<div
									class="group rounded-[2.5rem] border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50"
								>
									<div class="mb-6 flex items-start justify-between">
										<div class="rounded-2xl bg-slate-50 p-4 text-slate-900 transition-colors">
											<product.icon size={24} />
										</div>
										<span
											class="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black tracking-widest text-slate-400 uppercase"
										>
											{product.tag}
										</span>
									</div>
									<h4 class="mb-3 text-xl font-black">{product.title}</h4>
									<p class="text-sm leading-relaxed text-slate-600">
										{product.desc}
									</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="px-6 py-24">
		<section class="px-6 py-24">
			<div
				class="relative mx-auto max-w-5xl overflow-hidden rounded-[4rem] bg-slate-900 p-12 text-center shadow-2xl md:p-20"
			>
				<div
					class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"
				></div>

				<div class="relative z-10">
					<h3 class="mb-8 text-5xl leading-none font-black tracking-tighter text-white">
						Cero Riesgo: <br />
						<span class="text-[#2ECC71]">Blindaje Prendario Digital</span>
					</h3>
					<p class="mx-auto mb-12 max-w-2xl text-xl text-slate-400">
						No somos una ONG. Somos una infraestructura financiera blindada. <strong
							>La producción futura es nuestra garantía colateral</strong
						>.
					</p>

					<div class="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
						<div class="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
							<Tractor class="mb-6 text-emerald-500" size={40} />
							<p class="mb-2 text-xl font-black text-white">Activos Físicos</p>
							<p class="text-xs font-black tracking-widest text-slate-500 uppercase">
								Maquinaria c/ GPS + Inmovilizador Remoto
							</p>
						</div>
						<div class="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
							<Satellite class="mb-6 text-blue-500" size={40} />
							<p class="mb-2 text-xl font-black text-white">Cosecha Futura</p>
							<p class="text-xs font-black tracking-widest text-slate-500 uppercase">
								Prenda validada vía Sentinel-2
							</p>
						</div>
						<div class="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
							<Fingerprint class="mb-6 text-purple-500" size={40} />
							<p class="mb-2 text-xl font-black text-white">Antifraude</p>
							<p class="text-xs font-black tracking-widest text-slate-500 uppercase">
								Biometría facial en cada despacho
							</p>
						</div>
					</div>
				</div>

							<div
				class="mt-16 flex flex-col items-center justify-between gap-8 rounded-[3rem] bg-gradient-to-br from-[#0066FF] to-blue-800 p-10 lg:flex-row"
			>
				<div class="max-w-xl">
					<h3 class="mb-4 text-2xl font-black italic md:text-3xl">
						"El petróleo del Siglo XXI es la data del agricultor."
					</h3>
					<p class="leading-relaxed font-medium text-blue-100">
						Monetizamos la inteligencia de mercado para empresas de agroquímicos y exportadoras.
						Sabemos quién necesita qué, antes de que ellos mismos lo sepan.
					</p>
				</div>
				<div class="flex w-full flex-col gap-3 lg:w-auto">
					<div class="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
						<TrendingUp class="text-[#2ECC71]" />
						<div>
							<p class="text-[10px] font-black text-blue-200 uppercase">Valor de Data Proyectado</p>
							<p class="text-xl font-black text-white">+250% YoY</p>
						</div>
					</div>
				</div>
			</div>
			</div>
			
		</section>
	</section>


	<footer class="py-32 text-center">
		<div class="mx-auto max-w-4xl px-6">
			<h2 class="mb-12 text-5xl font-black tracking-tighter md:text-7xl">
				Estamos acelerando el <br />
				<span class="text-[#0066FF]">futuro del Agro.</span>
			</h2>
			<div class="flex flex-col items-center justify-center gap-6 md:flex-row">
				<button
					class="flex items-center gap-4 rounded-[2rem] bg-[#0066FF] px-12 py-8 text-2xl font-black text-white shadow-2xl shadow-blue-500/40 transition-all hover:scale-105"
				>
					SOLICITAR PITCH DE INVERSIÓN <ArrowRight />
				</button>
			</div>
		</div>
	</footer>
</main>


<style>
	.bg-dashed {
		background-image: linear-gradient(to bottom, #3b82f6 50%, transparent 50%);
		background-size: 2px 20px;
		background-repeat: repeat-y;
	}
</style>
