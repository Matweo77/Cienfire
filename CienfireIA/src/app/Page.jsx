'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import '../styles/global.css'

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Copy,
  Filter,
  Grid2X2,
  List,
  Menu,
  Search,
  Share2,
  User,
  X,
} from 'lucide-react'

const articles = [
  {
    category: 'Investigación',
    date: '19 oct 2026',
    title: 'El futuro de la inteligencia: crear, razonar y descubrir juntos',
    description: 'Nuevos avances que acercan la inteligencia artificial a herramientas más útiles, expresivas y seguras.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-violet-500/20 to-cyan-400/20',
  },
  {
    category: 'Producto',
    date: '14 oct 2026',
    title: 'Cienfirez Studio: una nueva forma de convertir ideas en realidad',
    description: 'Un espacio creativo para explorar, iterar y dar vida a tus proyectos con IA.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-orange-400/20 to-pink-400/20',
  },
  {
    category: 'Seguridad',
    date: '08 oct 2026',
    title: 'Construyendo sistemas de IA más confiables para todos',
    description: 'Cómo incorporamos evaluaciones rigurosas y aprendizaje continuo en cada modelo que creamos.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-emerald-400/20 to-sky-400/20',
  },
  {
    category: 'Ingeniería',
    date: '29 sep 2026',
    title: 'La infraestructura detrás de la inteligencia a escala',
    description: 'Una mirada a los sistemas que hacen posible servir modelos potentes con velocidad y eficiencia.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-blue-500/20 to-purple-500/20',
  },
  {
    category: 'Empresa',
    date: '22 sep 2026',
    title: 'IA que amplifica el trabajo de cada equipo',
    description: 'Las organizaciones están reinventando sus flujos de trabajo para hacer más con menos fricción.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-yellow-400/20 to-orange-400/20',
  },
  {
    category: 'Era de la Inteligencia',
    date: '12 sep 2026',
    title: 'Una invitación a imaginar la próxima década',
    description: 'Las preguntas importantes que guiarán nuestra relación con la tecnología y el conocimiento.',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-fuchsia-400/20 to-indigo-500/20',
  },
  {
    category: 'Investigación',
    date: '05 sep 2026',
    title: 'Cuando la curiosidad se convierte en método',
    description: 'Nuevas formas de trabajar con modelos para pasar de la inspiración a resultados concretos.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-cyan-400/20 to-sky-500/20',
  },
  {
    category: 'Producto',
    date: '28 ago 2026',
    title: 'Interfaces que entienden el contexto de cada persona',
    description: 'Diseñar experiencias más naturales cuando la tecnología aprende de nuestras intenciones.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-rose-400/20 to-orange-400/20',
  },
  {
    category: 'Seguridad',
    date: '19 ago 2026',
    title: 'La confianza como parte del diseño de la IA',
    description: 'Principios prácticos para crear sistemas transparentes, robustos y útiles desde el inicio.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-teal-400/20 to-emerald-500/20',
  },
]

const categories = ['Todos', 'Empresa', 'Investigación', 'Producto', 'Seguridad', 'Ingeniería', 'Era de la Inteligencia']
const navItems = ['Investigación', 'Productos', 'Negocios', 'Desarrolladores', 'Empresa', 'Fundación']


function ArticleDetail({ article, onBack, onSelectRelated }) {
  const [copied, setCopied] = useState(false)
  const related = articles.filter((item) => item.category === article.category && item.title !== article.title).concat(articles.filter((item) => item.title !== article.title)).slice(0, 3)

  const copyLink = async () => {
    await navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button onClick={onBack} className="text-lg font-semibold tracking-[-0.04em]">Cienfirez IA</button>
        </div>
      </header>
      <Button variant="outline" onClick={onBack} className="fixed right-6 top-6 z-50 border-zinc-800 bg-black/70 text-zinc-300 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black">
        <ArrowLeft className="mr-2 size-4" /> <span className="hidden sm:inline">Volver a Investigación</span><span className="sm:hidden">Volver</span>
      </Button>
      <article>
        <header className="mx-auto max-w-[1100px] px-5 pb-14 pt-16 sm:px-8 sm:pt-24 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
            <span className="text-zinc-200">{article.category}</span>
            <span>{article.date}</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="size-3.5" /> 5 min de lectura</span>
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.07em] sm:text-7xl lg:text-[88px]">{article.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">{article.description}</p>
          <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-5 text-sm">
            <div className="flex size-10 items-center justify-center rounded-full bg-white text-black"><User className="size-5" /></div>
            <div><p className="text-zinc-200">Equipo de Cienfirez IA</p><p className="text-zinc-500">Investigación y producto</p></div>
          </div>
        </header>
        <figure className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="aspect-[16/7] overflow-hidden rounded-sm bg-zinc-900"><img src={article.image} alt={article.title} className="size-full object-cover" /></div>
          <figcaption className="mt-3 text-xs text-zinc-600">Ideas, sistemas y herramientas para ampliar lo que podemos imaginar.</figcaption>
        </figure>
        <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_180px] lg:px-12 lg:py-24">
          <div className="max-w-3xl text-[17px] leading-8 text-zinc-300">
            <p>La inteligencia artificial está cambiando la forma en que pensamos, creamos y resolvemos problemas. Pero el avance más importante no se mide solo en capacidad: también se mide en la calidad de las preguntas que nos permite formular.</p>
            <h2 className="mt-14 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">Una nueva capa de colaboración</h2>
            <p className="mt-5">Cuando las herramientas se vuelven más capaces, dejan de ser destinos y pasan a convertirse en espacios de colaboración. El trabajo se desplaza hacia la intención, el criterio y la exploración de posibilidades.</p>
            <blockquote className="my-12 border-l border-white/40 pl-6 text-2xl leading-9 tracking-[-0.03em] text-white">“La mejor tecnología no sustituye la curiosidad: le da más alcance.”</blockquote>
            <h3 className="mt-14 text-2xl font-medium tracking-[-0.03em] text-white">Diseñar para descubrir</h3>
            <p className="mt-5">Nuestro enfoque parte de sistemas que se pueden entender, probar y mejorar. Cada interacción es una oportunidad para aprender qué hace que una idea sea más clara y útil.</p>
            <pre className="my-10 overflow-x-auto rounded-sm border border-white/10 bg-[#0d0d0d] p-5 text-sm leading-6 text-zinc-300"><code>{`prompt = "Explora tres caminos posibles"\nresult = model.generate(prompt, context=research)\nprint(result.next_question)`}</code></pre>
            <p>El resultado no es una respuesta aislada, sino un proceso más abierto: un ciclo de preguntas, prototipos y decisiones que mantiene a las personas en el centro.</p>
            <div className="mt-14 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
              <Button variant="outline" onClick={copyLink} className="border-white/15 bg-transparent text-zinc-300 hover:bg-white hover:text-black">
                {copied ? <Check className="mr-2 size-4" /> : <Copy className="mr-2 size-4" />} {copied ? 'Enlace copiado' : 'Copiar enlace'}
              </Button>
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-8 border-l border-white/10 pl-5 text-xs uppercase tracking-[0.14em] text-zinc-600">
              <p>En este artículo</p><p className="mt-5 text-zinc-400">Colaboración</p><p className="mt-3">Descubrimiento</p><p className="mt-3">Próximos pasos</p>
            </div>
          </aside>
        </div>
      </article>
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl tracking-[-0.05em]">Artículos relacionados</h2>
            <button onClick={onBack} className="text-sm text-zinc-500 hover:text-white">Ver todos <ArrowRight className="inline ml-1 size-4" /></button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <button key={item.title} onClick={() => onSelectRelated(item)} className="group text-left">
                <div className="aspect-video overflow-hidden rounded-sm bg-zinc-900"><img src={item.image} alt="" className="size-full object-cover transition duration-700 group-hover:scale-105" /></div>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-zinc-500">{item.category} · {item.date}</p>
                <h3 className="mt-2 text-xl leading-tight tracking-[-0.03em] group-hover:text-zinc-300">{item.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 px-5 py-8 text-sm text-zinc-600 sm:px-8 lg:px-12">© 2026 Cienfirez IA</footer>
    </main>
  )
}

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [view, setView] = useState('grid')
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [visiblePostsCount, setVisiblePostsCount] = useState(6)

  const handleBackToArticles = () => setSelectedPost(null)
  const handleSelectRelated = (article) => setSelectedPost(article)

  if (selectedPost !== null) {
    return <ArticleDetail article={selectedPost} onBack={handleBackToArticles} onSelectRelated={handleSelectRelated} />
  }

  const filteredArticles = activeCategory === 'Todos' ? articles : articles.filter((article) => article.category === activeCategory)
  const visibleArticles = filteredArticles.slice(0, visiblePostsCount)

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="text-lg font-semibold tracking-[-0.04em]">Cienfirez IA</a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            {navItems.map((item) => <a key={item} href="#articulos" className="text-[13px] text-zinc-400 transition-colors hover:text-white">{item}</a>)}
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <Button variant="ghost" size="icon" aria-label="Buscar" className="text-zinc-300 hover:text-white"><Search className="size-4" /></Button>
            <Button variant="ghost" className="text-zinc-300 hover:text-white">Iniciar sesión</Button>
            <Button className="bg-white text-black hover:bg-zinc-200">Probar Cienfirez <ArrowRight className="ml-2 size-4" /></Button>
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</Button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 px-5 pb-5 pt-3 sm:hidden">
            <nav className="flex flex-col gap-1">{navItems.map((item) => <a key={item} href="#articulos" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-3 text-sm text-zinc-300 hover:bg-white/5">{item}</a>)}</nav>
            <div className="mt-3 flex gap-2 border-t border-white/10 pt-4"><Button variant="outline" className="flex-1">Iniciar sesión</Button><Button className="flex-1 bg-white text-black">Probar Cienfirez</Button></div>
          </div>
        )}
      </header>

      <section id="top" className="mx-auto max-w-[1440px] px-5 pb-14 pt-20 sm:px-8 sm:pt-28 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm text-zinc-500">Cienfirez IA / Blog</p>
            <h1 className="text-5xl font-medium tracking-[-0.07em] sm:text-7xl lg:text-[92px] lg:leading-[0.95]">Investigación</h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">Exploramos las ideas que están definiendo el futuro de la inteligencia artificial.</p>
          </div>
          
        </div>
      </section>

      <section className="sticky top-0 z-10 border-y border-white/10 bg-[#050505]/90 backdrop-blur-xl" aria-label="Filtros de artículos">
        <div className="mx-auto flex max-w-[1440px] items-center gap-5 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex min-w-max items-center gap-5">
            {categories.map((category) => (
              <button key={category} onClick={() => { setActiveCategory(category); setVisiblePostsCount(6) }} className={`text-sm transition-colors ${activeCategory === category ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'}`}>{category}</button>
            ))}
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-1 border-l border-white/10 pl-4">
            <Button variant="ghost" size="sm" className="hidden text-zinc-400 hover:text-white sm:inline-flex"><Filter className="mr-2 size-4" /> Filtrar</Button>
            <Button variant="ghost" size="sm" className="hidden text-zinc-400 hover:text-white md:inline-flex">Más recientes <ChevronDown className="ml-1 size-4" /></Button>
            <Button variant={view === 'grid' ? 'secondary' : 'ghost'} size="icon" aria-label="Vista de cuadrícula" onClick={() => setView('grid')}><Grid2X2 className="size-4" /></Button>
            <Button variant={view === 'list' ? 'secondary' : 'ghost'} size="icon" aria-label="Vista de lista" onClick={() => setView('list')}><List className="size-4" /></Button>
          </div>
        </div>
      </section>

      <section id="articulos" className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className={view === 'grid' ? 'grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-5'}>
          {visibleArticles.map((article) => (
            <Card key={article.title} role="button" tabIndex={0} onClick={() => setSelectedPost(article)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedPost(article) } }} className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded-none border-white/10 bg-transparent transition-colors hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${view === 'list' ? 'grid items-center gap-6 sm:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr]' : ''}`}>
              <div className={`relative aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br ${article.tone}`}>
                <img src={article.image} alt="" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <CardContent className="flex min-h-[190px] flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-3 text-xs text-zinc-500"><span>{article.category}</span><span>{article.date}</span></div>
                <h2 className="max-w-md text-xl leading-[1.2] tracking-[-0.035em] text-white sm:text-2xl">{article.title}</h2>
                <p className="max-w-md text-sm leading-6 text-zinc-500">{article.description}</p>
                <div className="mt-auto pt-2"><span className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors group-hover:text-white">Leer artículo <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredArticles.length === 0 && <p className="py-20 text-center text-zinc-500">No hay artículos en esta categoría.</p>}
        {visiblePostsCount < filteredArticles.length && (
          <div className="flex justify-center pt-20">
            <Button variant="outline" size="lg" onClick={() => setVisiblePostsCount((count) => Math.min(count + 3, filteredArticles.length))} className="border-white/20 bg-transparent text-white hover:bg-white hover:text-black">Cargar más artículos <ArrowRight className="ml-2 size-4" /></Button>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden border border-white/10 bg-[#0d0d0d] px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-32 size-80 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <p className="mb-4 text-sm text-zinc-500">Boletín de Cienfirez</p>
              <h2 className="text-3xl tracking-[-0.05em] sm:text-4xl">Mantente al día con las últimas novedades en IA.</h2>
            </div>
            {subscribed ? (
              <p className="text-sm text-zinc-300">Gracias por suscribirte.</p>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); if (email) setSubscribed(true) }} className="flex w-full max-w-md gap-2">
                <Input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Tu correo electrónico" aria-label="Tu correo electrónico" className="h-11 rounded-none border-white/15 bg-transparent text-white placeholder:text-zinc-600" />
                <Button type="submit" className="h-11 shrink-0 bg-white text-black hover:bg-zinc-200">Suscribirme</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#top" className="text-lg font-semibold tracking-[-0.04em]">Cienfirez IA</a>
              <p className="mt-4 max-w-[220px] text-sm leading-6 text-zinc-500">Inteligencia para imaginar y construir lo que sigue.</p>
            </div>
            {[['Productos', 'ChatGPT', 'Gemini', 'Herramientas'], ['Recursos', 'Prompts', 'Plantillas', 'Guías'], ['Compañía', 'Sobre Cienfirez IA', 'Blog', 'Contacto']].map(([title, ...links]) => (
              <div key={title}>
                <h3 className="mb-4 text-sm text-zinc-300">{title}</h3>
                <div className="flex flex-col items-start gap-3">{links.map((link) => <a key={link} href="#top" className="text-sm text-zinc-500 hover:text-white">{link}</a>)}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row">
            <span>© 2026 Cienfirez IA. Todos los derechos reservados.</span>
            <div className="flex gap-5"><a href="#top" className="hover:text-white">Privacidad</a><a href="#top" className="hover:text-white">Términos</a></div>
          </div>
        </div>
      </footer>
    </main>
  )
}