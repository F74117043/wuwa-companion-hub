"use client";

import { useState } from "react";

export function useDisclosure(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  return {
    isOpen,
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((current) => !current)
  };
}
