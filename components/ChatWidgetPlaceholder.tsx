"use client";

import { useEffect } from "react";

export function ChatWidgetPlaceholder() {
  useEffect(() => {
    // Example: Tawk.to
    // const s = document.createElement("script");
    // s.async = true;
    // s.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/default";
    // s.charset = "UTF-8";
    // s.setAttribute("crossorigin", "*");
    // document.body.appendChild(s);

    // Example: Crisp
    // window.$crisp = [];
    // window.CRISP_WEBSITE_ID = "YOUR_CRISP_ID";
    // (function () {
    //   const d = document;
    //   const s = d.createElement("script");
    //   s.src = "https://client.crisp.chat/l.js";
    //   s.async = true;
    //   d.getElementsByTagName("head")[0].appendChild(s);
    // })();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        type="button"
        className="rounded-full bg-brand text-white px-4 py-2 text-xs shadow-lg"
      >
        Chat with us
      </button>
    </div>
  );
}
