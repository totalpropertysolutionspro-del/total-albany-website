import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PostConstruction.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/pages/PostConstruction.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Navbar } from "/src/components/layout/Navbar.tsx";
import { Footer } from "/src/components/layout/Footer.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/src/components/ui/accordion.tsx";
import { CheckCircle, Phone, HardHat, Sparkles, Shield, Clock, Award, Building } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { Link } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
export default function PostConstruction() {
  const benefits = [
    { icon: Shield, text: "OSHA-compliant safety standards" },
    { icon: Clock, text: "Meet your tight deadlines" },
    { icon: Building, text: "Commercial and residential projects" },
    { icon: Sparkles, text: "Move-in ready results" },
    { icon: Award, text: "Detailed quality inspections" },
    { icon: HardHat, text: "Experienced construction cleanup crews" }
  ];
  const included = [
    "Rough clean (debris removal, initial sweep)",
    "Final clean (detailed surface cleaning)",
    "Touch-up clean (punch list ready)",
    "Dust and particle removal",
    "Window and glass cleaning",
    "Floor cleaning and polishing",
    "Fixture and appliance cleaning",
    "Exterior cleanup and pressure washing"
  ];
  const faqs = [
    {
      q: "What's the difference between rough, final, and touch-up cleaning?",
      a: "Rough cleaning removes large debris after framing. Final cleaning is a detailed clean after all work is complete. Touch-up cleaning addresses any remaining issues before handover."
    },
    {
      q: "Can you work with our construction schedule?",
      a: "Yes, we coordinate closely with contractors and project managers to fit our cleaning into your timeline without causing delays."
    },
    {
      q: "Do you handle both residential and commercial post-construction?",
      a: "Absolutely. We clean everything from single-family homes to large commercial developments and multi-story buildings."
    },
    {
      q: "What safety measures do you follow?",
      a: "Our crews are OSHA-trained and follow all safety protocols including proper PPE, safe debris disposal, and hazard awareness."
    },
    {
      q: "How soon can you start after construction is complete?",
      a: "We can often mobilize within 24-48 hours for urgent projects. Contact us to discuss your timeline."
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:54:4", "data-component-name": "div", className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:55:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:58:6", "data-component-name": "section", className: "bg-primary text-white pt-32 pb-20", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:59:8", "data-component-name": "div", className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:60:10", "data-component-name": "h1", className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "Post-Construction Cleaning" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:61:10", "data-component-name": "p", className: "text-xl text-white/80 max-w-2xl mx-auto", children: "Rough, final, and touch-up cleaning services to make your construction project move-in ready. Serving Albany Capital Region, Oneonta, Catskill, Florida & North Carolina." }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:67:6", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 py-16", children: [
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:69:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:70:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "Why Choose Our Post-Construction Cleaning" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:71:10", "data-component-name": "div", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: benefits.map(
          (benefit, i) => /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:73:14", "data-component-name": "Card", className: "border-0 shadow-sm bg-gray-50", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:74:16", "data-component-name": "CardContent", className: "p-6 flex items-start gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:75:18", "data-component-name": "div", className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(benefit.icon, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:76:20", "data-component-name": "benefit.icon", className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 95,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:78:18", "data-component-name": "p", className: "font-medium text-gray-800", children: benefit.text }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this) }, i, false, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:86:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:87:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "What's Included" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:88:10", "data-component-name": "div", className: "grid md:grid-cols-2 gap-4 max-w-3xl mx-auto", children: included.map(
          (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:90:14", "data-component-name": "div", className: "flex items-center gap-3 p-4 bg-green-50 rounded-lg", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:91:16", "data-component-name": "CheckCircle", className: "w-5 h-5 text-primary shrink-0" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:92:16", "data-component-name": "span", className: "font-medium", children: item }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:99:8", "data-component-name": "section", className: "mb-20 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:100:10", "data-component-name": "h2", className: "text-3xl font-bold mb-8 text-center", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Accordion, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:101:10", "data-component-name": "Accordion", type: "single", collapsible: true, className: "w-full", children: faqs.map(
          (faq, i) => /* @__PURE__ */ jsxDEV(AccordionItem, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:103:14", "data-component-name": "AccordionItem", value: `item-${i}`, children: [
            /* @__PURE__ */ jsxDEV(AccordionTrigger, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:104:16", "data-component-name": "AccordionTrigger", className: "text-left font-semibold", children: faq.q }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(AccordionContent, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:105:16", "data-component-name": "AccordionContent", className: "text-gray-600", children: faq.a }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:112:8", "data-component-name": "section", className: "text-center bg-gray-50 rounded-2xl p-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:113:10", "data-component-name": "h2", className: "text-3xl font-bold mb-4", children: "Ready for Post-Construction Cleanup?" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:114:10", "data-component-name": "p", className: "text-gray-600 mb-8 max-w-xl mx-auto", children: "Contact us today for a free quote on post-construction cleaning." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:117:10", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:118:12", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:119:14", "data-component-name": "Button", size: "lg", className: "bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold", children: "Get a Free Quote" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:123:12", "data-component-name": "a", href: "tel:1-800-791-7845", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:124:14", "data-component-name": "Button", size: "lg", variant: "outline", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:125:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            "1-800-791-7845"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:129:12", "data-component-name": "a", href: "tel:518-948-7156", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:130:14", "data-component-name": "Button", size: "lg", variant: "outline", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:131:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
              lineNumber: 150,
              columnNumber: 17
            }, this),
            "(518) 948-7156"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-replit-metadata": "client/src/pages/PostConstruction.tsx:139:6", "data-component-name": "Footer" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/PostConstruction.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
_c = PostConstruction;
var _c;
$RefreshReg$(_c, "PostConstruction");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/PostConstruction.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/PostConstruction.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LGlCQUdBLEtBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFLQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFrQkE7QUFBQSxXQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBd0JBO0FBQUEsU0FyRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXNFQTtBQUFBLElBRUEsdUJBQUMsVUFBSywwR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQXJGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBc0ZBO0FBRUo7QUFBQUcsS0FySXdCYjtBQUFnQixJQUFBYTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiTmF2YmFyIiwiRm9vdGVyIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQWNjb3JkaW9uIiwiQWNjb3JkaW9uQ29udGVudCIsIkFjY29yZGlvbkl0ZW0iLCJBY2NvcmRpb25UcmlnZ2VyIiwiQ2hlY2tDaXJjbGUiLCJQaG9uZSIsIkhhcmRIYXQiLCJTcGFya2xlcyIsIlNoaWVsZCIsIkNsb2NrIiwiQXdhcmQiLCJCdWlsZGluZyIsIkxpbmsiLCJQb3N0Q29uc3RydWN0aW9uIiwiYmVuZWZpdHMiLCJpY29uIiwidGV4dCIsImluY2x1ZGVkIiwiZmFxcyIsInEiLCJhIiwibWFwIiwiYmVuZWZpdCIsImkiLCJpdGVtIiwiZmFxIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUG9zdENvbnN0cnVjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9Gb290ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25Db250ZW50LCBBY2NvcmRpb25JdGVtLCBBY2NvcmRpb25UcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hY2NvcmRpb25cIjtcbmltcG9ydCB7IENoZWNrQ2lyY2xlLCBQaG9uZSwgSGFyZEhhdCwgU3BhcmtsZXMsIFNoaWVsZCwgQ2xvY2ssIEF3YXJkLCBCdWlsZGluZyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwid291dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb25zdHJ1Y3Rpb24oKSB7XG4gIGNvbnN0IGJlbmVmaXRzID0gW1xuICAgIHsgaWNvbjogU2hpZWxkLCB0ZXh0OiBcIk9TSEEtY29tcGxpYW50IHNhZmV0eSBzdGFuZGFyZHNcIiB9LFxuICAgIHsgaWNvbjogQ2xvY2ssIHRleHQ6IFwiTWVldCB5b3VyIHRpZ2h0IGRlYWRsaW5lc1wiIH0sXG4gICAgeyBpY29uOiBCdWlsZGluZywgdGV4dDogXCJDb21tZXJjaWFsIGFuZCByZXNpZGVudGlhbCBwcm9qZWN0c1wiIH0sXG4gICAgeyBpY29uOiBTcGFya2xlcywgdGV4dDogXCJNb3ZlLWluIHJlYWR5IHJlc3VsdHNcIiB9LFxuICAgIHsgaWNvbjogQXdhcmQsIHRleHQ6IFwiRGV0YWlsZWQgcXVhbGl0eSBpbnNwZWN0aW9uc1wiIH0sXG4gICAgeyBpY29uOiBIYXJkSGF0LCB0ZXh0OiBcIkV4cGVyaWVuY2VkIGNvbnN0cnVjdGlvbiBjbGVhbnVwIGNyZXdzXCIgfSxcbiAgXTtcblxuICBjb25zdCBpbmNsdWRlZCA9IFtcbiAgICBcIlJvdWdoIGNsZWFuIChkZWJyaXMgcmVtb3ZhbCwgaW5pdGlhbCBzd2VlcClcIixcbiAgICBcIkZpbmFsIGNsZWFuIChkZXRhaWxlZCBzdXJmYWNlIGNsZWFuaW5nKVwiLFxuICAgIFwiVG91Y2gtdXAgY2xlYW4gKHB1bmNoIGxpc3QgcmVhZHkpXCIsXG4gICAgXCJEdXN0IGFuZCBwYXJ0aWNsZSByZW1vdmFsXCIsXG4gICAgXCJXaW5kb3cgYW5kIGdsYXNzIGNsZWFuaW5nXCIsXG4gICAgXCJGbG9vciBjbGVhbmluZyBhbmQgcG9saXNoaW5nXCIsXG4gICAgXCJGaXh0dXJlIGFuZCBhcHBsaWFuY2UgY2xlYW5pbmdcIixcbiAgICBcIkV4dGVyaW9yIGNsZWFudXAgYW5kIHByZXNzdXJlIHdhc2hpbmdcIixcbiAgXTtcblxuICBjb25zdCBmYXFzID0gW1xuICAgIHtcbiAgICAgIHE6IFwiV2hhdCdzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcm91Z2gsIGZpbmFsLCBhbmQgdG91Y2gtdXAgY2xlYW5pbmc/XCIsXG4gICAgICBhOiBcIlJvdWdoIGNsZWFuaW5nIHJlbW92ZXMgbGFyZ2UgZGVicmlzIGFmdGVyIGZyYW1pbmcuIEZpbmFsIGNsZWFuaW5nIGlzIGEgZGV0YWlsZWQgY2xlYW4gYWZ0ZXIgYWxsIHdvcmsgaXMgY29tcGxldGUuIFRvdWNoLXVwIGNsZWFuaW5nIGFkZHJlc3NlcyBhbnkgcmVtYWluaW5nIGlzc3VlcyBiZWZvcmUgaGFuZG92ZXIuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHE6IFwiQ2FuIHlvdSB3b3JrIHdpdGggb3VyIGNvbnN0cnVjdGlvbiBzY2hlZHVsZT9cIixcbiAgICAgIGE6IFwiWWVzLCB3ZSBjb29yZGluYXRlIGNsb3NlbHkgd2l0aCBjb250cmFjdG9ycyBhbmQgcHJvamVjdCBtYW5hZ2VycyB0byBmaXQgb3VyIGNsZWFuaW5nIGludG8geW91ciB0aW1lbGluZSB3aXRob3V0IGNhdXNpbmcgZGVsYXlzLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBxOiBcIkRvIHlvdSBoYW5kbGUgYm90aCByZXNpZGVudGlhbCBhbmQgY29tbWVyY2lhbCBwb3N0LWNvbnN0cnVjdGlvbj9cIixcbiAgICAgIGE6IFwiQWJzb2x1dGVseS4gV2UgY2xlYW4gZXZlcnl0aGluZyBmcm9tIHNpbmdsZS1mYW1pbHkgaG9tZXMgdG8gbGFyZ2UgY29tbWVyY2lhbCBkZXZlbG9wbWVudHMgYW5kIG11bHRpLXN0b3J5IGJ1aWxkaW5ncy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgcTogXCJXaGF0IHNhZmV0eSBtZWFzdXJlcyBkbyB5b3UgZm9sbG93P1wiLFxuICAgICAgYTogXCJPdXIgY3Jld3MgYXJlIE9TSEEtdHJhaW5lZCBhbmQgZm9sbG93IGFsbCBzYWZldHkgcHJvdG9jb2xzIGluY2x1ZGluZyBwcm9wZXIgUFBFLCBzYWZlIGRlYnJpcyBkaXNwb3NhbCwgYW5kIGhhemFyZCBhd2FyZW5lc3MuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHE6IFwiSG93IHNvb24gY2FuIHlvdSBzdGFydCBhZnRlciBjb25zdHJ1Y3Rpb24gaXMgY29tcGxldGU/XCIsXG4gICAgICBhOiBcIldlIGNhbiBvZnRlbiBtb2JpbGl6ZSB3aXRoaW4gMjQtNDggaG91cnMgZm9yIHVyZ2VudCBwcm9qZWN0cy4gQ29udGFjdCB1cyB0byBkaXNjdXNzIHlvdXIgdGltZWxpbmUuXCJcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBiZy13aGl0ZVwiPlxuICAgICAgPE5hdmJhciAvPlxuXG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHB0LTMyIHBiLTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWRpc3BsYXkgZm9udC1ib2xkIG1iLTRcIj5Qb3N0LUNvbnN0cnVjdGlvbiBDbGVhbmluZzwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlLzgwIG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICBSb3VnaCwgZmluYWwsIGFuZCB0b3VjaC11cCBjbGVhbmluZyBzZXJ2aWNlcyB0byBtYWtlIHlvdXIgY29uc3RydWN0aW9uIHByb2plY3QgbW92ZS1pbiByZWFkeS4gU2VydmluZyBBbGJhbnkgQ2FwaXRhbCBSZWdpb24sIE9uZW9udGEsIENhdHNraWxsLCBGbG9yaWRhICYgTm9ydGggQ2Fyb2xpbmEuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgcHktMTZcIj5cbiAgICAgICAgey8qIEJlbmVmaXRzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0yMFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOCB0ZXh0LWNlbnRlclwiPldoeSBDaG9vc2UgT3VyIFBvc3QtQ29uc3RydWN0aW9uIENsZWFuaW5nPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtiZW5lZml0cy5tYXAoKGJlbmVmaXQsIGkpID0+IChcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXItMCBzaGFkb3ctc20gYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1sZyBiZy1wcmltYXJ5LzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiZW5lZml0Lmljb24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwXCI+e2JlbmVmaXQudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogV2hhdCdzIEluY2x1ZGVkICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0yMFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOCB0ZXh0LWNlbnRlclwiPldoYXQncyBJbmNsdWRlZDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC00IG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICB7aW5jbHVkZWQubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBwLTQgYmctZ3JlZW4tNTAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcHJpbWFyeSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogRkFRICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0yMCBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOCB0ZXh0LWNlbnRlclwiPkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zPC9oMj5cbiAgICAgICAgICA8QWNjb3JkaW9uIHR5cGU9XCJzaW5nbGVcIiBjb2xsYXBzaWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIHtmYXFzLm1hcCgoZmFxLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIGtleT17aX0gdmFsdWU9e2BpdGVtLSR7aX1gfT5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uVHJpZ2dlciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgZm9udC1zZW1pYm9sZFwiPntmYXEucX08L0FjY29yZGlvblRyaWdnZXI+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPntmYXEuYX08L0FjY29yZGlvbkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIENUQSAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JheS01MCByb3VuZGVkLTJ4bCBwLTEyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+UmVhZHkgZm9yIFBvc3QtQ29uc3RydWN0aW9uIENsZWFudXA/PC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTggbWF4LXcteGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgQ29udGFjdCB1cyB0b2RheSBmb3IgYSBmcmVlIHF1b3RlIG9uIHBvc3QtY29uc3RydWN0aW9uIGNsZWFuaW5nLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQganVzdGlmeS1jZW50ZXIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJiZy1bI0ZGRDIzRl0gaG92ZXI6YmctWyNGRkQyM0ZdLzkwIHRleHQtZ3JheS05MDAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgR2V0IGEgRnJlZSBRdW90ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MS04MDAtNzkxLTc4NDVcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgIDEtODAwLTc5MS03ODQ1XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDo1MTgtOTQ4LTcxNTZcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICg1MTgpIDk0OC03MTU2XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvcGFnZXMvUG9zdENvbnN0cnVjdGlvbi50c3gifQ==