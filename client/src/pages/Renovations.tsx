import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Renovations.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/pages/Renovations.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Navbar } from "/src/components/layout/Navbar.tsx";
import { Footer } from "/src/components/layout/Footer.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/src/components/ui/accordion.tsx";
import { CheckCircle, Phone, Wrench, Paintbrush, Home, Shield, Clock, Award } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { Link } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
export default function Renovations() {
  const benefits = [
    { icon: Shield, text: "Licensed and insured contractors" },
    { icon: Clock, text: "Fast turnaround for urgent projects" },
    { icon: Home, text: "Residential and commercial properties" },
    { icon: Paintbrush, text: "Professional painting services" },
    { icon: Award, text: "Quality workmanship guaranteed" },
    { icon: Wrench, text: "Minor to major repairs handled" }
  ];
  const included = [
    "Interior and exterior painting",
    "Drywall repair and patching",
    "Flooring installation and repair",
    "Cabinet refinishing",
    "Fixture replacement",
    "Door and window repairs",
    "Bathroom and kitchen updates",
    "Make-ready services for rentals"
  ];
  const faqs = [
    {
      q: "What types of renovations do you handle?",
      a: "We handle a wide range of renovations including painting, flooring, drywall, fixtures, and general make-ready services for residential and commercial properties."
    },
    {
      q: "Do you work with property managers?",
      a: "Yes, we frequently partner with property managers for turnover services, make-ready work, and ongoing maintenance needs."
    },
    {
      q: "How quickly can you complete a renovation project?",
      a: "Timelines vary based on scope, but we pride ourselves on fast turnaround. Simple make-ready projects can often be completed in 1-3 days."
    },
    {
      q: "Do you provide free estimates?",
      a: "Absolutely. We offer free on-site estimates for all renovation projects so you know exactly what to expect."
    },
    {
      q: "What areas do you serve?",
      a: "Our headquarters is in Albany, NY Capital Region, serving all of the Capital District, Oneonta area, and Catskill region. We also serve Florida (Miami, Naples, Fort Myers) and North Carolina (Charlotte, Raleigh, Greensboro)."
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Renovations.tsx:54:4", "data-component-name": "div", className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "client/src/pages/Renovations.tsx:55:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Renovations.tsx:58:6", "data-component-name": "section", className: "bg-primary text-white pt-32 pb-20", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Renovations.tsx:59:8", "data-component-name": "div", className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/pages/Renovations.tsx:60:10", "data-component-name": "h1", className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "Renovations & Make-Ready Repairs" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Renovations.tsx:61:10", "data-component-name": "p", className: "text-xl text-white/80 max-w-2xl mx-auto", children: "Professional renovation and repair services to keep your properties in top condition. Serving Albany Capital Region, Oneonta, Catskill, Florida & North Carolina." }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Renovations.tsx:67:6", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 py-16", children: [
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Renovations.tsx:69:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Renovations.tsx:70:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "Why Choose Our Renovation Services" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Renovations.tsx:71:10", "data-component-name": "div", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: benefits.map(
          (benefit, i) => /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/Renovations.tsx:73:14", "data-component-name": "Card", className: "border-0 shadow-sm bg-gray-50", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/Renovations.tsx:74:16", "data-component-name": "CardContent", className: "p-6 flex items-start gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Renovations.tsx:75:18", "data-component-name": "div", className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(benefit.icon, { "data-replit-metadata": "client/src/pages/Renovations.tsx:76:20", "data-component-name": "benefit.icon", className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 95,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Renovations.tsx:78:18", "data-component-name": "p", className: "font-medium text-gray-800", children: benefit.text }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this) }, i, false, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Renovations.tsx:86:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Renovations.tsx:87:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "What's Included" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Renovations.tsx:88:10", "data-component-name": "div", className: "grid md:grid-cols-2 gap-4 max-w-3xl mx-auto", children: included.map(
          (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Renovations.tsx:90:14", "data-component-name": "div", className: "flex items-center gap-3 p-4 bg-green-50 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { "data-replit-metadata": "client/src/pages/Renovations.tsx:91:16", "data-component-name": "CheckCircle", className: "w-5 h-5 text-primary shrink-0" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Renovations.tsx:92:16", "data-component-name": "span", className: "font-medium", children: item }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Renovations.tsx:99:8", "data-component-name": "section", className: "mb-20 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Renovations.tsx:100:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Accordion, { "data-replit-metadata": "client/src/pages/Renovations.tsx:101:10", "data-component-name": "Accordion", type: "single", collapsible: true, className: "w-full", children: faqs.map(
          (faq, i) => /* @__PURE__ */ jsxDEV(AccordionItem, { "data-replit-metadata": "client/src/pages/Renovations.tsx:103:14", "data-component-name": "AccordionItem", value: `item-${i}`, children: [
            /* @__PURE__ */ jsxDEV(AccordionTrigger, { "data-replit-metadata": "client/src/pages/Renovations.tsx:104:16", "data-component-name": "AccordionTrigger", className: "text-left font-semibold", children: faq.q }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(AccordionContent, { "data-replit-metadata": "client/src/pages/Renovations.tsx:105:16", "data-component-name": "AccordionContent", className: "text-gray-600", children: faq.a }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Renovations.tsx:112:8", "data-component-name": "section", className: "text-center bg-gray-50 rounded-2xl p-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Renovations.tsx:113:10", "data-component-name": "h2", className: "text-3xl font-bold mb-4", children: "Ready to Start Your Renovation?" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Renovations.tsx:114:10", "data-component-name": "p", className: "text-gray-600 mb-8 max-w-xl mx-auto", children: "Contact us today for a free quote on renovation services." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Renovations.tsx:117:10", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Renovations.tsx:118:12", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Renovations.tsx:119:14", "data-component-name": "Button", size: "lg", className: "bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold", children: "Get a Free Quote" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Renovations.tsx:123:12", "data-component-name": "a", href: "tel:1-800-791-7845", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Renovations.tsx:124:14", "data-component-name": "Button", size: "lg", variant: "outline", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Renovations.tsx:125:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            "1-800-791-7845"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Renovations.tsx:129:12", "data-component-name": "a", href: "tel:518-948-7156", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Renovations.tsx:130:14", "data-component-name": "Button", size: "lg", variant: "outline", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Renovations.tsx:131:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
              lineNumber: 150,
              columnNumber: 17
            }, this),
            "(518) 948-7156"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-replit-metadata": "client/src/pages/Renovations.tsx:139:6", "data-component-name": "Footer" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/Renovations.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
_c = Renovations;
var _c;
$RefreshReg$(_c, "Renovations");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/Renovations.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/Renovations.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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R0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUtBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWtCQTtBQUFBLFdBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF3QkE7QUFBQSxTQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBc0VBO0FBQUEsSUFFQSx1QkFBQyxVQUFLLHFHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLE9BckZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FzRkE7QUFFSjtBQUFBRyxLQXJJd0JiO0FBQVcsSUFBQWE7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkFjY29yZGlvbiIsIkFjY29yZGlvbkNvbnRlbnQiLCJBY2NvcmRpb25JdGVtIiwiQWNjb3JkaW9uVHJpZ2dlciIsIkNoZWNrQ2lyY2xlIiwiUGhvbmUiLCJXcmVuY2giLCJQYWludGJydXNoIiwiSG9tZSIsIlNoaWVsZCIsIkNsb2NrIiwiQXdhcmQiLCJMaW5rIiwiUmVub3ZhdGlvbnMiLCJiZW5lZml0cyIsImljb24iLCJ0ZXh0IiwiaW5jbHVkZWQiLCJmYXFzIiwicSIsImEiLCJtYXAiLCJiZW5lZml0IiwiaSIsIml0ZW0iLCJmYXEiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJSZW5vdmF0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9Gb290ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25Db250ZW50LCBBY2NvcmRpb25JdGVtLCBBY2NvcmRpb25UcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hY2NvcmRpb25cIjtcbmltcG9ydCB7IENoZWNrQ2lyY2xlLCBQaG9uZSwgV3JlbmNoLCBQYWludGJydXNoLCBIb21lLCBTaGllbGQsIENsb2NrLCBBd2FyZCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwid291dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbm92YXRpb25zKCkge1xuICBjb25zdCBiZW5lZml0cyA9IFtcbiAgICB7IGljb246IFNoaWVsZCwgdGV4dDogXCJMaWNlbnNlZCBhbmQgaW5zdXJlZCBjb250cmFjdG9yc1wiIH0sXG4gICAgeyBpY29uOiBDbG9jaywgdGV4dDogXCJGYXN0IHR1cm5hcm91bmQgZm9yIHVyZ2VudCBwcm9qZWN0c1wiIH0sXG4gICAgeyBpY29uOiBIb21lLCB0ZXh0OiBcIlJlc2lkZW50aWFsIGFuZCBjb21tZXJjaWFsIHByb3BlcnRpZXNcIiB9LFxuICAgIHsgaWNvbjogUGFpbnRicnVzaCwgdGV4dDogXCJQcm9mZXNzaW9uYWwgcGFpbnRpbmcgc2VydmljZXNcIiB9LFxuICAgIHsgaWNvbjogQXdhcmQsIHRleHQ6IFwiUXVhbGl0eSB3b3JrbWFuc2hpcCBndWFyYW50ZWVkXCIgfSxcbiAgICB7IGljb246IFdyZW5jaCwgdGV4dDogXCJNaW5vciB0byBtYWpvciByZXBhaXJzIGhhbmRsZWRcIiB9LFxuICBdO1xuXG4gIGNvbnN0IGluY2x1ZGVkID0gW1xuICAgIFwiSW50ZXJpb3IgYW5kIGV4dGVyaW9yIHBhaW50aW5nXCIsXG4gICAgXCJEcnl3YWxsIHJlcGFpciBhbmQgcGF0Y2hpbmdcIixcbiAgICBcIkZsb29yaW5nIGluc3RhbGxhdGlvbiBhbmQgcmVwYWlyXCIsXG4gICAgXCJDYWJpbmV0IHJlZmluaXNoaW5nXCIsXG4gICAgXCJGaXh0dXJlIHJlcGxhY2VtZW50XCIsXG4gICAgXCJEb29yIGFuZCB3aW5kb3cgcmVwYWlyc1wiLFxuICAgIFwiQmF0aHJvb20gYW5kIGtpdGNoZW4gdXBkYXRlc1wiLFxuICAgIFwiTWFrZS1yZWFkeSBzZXJ2aWNlcyBmb3IgcmVudGFsc1wiLFxuICBdO1xuXG4gIGNvbnN0IGZhcXMgPSBbXG4gICAge1xuICAgICAgcTogXCJXaGF0IHR5cGVzIG9mIHJlbm92YXRpb25zIGRvIHlvdSBoYW5kbGU/XCIsXG4gICAgICBhOiBcIldlIGhhbmRsZSBhIHdpZGUgcmFuZ2Ugb2YgcmVub3ZhdGlvbnMgaW5jbHVkaW5nIHBhaW50aW5nLCBmbG9vcmluZywgZHJ5d2FsbCwgZml4dHVyZXMsIGFuZCBnZW5lcmFsIG1ha2UtcmVhZHkgc2VydmljZXMgZm9yIHJlc2lkZW50aWFsIGFuZCBjb21tZXJjaWFsIHByb3BlcnRpZXMuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHE6IFwiRG8geW91IHdvcmsgd2l0aCBwcm9wZXJ0eSBtYW5hZ2Vycz9cIixcbiAgICAgIGE6IFwiWWVzLCB3ZSBmcmVxdWVudGx5IHBhcnRuZXIgd2l0aCBwcm9wZXJ0eSBtYW5hZ2VycyBmb3IgdHVybm92ZXIgc2VydmljZXMsIG1ha2UtcmVhZHkgd29yaywgYW5kIG9uZ29pbmcgbWFpbnRlbmFuY2UgbmVlZHMuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHE6IFwiSG93IHF1aWNrbHkgY2FuIHlvdSBjb21wbGV0ZSBhIHJlbm92YXRpb24gcHJvamVjdD9cIixcbiAgICAgIGE6IFwiVGltZWxpbmVzIHZhcnkgYmFzZWQgb24gc2NvcGUsIGJ1dCB3ZSBwcmlkZSBvdXJzZWx2ZXMgb24gZmFzdCB0dXJuYXJvdW5kLiBTaW1wbGUgbWFrZS1yZWFkeSBwcm9qZWN0cyBjYW4gb2Z0ZW4gYmUgY29tcGxldGVkIGluIDEtMyBkYXlzLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBxOiBcIkRvIHlvdSBwcm92aWRlIGZyZWUgZXN0aW1hdGVzP1wiLFxuICAgICAgYTogXCJBYnNvbHV0ZWx5LiBXZSBvZmZlciBmcmVlIG9uLXNpdGUgZXN0aW1hdGVzIGZvciBhbGwgcmVub3ZhdGlvbiBwcm9qZWN0cyBzbyB5b3Uga25vdyBleGFjdGx5IHdoYXQgdG8gZXhwZWN0LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBxOiBcIldoYXQgYXJlYXMgZG8geW91IHNlcnZlP1wiLFxuICAgICAgYTogXCJPdXIgaGVhZHF1YXJ0ZXJzIGlzIGluIEFsYmFueSwgTlkgQ2FwaXRhbCBSZWdpb24sIHNlcnZpbmcgYWxsIG9mIHRoZSBDYXBpdGFsIERpc3RyaWN0LCBPbmVvbnRhIGFyZWEsIGFuZCBDYXRza2lsbCByZWdpb24uIFdlIGFsc28gc2VydmUgRmxvcmlkYSAoTWlhbWksIE5hcGxlcywgRm9ydCBNeWVycykgYW5kIE5vcnRoIENhcm9saW5hIChDaGFybG90dGUsIFJhbGVpZ2gsIEdyZWVuc2Jvcm8pLlwiXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgYmctd2hpdGVcIj5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdGV4dC13aGl0ZSBwdC0zMiBwYi0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1kaXNwbGF5IGZvbnQtYm9sZCBtYi00XCI+UmVub3ZhdGlvbnMgJiBNYWtlLVJlYWR5IFJlcGFpcnM8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZS84MCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgUHJvZmVzc2lvbmFsIHJlbm92YXRpb24gYW5kIHJlcGFpciBzZXJ2aWNlcyB0byBrZWVwIHlvdXIgcHJvcGVydGllcyBpbiB0b3AgY29uZGl0aW9uLiBTZXJ2aW5nIEFsYmFueSBDYXBpdGFsIFJlZ2lvbiwgT25lb250YSwgQ2F0c2tpbGwsIEZsb3JpZGEgJiBOb3J0aCBDYXJvbGluYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNiBweS0xNlwiPlxuICAgICAgICB7LyogQmVuZWZpdHMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTIwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi04IHRleHQtY2VudGVyXCI+V2h5IENob29zZSBPdXIgUmVub3ZhdGlvbiBTZXJ2aWNlczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7YmVuZWZpdHMubWFwKChiZW5lZml0LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyLTAgc2hhZG93LXNtIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IGZsZXggaXRlbXMtc3RhcnQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtbGcgYmctcHJpbWFyeS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YmVuZWZpdC5pY29uIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMFwiPntiZW5lZml0LnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFdoYXQncyBJbmNsdWRlZCAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMjBcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTggdGV4dC1jZW50ZXJcIj5XaGF0J3MgSW5jbHVkZWQ8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtNCBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAge2luY2x1ZGVkLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC00IGJnLWdyZWVuLTUwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXByaW1hcnkgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIEZBUSAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMjAgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTggdGV4dC1jZW50ZXJcIj5GcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uczwvaDI+XG4gICAgICAgICAgPEFjY29yZGlvbiB0eXBlPVwic2luZ2xlXCIgY29sbGFwc2libGUgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICB7ZmFxcy5tYXAoKGZhcSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBrZXk9e2l9IHZhbHVlPXtgaXRlbS0ke2l9YH0+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvblRyaWdnZXIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGZvbnQtc2VtaWJvbGRcIj57ZmFxLnF9PC9BY2NvcmRpb25UcmlnZ2VyPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57ZmFxLmF9PC9BY2NvcmRpb25Db250ZW50PlxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBDVEEgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyYXktNTAgcm91bmRlZC0yeGwgcC0xMlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlJlYWR5IHRvIFN0YXJ0IFlvdXIgUmVub3ZhdGlvbj88L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItOCBtYXgtdy14bCBteC1hdXRvXCI+XG4gICAgICAgICAgICBDb250YWN0IHVzIHRvZGF5IGZvciBhIGZyZWUgcXVvdGUgb24gcmVub3ZhdGlvbiBzZXJ2aWNlcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00IGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiYmctWyNGRkQyM0ZdIGhvdmVyOmJnLVsjRkZEMjNGXS85MCB0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIEdldCBhIEZyZWUgUXVvdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOjEtODAwLTc5MS03ODQ1XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy01IGgtNSBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAxLTgwMC03OTEtNzg0NVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6NTE4LTk0OC03MTU2XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy01IGgtNSBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAoNTE4KSA5NDgtNzE1NlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL3BhZ2VzL1Jlbm92YXRpb25zLnRzeCJ9