import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Bug,
  Code2,
  GitBranch,
  Lightbulb,
  PenTool,
  Play,
  Rocket,
  Search,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";
import heroImg from "@/assets/hero-students.jpg";
import codeImg from "@/assets/code-closeup.jpg";
import teamImg from "@/assets/team-planning.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desarrollo de Software · Carrera de TI" },
      {
        name: "description",
        content:
          "Fundamentos, ciclo de vida y videos recomendados para alumnos de desarrollo de software de TI. Escríbele al profe por WhatsApp.",
      },
      { property: "og:title", content: "Desarrollo de Software · Carrera de TI" },
      {
        property: "og:description",
        content: "Aprende los fundamentos del desarrollo de software y contacta a tu profe por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cycle = [
  { icon: Search, title: "Análisis", text: "Entender el problema y lo que el usuario necesita antes de escribir una línea." },
  { icon: PenTool, title: "Diseño", text: "Planear la solución: algoritmos, diagramas de flujo y arquitectura." },
  { icon: Code2, title: "Implementación", text: "Programar la solución en el lenguaje adecuado para el proyecto." },
  { icon: Bug, title: "Pruebas", text: "Buscar errores de sintaxis, lógica y semántica antes de entregar." },
  { icon: Rocket, title: "Despliegue", text: "Publicar el software para que las personas lo usen de verdad." },
  { icon: Wrench, title: "Mantenimiento", text: "Corregir, mejorar y dar soporte: el software nunca está “terminado”." },
];

const basics = [
  { tag: "01", title: "Algoritmo", text: "Una secuencia ordenada de pasos que resuelve un problema." },
  { tag: "02", title: "Pseudocódigo", text: "Escribir la lógica en lenguaje humano antes de traducirla a código." },
  { tag: "03", title: "Diagrama de flujo", text: "Dibujar el camino de las decisiones y los ciclos de tu programa." },
  { tag: "04", title: "Lenguaje", text: "Python, JavaScript, Java, C#… la herramienta que convierte tu lógica en programa." },
];

const videos = [
  {
    id: "AEiRa5xZaZw",
    title: "Curso de programación desde cero · Principio básico #1",
    channel: "La Geekipedia de Ernesto",
    note: "Aprende la lógica de programación sin escribir una sola línea de código.",
  },
  {
    id: "5iT4JNX8KyE",
    title: "Programación desde cero: aprende a programar en 26 minutos",
    channel: "Programador X",
    note: "Variables, condiciones, ciclos y estructuras de datos explicados con calma.",
  },
  {
    id: "1iCtQg0TQNU",
    title: "Fundamentos al desarrollo de software",
    channel: "Emilio Graterol",
    note: "Qué es el software, el ciclo de desarrollo y los tipos de lenguajes.",
  },
];

const path = [
  { sem: "Etapa 1", title: "Lógica y fundamentos", items: ["Algoritmos", "PSeInt", "Python básico"] },
  { sem: "Etapa 2", title: "Web y bases de datos", items: ["HTML · CSS · JS", "SQL", "Git y GitHub"] },
  { sem: "Etapa 3", title: "Aplicaciones reales", items: ["Frameworks", "APIs", "Trabajo en equipo (Scrum)"] },
  { sem: "Etapa 4", title: "Proyecto y portafolio", items: ["Despliegue", "Pruebas", "Residencia / empleo"] },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.44 9.42m8.03-17.45A11.3 11.3 0 0 0 12.05.72C5.79.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

function VideoCard({ id, title, channel, note }: (typeof videos)[number]) {
  const [playing, setPlaying] = useState(false);
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60">
      <div className="relative aspect-video bg-muted">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full"
            aria-label={`Reproducir: ${title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
              width={480}
              height={360}
              className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                <Play className="ml-1 h-7 w-7" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{channel}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{note}</p>
      </div>
    </article>
  );
}

function Index() {
  const wa = whatsappLink();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" className="flex items-center gap-2 font-mono text-lg font-semibold">
            <span className="text-primary">{"</>"}</span> dev.TI
          </a>
          <div className="hidden items-center gap-10 text-lg font-medium text-muted-foreground md:flex">
            <a href="#que-es" className="hover:text-foreground">Qué es</a>
            <a href="#fundamentos" className="hover:text-foreground">Fundamentos</a>
            <a href="#videos" className="hover:text-foreground">Videos</a>
            <a href="#ruta" className="hover:text-foreground">Ruta</a>
          </div>
          <Button asChild variant="whatsapp" size="lg" className="rounded-full px-6 text-base">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" /> Contacto
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[92vh] items-end pt-20">
        <img
          src={heroImg}
          alt="Alumnos de TI programando en el laboratorio"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 md:pb-28">
          <p className="font-mono text-sm text-primary">
            $ carrera --ti --especialidad=desarrollo-de-software
            <span className="ml-1 inline-block animate-blink">▍</span>
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Convierte ideas en <span className="text-gradient">software real.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Todo lo que necesitas para arrancar en desarrollo de software: fundamentos, el ciclo de vida de un proyecto y
            videos seleccionados para estudiar a tu ritmo.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#videos">
                Ver videos <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" /> Escríbeme por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section id="que-es" className="relative bg-grid py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-primary">// 01 · qué es</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              El desarrollo de software es un <span className="text-gradient">ciclo</span>, no solo programar.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Va desde que nace la idea hasta que el sistema está en manos del usuario y recibe mantenimiento. Programar es
              una parte clave, pero también lo son el análisis, el diseño, la documentación y las pruebas.
            </p>
            <blockquote className="mt-8 border-l-2 border-primary pl-5 font-mono text-sm text-foreground/80">
              “La programación es el medio que usamos para resolver un problema.”
            </blockquote>
          </div>
          <div className="relative">
            <img
              src={codeImg}
              alt="Código en un editor y manos sobre el teclado"
              loading="lazy"
              width={1200}
              height={912}
              className="rounded-3xl border border-border object-cover shadow-glow"
            />
            <div className="absolute -bottom-6 -left-6 hidden animate-float rounded-2xl border border-border bg-card p-4 font-mono text-xs md:block">
              <span className="text-accent">const</span> alumno = <span className="text-primary">"tú"</span>;
              <br />
              alumno.<span className="text-accent">aprender</span>();
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {cycle.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="flex items-center justify-between">
                <step.icon className="h-6 w-6 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">fase_{i + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fundamentos */}
      <section id="fundamentos" className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-primary">// 02 · fundamentos</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Antes del código, la lógica.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Antes de crear un programa hay que analizar el problema y diseñar el algoritmo. Estos son los cuatro pilares
              que verás desde el primer día.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {basics.map((b) => (
              <div key={b.title} className="bg-surface p-8">
                <span className="font-mono text-5xl font-bold text-primary/30">{b.tag}</span>
                <h3 className="mt-6 text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-sm text-primary">// 03 · videos recomendados</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Aprende desde YouTube.</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Una selección de videos en español para reforzar lo que vemos en clase. Dale play aquí mismo.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {videos.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Ruta */}
      <section id="ruta" className="border-y border-border bg-surface py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-mono text-sm text-primary">// 04 · ruta de aprendizaje</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Tu camino en la carrera.</h2>
            <img
              src={teamImg}
              alt="Equipo de alumnos planeando un proyecto de software"
              loading="lazy"
              width={1200}
              height={912}
              className="mt-10 rounded-3xl border border-border object-cover"
            />
          </div>
          <ol className="relative space-y-6 border-l border-border pl-8">
            {path.map((p) => (
              <li key={p.title} className="relative">
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.sem}</p>
                <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.items.map((it) => (
                    <span key={it} className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs">
                      {it}
                    </span>
                  ))}
                </div>
              </li>
            ))}
            <li className="relative">
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                <GitBranch className="h-3 w-3 text-primary-foreground" />
              </span>
              <p className="text-muted-foreground">…y lo que tú quieras construir después.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Lightbulb className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">¿Tienes dudas? Escríbeme.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Tareas, proyectos, asesorías o cualquier duda de la materia. Mándame un mensaje por WhatsApp y te respondo.
          </p>
          <Button asChild variant="whatsapp" size="xl" className="mt-10 h-16 px-10 text-lg">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-6 w-6" /> 656 305 2299
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 font-mono text-xs text-muted-foreground">
          <span>
            <span className="text-primary">{"</>"}</span> Desarrollo de Software · Carrera de TI
          </span>
          <span>Videos: créditos a sus autores en YouTube.</span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 animate-pulse-ring items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
