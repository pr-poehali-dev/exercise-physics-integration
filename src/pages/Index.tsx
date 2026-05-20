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

const EXERCISES = [
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
      <text x="160" y="44" textAnchor="middle" fontSize="9" fill="#b45309" fontFamily="IBM Plex Mono, monospace">T₂ &gt; T₁</text>
      <line x1="75" y1="95" x2="135" y2="95" stroke="#b45309" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowAmb)" />
      <text x="107" y="88" textAnchor="middle" fontSize="9" fill="#b45309" fontFamily="IBM Plex Mono, monospace">нагрев</text>
      <text x="240" y="80" textAnchor="middle" fontSize="13" fill="#b45309" fontFamily="IBM Plex Mono, monospace">V / T =</text>
      <text x="240" y="98" textAnchor="middle" fontSize="13" fill="#b45309" fontFamily="IBM Plex Mono, monospace">const</text>
      <text x="160" y="155" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">при p = const: объём растёт с температурой</text>
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
      <rect x="30" y="55" width="70" height="85" rx="3" fill="#92400e" fillOpacity="0.08" stroke="#92400e" strokeWidth="1.5" />
      <text x="65" y="100" textAnchor="middle" fontSize="11" fill="#92400e" fontFamily="IBM Plex Mono, monospace">V = const</text>
      <text x="65" y="50" textAnchor="middle" fontSize="9" fill="#92400e" fontFamily="IBM Plex Mono, monospace">T₁, p₁</text>
      <text x="65" y="125" textAnchor="middle" fontSize="18" fill="#92400e" opacity="0.15" fontFamily="IBM Plex Mono, monospace">···</text>
      <text x="65" y="152" textAnchor="middle" fontSize="9" fill="#92400e" fontFamily="IBM Plex Mono, monospace">нагрев</text>
      <line x1="105" y1="80" x2="175" y2="65" stroke="#92400e" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowBrown)" />
      <text x="180" y="55" textAnchor="start" fontSize="10" fill="#92400e" fontFamily="IBM Plex Mono, monospace">p₂ ↑</text>
      <text x="180" y="68" textAnchor="start" fontSize="9" fill="#92400e" fontFamily="IBM Plex Mono, monospace">T₂ &gt; T₁</text>
      <text x="240" y="100" textAnchor="middle" fontSize="13" fill="#92400e" fontFamily="IBM Plex Mono, monospace">p / T =</text>
      <text x="240" y="118" textAnchor="middle" fontSize="13" fill="#92400e" fontFamily="IBM Plex Mono, monospace">const</text>
      <text x="160" y="155" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">при V = const: давление растёт с температурой</text>
    </svg>
  );
}

function Thermo1Svg() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <defs>
        <marker id="arrowC2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#c2410c" />
        </marker>
      </defs>
      <circle cx="160" cy="82" r="48" fill="#c2410c" fillOpacity="0.08" stroke="#c2410c" strokeWidth="1.5" />
      <text x="160" y="78" textAnchor="middle" fontSize="11" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">система</text>
      <text x="160" y="94" textAnchor="middle" fontSize="10" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">ΔU</text>
      <line x1="40" y1="68" x2="108" y2="75" stroke="#c2410c" strokeWidth="2" markerEnd="url(#arrowC2)" />
      <text x="22" y="60" textAnchor="middle" fontSize="11" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">Q</text>
      <text x="22" y="73" textAnchor="middle" fontSize="9" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">теплота</text>
      <line x1="212" y1="75" x2="278" y2="62" stroke="#c2410c" strokeWidth="2" markerEnd="url(#arrowC2)" />
      <text x="295" y="55" textAnchor="middle" fontSize="11" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">A</text>
      <text x="295" y="68" textAnchor="middle" fontSize="9" fill="#c2410c" fontFamily="IBM Plex Mono, monospace">работа</text>
      <text x="160" y="152" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="IBM Plex Sans, sans-serif">ΔU = Q − A: теплота идёт на нагрев и работу</text>
    </svg>
  );
}

const DIAGRAMS: Record<string, React.FC> = {
  inertia: InertiaSvg,
  force: ForceSvg,
  reaction: ReactionSvg,
  ohm: OhmSvg,
  boyle: BoyleSvg,
  gaylusac: GaylusacSvg,
  charles: CharlesSvg,
  thermo1: Thermo1Svg,
};

// ─── Style maps ────────────────────────────────────────────────────────────────


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
  const [activeTab, setActiveTab] = useState<"law" | "exercise">("law");
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const Diagram = DIAGRAMS[law.diagram];
  const exercise = EXERCISES.find(e => e.lawId === law.id);
  const isLast = exercise ? step >= exercise.steps.length - 1 : true;

  return (
    <>
      {/* Header */}
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

      {/* Tabs */}
      <div className="flex border-b border-border">
        {(["law", "exercise"] as const).map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-sans transition-all duration-150 border-b-2
              ${activeTab === t
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
              } ${i > 0 ? "border-l border-border" : ""}`}
          >
            <Icon name={t === "law" ? "BookOpen" : "PenLine"} size={13} />
            {t === "law" ? "Закон" : "Упражнение"}
          </button>
        ))}
      </div>

      {/* Law tab */}
      {activeTab === "law" && (
        <div className="p-6 space-y-5 animate-fade-in">
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
          {exercise && (
            <button
              onClick={() => setActiveTab("exercise")}
              className="flex items-center gap-2 w-full px-4 py-3 border border-border hover:border-foreground/30 hover:bg-muted/40 transition-all text-sm font-sans text-left"
            >
              <Icon name="PenLine" size={14} />
              <span>Перейти к упражнению: <span className="font-medium">{exercise.title}</span></span>
              <Icon name="ChevronRight" size={14} className="ml-auto" />
            </button>
          )}
        </div>
      )}

      {/* Exercise tab */}
      {activeTab === "exercise" && exercise && (
        <div className="p-6 space-y-5 animate-fade-in">
          {/* Meta */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "Dumbbell", label: "Мышцы", value: exercise.muscles },
              { icon: "Timer", label: "Время", value: exercise.duration },
              { icon: "RotateCcw", label: "Подходы", value: exercise.sets },
            ].map(item => (
              <div key={item.label} className="border border-border p-3 text-center">
                <Icon name={item.icon as "Dumbbell"} size={16} className="mx-auto mb-1 text-muted-foreground" />
                <p className="text-xs text-muted-foreground font-sans mb-0.5">{item.label}</p>
                <p className="text-xs font-medium font-sans">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="bg-muted/50 border border-border p-4 text-sm font-sans leading-relaxed">
            {exercise.description}
          </div>

          {/* Physics link */}
          <div className="border-l-2 pl-4 py-1" style={{ borderColor: law.color }}>
            <p className="text-xs font-sans font-medium uppercase tracking-widest mb-1" style={{ color: law.color }}>
              Физика в этом упражнении
            </p>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">{exercise.physicsLink}</p>
          </div>

          {/* Diagram */}
          <div className="bg-muted/40 border border-border h-40 flex items-center justify-center">
            {Diagram && <Diagram />}
          </div>

          {/* Steps */}
          <div>
            <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest mb-3">Техника выполнения</p>
            <div className="space-y-2 mb-4">
              {exercise.steps.slice(0, step + 1).map((s, i) => (
                <div key={i} className="flex items-start gap-4 p-3 border border-border bg-muted/30 animate-fade-in">
                  <span className="w-5 h-5 rounded-full text-xs font-mono font-medium text-white flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: law.color }}>{i + 1}</span>
                  <div>
                    <p className="text-sm font-sans font-medium">{s.label}</p>
                    {s.note && <p className="text-xs text-muted-foreground font-sans mt-0.5">{s.note}</p>}
                  </div>
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
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 border border-border text-sm font-sans text-muted-foreground">
                  <Icon name="CheckCircle" size={14} />
                  Все шаги показаны
                </div>
              )}
              {step > 0 && (
                <button
                  onClick={() => setStep(0)}
                  className="px-4 py-2 border border-border text-sm font-sans hover:bg-muted transition-colors"
                >
                  Сначала
                </button>
              )}
            </div>
          </div>
        </div>
      )}
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
        <span className="text-xs px-2 py-0.5 font-sans bg-muted text-muted-foreground">{ex.duration}</span>
        {law && (
          <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            {law.formula}
          </span>
        )}
      </div>
      <p className="font-serif text-xl leading-tight mb-1">{ex.title}</p>
      <p className="text-xs text-muted-foreground font-sans">{ex.muscles}</p>
      <div className="mt-3 h-px w-0 group-hover:w-full transition-all duration-300 bg-foreground/20" />
    </button>
  );
}

function ExModalContent({ ex, laws, onClose }: { ex: typeof EXERCISES[0]; laws: typeof LAWS; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const law = laws.find(l => l.id === ex.lawId);
  const Diagram = law ? DIAGRAMS[law.diagram] : null;
  const isLast = step >= ex.steps.length - 1;

  return (
    <>
      <div className="flex items-start justify-between gap-4 p-6 border-b border-border">
        <div>
          {law && <span className={`text-xs px-2 py-0.5 font-sans ${CATEGORY_STYLE[law.category]}`}>{law.category}</span>}
          <h2 className="font-serif text-3xl leading-tight mt-2">{ex.title}</h2>
          <p className="text-xs text-muted-foreground font-sans mt-0.5">{ex.muscles}</p>
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-muted transition-colors flex-shrink-0 mt-1">
          <Icon name="X" size={16} />
        </button>
      </div>

      <div className="p-6 space-y-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: "Dumbbell", label: "Мышцы", value: ex.muscles },
            { icon: "Timer", label: "Время", value: ex.duration },
            { icon: "RotateCcw", label: "Подходы", value: ex.sets },
          ].map(item => (
            <div key={item.label} className="border border-border p-3 text-center">
              <Icon name={item.icon as "Dumbbell"} size={16} className="mx-auto mb-1 text-muted-foreground" />
              <p className="text-xs text-muted-foreground font-sans mb-0.5">{item.label}</p>
              <p className="text-xs font-medium font-sans">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 border border-border p-4 text-sm font-sans leading-relaxed">
          {ex.description}
        </div>

        {law && (
          <div className="border-l-2 pl-4 py-1" style={{ borderColor: law.color }}>
            <p className="text-xs font-sans font-medium uppercase tracking-widest mb-1" style={{ color: law.color }}>
              Физика: {law.title}
            </p>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">{ex.physicsLink}</p>
          </div>
        )}

        {Diagram && (
          <div className="border border-border bg-muted/30 h-44 flex items-center justify-center">
            <Diagram />
          </div>
        )}

        <div>
          <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest mb-3">
            Техника выполнения
          </p>
          <div className="space-y-2 mb-4">
            {ex.steps.slice(0, step + 1).map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-3 border border-border bg-muted/30 animate-fade-in">
                <span className="w-5 h-5 rounded-full text-xs font-mono font-medium text-white flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: law?.color ?? "#111" }}>{i + 1}</span>
                <div>
                  <p className="text-sm font-sans font-medium">{s.label}</p>
                  {s.note && <p className="text-xs text-muted-foreground font-sans mt-0.5">{s.note}</p>}
                </div>
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
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 border border-border text-sm font-sans text-muted-foreground">
                <Icon name="CheckCircle" size={14} />
                Все шаги показаны
              </div>
            )}
            {step > 0 && (
              <button
                onClick={() => setStep(0)}
                className="px-4 py-2 border border-border text-sm font-sans hover:bg-muted transition-colors"
              >
                Сначала
              </button>
            )}
          </div>
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