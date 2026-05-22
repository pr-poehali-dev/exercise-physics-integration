import { useState } from "react";
import Icon from "@/components/ui/icon";
import { LAWS, EXERCISES, DIAGRAMS, CATEGORY_STYLE, type Law } from "@/data/physicsData.tsx";

export function LawCard({ law, onClick }: { law: Law; onClick: () => void }) {
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

export function LawModalContent({ law, onClose }: { law: Law; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"law" | "exercise">("law");
  const [step, setStep] = useState(0);
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