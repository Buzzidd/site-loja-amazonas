import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Menu,
  X,
  Scissors,
  Sofa,
  Palette,
  Layers,
} from "lucide-react";
import { useState } from "react";
import heroImg from "./assets/hero.png";
import logoImg from "./assets/logo.png";
import catArmarinho from "./assets/teste.jpg";
import catMalharias from "./assets/buzzid.jpg";
import catTapecaria from "./assets/teste.jpg";
import catDecoracao from "./assets/buzzid.jpg";

export default function App() {
  return <Home />;
}

const WHATSAPP_URL =
  "https://wa.me/556932290689?text=Olá!%20Gostaria%20de%20mais%20informações.";
const PHONE = "(69) 3229-0689";
const ADDRESS = "Av. Nações Unidas, 248, Porto Velho - RO";

const categories = [
  {
    icon: Scissors,
    title: "Armarinho e Aviamentos",
    desc: "Linhas, fitas, botões, agulhas e ferramentas de artesanato",
    img: catArmarinho,
  },
  {
    icon: Layers,
    title: "Malharias e Carpetes",
    desc: "Tecidos diversos e tapetes para todos os ambientes",
    img: catMalharias,
  },
  {
    icon: Sofa,
    title: "Artigos para Tapeçaria",
    desc: "Espumas, couros e materiais para estofados",
    img: catTapecaria,
  },
  {
    icon: Palette,
    title: "Decoração e Papel de Parede",
    desc: "Artigos decorativos e rolos de papel de parede",
    img: catDecoracao,
  },
];

const products = [
  {
    name: "Linha de Bordado Coloridas",
    desc: "Kit com 24 cores variadas, 100% algodão.",
    img: catArmarinho,
    tag: "Armarinho",
  },
  {
    name: "Tecido Suede Liso",
    desc: "Ideal para estofados e cortinas. Diversas cores.",
    img: catTapecaria,
    tag: "Tapeçaria",
  },
  {
    name: "Papel de Parede Floral",
    desc: "Rolo 10m x 53cm, fácil aplicação.",
    img: catDecoracao,
    tag: "Decoração",
  },
  {
    name: "Tapete Felpudo Premium",
    desc: "Toque macio, 1,50m x 2,00m.",
    img: catMalharias,
    tag: "Carpetes",
  },
  {
    name: "Botões Sortidos Decorativos",
    desc: "Pacote com 100 unidades em modelos variados.",
    img: catArmarinho,
    tag: "Aviamentos",
  },
  {
    name: "Espuma D33 para Estofados",
    desc: "Placa de alta densidade, vários tamanhos.",
    img: catTapecaria,
    tag: "Tapeçaria",
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { label: "Início", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="hidden bg-primary-dark text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> {ADDRESS}, 76804-110
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:+556932290689`}
              className="flex items-center gap-1.5 hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" /> {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src={logoImg}
              alt="Amazonas Plast-Couro"
              width={48}
              height={48}
              className="h-12 w-12 shrink-0"
            />
            <div className="min-w-0">
              <div className="truncate font-display text-lg font-extrabold leading-tight text-primary-dark sm:text-xl">
                Amazonas
              </div>
              <div className="truncate text-xs font-medium text-muted-foreground">
                Plast-Couro
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Tradição
              em Porto Velho
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Está a procura de <span className="text-primary">artesanato</span>
              , tapeçaria e decoração em Porto Velho.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Milhares de itens de armarinho, aviamentos, tecidos, espumas,
              couros e papel de parede. Atendimento próximo e variedade que você
              só encontra na Amazonas Plast-Couro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.55_0.18_145/0.5)] transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" /> Fale Conosco no WhatsApp
              </a>
              <a
                href="#categorias"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Ver Categorias
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <div className="font-display text-2xl font-extrabold text-primary">
                  +30
                </div>
                <div className="text-xs text-muted-foreground">
                  anos de tradição
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-primary">
                  +5mil
                </div>
                <div className="text-xs text-muted-foreground">
                  itens em estoque
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-primary">
                  4
                </div>
                <div className="text-xs text-muted-foreground">
                  categorias completas
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
            <img
              src={heroImg}
              alt="Variedade de aviamentos e materiais de artesanato"
              width={1600}
              height={1024}
              className="relative rounded-3xl shadow-[var(--shadow-lg)]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="bg-secondary/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Nossas Categorias
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore as quatro grandes seções da nossa loja e encontre tudo o
              que precisa em um só lugar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <a
                key={c.title}
                href="#produtos"
                className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <h3 className="min-w-0 font-display text-base font-bold text-foreground">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                Produtos em Destaque
              </h2>
              <p className="mt-2 text-muted-foreground">
                Alguns dos itens mais procurados pelos nossos clientes.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Ver catálogo completo →
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary-dark">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">
                    {p.desc}
                  </p>
                  <a
                    href={`https://wa.me/556932290689?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${p.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
                  >
                    <MessageCircle className="h-4 w-4" /> Tenho Interesse
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="bg-secondary/50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <img
            src={catMalharias}
            alt="Loja Amazonas Plast-Couro"
            width={800}
            height={800}
            loading="lazy"
            className="rounded-3xl shadow-[var(--shadow-card)]"
          />
          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Sobre a Amazonas Plast-Couro
            </h2>
            <p className="mt-4 text-muted-foreground">
              Há mais de três décadas, somos referência em Porto Velho para quem
              busca variedade, qualidade e atendimento de verdade. De artesãos a
              tapeceiros, decoradores e famílias inteiras: aqui você encontra
              tudo o que precisa para dar vida aos seus projetos!
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Atendimento personalizado e consultivo",
                "Maior variedade de aviamentos da região de Rondônia",
                "Materiais para profissionais e hobbyistas",
                "Preços justos e estoque sempre renovado",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contato" className="bg-primary-dark text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logoImg}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <div>
                  <div className="font-display text-xl font-extrabold">
                    Amazonas
                  </div>
                  <div className="text-xs opacity-80">Plast-Couro</div>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm opacity-90">
                Tradição em armarinho, tapeçaria e decoração no coração de Porto
                Velho.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
                Contato
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    Av. Nações Unidas, 248
                    <br />
                    Porto Velho - RO, 76804-110
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href="tel:+556932290689" className="hover:text-accent">
                    (69) 3229-0689
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    (69) 3229-0689{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
                Atendimento
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    Segunda a Sexta
                    <br />
                    08h às 18h
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    Sábado
                    <br />
                    08h às 13h
                  </span>
                </li>
              </ul>
              <p className="mt-5 text-sm italic opacity-80">
                "Sua loja completa para artesanato e decoração."
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-center text-xs opacity-75">
            © {new Date().getFullYear()} Amazonas Plast-Couro · Porto Velho -
            RO. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.65_0.17_150/0.6)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
