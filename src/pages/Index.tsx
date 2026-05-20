import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

// ─── Data ──────────────────────────────────────────────────────────────────────

const LAWS = [
  {
    id: "newton1",
    title: "Первый закон Ньютона",
    short: "Закон инерции",
    formula: "ΣF = 0 ⟹ v = const",
    category: "Механика",
    color: "#2563eb",
    description:
      "Тело сохраняет состояние покоя или равномерного прямолинейного движения, если на него не действуют внешние силы или их равнодействующая равна нулю.",
    diagram: "inertia",
    examples: ["Пассажир при резком торможении автобуса", "Скатерть-самобранка", "Монета на листе бумаги"],
  },
  {
    id: "newton2",
    title: "Второй закон Ньютона",
    short: "F = ma",
    formula: "F = m · a",
    category: "Механика",
    color: "#dc2626",
    description:
      "Ускорение тела прямо пропорционально равнодействующей всех сил и обратно пропорционально массе тела.",
    diagram: "force",
    examples: ["Разгон автомобиля", "Падение тел", "Ракетный двигатель"],
  },
  {
    id: "newton3",
    title: "Третий закон Ньютона",
    short: "Действие и противодействие",
    formula: "F₁₂ = −F₂₁",
    category: "Механика",
    color: "#059669",
    description:
      "Силы, с которыми два тела действуют друг на друга, равны по модулю и противоположны по направлению.",
    diagram: "reaction",
    examples: ["Отдача при выстреле", "Движение реактивного самолёта", "Плавание"],
  },
  {
    id: "ohm",
    title: "Закон Ома",
    short: "Для участка цепи",
    formula: "I = U / R",
    category: "Электричество",
    color: "#7c3aed",
    description:
      "Сила тока на участке цепи прямо пропорциональна напряжению и обратно пропорциональна сопротивлению.",
    diagram: "ohm",
    examples: ["Расчёт тока в цепи", "Выбор предохранителя", "Нагрев провода"],
  },
  {
    id: "boyle",
    title: "Закон Бойля–Мариотта",
    short: "Изотермический процесс",
    formula: "p · V = const",
    category: "Термодинамика",
    color: "#ea580c",
    description:
      "При постоянной температуре произведение давления газа на его объём остаётся неизменным.",
    diagram: "boyle",
    examples: ["Насос для шин", "Дыхание", "Барокамера"],
  },
];

const EXERCISES = [
  {
    id: "ex1",
    title: "Скользящий блок",
    difficulty: "Лёгкое",
    lawId: "newton2",
    task: "Блок массой 5 кг разгоняется силой 20 Н. Найдите ускорение.",
    answer: "4 м/с²",
    steps: [
      { label: "Запишем второй закон", eq: "F = m · a" },
      { label: "Выразим ускорение", eq: "a = F / m" },
      { label: "Подставим данные", eq: "a = 20 / 5" },
      { label: "Результат", eq: "a = 4 м/с²" },
    ],
  },
  {
    id: "ex2",
    title: "Цепь постоянного тока",
    difficulty: "Среднее",
    lawId: "ohm",
    task: "Напряжение 12 В, сопротивление 4 Ом. Чему равен ток?",
    answer: "3 А",
    steps: [
      { label: "Запишем закон Ома", eq: "I = U / R" },
      { label: "Подставим значения", eq: "I = 12 / 4" },
      { label: "Результат", eq: "I = 3 А" },
    ],
  },
  {
    id: "ex3",
    title: "Равновесие тел",
    difficulty: "Лёгкое",
    lawId: "newton1",
    task: "Тело покоится на поверхности. Вес тела 50 Н. Чему равна сила реакции опоры?",
    answer: "50 Н",
    steps: [
      { label: "Тело в покое, значит ΣF = 0", eq: "N − mg = 0" },
      { label: "Выразим силу реакции", eq: "N = mg" },
      { label: "Результат", eq: "N = 50 Н" },
    ],
  },
  {
    id: "ex4",
    title: "Сжатие газа",
    difficulty: "Среднее",
    lawId: "boyle",
    task: "Газ занимает 2 л при давлении 100 кПа. Каков объём при 200 кПа?",
    answer: "1 л",
    steps: [
      { label: "Записываем закон", eq: "p₁ · V₁ = p₂ · V₂" },
      { label: "Выражаем V₂", eq: "V₂ = p₁ · V₁ / p₂" },
      { label: "Подставляем", eq: "V₂ = 100 · 2 / 200" },
      { label: "Результат", eq: "V₂ = 1 л" },
    ],
  },
  {
    id: "ex5",
    title: "Отдача при выстреле",
    difficulty: "Сложное",
    lawId: "newton3",
    task: "Пуля 10 г вылетает со скоростью 900 м/с. Масса ружья 3 кг. Найдите скорость отдачи.",
    answer: "3 м/с",
    steps: [
      { label: "Третий закон + импульс", eq: "m₁v₁ = m₂v₂" },
      { label: "Выражаем v₂", eq: "v₂ = m₁v₁ / m₂" },
      { label: "Подставляем", eq: "v₂ = 0.01 · 900 / 3" },
      { label: "Результат", eq: "v₂ = 3 м/с" },
    ],
  },
];

// ─── SVG Diagrams ──────────────────────────────────────────────────────────────

function InertiaSvg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <defs>
        <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
        </marker>
      </defs>
      <line x1="20" y1="128" x2="300" y2="128" stroke="#e5e7eb" strokeWidth="1.5" />
      <rect x="55" y="92" width="52" height="36" rx="2" fill="#2563eb" fillOpacity="0.12" stroke="#2563eb" strokeWidth="1.5" />
      <text x="81" y="115" textAnchor="middle" fontSize="13" fill="#2563eb" fontFamily="IBM Plex Mono, monospace">m</text>
      <line x1="107" y1="110" x2="185" y2="110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      <text x="146" y="103" textAnchor="middle" fontSize="10" fill="#2563eb" fontFamily="IBM Plex Mono, monospace">v = const</text>
      <text x="160" y="152" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">ΣF = 0 → скорость не меняется</text>
    </svg>
  );
}

function ForceSvg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <defs>
        <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
        </marker>
      </defs>
      <line x1="20" y1="128" x2="300" y2="128" stroke="#e5e7eb" strokeWidth="1.5" />
      <rect x="35" y="92" width="52" height="36" rx="2" fill="#dc2626" fillOpacity="0.12" stroke="#dc2626" strokeWidth="1.5" />
      <text x="61" y="115" textAnchor="middle" fontSize="13" fill="#dc2626" fontFamily="IBM Plex Mono, monospace">m</text>
      <line x1="87" y1="110" x2="165" y2="110" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
      <text x="126" y="103" textAnchor="middle" fontSize="10" fill="#dc2626" fontFamily="IBM Plex Mono, monospace">F</text>
      <rect x="200" y="88" width="52" height="36" rx="2" fill="#dc2626" fillOpacity="0.12" stroke="#dc2626" strokeWidth="1.5" />
      <text x="226" y="111" textAnchor="middle" fontSize="13" fill="#dc2626" fontFamily="IBM Plex Mono, monospace">m</text>
      <text x="278" y="105" fontSize="10" fill="#dc2626" fontFamily="IBM Plex Mono, monospace">a→</text>
      <text x="160" y="152" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">a = F/m — ускорение ↑ при увеличении F</text>
    </svg>
  );
}

function ReactionSvg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <defs>
        <marker id="arrowGL" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#059669" />
        </marker>
        <marker id="arrowGR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#059669" />
        </marker>
      </defs>
      <circle cx="100" cy="100" r="30" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="1.5" />
      <text x="100" y="105" textAnchor="middle" fontSize="13" fill="#059669" fontFamily="IBM Plex Mono, monospace">m₁</text>
      <circle cx="220" cy="100" r="30" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="1.5" />
      <text x="220" y="105" textAnchor="middle" fontSize="13" fill="#059669" fontFamily="IBM Plex Mono, monospace">m₂</text>
      <line x1="70" y1="100" x2="28" y2="100" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowGL)" />
      <text x="49" y="93" textAnchor="middle" fontSize="9" fill="#059669" fontFamily="IBM Plex Mono, monospace">F₂₁</text>
      <line x1="250" y1="100" x2="292" y2="100" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowGR)" />
      <text x="271" y="93" textAnchor="middle" fontSize="9" fill="#059669" fontFamily="IBM Plex Mono, monospace">F₁₂</text>
      <text x="160" y="152" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">|F₁₂| = |F₂₁|, направления противоположны</text>
    </svg>
  );
}

function OhmSvg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <line x1="40" y1="80" x2="90" y2="80" stroke="#7c3aed" strokeWidth="2" />
      <rect x="90" y="68" width="140" height="24" rx="3" fill="#7c3aed" fillOpacity="0.1" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="160" y="85" textAnchor="middle" fontSize="13" fill="#7c3aed" fontFamily="IBM Plex Mono, monospace">R (Ом)</text>
      <line x1="230" y1="80" x2="280" y2="80" stroke="#7c3aed" strokeWidth="2" />
      <line x1="40" y1="80" x2="40" y2="130" stroke="#7c3aed" strokeWidth="2" />
      <line x1="280" y1="80" x2="280" y2="130" stroke="#7c3aed" strokeWidth="2" />
      <line x1="40" y1="130" x2="120" y2="130" stroke="#7c3aed" strokeWidth="2" />
      <line x1="200" y1="130" x2="280" y2="130" stroke="#7c3aed" strokeWidth="2" />
      <text x="160" y="137" textAnchor="middle" fontSize="20" fill="#7c3aed" fontFamily="IBM Plex Mono, monospace">U</text>
      <text x="22" y="108" fontSize="11" fill="#7c3aed" fontFamily="IBM Plex Mono, monospace">I→</text>
      <text x="160" y="158" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">I = U / R</text>
    </svg>
  );
}

function BoyleSvg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <rect x="20" y="40" width="90" height="100" rx="3" fill="#ea580c" fillOpacity="0.07" stroke="#ea580c" strokeWidth="1.5" />
      <text x="65" y="88" textAnchor="middle" fontSize="12" fill="#ea580c" fontFamily="IBM Plex Mono, monospace">V₁</text>
      <text x="65" y="108" textAnchor="middle" fontSize="10" fill="#ea580c" fontFamily="IBM Plex Mono, monospace">p₁ = 1</text>
      <text x="65" y="124" textAnchor="middle" fontSize="18" fill="#ea580c" opacity="0.2" fontFamily="IBM Plex Mono, monospace">···</text>
      <rect x="145" y="70" width="60" height="70" rx="3" fill="#ea580c" fillOpacity="0.07" stroke="#ea580c" strokeWidth="1.5" />
      <text x="175" y="104" textAnchor="middle" fontSize="12" fill="#ea580c" fontFamily="IBM Plex Mono, monospace">V₂</text>
      <text x="175" y="122" textAnchor="middle" fontSize="10" fill="#ea580c" fontFamily="IBM Plex Mono, monospace">p₂ = 2</text>
      <text x="245" y="88" textAnchor="middle" fontSize="12" fill="#ea580c" fontFamily="IBM Plex Mono, monospace">p·V =</text>
      <text x="245" y="105" textAnchor="middle" fontSize="12" fill="#ea580c" fontFamily="IBM Plex Mono, monospace">const</text>
      <text x="160" y="155" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">объём ↓ вдвое при давлении ↑ вдвое</text>
    </svg>
  );
}

const DIAGRAMS: Record<string, React.FC> = {
  inertia: InertiaSvg,
  force: ForceSvg,
  reaction: ReactionSvg,
  ohm: OhmSvg,
  boyle: BoyleSvg,
};

// ─── Style maps ────────────────────────────────────────────────────────────────

const DIFFICULTY_STYLE: Record<string, string> = {
  "Лёгкое": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Среднее": "text-amber-700 bg-amber-50 border-amber-200",
  "Сложное": "text-rose-700 bg-rose-50 border-rose-200",
};

const CATEGORY_STYLE: Record<string, string> = {
  "Механика": "bg-blue-50 text-blue-700",
  "Электричество": "bg-violet-50 text-violet-700",
  "Термодинамика": "bg-orange-50 text-orange-700",
};

// ─── Modal ─────────────────────────────────────────────────────────────────────

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(2px)" }}
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border animate-scale-in shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Law components ────────────────────────────────────────────────────────────

function LawCard({ law, onClick }: { law: typeof LAWS[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left border border-border bg-card p-5 hover:border-foreground/30 hover:shadow-sm transition-all duration-150 group"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className={`text-xs px-2 py-0.5 font-sans ${CATEGORY_STYLE[law.category]}`}>
          {law.category}
        </span>
        <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          {law.formula}
        </span>
      </div>
      <p className="font-serif text-xl leading-tight mb-1">{law.title}</p>
      <p className="text-xs text-muted-foreground font-sans">{law.short}</p>
      <div className="mt-3 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: law.color }} />
    </button>
  );
}

function LawModalContent({ law, onClose }: { law: typeof LAWS[0]; onClose: () => void }) {
  const Diagram = DIAGRAMS[law.diagram];
  return (
    <>
      <div className="flex items-start justify-between gap-4 p-6 border-b border-border">
        <div>
          <span className={`text-xs px-2 py-0.5 font-sans ${CATEGORY_STYLE[law.category]}`}>{law.category}</span>
          <h2 className="font-serif text-3xl leading-tight mt-2">{law.title}</h2>
          <p className="text-sm text-muted-foreground font-sans mt-0.5">{law.short}</p>
        </div>
        <div className="flex items-start gap-3 flex-shrink-0">
          <span className="font-mono text-base font-medium bg-muted px-3 py-1.5" style={{ color: law.color }}>
            {law.formula}
          </span>
          <button onClick={onClose} className="p-1.5 hover:bg-muted transition-colors">
            <Icon name="X" size={16} />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <p className="text-sm text-muted-foreground leading-relaxed font-sans">{law.description}</p>

        <div className="bg-muted/40 border border-border h-48 flex items-center justify-center">
          {Diagram && <Diagram />}
        </div>

        <div>
          <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest mb-3">Примеры применения</p>
          <ul className="space-y-2">
            {law.examples.map((ex, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-sans">
                <span className="w-5 h-5 rounded-full text-xs font-mono font-medium text-white flex items-center justify-center flex-shrink-0"
                  style={{ background: law.color }}>
                  {i + 1}
                </span>
                {ex}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// ─── Exercise components ───────────────────────────────────────────────────────

function ExCard({ ex, laws, onClick }: { ex: typeof EXERCISES[0]; laws: typeof LAWS; onClick: () => void }) {
  const law = laws.find(l => l.id === ex.lawId);
  return (
    <button
      onClick={onClick}
      className="w-full text-left border border-border bg-card p-5 hover:border-foreground/30 hover:shadow-sm transition-all duration-150 group"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className={`text-xs px-2 py-0.5 border font-sans ${DIFFICULTY_STYLE[ex.difficulty]}`}>
          {ex.difficulty}
        </span>
        {law && (
          <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            {law.formula}
          </span>
        )}
      </div>
      <p className="font-serif text-xl leading-tight mb-1">{ex.title}</p>
      {law && <p className="text-xs text-muted-foreground font-sans">{law.short}</p>}
      <div className="mt-3 h-px w-0 group-hover:w-full transition-all duration-300 bg-foreground/20" />
    </button>
  );
}

function ExModalContent({ ex, laws, onClose }: { ex: typeof EXERCISES[0]; laws: typeof LAWS; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const law = laws.find(l => l.id === ex.lawId);
  const Diagram = law ? DIAGRAMS[law.diagram] : null;
  const isLast = step >= ex.steps.length - 1;

  return (
    <>
      <div className="flex items-start justify-between gap-4 p-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 border font-sans ${DIFFICULTY_STYLE[ex.difficulty]}`}>
              {ex.difficulty}
            </span>
            {law && <span className="text-xs text-muted-foreground font-sans">{law.short}</span>}
          </div>
          <h2 className="font-serif text-3xl leading-tight">{ex.title}</h2>
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-muted transition-colors flex-shrink-0 mt-1">
          <Icon name="X" size={16} />
        </button>
      </div>

      <div className="p-6 space-y-5">
        <div className="bg-muted/50 border border-border p-4 text-sm font-sans leading-relaxed">
          {ex.task}
        </div>

        {Diagram && law && (
          <div>
            <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest mb-3">
              Схема: {law.title}
            </p>
            <div className="border border-border bg-muted/30 h-44 flex items-center justify-center">
              <Diagram />
            </div>
          </div>
        )}

        <div>
          <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest mb-3">
            Решение по шагам
          </p>
          <div className="space-y-2 mb-4">
            {ex.steps.slice(0, step + 1).map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-3 border border-border bg-muted/30 animate-fade-in">
                <span className="text-xs text-muted-foreground font-sans flex-shrink-0 w-40">{s.label}</span>
                <span className="font-mono text-sm font-medium">{s.eq}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {!isLast ? (
              <button
                onClick={() => setStep(s => s + 1)}
                className="flex items-center gap-1.5 px-4 py-2 bg-foreground text-background text-sm font-sans hover:opacity-80 transition-opacity"
              >
                <Icon name="ChevronRight" size={14} />
                Следующий шаг
              </button>
            ) : !revealed ? (
              <button
                onClick={() => setRevealed(true)}
                className="flex items-center gap-1.5 px-4 py-2 bg-foreground text-background text-sm font-sans hover:opacity-80 transition-opacity"
              >
                <Icon name="Check" size={14} />
                Показать ответ
              </button>
            ) : null}
            {step > 0 && (
              <button
                onClick={() => { setStep(0); setRevealed(false); }}
                className="px-4 py-2 border border-border text-sm font-sans hover:bg-muted transition-colors"
              >
                Сначала
              </button>
            )}
          </div>

          {revealed && (
            <div className="mt-4 p-4 border-2 border-foreground animate-fade-in">
              <p className="text-xs text-muted-foreground font-sans mb-1">Ответ:</p>
              <p className="font-mono text-2xl font-medium">{ex.answer}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

type Tab = "laws" | "exercises";

export default function Index() {
  const [tab, setTab] = useState<Tab>("laws");
  const [openLaw, setOpenLaw] = useState<typeof LAWS[0] | null>(null);
  const [openEx, setOpenEx] = useState<typeof EXERCISES[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center">
              <span className="text-background font-mono text-sm font-medium">φ</span>
            </div>
            <div>
              <p className="font-serif text-lg leading-none">Физика</p>
              <p className="text-xs text-muted-foreground font-sans">Законы и упражнения</p>
            </div>
          </div>

          <nav className="flex border border-border overflow-hidden">
            {(["laws", "exercises"] as Tab[]).map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 text-sm font-sans transition-all duration-150
                  ${i === 0 ? "" : "border-l border-border"}
                  ${tab === t ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground hover:text-foreground"}`}
              >
                {t === "laws" ? "Законы" : "Упражнения"}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {tab === "laws" && (
          <div>
            <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">
              {LAWS.length} законов — нажмите на карточку, чтобы открыть
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {LAWS.map(law => (
                <LawCard key={law.id} law={law} onClick={() => setOpenLaw(law)} />
              ))}
            </div>
          </div>
        )}

        {tab === "exercises" && (
          <div>
            <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">
              {EXERCISES.length} упражнений — нажмите на карточку, чтобы решить
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {EXERCISES.map(ex => (
                <ExCard key={ex.id} ex={ex} laws={LAWS} onClick={() => setOpenEx(ex)} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Modal open={!!openLaw} onClose={() => setOpenLaw(null)}>
        {openLaw && <LawModalContent law={openLaw} onClose={() => setOpenLaw(null)} />}
      </Modal>

      <Modal open={!!openEx} onClose={() => setOpenEx(null)}>
        {openEx && <ExModalContent key={openEx.id} ex={openEx} laws={LAWS} onClose={() => setOpenEx(null)} />}
      </Modal>
    </div>
  );
}