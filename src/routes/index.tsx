import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Crosshair,
  ShieldCheck,
  Zap,
  RefreshCw,
  Headset,
  Gauge,
  Lock,
  ChevronDown,
  Check,
  Star,
  Users,
  Clock,
  Cpu,
  Smartphone,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const FEATURES = [
  {
    icon: Crosshair,
    title: "Mira Automática",
    desc: "Travamento de alvo inteligente que ajusta o crosshair em milissegundos. Headshot garantido em qualquer distância.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-Ban Real",
    desc: "Sistema de proteção com criptografia que disfarça a injeção. Mais de 80 mil usuários sem banimento.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações 24h",
    desc: "Toda atualização do Free Fire é compatibilizada no mesmo dia. Sem downtime, sem dor de cabeça.",
  },
  {
    icon: Gauge,
    title: "0 Lag",
    desc: "Otimização leve que roda em qualquer celular. Zero impacto no FPS e no ping durante a partida.",
  },
  {
    icon: Cpu,
    title: "Modo Sniper",
    desc: "Ativação por tecla dedicada para rifle de longa distância. Sensibilidade ajustável por arma.",
  },
  {
    icon: Smartphone,
    title: "Android & iOS",
    desc: "Funciona em Android 7+ e iOS sem root ou jailbreak. Instalação guiada em 3 minutos.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Escolha seu plano",
    desc: "Selecione entre semanal, mensal ou vitalício. Pagamento via Pix com confirmação automática.",
  },
  {
    n: "02",
    title: "Receba sua chave",
    desc: "Em menos de 2 minutos após o pagamento, sua chave de ativação chega no seu e-mail e WhatsApp.",
  },
  {
    n: "03",
    title: "Instale e domine",
    desc: "Abra o app, cole a chave e pronto. Ativação instantânea com tutorial em vídeo incluso.",
  },
];

const PLANS = [
  {
    id: "semanal",
    name: "Semanal",
    badge: "Teste",
    monthly: 14.9,
    annual: 11.9,
    period: "/semana",
    features: ["Mira automática", "Anti-ban ativo", "1 dispositivo", "Suporte por chat"],
    highlight: false,
  },
  {
    id: "mensal",
    name: "Mensal",
    badge: "Mais popular",
    monthly: 39.9,
    annual: 29.9,
    period: "/mês",
    features: [
      "Tudo do semanal",
      "Modo sniper + Shotgun",
      "2 dispositivos",
      "Atualizações prioritárias",
      "Suporte 24h WhatsApp",
    ],
    highlight: true,
  },
  {
    id: "vitalicio",
    name: "Vitalício",
    badge: "Melhor valor",
    monthly: 149.9,
    annual: 119.9,
    period: "único",
    features: [
      "Tudo do mensal",
      "3 dispositivos",
      "Acesso a betas antecipados",
      "Mudança de aparelho grátis",
      "Suporte VIP vitalício",
    ],
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    name: "Lucas \"Brabo\"",
    role: "Rank Ouro III",
    text: "Subi de Bronze para Herói em 3 semanas. A mira trava certinho e nunca tomei ban. Recomendo demais.",
  },
  {
    name: "Marina S.",
    role: "Jogadora casual",
    text: "Instalei no meu celular antigo e rodou liso. Agora finalmente consigo matar no modo ranqueada sem sofrer.",
  },
  {
    name: "Pedro H.",
    role: "Pro clan FIRE",
    text: "Testei vários e esse é o único que realmente não dá lag. Suporte responde em segundos no WhatsApp.",
  },
];

const FAQS = [
  {
    q: "É seguro? Vou ser banido?",
    a: "Nosso sistema usa injeção ofuscada com rotação de assinatura. Em mais de 80 mil usuários ativos, o índice de banimento é 0%. Ainda assim recomendamos usar em conta secundária para testar primeiro.",
  },
  {
    q: "Funciona no iPhone?",
    a: "Sim. Compatível com iOS 13+ sem jailbreak e Android 7+ sem root. A instalação leva cerca de 3 minutos com nosso tutorial em vídeo.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Pix com confirmação automática em até 2 minutos. Também aceitamos cartão e boleto. Sua chave de ativação chega no e-mail e WhatsApp assim que o pagamento for confirmado.",
  },
  {
    q: "Posso trocar de aparelho?",
    a: "Sim. Nos planos mensal e vitalício você pode transferir a licença para outro aparelho sem custo, quantas vezes precisar.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se não curtir, devolvemos 100% do valor sem perguntas.",
  },
];

function useCountdown(targetHours: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const end = useMemo(
    () => {
      const e = Date.now() + targetHours * 3600 * 1000;
      return e;
    },
    [targetHours],
  );
  const ms = Math.max(0, end - now);
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return { h, m, s };
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { h, m, s } = useCountdown(5);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-ink-3/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 font-display text-xl font-black tracking-wider text-neon text-glow"
          >
            <Crosshair className="h-7 w-7" />
            AIM<span className="text-flame">FIRE</span>
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {([
              ["Recursos", "recursos"],
              ["Como funciona", "como"],
              ["Planos", "planos"],
              ["Dúvidas", "faq"],
            ] as const).map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="font-sans text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-neon"
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("planos")}
            className="btn-flame hidden rounded-lg px-5 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-ink-3 transition-transform hover:scale-105 sm:inline-flex"
          >
            Comprar agora
          </button>
          <button
            className="text-neon md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border/60 bg-ink-3 px-5 py-4 md:hidden">
            {([
              ["Recursos", "recursos"],
              ["Como funciona", "como"],
              ["Planos", "planos"],
              ["Dúvidas", "faq"],
            ] as const).map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full py-3 text-left font-sans text-base font-semibold uppercase tracking-wide text-muted-foreground hover:text-neon"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("planos")}
              className="btn-flame mt-3 w-full rounded-lg px-5 py-3 font-sans text-sm font-bold uppercase text-ink-3"
            >
              Comprar agora
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-border/40"
      >
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-flame/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-neon/20 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-widest text-neon">
              <span className="h-2 w-2 animate-pulse rounded-full bg-neon" />
              Nova versão 4.2 — compatível com OB47
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              DOMINE CADA <span className="text-neon text-glow">HEADSHOT</span> NO FREE FIRE
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg text-muted-foreground">
              O auxílio de mira mais rápido, leve e seguro do Brasil. Travamento
              automático, anti-ban real e atualizações no mesmo dia. Pare de
              sofrer e comece a carregar.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("planos")}
                className="btn-flame group inline-flex items-center gap-2 rounded-xl px-7 py-4 font-display text-base font-bold uppercase tracking-wider text-ink-3 transition-transform hover:scale-105"
              >
                <Crosshair className="h-5 w-5" />
                Quero minha chave
              </button>
              <button
                onClick={() => scrollTo("recursos")}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-7 py-4 font-sans text-base font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-neon hover:text-neon"
              >
                Ver recursos
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-neon" /> 80.472 jogadores ativos
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-gold" /> 4.9/5 (3.210 avaliações)
              </span>
              <span className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4 text-neon" /> Pagamento 100% seguro
              </span>
            </div>
          </div>

          {/* Aim crosshair visual */}
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-neon/15 to-flame/10 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-neon/30 bg-ink-2/60 card-glow">
              <div className="absolute inset-6 overflow-hidden rounded-2xl">
                <div className="aim-scan absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-neon/30 to-transparent" />
              </div>
              <div className="aim-pulse absolute h-40 w-40 rounded-full border-2 border-neon/60" />
              <div className="relative flex flex-col items-center">
                <Crosshair className="h-24 w-24 text-neon text-glow" strokeWidth={1.5} />
                <p className="mt-4 font-display text-sm font-bold uppercase tracking-[0.3em] text-neon">
                  Target Locked
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  Headshot · 100%
                </p>
              </div>
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-ink-3/80 px-2 py-1 font-display text-xs font-bold text-neon">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" /> LIVE
              </div>
              <div className="absolute right-4 top-4 rounded-md bg-ink-3/80 px-2 py-1 font-sans text-xs font-semibold text-muted-foreground">
                60 FPS
              </div>
              <div className="absolute bottom-4 left-4 rounded-md bg-ink-3/80 px-2 py-1 font-sans text-xs font-semibold text-muted-foreground">
                PING 12ms
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-b border-border/40 bg-ink-2/50 py-3">
        <div className="ticker-move flex w-max gap-12 whitespace-nowrap font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex shrink-0 gap-12">
              {[
                "★ Anti-Ban Real",
                "★ 0 Lag Garantido",
                "★ Android & iOS",
                "★ Atualização 24h",
                "★ Suporte VIP",
                "★ Garantia 7 dias",
                "★ Pagamento via Pix",
                "★ 80mil+ usuários",
              ].map((t) => (
                <span key={t} className="text-neon/80">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="border-b border-border/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border/40 md:grid-cols-4">
          {[
            ["80K+", "Jogadores ativos"],
            ["0%", "Índice de banimento"],
            ["4.9★", "Avaliação média"],
            ["24h", "Suporte todos os dias"],
          ].map(([n, l]) => (
            <div key={l} className="bg-ink-3 px-6 py-10 text-center">
              <div className="font-display text-4xl font-black text-neon text-glow sm:text-5xl">
                {n}
              </div>
              <div className="mt-2 font-sans text-sm uppercase tracking-wide text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="recursos" className="relative scroll-mt-20 overflow-hidden py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/15 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-flame">
              Recursos
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
              Tudo que você precisa pra <span className="text-neon">carregar</span>
            </h2>
            <p className="mt-4 font-sans text-lg text-muted-foreground">
              Pensado pra performance e segurança. Sem firula, só resultado.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-all hover:-translate-y-1 hover:border-neon/50 hover:bg-card"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-neon/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
                    <f.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 font-sans text-base text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como" className="scroll-mt-20 border-y border-border/40 bg-ink-2/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-flame">
              Como funciona
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
              Ativo em <span className="text-neon">3 passos</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.n} className="relative rounded-2xl border border-border bg-card/50 p-8">
                <div className="font-display text-6xl font-black text-neon/20">
                  {step.n}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-base text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTDOWN + PRICING */}
      <section id="planos" className="relative scroll-mt-20 overflow-hidden py-20">
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-flame/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-flame">
              Oferta de lançamento
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
              Escolha seu <span className="text-neon">plano</span>
            </h2>
            <p className="mt-4 font-sans text-lg text-muted-foreground">
              50% OFF nos primeiros 100 clientes. Relógio correndo:
            </p>
          </div>

          {/* Countdown */}
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3">
            {[
              ["Horas", h],
              ["Min", m],
              ["Seg", s],
            ].map(([label, val]) => (
              <div
                key={label as string}
                className="flex w-24 flex-col items-center rounded-xl border border-neon/30 bg-ink-2/60 py-4"
              >
                <span className="font-display text-4xl font-black text-neon text-glow tabular-nums">
                  {String(val).padStart(2, "0")}
                </span>
                <span className="mt-1 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Billing toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`font-sans text-sm font-bold uppercase tracking-wide ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
              Mensal
            </span>
            <button
              onClick={() => setAnnual((v) => !v)}
              className="relative h-8 w-16 rounded-full border border-neon/40 bg-ink-2 transition-colors"
              aria-label="Alternar cobrança"
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full btn-flame transition-all ${annual ? "left-9" : "left-1"}`}
              />
            </button>
            <span className={`font-sans text-sm font-bold uppercase tracking-wide ${annual ? "text-foreground" : "text-muted-foreground"}`}>
              Anual <span className="text-neon">-25%</span>
            </span>
          </div>

          {/* Plans */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => {
              const price = annual ? plan.annual : plan.monthly;
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                    plan.highlight
                      ? "border-neon/60 bg-ink-2/80 card-glow lg:scale-105"
                      : "border-border bg-card/50"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full btn-flame px-4 py-1 font-display text-xs font-bold uppercase tracking-widest text-ink-3">
                      {plan.badge}
                    </span>
                  )}
                  {!plan.highlight && (
                    <span className="inline-block self-start rounded-full border border-border bg-ink-3 px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="mt-4 font-display text-2xl font-black tracking-tight">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="font-display text-5xl font-black text-neon">
                      R$ {price.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="mb-2 font-sans text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 font-sans text-base">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon/15 text-neon">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-muted-foreground">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full rounded-xl px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.03] ${
                      plan.highlight
                        ? "btn-flame text-ink-3"
                        : "border border-neon/40 bg-transparent text-neon hover:bg-neon/10"
                    }`}
                  >
                    {plan.id === "vitalicio" ? "Garantir vitalício" : "Assinar " + plan.name}
                  </button>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-center font-sans text-sm text-muted-foreground">
            <Lock className="mr-1.5 inline h-4 w-4 text-neon" />
            Pagamento seguro via Pix · Garantia de 7 dias · Cancele quando quiser
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border/40 bg-ink-2/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-flame">
              Quem usa, aprova
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
              O que os <span className="text-neon">jogadores</span> dizem
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card/50 p-7">
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-sans text-lg text-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full btn-flame font-display text-base font-black text-ink-3">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">{t.name}</div>
                    <div className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <span className="font-sans text-sm font-bold uppercase tracking-widest text-flame">
              Dúvidas
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
              Perguntas <span className="text-neon">frequentes</span>
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {FAQS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    open ? "border-neon/40 bg-ink-2/60" : "border-border bg-card/40"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold tracking-tight">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-neon transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 font-sans text-base text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-border/40 py-24">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <Crosshair className="mx-auto h-14 w-14 text-neon text-glow" />
          <h2 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-6xl">
            Pare de <span className="text-neon text-glow">sofrer</span>.<br />
            Comece a <span className="text-flame">carregar</span>.
          </h2>
          <p className="mt-5 font-sans text-lg text-muted-foreground">
            Junte-se a 80 mil jogadores que já dominam o Free Fire. Ativação
            instantânea, garantia de 7 dias e suporte 24h.
          </p>
          <button
            onClick={() => scrollTo("planos")}
            className="btn-flame mt-9 inline-flex items-center gap-2 rounded-xl px-9 py-4 font-display text-base font-bold uppercase tracking-wider text-ink-3 transition-transform hover:scale-105"
          >
            <Zap className="h-5 w-5" />
            Quero minha chave agora
          </button>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Headset className="h-4 w-4 text-neon" /> Suporte 24h
            </span>
            <span className="inline-flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-neon" /> 7 dias de garantia
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-neon" /> Ativação em 2 min
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 bg-ink-2/40">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 font-display text-xl font-black tracking-wider text-neon">
              <Crosshair className="h-6 w-6" />
              AIM<span className="text-flame">FIRE</span>
            </div>
            <p className="max-w-md text-center font-sans text-sm text-muted-foreground md:text-left">
              Software destinado apenas para fins educacionais. Free Fire é
              marca registrada da Garena. Não somos afiliados.
            </p>
            <div className="flex gap-5 font-sans text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              <button onClick={() => scrollTo("recursos")} className="hover:text-neon">Recursos</button>
              <button onClick={() => scrollTo("planos")} className="hover:text-neon">Planos</button>
              <button onClick={() => scrollTo("faq")} className="hover:text-neon">FAQ</button>
            </div>
          </div>
          <div className="mt-8 border-t border-border/40 pt-6 text-center font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} AIMFIRE. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
