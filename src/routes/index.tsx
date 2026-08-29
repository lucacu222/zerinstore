import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Package,
  Send,
  MessageCircle,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PRODUCTS = [
  {
    id: "canva-anual",
    name: "CANVA PRO",
    subtitle: "ANUAL",
    badge: "ANUAL",
    desc: "ACESSO GARANTIDO",
    color: "from-cyan-400 to-blue-600",
    emoji: "🎨",
  },
  {
    id: "canva-mensal",
    name: "CANVA PRO",
    subtitle: "MENSAL",
    badge: "30 DIAS",
    desc: "ACESSO GARANTIDO",
    color: "from-cyan-400 to-blue-600",
    emoji: "🎨",
  },
  {
    id: "chatgpt-plus",
    name: "CHATGPT",
    subtitle: "PLUS",
    badge: "30 DIAS",
    desc: "PLANO 30 DIAS",
    color: "from-emerald-400 to-teal-600",
    emoji: "🤖",
  },
  {
    id: "gemini-pro",
    name: "GEMINI PRO",
    subtitle: "PRIVADO",
    badge: "18 MESES",
    desc: "PLANO 18 MESES",
    color: "from-blue-400 to-indigo-600",
    emoji: "✦",
  },
  {
    id: "lovable-pro",
    name: "LOVABLE PRO",
    subtitle: "12 MESES",
    badge: "12 MESES",
    desc: "100 CRÉDITOS POR MÊS",
    color: "from-pink-400 to-rose-600",
    emoji: "❤️",
  },
  {
    id: "lovable-lite",
    name: "LOVABLE LITE",
    subtitle: "12 MESES",
    badge: "12 MESES",
    desc: "300 CRÉDITOS ÚNICOS",
    color: "from-orange-400 to-pink-500",
    emoji: "🧡",
  },
  {
    id: "flow-ultra",
    name: "FLOW ULTRA",
    subtitle: "45 MIL",
    badge: "30 DIAS",
    desc: "45 MIL CRÉDITOS",
    color: "from-violet-400 to-purple-700",
    emoji: "⚡",
  },
  {
    id: "metodo-destrava",
    name: "MÉTODO",
    subtitle: "DESTRAVA",
    badge: "ACESSO",
    desc: "CURSO COMPLETO",
    color: "from-red-500 to-orange-600",
    emoji: "🔥",
  },
  {
    id: "lovable-creditos",
    name: "100 CRÉDITOS",
    subtitle: "LOVABLE",
    badge: "+ PRO 30 DIAS",
    desc: "PACOTE RÁPIDO",
    color: "from-fuchsia-400 to-pink-600",
    emoji: "💎",
  },
];

function ProductCard({
  product,
  compact = false,
}: {
  product: (typeof PRODUCTS)[0];
  compact?: boolean;
}) {
  return (
    <div
      className={`product-card group relative overflow-hidden rounded-2xl border border-white/10 transition-all hover:-translate-y-1 hover:border-red-500/40 ${
        compact ? "min-w-[200px] shrink-0" : ""
      }`}
    >
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          {product.badge}
        </span>
      )}
      <div className="flex">
        <div
          className={`flex w-2/5 items-center justify-center bg-gradient-to-br ${product.color} p-4`}
        >
          <span className="text-4xl">{product.emoji}</span>
        </div>
        <div className="flex flex-1 flex-col justify-center p-4">
          <h3 className="font-display text-sm font-black leading-tight tracking-tight text-white">
            {product.name}
          </h3>
          <p className="font-display text-lg font-black tracking-tight text-white">
            {product.subtitle}
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/50">
            {product.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase()),
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER estilo FG Store */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <button
            onClick={() => scrollTo("hero")}
            className="flex shrink-0 items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-900/50">
              <span className="font-display text-sm font-black text-white">Z</span>
            </div>
            <span className="hidden font-display text-lg font-black tracking-wider text-white sm:inline">
              ZERIN <span className="text-red-500">STORE</span>
            </span>
          </button>

          <div className="relative mx-auto hidden max-w-md flex-1 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Pesquisar produto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-red-500/50 focus:bg-white/10"
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10 sm:flex">
              <Sparkles className="h-3.5 w-3.5 text-red-400" />
              COPY AI
            </button>
            <button className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10 sm:flex">
              <Package className="h-3.5 w-3.5" />
              Pedidos
            </button>
            <button className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10">
              <ShoppingCart className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Carrinho</span>
            </button>
            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 bg-black px-4 py-4 md:hidden">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Pesquisar produto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 outline-none"
              />
            </div>
            <button
              onClick={() => scrollTo("catalogo")}
              className="block w-full py-2 text-left text-sm font-semibold text-white/70"
            >
              Catálogo
            </button>
          </div>
        )}
      </header>

      {/* HERO estilo FG Store */}
      <section id="hero" className="relative overflow-hidden">
        <div className="hero-red-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-900 shadow-xl shadow-red-900/40">
              <span className="font-display text-2xl font-black text-white">Z</span>
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              PAGUE MUITO MENOS.
              <br />
              <span className="text-glow-red">TENHA MUITO MAIS.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-white/60 sm:text-lg">
              Economize de verdade em assinaturas e ferramentas digitais, com
              compra segura, entrega rápida e suporte direto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="btn-red inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-bold uppercase tracking-wide text-white transition hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Falar com suporte
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="btn-red inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-bold uppercase tracking-wide text-white transition hover:scale-105"
              >
                <Send className="h-4 w-4" />
                Entrar no Telegram
              </a>
            </div>
          </div>

          {/* Grid de cards flutuantes (lado direito) */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-3 gap-3">
              {PRODUCTS.slice(0, 9).map((p, i) => (
                <div
                  key={p.id}
                  className="float-card"
                  style={{ animationDelay: `${i * 0.25}s` }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="scroll-mt-20 border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
              <Package className="h-3.5 w-3.5" />
              Catálogo
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-white/40">
              Nenhum produto encontrado para "{search}"
            </p>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
            Não achou o que procurava?
          </h2>
          <p className="mt-3 text-white/50">
            Fale com nosso suporte no Telegram. Trabalhamos sob demanda.
          </p>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="btn-red mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-wide text-white transition hover:scale-105"
          >
            <Send className="h-4 w-4" />
            Entrar no Telegram
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black/40 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800">
              <span className="font-display text-xs font-black text-white">Z</span>
            </div>
            <span className="font-display text-sm font-black tracking-wider text-white">
              ZERIN STORE
            </span>
          </div>
          <p className="text-center text-xs text-white/40">
            © {new Date().getFullYear()} Zerin Store. Produtos digitais com entrega imediata.
          </p>
        </div>
      </footer>

      {/* Botão flutuante Telegram (estilo FG) */}
      <a
        href="https://t.me/"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg shadow-red-900/50 transition hover:scale-110 hover:bg-red-500"
        aria-label="Telegram"
      >
        <Send className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}
