import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ScrollBar from "react-scrollbars-custom";

export default function SmoothScrollbar({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollToTop(); // Método correcto para resetear el scroll
    }
  }, [pathname]);

  return (
    <ScrollBar ref={ref} damping=".09" style={{ width: "100%", height: "100vh" }}>
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </ScrollBar>
  );
}
