"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ConsultationContextValue = {
  selectedService: string;
  setSelectedService: (id: string) => void;
  selectServiceAndScroll: (id: string) => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState("starter");

  const value = useMemo(
    () => ({
      selectedService,
      setSelectedService,
      selectServiceAndScroll(id: string) {
        setSelectedService(id);
        requestAnimationFrame(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        });
      },
    }),
    [selectedService],
  );

  return <ConsultationContext.Provider value={value}>{children}</ConsultationContext.Provider>;
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return context;
}
