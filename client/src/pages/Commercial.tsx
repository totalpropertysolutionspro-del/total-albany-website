import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Commercial.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/pages/Commercial.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Navbar } from "/src/components/layout/Navbar.tsx";
import { Footer } from "/src/components/layout/Footer.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/src/components/ui/accordion.tsx";
import { CheckCircle, Phone, Building2, Sparkles, Shield, Clock, Award, Users } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { Link } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
export default function Commercial() {
  const benefits = [
    { icon: Shield, text: "Fully insured and bonded" },
    { icon: Clock, text: "Flexible scheduling options" },
    { icon: Users, text: "Trained professional staff" },
    { icon: Sparkles, text: "Eco-friendly cleaning products" },
    { icon: Award, text: "Consistent quality standards" },
    { icon: Building2, text: "All commercial property types" }
  ];
  const included = [
    "Daily janitorial services",
    "Restroom cleaning and sanitization",
    "Break room and kitchen cleaning",
    "Floor care and maintenance",
    "Window and glass cleaning",
    "Trash removal and recycling",
    "Dusting and surface cleaning",
    "Periodic deep cleaning"
  ];
  const faqs = [
    {
      q: "What types of commercial properties do you clean?",
      a: "We clean offices, retail spaces, medical facilities, churches, warehouses, and more. No commercial property is too big or small."
    },
    {
      q: "Do you offer daily, weekly, or monthly cleaning?",
      a: "Yes, we offer flexible scheduling including daily, weekly, bi-weekly, and monthly cleaning plans tailored to your needs."
    },
    {
      q: "Can you clean after business hours?",
      a: "Absolutely. We work around your schedule and can clean during evenings, weekends, or overnight to minimize disruption."
    },
    {
      q: "Do you provide your own cleaning supplies?",
      a: "Yes, we bring all necessary cleaning supplies and equipment. We can also use specific products you prefer if requested."
    },
    {
      q: "What areas do you serve?",
      a: "Our headquarters is in Albany, NY Capital Region, serving all of the Capital District, Oneonta area, and Catskill region. We also serve Florida (Miami, Naples, Fort Myers) and North Carolina (Charlotte, Raleigh, Greensboro)."
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Commercial.tsx:54:4", "data-component-name": "div", className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "client/src/pages/Commercial.tsx:55:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Commercial.tsx:58:6", "data-component-name": "section", className: "bg-primary text-white pt-32 pb-20", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Commercial.tsx:59:8", "data-component-name": "div", className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/pages/Commercial.tsx:60:10", "data-component-name": "h1", className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "Commercial Cleaning Services" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Commercial.tsx:61:10", "data-component-name": "p", className: "text-xl text-white/80 max-w-2xl mx-auto", children: "Professional janitorial services for offices, retail, medical facilities, and more. Serving Albany Capital Region, Oneonta, Catskill, Florida & North Carolina." }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Commercial.tsx:67:6", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 py-16", children: [
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Commercial.tsx:69:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Commercial.tsx:70:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "Why Choose Our Commercial Cleaning" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Commercial.tsx:71:10", "data-component-name": "div", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: benefits.map(
          (benefit, i) => /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/Commercial.tsx:73:14", "data-component-name": "Card", className: "border-0 shadow-sm bg-gray-50", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/Commercial.tsx:74:16", "data-component-name": "CardContent", className: "p-6 flex items-start gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Commercial.tsx:75:18", "data-component-name": "div", className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(benefit.icon, { "data-replit-metadata": "client/src/pages/Commercial.tsx:76:20", "data-component-name": "benefit.icon", className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 95,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Commercial.tsx:78:18", "data-component-name": "p", className: "font-medium text-gray-800", children: benefit.text }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this) }, i, false, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Commercial.tsx:86:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Commercial.tsx:87:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "What's Included" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Commercial.tsx:88:10", "data-component-name": "div", className: "grid md:grid-cols-2 gap-4 max-w-3xl mx-auto", children: included.map(
          (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Commercial.tsx:90:14", "data-component-name": "div", className: "flex items-center gap-3 p-4 bg-green-50 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { "data-replit-metadata": "client/src/pages/Commercial.tsx:91:16", "data-component-name": "CheckCircle", className: "w-5 h-5 text-primary shrink-0" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Commercial.tsx:92:16", "data-component-name": "span", className: "font-medium", children: item }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Commercial.tsx:99:8", "data-component-name": "section", className: "mb-20 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Commercial.tsx:100:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Accordion, { "data-replit-metadata": "client/src/pages/Commercial.tsx:101:10", "data-component-name": "Accordion", type: "single", collapsible: true, className: "w-full", children: faqs.map(
          (faq, i) => /* @__PURE__ */ jsxDEV(AccordionItem, { "data-replit-metadata": "client/src/pages/Commercial.tsx:103:14", "data-component-name": "AccordionItem", value: `item-${i}`, children: [
            /* @__PURE__ */ jsxDEV(AccordionTrigger, { "data-replit-metadata": "client/src/pages/Commercial.tsx:104:16", "data-component-name": "AccordionTrigger", className: "text-left font-semibold", children: faq.q }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(AccordionContent, { "data-replit-metadata": "client/src/pages/Commercial.tsx:105:16", "data-component-name": "AccordionContent", className: "text-gray-600", children: faq.a }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Commercial.tsx:112:8", "data-component-name": "section", className: "text-center bg-gray-50 rounded-2xl p-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Commercial.tsx:113:10", "data-component-name": "h2", className: "text-3xl font-bold mb-4", children: "Ready for Professional Commercial Cleaning?" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Commercial.tsx:114:10", "data-component-name": "p", className: "text-gray-600 mb-8 max-w-xl mx-auto", children: "Contact us today for a free quote on commercial cleaning services." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Commercial.tsx:117:10", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Commercial.tsx:118:12", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Commercial.tsx:119:14", "data-component-name": "Button", size: "lg", className: "bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold", children: "Get a Free Quote" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Commercial.tsx:123:12", "data-component-name": "a", href: "tel:1-800-791-7845", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Commercial.tsx:124:14", "data-component-name": "Button", size: "lg", variant: "outline", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Commercial.tsx:125:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            "1-800-791-7845"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Commercial.tsx:129:12", "data-component-name": "a", href: "tel:518-948-7156", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Commercial.tsx:130:14", "data-component-name": "Button", size: "lg", variant: "outline", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Commercial.tsx:131:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
              lineNumber: 150,
              columnNumber: 17
            }, this),
            "(518) 948-7156"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-replit-metadata": "client/src/pages/Commercial.tsx:139:6", "data-component-name": "Footer" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/Commercial.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
_c = Commercial;
var _c;
$RefreshReg$(_c, "Commercial");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/Commercial.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/Commercial.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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R0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUtBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWtCQTtBQUFBLFdBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF3QkE7QUFBQSxTQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBc0VBO0FBQUEsSUFFQSx1QkFBQyxVQUFLLG9HQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLE9BckZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FzRkE7QUFFSjtBQUFBRyxLQXJJd0JiO0FBQVUsSUFBQWE7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkFjY29yZGlvbiIsIkFjY29yZGlvbkNvbnRlbnQiLCJBY2NvcmRpb25JdGVtIiwiQWNjb3JkaW9uVHJpZ2dlciIsIkNoZWNrQ2lyY2xlIiwiUGhvbmUiLCJCdWlsZGluZzIiLCJTcGFya2xlcyIsIlNoaWVsZCIsIkNsb2NrIiwiQXdhcmQiLCJVc2VycyIsIkxpbmsiLCJDb21tZXJjaWFsIiwiYmVuZWZpdHMiLCJpY29uIiwidGV4dCIsImluY2x1ZGVkIiwiZmFxcyIsInEiLCJhIiwibWFwIiwiYmVuZWZpdCIsImkiLCJpdGVtIiwiZmFxIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ29tbWVyY2lhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9Gb290ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25Db250ZW50LCBBY2NvcmRpb25JdGVtLCBBY2NvcmRpb25UcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hY2NvcmRpb25cIjtcbmltcG9ydCB7IENoZWNrQ2lyY2xlLCBQaG9uZSwgQnVpbGRpbmcyLCBTcGFya2xlcywgU2hpZWxkLCBDbG9jaywgQXdhcmQsIFVzZXJzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJ3b3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVyY2lhbCgpIHtcbiAgY29uc3QgYmVuZWZpdHMgPSBbXG4gICAgeyBpY29uOiBTaGllbGQsIHRleHQ6IFwiRnVsbHkgaW5zdXJlZCBhbmQgYm9uZGVkXCIgfSxcbiAgICB7IGljb246IENsb2NrLCB0ZXh0OiBcIkZsZXhpYmxlIHNjaGVkdWxpbmcgb3B0aW9uc1wiIH0sXG4gICAgeyBpY29uOiBVc2VycywgdGV4dDogXCJUcmFpbmVkIHByb2Zlc3Npb25hbCBzdGFmZlwiIH0sXG4gICAgeyBpY29uOiBTcGFya2xlcywgdGV4dDogXCJFY28tZnJpZW5kbHkgY2xlYW5pbmcgcHJvZHVjdHNcIiB9LFxuICAgIHsgaWNvbjogQXdhcmQsIHRleHQ6IFwiQ29uc2lzdGVudCBxdWFsaXR5IHN0YW5kYXJkc1wiIH0sXG4gICAgeyBpY29uOiBCdWlsZGluZzIsIHRleHQ6IFwiQWxsIGNvbW1lcmNpYWwgcHJvcGVydHkgdHlwZXNcIiB9LFxuICBdO1xuXG4gIGNvbnN0IGluY2x1ZGVkID0gW1xuICAgIFwiRGFpbHkgamFuaXRvcmlhbCBzZXJ2aWNlc1wiLFxuICAgIFwiUmVzdHJvb20gY2xlYW5pbmcgYW5kIHNhbml0aXphdGlvblwiLFxuICAgIFwiQnJlYWsgcm9vbSBhbmQga2l0Y2hlbiBjbGVhbmluZ1wiLFxuICAgIFwiRmxvb3IgY2FyZSBhbmQgbWFpbnRlbmFuY2VcIixcbiAgICBcIldpbmRvdyBhbmQgZ2xhc3MgY2xlYW5pbmdcIixcbiAgICBcIlRyYXNoIHJlbW92YWwgYW5kIHJlY3ljbGluZ1wiLFxuICAgIFwiRHVzdGluZyBhbmQgc3VyZmFjZSBjbGVhbmluZ1wiLFxuICAgIFwiUGVyaW9kaWMgZGVlcCBjbGVhbmluZ1wiLFxuICBdO1xuXG4gIGNvbnN0IGZhcXMgPSBbXG4gICAge1xuICAgICAgcTogXCJXaGF0IHR5cGVzIG9mIGNvbW1lcmNpYWwgcHJvcGVydGllcyBkbyB5b3UgY2xlYW4/XCIsXG4gICAgICBhOiBcIldlIGNsZWFuIG9mZmljZXMsIHJldGFpbCBzcGFjZXMsIG1lZGljYWwgZmFjaWxpdGllcywgY2h1cmNoZXMsIHdhcmVob3VzZXMsIGFuZCBtb3JlLiBObyBjb21tZXJjaWFsIHByb3BlcnR5IGlzIHRvbyBiaWcgb3Igc21hbGwuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHE6IFwiRG8geW91IG9mZmVyIGRhaWx5LCB3ZWVrbHksIG9yIG1vbnRobHkgY2xlYW5pbmc/XCIsXG4gICAgICBhOiBcIlllcywgd2Ugb2ZmZXIgZmxleGlibGUgc2NoZWR1bGluZyBpbmNsdWRpbmcgZGFpbHksIHdlZWtseSwgYmktd2Vla2x5LCBhbmQgbW9udGhseSBjbGVhbmluZyBwbGFucyB0YWlsb3JlZCB0byB5b3VyIG5lZWRzLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBxOiBcIkNhbiB5b3UgY2xlYW4gYWZ0ZXIgYnVzaW5lc3MgaG91cnM/XCIsXG4gICAgICBhOiBcIkFic29sdXRlbHkuIFdlIHdvcmsgYXJvdW5kIHlvdXIgc2NoZWR1bGUgYW5kIGNhbiBjbGVhbiBkdXJpbmcgZXZlbmluZ3MsIHdlZWtlbmRzLCBvciBvdmVybmlnaHQgdG8gbWluaW1pemUgZGlzcnVwdGlvbi5cIlxuICAgIH0sXG4gICAge1xuICAgICAgcTogXCJEbyB5b3UgcHJvdmlkZSB5b3VyIG93biBjbGVhbmluZyBzdXBwbGllcz9cIixcbiAgICAgIGE6IFwiWWVzLCB3ZSBicmluZyBhbGwgbmVjZXNzYXJ5IGNsZWFuaW5nIHN1cHBsaWVzIGFuZCBlcXVpcG1lbnQuIFdlIGNhbiBhbHNvIHVzZSBzcGVjaWZpYyBwcm9kdWN0cyB5b3UgcHJlZmVyIGlmIHJlcXVlc3RlZC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgcTogXCJXaGF0IGFyZWFzIGRvIHlvdSBzZXJ2ZT9cIixcbiAgICAgIGE6IFwiT3VyIGhlYWRxdWFydGVycyBpcyBpbiBBbGJhbnksIE5ZIENhcGl0YWwgUmVnaW9uLCBzZXJ2aW5nIGFsbCBvZiB0aGUgQ2FwaXRhbCBEaXN0cmljdCwgT25lb250YSBhcmVhLCBhbmQgQ2F0c2tpbGwgcmVnaW9uLiBXZSBhbHNvIHNlcnZlIEZsb3JpZGEgKE1pYW1pLCBOYXBsZXMsIEZvcnQgTXllcnMpIGFuZCBOb3J0aCBDYXJvbGluYSAoQ2hhcmxvdHRlLCBSYWxlaWdoLCBHcmVlbnNib3JvKS5cIlxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGJnLXdoaXRlXCI+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGUgcHQtMzIgcGItMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtZGlzcGxheSBmb250LWJvbGQgbWItNFwiPkNvbW1lcmNpYWwgQ2xlYW5pbmcgU2VydmljZXM8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZS84MCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgUHJvZmVzc2lvbmFsIGphbml0b3JpYWwgc2VydmljZXMgZm9yIG9mZmljZXMsIHJldGFpbCwgbWVkaWNhbCBmYWNpbGl0aWVzLCBhbmQgbW9yZS4gU2VydmluZyBBbGJhbnkgQ2FwaXRhbCBSZWdpb24sIE9uZW9udGEsIENhdHNraWxsLCBGbG9yaWRhICYgTm9ydGggQ2Fyb2xpbmEuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgcHktMTZcIj5cbiAgICAgICAgey8qIEJlbmVmaXRzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0yMFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOCB0ZXh0LWNlbnRlclwiPldoeSBDaG9vc2UgT3VyIENvbW1lcmNpYWwgQ2xlYW5pbmc8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgICAge2JlbmVmaXRzLm1hcCgoYmVuZWZpdCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci0wIHNoYWRvdy1zbSBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWxnIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJlbmVmaXQuaWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDBcIj57YmVuZWZpdC50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBXaGF0J3MgSW5jbHVkZWQgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTIwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi04IHRleHQtY2VudGVyXCI+V2hhdCdzIEluY2x1ZGVkPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTQgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIHtpbmNsdWRlZC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHAtNCBiZy1ncmVlbi01MCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1wcmltYXJ5IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBGQVEgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTIwIG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi04IHRleHQtY2VudGVyXCI+RnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvbnM8L2gyPlxuICAgICAgICAgIDxBY2NvcmRpb24gdHlwZT1cInNpbmdsZVwiIGNvbGxhcHNpYmxlIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAge2ZhcXMubWFwKChmYXEsIGkpID0+IChcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0ga2V5PXtpfSB2YWx1ZT17YGl0ZW0tJHtpfWB9PlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25UcmlnZ2VyIGNsYXNzTmFtZT1cInRleHQtbGVmdCBmb250LXNlbWlib2xkXCI+e2ZhcS5xfTwvQWNjb3JkaW9uVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uQ29udGVudCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e2ZhcS5hfTwvQWNjb3JkaW9uQ29udGVudD5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogQ1RBICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmF5LTUwIHJvdW5kZWQtMnhsIHAtMTJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5SZWFkeSBmb3IgUHJvZmVzc2lvbmFsIENvbW1lcmNpYWwgQ2xlYW5pbmc/PC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTggbWF4LXcteGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgQ29udGFjdCB1cyB0b2RheSBmb3IgYSBmcmVlIHF1b3RlIG9uIGNvbW1lcmNpYWwgY2xlYW5pbmcgc2VydmljZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNCBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImJnLVsjRkZEMjNGXSBob3ZlcjpiZy1bI0ZGRDIzRl0vOTAgdGV4dC1ncmF5LTkwMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBHZXQgYSBGcmVlIFF1b3RlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDoxLTgwMC03OTEtNzg0NVwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgMS04MDAtNzkxLTc4NDVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOjUxOC05NDgtNzE1NlwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgKDUxOCkgOTQ4LTcxNTZcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9wYWdlcy9Db21tZXJjaWFsLnRzeCJ9