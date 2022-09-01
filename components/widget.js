import { useEffect } from "react";

export default function FormitableWidget() {
  useEffect(() => {
    const el = document.createElement("div");
    el.classList.add("ft-widget-b2");
    el.setAttribute("data-restaurant", "67e30298");
    el.setAttribute("data-open", "1500");
    el.setAttribute("data-open-mobile", "false");
    el.setAttribute("data-color", "#000000");
    el.setAttribute("data-language", "auto");
    el.setAttribute("data-tag", "Website");
    el.setAttribute("data-toolbar", "true");
    el.setAttribute("data-toolbar-mobile", "true");
    document.body.appendChild(el);
    if (window.FT) {
      window.FT.parse();
    }
    return () => {
      document.body.removeChild(el);
    };
  });
}
