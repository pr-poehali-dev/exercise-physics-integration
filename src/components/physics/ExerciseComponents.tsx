import { useState } from "react";
import Icon from "@/components/ui/icon";
import { LAWS, DIAGRAMS, CATEGORY_STYLE, type Exercise } from "@/data/physicsData.tsx";

export function ExCard({ ex, onClick }: { ex: Exercise; onClick: () => void }) {
  const law = LAWS.find(l => l.id === ex.lawId);
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

export function ExModalContent({ ex, onClose }: { ex: Exercise; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const law = LAWS.find(l => l.id === ex.lawId);
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