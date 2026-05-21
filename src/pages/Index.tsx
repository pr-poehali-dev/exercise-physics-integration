import { useState } from "react";
import { LAWS, EXERCISES, type Law, type Exercise } from "@/data/physicsData";
import Modal from "@/components/physics/Modal";
import { LawCard, LawModalContent } from "@/components/physics/LawComponents";
import { ExCard, ExModalContent } from "@/components/physics/ExerciseComponents";

type Tab = "laws" | "exercises";

export default function Index() {
  const [tab, setTab] = useState<Tab>("laws");
  const [openLaw, setOpenLaw] = useState<Law | null>(null);
  const [openEx, setOpenEx] = useState<Exercise | null>(null);

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
                <ExCard key={ex.id} ex={ex} onClick={() => setOpenEx(ex)} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Modal open={!!openLaw} onClose={() => setOpenLaw(null)}>
        {openLaw && <LawModalContent law={openLaw} onClose={() => setOpenLaw(null)} />}
      </Modal>

      <Modal open={!!openEx} onClose={() => setOpenEx(null)}>
        {openEx && <ExModalContent key={openEx.id} ex={openEx} onClose={() => setOpenEx(null)} />}
      </Modal>
    </div>
  );
}
