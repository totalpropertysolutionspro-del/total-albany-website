import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/pages/Home.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Navbar } from "/src/components/layout/Navbar.tsx";
import { Footer } from "/src/components/layout/Footer.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { School, Wrench, HardHat, Building2, MapPin, Phone, CheckCircle, ArrowRight, ClipboardCheck, Users, Award, Clock } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { Link } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
import { motion } from "/@fs/home/runner/workspace/node_modules/.vite/deps/framer-motion.js?v=ff68c9af";
export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:26:4", "data-component-name": "div", className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "client/src/pages/Home.tsx:27:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Home.tsx:30:6", "data-component-name": "section", className: "relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:31:8", "data-component-name": "div", className: "container relative z-10 mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:32:10", "data-component-name": "div", className: "max-w-4xl", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "client/src/pages/Home.tsx:33:12",
        "data-component-name": "motion.div",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:38:14", "data-component-name": "div", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20", children: [
            /* @__PURE__ */ jsxDEV(Clock, { "data-replit-metadata": "client/src/pages/Home.tsx:39:16", "data-component-name": "Clock", className: "w-4 h-4" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 58,
              columnNumber: 17
            }, this),
            "Open 24/7"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/pages/Home.tsx:42:14", "data-component-name": "h1", className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-gray-900 mb-6", children: "Your Complete Property Solution" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:45:14", "data-component-name": "p", className: "text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed", children: "Cleaning, painting, renovations, and facility maintenance—all from one trusted provider. Headquartered in Albany, NY Capital Region. Also serving Florida & North Carolina." }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:49:14", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Home.tsx:50:16", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Home.tsx:51:18", "data-component-name": "Button", size: "lg", className: "w-full sm:w-auto bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold text-lg px-8 py-6 shadow-lg", "data-testid": "button-hero-quote", children: "Get a Free Quote" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Home.tsx:55:16", "data-component-name": "a", href: "tel:1-800-791-7845", "data-testid": "link-hero-phone", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Home.tsx:56:18", "data-component-name": "Button", size: "lg", variant: "outline", className: "w-full sm:w-auto text-lg px-8 py-6", children: [
              /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Home.tsx:57:20", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 76,
                columnNumber: 21
              }, this),
              "1-800-791-7845"
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Home.tsx:61:16", "data-component-name": "a", href: "tel:518-948-7156", "data-testid": "link-hero-phone-local", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Home.tsx:62:18", "data-component-name": "Button", size: "lg", variant: "outline", className: "w-full sm:w-auto text-lg px-8 py-6", children: [
              /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Home.tsx:63:20", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 82,
                columnNumber: 21
              }, this),
              "(518) 948-7156"
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 52,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Home.tsx:74:6", "data-component-name": "section", className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:75:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:76:10", "data-component-name": "div", className: "text-center max-w-3xl mx-auto mb-12", children: /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Home.tsx:77:12", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4", children: "What We Do" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "client/src/pages/Home.tsx:80:10",
          "data-component-name": "motion.div",
          variants: container,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "client/src/pages/Home.tsx:87:12", "data-component-name": "motion.div", variants: item, children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Home.tsx:88:14", "data-component-name": "Link", href: "/student-housing", "data-testid": "link-student-housing", children: /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/Home.tsx:89:16", "data-component-name": "Card", className: "group cursor-pointer h-full border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl", "data-testid": "card-student-housing", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/Home.tsx:90:18", "data-component-name": "CardContent", className: "p-8 text-center", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:91:20", "data-component-name": "div", className: "w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsxDEV(School, { "data-replit-metadata": "client/src/pages/Home.tsx:92:22", "data-component-name": "School", className: "w-10 h-10 text-primary group-hover:text-white transition-colors" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 111,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 110,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Home.tsx:94:20", "data-component-name": "h3", className: "text-2xl font-bold mb-3", children: "Student Housing Turns" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:95:20", "data-component-name": "p", className: "text-gray-600 mb-4", children: "Fast, inspection-ready unit turns for dorms and student apartments." }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 114,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Home.tsx:96:20", "data-component-name": "span", className: "inline-flex items-center text-primary font-semibold", children: [
                "Learn More ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { "data-replit-metadata": "client/src/pages/Home.tsx:97:33", "data-component-name": "ArrowRight", className: "w-4 h-4 ml-1" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                  lineNumber: 116,
                  columnNumber: 34
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 115,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 109,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 107,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "client/src/pages/Home.tsx:104:12", "data-component-name": "motion.div", variants: item, children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Home.tsx:105:14", "data-component-name": "Link", href: "/renovations", "data-testid": "link-renovations", children: /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/Home.tsx:106:16", "data-component-name": "Card", className: "group cursor-pointer h-full border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl", "data-testid": "card-renovations", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/Home.tsx:107:18", "data-component-name": "CardContent", className: "p-8 text-center", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:108:20", "data-component-name": "div", className: "w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsxDEV(Wrench, { "data-replit-metadata": "client/src/pages/Home.tsx:109:22", "data-component-name": "Wrench", className: "w-10 h-10 text-primary group-hover:text-white transition-colors" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 128,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 127,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Home.tsx:111:20", "data-component-name": "h3", className: "text-2xl font-bold mb-3", children: "Renovations & Repairs" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 130,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:112:20", "data-component-name": "p", className: "text-gray-600 mb-4", children: "Make-ready services including painting, repairs, and property improvements." }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 131,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Home.tsx:113:20", "data-component-name": "span", className: "inline-flex items-center text-primary font-semibold", children: [
                "Learn More ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { "data-replit-metadata": "client/src/pages/Home.tsx:114:33", "data-component-name": "ArrowRight", className: "w-4 h-4 ml-1" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                  lineNumber: 133,
                  columnNumber: 34
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 132,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 126,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 125,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 124,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 123,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "client/src/pages/Home.tsx:121:12", "data-component-name": "motion.div", variants: item, children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Home.tsx:122:14", "data-component-name": "Link", href: "/post-construction", "data-testid": "link-post-construction", children: /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/Home.tsx:123:16", "data-component-name": "Card", className: "group cursor-pointer h-full border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl", "data-testid": "card-post-construction", children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/Home.tsx:124:18", "data-component-name": "CardContent", className: "p-8 text-center", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:125:20", "data-component-name": "div", className: "w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsxDEV(HardHat, { "data-replit-metadata": "client/src/pages/Home.tsx:126:22", "data-component-name": "HardHat", className: "w-10 h-10 text-primary group-hover:text-white transition-colors" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 145,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 144,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Home.tsx:128:20", "data-component-name": "h3", className: "text-2xl font-bold mb-3", children: "Post-Construction Cleaning" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 147,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:129:20", "data-component-name": "p", className: "text-gray-600 mb-4", children: "Rough, final, and touch-up cleaning after construction or renovation projects." }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 148,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Home.tsx:130:20", "data-component-name": "span", className: "inline-flex items-center text-primary font-semibold", children: [
                "Learn More ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { "data-replit-metadata": "client/src/pages/Home.tsx:131:33", "data-component-name": "ArrowRight", className: "w-4 h-4 ml-1" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                  lineNumber: 150,
                  columnNumber: 34
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
                lineNumber: 149,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 143,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
              lineNumber: 140,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 99,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Home.tsx:142:6", "data-component-name": "section", className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:143:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:144:10", "data-component-name": "div", className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Home.tsx:145:12", "data-component-name": "h2", className: "text-2xl font-bold mb-8 text-center", children: "Additional Services" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:146:12", "data-component-name": "div", className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:147:14", "data-component-name": "div", className: "flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { "data-replit-metadata": "client/src/pages/Home.tsx:148:16", "data-component-name": "CheckCircle", className: "w-6 h-6 text-primary shrink-0" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Home.tsx:149:16", "data-component-name": "span", className: "font-medium", children: "Facility Maintenance" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:151:14", "data-component-name": "div", className: "flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { "data-replit-metadata": "client/src/pages/Home.tsx:152:16", "data-component-name": "CheckCircle", className: "w-6 h-6 text-primary shrink-0" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Home.tsx:153:16", "data-component-name": "span", className: "font-medium", children: "Commercial Janitorial" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 170,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:155:14", "data-component-name": "div", className: "flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { "data-replit-metadata": "client/src/pages/Home.tsx:156:16", "data-component-name": "CheckCircle", className: "w-6 h-6 text-primary shrink-0" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Home.tsx:157:16", "data-component-name": "span", className: "font-medium", children: "Flooring + Painting" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 163,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Home.tsx:165:6", "data-component-name": "section", className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:166:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:167:10", "data-component-name": "div", className: "text-center max-w-3xl mx-auto mb-12", children: /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Home.tsx:168:12", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4", children: "How It Works" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:171:10", "data-component-name": "div", className: "grid md:grid-cols-4 gap-8 max-w-5xl mx-auto", children: [
        { step: "1", title: "Scope Walkthrough", desc: "We assess your needs and provide a quick quote", icon: ClipboardCheck },
        { step: "2", title: "Schedule & Crew", desc: "We assign dedicated team members to your project", icon: Users },
        { step: "3", title: "Work Completed", desc: "Cleaning or renovation work is executed professionally", icon: Wrench },
        { step: "4", title: "Quality Check", desc: "Final inspection and closeout to ensure satisfaction", icon: Award }
      ].map(
        (item2, i) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:178:14", "data-component-name": "div", className: "text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:179:16", "data-component-name": "div", className: "w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold", children: item2.step }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 198,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Home.tsx:182:16", "data-component-name": "h3", className: "text-lg font-bold mb-2", children: item2.title }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:183:16", "data-component-name": "p", className: "text-gray-600 text-sm", children: item2.desc }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 202,
            columnNumber: 17
          }, this)
        ] }, i, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Home.tsx:191:6", "data-component-name": "section", className: "py-20 bg-primary text-white", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:192:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:193:10", "data-component-name": "div", className: "text-center max-w-3xl mx-auto mb-12", children: /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Home.tsx:194:12", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4", children: "Service Areas" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 213,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:197:10", "data-component-name": "div", className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:198:12", "data-component-name": "div", className: "bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm border-2 border-white/30", children: [
          /* @__PURE__ */ jsxDEV(Building2, { "data-replit-metadata": "client/src/pages/Home.tsx:199:14", "data-component-name": "Building2", className: "w-10 h-10 mx-auto mb-4" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Home.tsx:200:14", "data-component-name": "h3", className: "text-xl font-bold mb-2", children: "Albany Capital Region" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:201:14", "data-component-name": "p", className: "text-white/80 text-sm", children: "Headquarters - Albany, Schenectady, Saratoga & More" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:203:12", "data-component-name": "div", className: "bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/pages/Home.tsx:204:14", "data-component-name": "MapPin", className: "w-10 h-10 mx-auto mb-4" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Home.tsx:205:14", "data-component-name": "h3", className: "text-xl font-bold mb-2", children: "Oneonta Area" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 224,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:206:14", "data-component-name": "p", className: "text-white/80 text-sm", children: "Otsego County, Cooperstown, Sidney" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 225,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 222,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:208:12", "data-component-name": "div", className: "bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/pages/Home.tsx:209:14", "data-component-name": "MapPin", className: "w-10 h-10 mx-auto mb-4" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 228,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Home.tsx:210:14", "data-component-name": "h3", className: "text-xl font-bold mb-2", children: "Catskill Region" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 229,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:211:14", "data-component-name": "p", className: "text-white/80 text-sm", children: "Delaware, Ulster, Sullivan Counties" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:213:12", "data-component-name": "div", className: "bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/pages/Home.tsx:214:14", "data-component-name": "MapPin", className: "w-10 h-10 mx-auto mb-4" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 233,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Home.tsx:215:14", "data-component-name": "h3", className: "text-xl font-bold mb-2", children: "Florida & NC" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 234,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:216:14", "data-component-name": "p", className: "text-white/80 text-sm", children: "Miami, Naples, Charlotte, Raleigh" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 235,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 232,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 211,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Home.tsx:223:6", "data-component-name": "section", className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:224:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Home.tsx:225:10", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4", children: "Ready to Get Started?" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 244,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Home.tsx:226:10", "data-component-name": "p", className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto", children: "Contact us today for a free quote. We're available 24/7 to discuss your project needs." }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Home.tsx:229:10", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Home.tsx:230:12", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Home.tsx:231:14", "data-component-name": "Button", size: "lg", className: "bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold text-lg px-8 py-6 shadow-lg", children: "Get a Free Quote" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Home.tsx:235:12", "data-component-name": "a", href: "tel:1-800-791-7845", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Home.tsx:236:14", "data-component-name": "Button", size: "lg", variant: "outline", className: "text-lg px-8 py-6", children: [
          /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Home.tsx:237:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
            lineNumber: 256,
            columnNumber: 17
          }, this),
          "Call 1-800-791-7845"
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 255,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 243,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 242,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-replit-metadata": "client/src/pages/Home.tsx:245:6", "data-component-name": "Footer" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
      lineNumber: 264,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/Home.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/Home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/Home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QThDLHNHQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxNQUNBLHVCQUFDLFNBQUUsMEZBQUUsV0FBVSxrREFDYjtBQUFBLCtCQUFDLFFBQUcsMkZBQUUsTUFBSyxZQUNULGlDQUFDLFVBQUssNkZBQUUsTUFBSyxNQUFLLFdBQVUsMEZBQXdGLGdDQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSUE7QUFBQSxRQUNBLHVCQUFDLCtGQUFFLE1BQUssc0JBQ04saUNBQUMsVUFBSyw2RkFBRSxNQUFLLE1BQUssU0FBUSxXQUFVLFdBQVUscUJBQzVDO0FBQUEsaUNBQUMsU0FBSSw0RkFBRSxXQUFVLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUErQjtBQUFBO0FBQUEsYUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUdBLEtBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUtBO0FBQUEsV0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWUE7QUFBQSxTQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBa0JBLEtBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FvQkE7QUFBQSxJQUVBLHVCQUFDLFVBQUssOEZBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPO0FBQUEsT0EzTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTROQTtBQUVKO0FBQUFDLEtBL093QmxCO0FBQUksSUFBQWtCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJOYXZiYXIiLCJGb290ZXIiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJTY2hvb2wiLCJXcmVuY2giLCJIYXJkSGF0IiwiQnVpbGRpbmcyIiwiTWFwUGluIiwiUGhvbmUiLCJDaGVja0NpcmNsZSIsIkFycm93UmlnaHQiLCJDbGlwYm9hcmRDaGVjayIsIlVzZXJzIiwiQXdhcmQiLCJDbG9jayIsIkxpbmsiLCJtb3Rpb24iLCJIb21lIiwiY29udGFpbmVyIiwiaGlkZGVuIiwib3BhY2l0eSIsInNob3ciLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiaXRlbSIsInkiLCJkdXJhdGlvbiIsImVhc2UiLCJvbmNlIiwic3RlcCIsInRpdGxlIiwiZGVzYyIsImljb24iLCJtYXAiLCJpIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9Gb290ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgU2Nob29sLCBXcmVuY2gsIEhhcmRIYXQsIEJ1aWxkaW5nMiwgTWFwUGluLCBQaG9uZSwgQ2hlY2tDaXJjbGUsIEFycm93UmlnaHQsIENsaXBib2FyZENoZWNrLCBVc2VycywgQXdhcmQsIENsb2NrIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJ3b3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICAgIHNob3c6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDIwIH0sXG4gICAgc2hvdzogeyBvcGFjaXR5OiAxLCB5OiAwIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgYmctd2hpdGVcIj5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgey8qIEhlcm8gU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLVs4NXZoXSBmbGV4IGl0ZW1zLWNlbnRlciBwdC0yNCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZSB2aWEtZ3JlZW4tNTAvMzAgdG8td2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgei0xMCBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsXCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGVhc2U6IFwiZWFzZU91dFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIG1iLTYgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwXCI+XG4gICAgICAgICAgICAgICAgPENsb2NrIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIE9wZW4gMjQvN1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGxnOnRleHQtNnhsIGZvbnQtZGlzcGxheSBmb250LWJvbGQgbGVhZGluZy1bMS4xXSB0ZXh0LWdyYXktOTAwIG1iLTZcIj5cbiAgICAgICAgICAgICAgICBZb3VyIENvbXBsZXRlIFByb3BlcnR5IFNvbHV0aW9uXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTYwMCBtYi04IG1heC13LTJ4bCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBDbGVhbmluZywgcGFpbnRpbmcsIHJlbm92YXRpb25zLCBhbmQgZmFjaWxpdHkgbWFpbnRlbmFuY2XigJRhbGwgZnJvbSBvbmUgdHJ1c3RlZCBwcm92aWRlci4gSGVhZHF1YXJ0ZXJlZCBpbiBBbGJhbnksIE5ZIENhcGl0YWwgUmVnaW9uLiBBbHNvIHNlcnZpbmcgRmxvcmlkYSAmIE5vcnRoIENhcm9saW5hLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gYmctWyNGRkQyM0ZdIGhvdmVyOmJnLVsjRkZEMjNGXS85MCB0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHB4LTggcHktNiBzaGFkb3ctbGdcIiBkYXRhLXRlc3RpZD1cImJ1dHRvbi1oZXJvLXF1b3RlXCI+XG4gICAgICAgICAgICAgICAgICAgIEdldCBhIEZyZWUgUXVvdGVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjEtODAwLTc5MS03ODQ1XCIgZGF0YS10ZXN0aWQ9XCJsaW5rLWhlcm8tcGhvbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIHRleHQtbGcgcHgtOCBweS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAxLTgwMC03OTEtNzg0NVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6NTE4LTk0OC03MTU2XCIgZGF0YS10ZXN0aWQ9XCJsaW5rLWhlcm8tcGhvbmUtbG9jYWxcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIHRleHQtbGcgcHgtOCBweS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAoNTE4KSA5NDgtNzE1NlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBXaGF0IFdlIERvIC0gMyBCaWcgVGlsZXMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctM3hsIG14LWF1dG8gbWItMTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPldoYXQgV2UgRG88L2gyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICB2YXJpYW50cz17Y29udGFpbmVyfVxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtOFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2l0ZW19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0dWRlbnQtaG91c2luZ1wiIGRhdGEtdGVzdGlkPVwibGluay1zdHVkZW50LWhvdXNpbmdcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBoLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1wcmltYXJ5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjpzaGFkb3cteGxcIiBkYXRhLXRlc3RpZD1cImNhcmQtc3R1ZGVudC1ob3VzaW5nXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwIG14LWF1dG8gbWItNiByb3VuZGVkLTJ4bCBiZy1wcmltYXJ5LzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyb3VwLWhvdmVyOmJnLXByaW1hcnkgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2Nob29sIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LXByaW1hcnkgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTNcIj5TdHVkZW50IEhvdXNpbmcgVHVybnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTRcIj5GYXN0LCBpbnNwZWN0aW9uLXJlYWR5IHVuaXQgdHVybnMgZm9yIGRvcm1zIGFuZCBzdHVkZW50IGFwYXJ0bWVudHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTQgbWwtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtpdGVtfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZW5vdmF0aW9uc1wiIGRhdGEtdGVzdGlkPVwibGluay1yZW5vdmF0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyIGgtZnVsbCBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXByaW1hcnkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNoYWRvdy14bFwiIGRhdGEtdGVzdGlkPVwiY2FyZC1yZW5vdmF0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgaC0yMCBteC1hdXRvIG1iLTYgcm91bmRlZC0yeGwgYmctcHJpbWFyeS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm91cC1ob3ZlcjpiZy1wcmltYXJ5IGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFdyZW5jaCBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgdGV4dC1wcmltYXJ5IGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0zXCI+UmVub3ZhdGlvbnMgJiBSZXBhaXJzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+TWFrZS1yZWFkeSBzZXJ2aWNlcyBpbmNsdWRpbmcgcGFpbnRpbmcsIHJlcGFpcnMsIGFuZCBwcm9wZXJ0eSBpbXByb3ZlbWVudHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTQgbWwtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtpdGVtfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0LWNvbnN0cnVjdGlvblwiIGRhdGEtdGVzdGlkPVwibGluay1wb3N0LWNvbnN0cnVjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyIGgtZnVsbCBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXByaW1hcnkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNoYWRvdy14bFwiIGRhdGEtdGVzdGlkPVwiY2FyZC1wb3N0LWNvbnN0cnVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgaC0yMCBteC1hdXRvIG1iLTYgcm91bmRlZC0yeGwgYmctcHJpbWFyeS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm91cC1ob3ZlcjpiZy1wcmltYXJ5IGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEhhcmRIYXQgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHRleHQtcHJpbWFyeSBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItM1wiPlBvc3QtQ29uc3RydWN0aW9uIENsZWFuaW5nPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+Um91Z2gsIGZpbmFsLCBhbmQgdG91Y2gtdXAgY2xlYW5pbmcgYWZ0ZXIgY29uc3RydWN0aW9uIG9yIHJlbm92YXRpb24gcHJvamVjdHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTQgbWwtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFF1aWNrIFNlcnZpY2UgTGlzdCAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWdyYXktNTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTggdGV4dC1jZW50ZXJcIj5BZGRpdGlvbmFsIFNlcnZpY2VzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtcHJpbWFyeSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5GYWNpbGl0eSBNYWludGVuYW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1wcmltYXJ5IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkNvbW1lcmNpYWwgSmFuaXRvcmlhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1wcmltYXJ5IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPkZsb29yaW5nICsgUGFpbnRpbmc8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogSG93IEl0IFdvcmtzICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTEyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5Ib3cgSXQgV29ya3M8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy00IGdhcC04IG1heC13LTV4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IHN0ZXA6IFwiMVwiLCB0aXRsZTogXCJTY29wZSBXYWxrdGhyb3VnaFwiLCBkZXNjOiBcIldlIGFzc2VzcyB5b3VyIG5lZWRzIGFuZCBwcm92aWRlIGEgcXVpY2sgcXVvdGVcIiwgaWNvbjogQ2xpcGJvYXJkQ2hlY2sgfSxcbiAgICAgICAgICAgICAgeyBzdGVwOiBcIjJcIiwgdGl0bGU6IFwiU2NoZWR1bGUgJiBDcmV3XCIsIGRlc2M6IFwiV2UgYXNzaWduIGRlZGljYXRlZCB0ZWFtIG1lbWJlcnMgdG8geW91ciBwcm9qZWN0XCIsIGljb246IFVzZXJzIH0sXG4gICAgICAgICAgICAgIHsgc3RlcDogXCIzXCIsIHRpdGxlOiBcIldvcmsgQ29tcGxldGVkXCIsIGRlc2M6IFwiQ2xlYW5pbmcgb3IgcmVub3ZhdGlvbiB3b3JrIGlzIGV4ZWN1dGVkIHByb2Zlc3Npb25hbGx5XCIsIGljb246IFdyZW5jaCB9LFxuICAgICAgICAgICAgICB7IHN0ZXA6IFwiNFwiLCB0aXRsZTogXCJRdWFsaXR5IENoZWNrXCIsIGRlc2M6IFwiRmluYWwgaW5zcGVjdGlvbiBhbmQgY2xvc2VvdXQgdG8gZW5zdXJlIHNhdGlzZmFjdGlvblwiLCBpY29uOiBBd2FyZCB9LFxuICAgICAgICAgICAgXS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgbXgtYXV0byBtYi00IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC0yeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5zdGVwfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yXCI+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cIj57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBTZXJ2aWNlIEFyZWFzICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+U2VydmljZSBBcmVhczwvaDI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTYgbWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgcm91bmRlZC14bCBwLTYgdGV4dC1jZW50ZXIgYmFja2Ryb3AtYmx1ci1zbSBib3JkZXItMiBib3JkZXItd2hpdGUvMzBcIj5cbiAgICAgICAgICAgICAgPEJ1aWxkaW5nMiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIj5BbGJhbnkgQ2FwaXRhbCBSZWdpb248L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwIHRleHQtc21cIj5IZWFkcXVhcnRlcnMgLSBBbGJhbnksIFNjaGVuZWN0YWR5LCBTYXJhdG9nYSAmIE1vcmU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgcm91bmRlZC14bCBwLTYgdGV4dC1jZW50ZXIgYmFja2Ryb3AtYmx1ci1zbVwiPlxuICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctMTAgaC0xMCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPk9uZW9udGEgQXJlYTwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvODAgdGV4dC1zbVwiPk90c2VnbyBDb3VudHksIENvb3BlcnN0b3duLCBTaWRuZXk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgcm91bmRlZC14bCBwLTYgdGV4dC1jZW50ZXIgYmFja2Ryb3AtYmx1ci1zbVwiPlxuICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctMTAgaC0xMCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPkNhdHNraWxsIFJlZ2lvbjwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvODAgdGV4dC1zbVwiPkRlbGF3YXJlLCBVbHN0ZXIsIFN1bGxpdmFuIENvdW50aWVzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLzEwIHJvdW5kZWQteGwgcC02IHRleHQtY2VudGVyIGJhY2tkcm9wLWJsdXItc21cIj5cbiAgICAgICAgICAgICAgPE1hcFBpbiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIj5GbG9yaWRhICYgTkM8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwIHRleHQtc21cIj5NaWFtaSwgTmFwbGVzLCBDaGFybG90dGUsIFJhbGVpZ2g8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBDVEEgU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIGJnLWdyYXktNTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5SZWFkeSB0byBHZXQgU3RhcnRlZD88L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTYwMCBtYi04IG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICBDb250YWN0IHVzIHRvZGF5IGZvciBhIGZyZWUgcXVvdGUuIFdlJ3JlIGF2YWlsYWJsZSAyNC83IHRvIGRpc2N1c3MgeW91ciBwcm9qZWN0IG5lZWRzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImJnLVsjRkZEMjNGXSBob3ZlcjpiZy1bI0ZGRDIzRl0vOTAgdGV4dC1ncmF5LTkwMCBmb250LWJvbGQgdGV4dC1sZyBweC04IHB5LTYgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgR2V0IGEgRnJlZSBRdW90ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MS04MDAtNzkxLTc4NDVcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgcHgtOCBweS02XCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgQ2FsbCAxLTgwMC03OTEtNzg0NVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL3BhZ2VzL0hvbWUudHN4In0=