export const LAWS = [
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
  {
    id: "gaylusac",
    title: "Закон Гей-Люссака",
    short: "Изобарный процесс",
    formula: "V / T = const",
    category: "Термодинамика",
    color: "#b45309",
    description:
      "При постоянном давлении объём идеального газа прямо пропорционален его абсолютной температуре.",
    diagram: "gaylusac",
    examples: ["Воздушный шар при нагреве", "Термометр", "Духовка"],
  },
  {
    id: "charles",
    title: "Закон Шарля",
    short: "Изохорный процесс",
    formula: "p / T = const",
    category: "Термодинамика",
    color: "#92400e",
    description:
      "При постоянном объёме давление идеального газа прямо пропорционально его абсолютной температуре.",
    diagram: "charles",
    examples: ["Автомобильные шины в жару", "Автоклав", "Баллон с газом у костра"],
  },
  {
    id: "thermo1",
    title: "Первое начало термодинамики",
    short: "Закон сохранения энергии",
    formula: "ΔU = Q − A",
    category: "Термодинамика",
    color: "#c2410c",
    description:
      "Изменение внутренней энергии системы равно количеству теплоты, полученной системой, минус работа, совершённая системой.",
    diagram: "thermo1",
    examples: ["КПД тепловых двигателей", "Нагрев газа в цилиндре", "Холодильник"],
  },
];

export const EXERCISES = [
  {
    id: "ex1",
    title: "Планка",
    lawId: "newton1",
    muscles: "Кор, спина, плечи",
    duration: "30–60 сек",
    sets: "3 подхода",
    description: "Встаньте в упор лёжа на предплечьях. Тело — прямая линия от головы до пят. Удерживайте положение.",
    physicsLink: "Тело находится в равновесии: сумма всех сил равна нулю (ΣF = 0). Мышцы создают силы, уравновешивающие силу тяжести.",
    steps: [
      { label: "Упритесь предплечьями в пол", note: "Локти под плечами" },
      { label: "Поднимите тело в одну линию", note: "Не прогибайте поясницу" },
      { label: "Напрягите кор и удерживайте", note: "Дышите ровно" },
      { label: "Опуститесь и отдохните 30 сек", note: "Повторите 3 раза" },
    ],
  },
  {
    id: "ex2",
    title: "Приседания",
    lawId: "newton2",
    muscles: "Квадрицепс, ягодицы, кор",
    duration: "3 × 15 повт.",
    sets: "3 подхода",
    description: "Встаньте прямо, ноги на ширине плеч. Приседайте, отводя таз назад, колени над носками. Вернитесь в исходное положение.",
    physicsLink: "При подъёме мышцы ног создают силу F = m·a. Чем быстрее подъём — тем больше ускорение и нагрузка на мышцы.",
    steps: [
      { label: "Ноги на ширине плеч, носки чуть врозь", note: "Спина прямая" },
      { label: "Медленно опускайтесь вниз", note: "Колени не выходят за носки" },
      { label: "Бёдра параллельны полу — пауза", note: "Центр тяжести над стопами" },
      { label: "Мощно выпрямите ноги", note: "F = m·a — работайте взрывно" },
    ],
  },
  {
    id: "ex3",
    title: "Отжимания",
    lawId: "newton3",
    muscles: "Грудь, трицепс, плечи",
    duration: "3 × 10–20 повт.",
    sets: "3 подхода",
    description: "Упор лёжа. Опускайте грудь к полу, сгибая руки, затем мощно отталкивайтесь вверх.",
    physicsLink: "При отталкивании руки давят на пол (F₁₂), пол с равной силой толкает тело вверх (F₂₁). Это 3-й закон Ньютона в действии.",
    steps: [
      { label: "Упор лёжа, руки чуть шире плеч", note: "Тело — прямая линия" },
      { label: "Медленно опускайтесь к полу", note: "Грудь почти касается пола" },
      { label: "Отталкивайтесь руками от пола", note: "Сила реакции = сила давления" },
      { label: "Полностью выпрямите руки", note: "Не блокируйте локти" },
    ],
  },
  {
    id: "ex4",
    title: "Прыжки на месте",
    lawId: "boyle",
    muscles: "Всё тело, сердечно-сосудистая система",
    duration: "3 × 30 сек",
    sets: "3 подхода",
    description: "Прыгайте на месте, активно работая руками. При интенсивной нагрузке лёгкие работают как насос.",
    physicsLink: "Лёгкие — биологический аналог закона Бойля: при вдохе объём растёт, давление падает — воздух входит. При выдохе — наоборот.",
    steps: [
      { label: "Встаньте прямо, руки вдоль тела", note: "Ноги вместе" },
      { label: "Прыгните, разводя ноги в стороны", note: "Руки поднимаются вверх" },
      { label: "Прыгните обратно в исходную", note: "Следите за дыханием" },
      { label: "Ритм — 1 прыжок в секунду", note: "p·V = const в лёгких" },
    ],
  },
  {
    id: "ex5",
    title: "Берпи",
    lawId: "newton3",
    muscles: "Грудь, ноги, кор, кардио",
    duration: "3 × 10 повт.",
    sets: "3 подхода",
    description: "Комплексное упражнение: присед — упор лёжа — отжимание — прыжок вверх с хлопком над головой.",
    physicsLink: "Каждый прыжок — отталкивание от земли. Земля отвечает равной силой (3-й закон). Чем сильнее толчок — тем выше прыжок.",
    steps: [
      { label: "Присядьте, руки на пол", note: "Спина прямая" },
      { label: "Прыжком — в упор лёжа", note: "Тело прямое" },
      { label: "Отожмитесь один раз", note: "Необязательно для новичков" },
      { label: "Прыжком — ноги к рукам, встаньте", note: "" },
      { label: "Прыгните вверх с хлопком", note: "Максимальное отталкивание" },
    ],
  },
  {
    id: "ex6",
    title: "Растяжка с нагревом",
    lawId: "gaylusac",
    muscles: "Мышцы всего тела, гибкость",
    duration: "5–10 мин",
    sets: "После тренировки",
    description: "Статическая растяжка разогретых мышц. Тёплые мышцы эластичнее — аналог расширения газа при нагреве.",
    physicsLink: "По закону Гей-Люссака: при нагреве объём тела (газа) растёт. Мышцы после разминки тоже «расширяются» — становятся длиннее и гибче.",
    steps: [
      { label: "Разогрейтесь 5 мин лёгким бегом", note: "Температура мышц ↑" },
      { label: "Наклон к прямым ногам", note: "Удерживайте 30 сек" },
      { label: "Выпад с растяжкой сгибателей бедра", note: "По 30 сек на каждую ногу" },
      { label: "Растяжка плеч и груди", note: "Дышите глубоко" },
    ],
  },
  {
    id: "ex7",
    title: "Дыхательная гимнастика",
    lawId: "charles",
    muscles: "Диафрагма, межрёберные мышцы",
    duration: "5–7 мин",
    sets: "Утро / после тренировки",
    description: "Глубокое диафрагмальное дыхание: медленный вдох носом 4 сек, пауза 2 сек, выдох ртом 6 сек.",
    physicsLink: "При задержке дыхания объём лёгких постоянен (изохорный процесс). Чем теплее воздух при выдохе — тем выше его давление (p/T = const).",
    steps: [
      { label: "Лягте на спину, рука на животе", note: "Живот должен подниматься" },
      { label: "Вдох носом — 4 секунды", note: "Живот расширяется" },
      { label: "Задержка — 2 секунды", note: "V = const, p растёт" },
      { label: "Выдох ртом — 6 секунд", note: "Живот опускается" },
    ],
  },
  {
    id: "ex8",
    title: "Кардио-интервалы",
    lawId: "thermo1",
    muscles: "Сердечно-сосудистая система, всё тело",
    duration: "20 мин",
    sets: "8 интервалов",
    description: "Чередуйте 20 сек максимального усилия (бег, прыжки) и 10 сек отдыха. Протокол Табата.",
    physicsLink: "Организм — тепловая машина: пища (Q) превращается в движение (A) и тепло (ΔU). ΔU = Q − A. КПД мышц ~25%.",
    steps: [
      { label: "Разминка 3 мин лёгким бегом", note: "Тело накапливает тепло" },
      { label: "20 сек — максимальный темп", note: "A — работа мышц" },
      { label: "10 сек — полный отдых", note: "ΔU восстанавливается" },
      { label: "Повторите 8 раз", note: "Итого ~4 мин интенсивной работы" },
    ],
  },
];

export type Law = typeof LAWS[0];
export type Exercise = typeof EXERCISES[0];

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

function GaylusacSvg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <defs>
        <marker id="arrowAmb" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#b45309" />
        </marker>
      </defs>
      <rect x="30" y="80" width="40" height="60" rx="2" fill="#b45309" fillOpacity="0.1" stroke="#b45309" strokeWidth="1.5" />
      <text x="50" y="116" textAnchor="middle" fontSize="10" fill="#b45309" fontFamily="IBM Plex Mono, monospace">V₁</text>
      <text x="50" y="74" textAnchor="middle" fontSize="9" fill="#b45309" fontFamily="IBM Plex Mono, monospace">T₁</text>
      <rect x="140" y="50" width="40" height="90" rx="2" fill="#b45309" fillOpacity="0.1" stroke="#b45309" strokeWidth="1.5" />
      <text x="160" y="100" textAnchor="middle" fontSize="10" fill="#b45309" fontFamily="IBM Plex Mono, monospace">V₂</text>
      <text x="160" y="44" textAnchor="middle" fontSize="9" fill="#b45309" fontFamily="IBM Plex Mono, monospace">{"T₂ > T₁"}</text>
      <line x1="75" y1="95" x2="135" y2="95" stroke="#b45309" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowAmb)" />
      <text x="105" y="88" textAnchor="middle" fontSize="9" fill="#b45309" fontFamily="IBM Plex Mono, monospace">нагрев</text>
      <text x="240" y="90" textAnchor="middle" fontSize="12" fill="#b45309" fontFamily="IBM Plex Mono, monospace">V/T =</text>
      <text x="240" y="108" textAnchor="middle" fontSize="12" fill="#b45309" fontFamily="IBM Plex Mono, monospace">const</text>
      <text x="160" y="155" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">объём ↑ при нагреве (p = const)</text>
    </svg>
  );
}

function CharlesSvg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <defs>
        <marker id="arrowBrown" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#92400e" />
        </marker>
      </defs>
      <rect x="30" y="40" width="60" height="100" rx="2" fill="#92400e" fillOpacity="0.08" stroke="#92400e" strokeWidth="1.5" />
      <text x="60" y="96" textAnchor="middle" fontSize="11" fill="#92400e" fontFamily="IBM Plex Mono, monospace">V=const</text>
      <text x="60" y="34" textAnchor="middle" fontSize="9" fill="#92400e" fontFamily="IBM Plex Mono, monospace">T₁, p₁</text>
      <rect x="140" y="40" width="60" height="100" rx="2" fill="#92400e" fillOpacity="0.08" stroke="#92400e" strokeWidth="1.5" />
      <text x="170" y="96" textAnchor="middle" fontSize="11" fill="#92400e" fontFamily="IBM Plex Mono, monospace">V=const</text>
      <text x="170" y="34" textAnchor="middle" fontSize="9" fill="#92400e" fontFamily="IBM Plex Mono, monospace">T₂, p₂↑</text>
      <line x1="95" y1="80" x2="135" y2="80" stroke="#92400e" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowBrown)" />
      <text x="115" y="73" textAnchor="middle" fontSize="9" fill="#92400e" fontFamily="IBM Plex Mono, monospace">нагрев</text>
      <text x="255" y="88" textAnchor="middle" fontSize="12" fill="#92400e" fontFamily="IBM Plex Mono, monospace">p/T =</text>
      <text x="255" y="106" textAnchor="middle" fontSize="12" fill="#92400e" fontFamily="IBM Plex Mono, monospace">const</text>
      <text x="160" y="155" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">давление ↑ при нагреве (V = const)</text>
    </svg>
  );
}

function Thermo1Svg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <defs>
        <marker id="arrowT" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#c2410c" />
        </marker>
      </defs>
      <circle cx="160" cy="80" r="48" fill="#c2410c" fillOpacity="0.07" stroke="#c2410c" strokeWidth="1.5" />
      <text x="160" y="75" textAnchor="middle" fontSize="11" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">Система</text>
      <text x="160" y="93" textAnchor="middle" fontSize="10" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">ΔU</text>
      <line x1="50" y1="80" x2="108" y2="80" stroke="#c2410c" strokeWidth="2" markerEnd="url(#arrowT)" />
      <text x="79" y="72" textAnchor="middle" fontSize="10" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">Q</text>
      <line x1="212" y1="80" x2="270" y2="80" stroke="#c2410c" strokeWidth="2" markerEnd="url(#arrowT)" />
      <text x="241" y="72" textAnchor="middle" fontSize="10" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">A</text>
      <text x="160" y="152" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">ΔU = Q − A: теплота идёт на нагрев и работу</text>
    </svg>
  );
}

export const DIAGRAMS: Record<string, React.FC> = {
  inertia: InertiaSvg,
  force: ForceSvg,
  reaction: ReactionSvg,
  ohm: OhmSvg,
  boyle: BoyleSvg,
  gaylusac: GaylusacSvg,
  charles: CharlesSvg,
  thermo1: Thermo1Svg,
};

export const CATEGORY_STYLE: Record<string, string> = {
  "Механика": "bg-blue-50 text-blue-700",
  "Электричество": "bg-violet-50 text-violet-700",
  "Термодинамика": "bg-orange-50 text-orange-700",
};
