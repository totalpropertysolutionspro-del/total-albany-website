import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Schools.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/pages/Schools.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Navbar } from "/src/components/layout/Navbar.tsx";
import { Footer } from "/src/components/layout/Footer.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/src/components/ui/accordion.tsx";
import { CheckCircle, Phone, Building2, Shield, Clock, Users, Sparkles, ClipboardCheck, Camera, Wrench, Home } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { Link } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
export default function StudentHousing() {
  const benefits = [
    { icon: Clock, text: "Built for tight turn-season timelines" },
    { icon: ClipboardCheck, text: "QC checklist + supervisor sign-off on every unit" },
    { icon: Camera, text: "Photo documentation for accountability" },
    { icon: Users, text: "Scalable crews: 40-120 units/week capacity" },
    { icon: Shield, text: "Fully licensed, bonded & insured" },
    { icon: Sparkles, text: "Inspection-ready, move-in ready quality" }
  ];
  const services = [
    "Deep clean kitchens, baths, bedrooms, common areas",
    "Paint touch-ups + minor patch/repair coordination",
    "Floor care (VCT/LVT/tile/carpet)",
    "Drywall repairs & patching",
    "Trash-out & debris removal",
    "Appliance cleaning & detailing",
    "Window & glass cleaning",
    "Final inspection prep & punch list completion"
  ];
  const housingTypes = [
    {
      icon: Building2,
      title: "On-Campus Student Housing",
      description: "Dorms, residence halls, and university-owned apartments",
      items: ["Traditional dorms", "Suite-style housing", "Residence halls", "RA apartments"]
    },
    {
      icon: Home,
      title: "Off-Campus Student Housing",
      description: "Private student apartments and purpose-built communities",
      items: ["Student apartment complexes", "Garden-style communities", "High-rise student living", "Mixed-use student properties"]
    }
  ];
  const processSteps = [
    {
      step: "1",
      title: "Pre-Planning & Logistics",
      description: "Unit matrices established, walkthroughs completed, scheduling coordinated with property management"
    },
    {
      step: "2",
      title: "Coordinated Execution",
      description: "Simultaneous cleaning and painting cycles with logical flow to prevent rework"
    },
    {
      step: "3",
      title: "Final QA & Sign-Off",
      description: "Independent QA inspectors check every unit against your specs. Pass guaranteed."
    }
  ];
  const faqs = [
    {
      q: "What is your capacity during peak turn season?",
      a: "Standard capacity is 40-60 units per week. During peak turn season, we scale to 80-120 units per week with dedicated crews."
    },
    {
      q: "Do you handle both cleaning AND painting?",
      a: "Yes. We're a single-source provider handling all cleaning, painting, repairs, and make-ready services under one contract. No need to coordinate multiple vendors."
    },
    {
      q: "How do you ensure quality on high-volume turns?",
      a: "Every unit gets a QC checklist, supervisor sign-off, and photo documentation. We have dedicated QA inspectors assigned per building or zone."
    },
    {
      q: "What areas do you serve for student housing?",
      a: "Our headquarters is in Albany, NY Capital Region, covering all Capital District counties, Oneonta area, and Catskill region. We also serve Florida (Miami, Naples, Fort Myers) and North Carolina (Charlotte, Raleigh, Greensboro). We have experience with major operators like Greystar, Hillside, and Auden."
    },
    {
      q: "Can you meet tight turn-season deadlines?",
      a: "Absolutely. Our entire operation is engineered for turn season—speed, accuracy, and first-time inspection pass rates. We provide daily reporting and unit-by-unit tracking."
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:87:4", "data-component-name": "div", className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "client/src/pages/Schools.tsx:88:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Schools.tsx:91:6", "data-component-name": "section", className: "bg-primary text-white pt-32 pb-20", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:92:8", "data-component-name": "div", className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Schools.tsx:93:10", "data-component-name": "span", className: "inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6", children: "On-Campus & Off-Campus Specialists" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/pages/Schools.tsx:96:10", "data-component-name": "h1", className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6", "data-testid": "text-hero-title", children: [
        "Student Housing Turn Services",
        /* @__PURE__ */ jsxDEV("br", { "data-replit-metadata": "client/src/pages/Schools.tsx:98:12", "data-component-name": "br" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Schools.tsx:99:12", "data-component-name": "span", className: "text-[#FFD23F]", children: "Cleaning, Painting & Janitorial" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:101:10", "data-component-name": "p", className: "text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8", children: "Complete make-ready services for dorms and private student communities. One vendor for cleaning, painting, and janitorial—synchronized crews, tight timelines, inspection-ready results." }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:106:10", "data-component-name": "div", className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:107:12", "data-component-name": "div", className: "bg-white/10 rounded-lg p-4", children: [
          /* @__PURE__ */ jsxDEV(Building2, { "data-replit-metadata": "client/src/pages/Schools.tsx:108:14", "data-component-name": "Building2", className: "w-6 h-6 mx-auto mb-2" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:109:14", "data-component-name": "p", className: "text-sm font-semibold", children: "On-Campus Housing" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:111:12", "data-component-name": "div", className: "bg-white/10 rounded-lg p-4", children: [
          /* @__PURE__ */ jsxDEV(Home, { "data-replit-metadata": "client/src/pages/Schools.tsx:112:14", "data-component-name": "Home", className: "w-6 h-6 mx-auto mb-2" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:113:14", "data-component-name": "p", className: "text-sm font-semibold", children: "Off-Campus Housing" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:115:12", "data-component-name": "div", className: "bg-white/10 rounded-lg p-4", children: [
          /* @__PURE__ */ jsxDEV(Wrench, { "data-replit-metadata": "client/src/pages/Schools.tsx:116:14", "data-component-name": "Wrench", className: "w-6 h-6 mx-auto mb-2" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:117:14", "data-component-name": "p", className: "text-sm font-semibold", children: "Painting & Repairs" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:119:12", "data-component-name": "div", className: "bg-white/10 rounded-lg p-4", children: [
          /* @__PURE__ */ jsxDEV(Sparkles, { "data-replit-metadata": "client/src/pages/Schools.tsx:120:14", "data-component-name": "Sparkles", className: "w-6 h-6 mx-auto mb-2" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:121:14", "data-component-name": "p", className: "text-sm font-semibold", children: "Janitorial Services" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:125:10", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 justify-center flex-wrap", children: [
        /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Schools.tsx:126:12", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Schools.tsx:127:14", "data-component-name": "Button", size: "lg", className: "bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold text-lg px-8 py-6 shadow-lg", "data-testid": "button-hero-quote", children: "Get a Turn-Season Quote" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Schools.tsx:131:12", "data-component-name": "a", href: "tel:1-800-791-7845", "data-testid": "link-hero-phone", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Schools.tsx:132:14", "data-component-name": "Button", size: "lg", variant: "outline", className: "text-white border-white hover:bg-white/10 text-lg px-8 py-6", children: [
          /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Schools.tsx:133:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 152,
            columnNumber: 17
          }, this),
          "1-800-791-7845"
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Schools.tsx:137:12", "data-component-name": "a", href: "tel:518-948-7156", "data-testid": "link-hero-phone-local", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Schools.tsx:138:14", "data-component-name": "Button", size: "lg", variant: "outline", className: "text-white border-white hover:bg-white/10 text-lg px-8 py-6", children: [
          /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Schools.tsx:139:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 158,
            columnNumber: 17
          }, this),
          "(518) 948-7156"
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 157,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:147:6", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 py-16", children: [
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Schools.tsx:149:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Schools.tsx:150:10", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4 text-center", children: "We Handle All Student Housing Types" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:151:10", "data-component-name": "p", className: "text-gray-600 text-center mb-12 max-w-2xl mx-auto", children: "Whether it's university-owned dorms or private off-campus communities, we have the experience and capacity." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:154:10", "data-component-name": "div", className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: housingTypes.map(
          (type, i) => /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/Schools.tsx:156:14", "data-component-name": "Card", className: "border-2 border-primary/20 hover:border-primary transition-colors", "data-testid": `card-housing-type-${i}`, children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/Schools.tsx:157:16", "data-component-name": "CardContent", className: "p-8", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:158:18", "data-component-name": "div", className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxDEV(type.icon, { "data-replit-metadata": "client/src/pages/Schools.tsx:159:20", "data-component-name": "type.icon", className: "w-8 h-8 text-primary" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 178,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Schools.tsx:161:18", "data-component-name": "h3", className: "text-2xl font-bold mb-2", children: type.title }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:162:18", "data-component-name": "p", className: "text-gray-600 mb-6", children: type.description }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 181,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/pages/Schools.tsx:163:18", "data-component-name": "ul", className: "space-y-2", children: type.items.map(
              (item, j) => /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/Schools.tsx:165:22", "data-component-name": "li", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle, { "data-replit-metadata": "client/src/pages/Schools.tsx:166:24", "data-component-name": "CheckCircle", className: "w-4 h-4 text-primary shrink-0" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
                  lineNumber: 185,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Schools.tsx:167:24", "data-component-name": "span", children: item }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
                  lineNumber: 186,
                  columnNumber: 25
                }, this)
              ] }, j, true, {
                fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
                lineNumber: 184,
                columnNumber: 19
              }, this)
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 182,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this) }, i, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 175,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Schools.tsx:178:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Schools.tsx:179:10", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4 text-center", children: "Why Operators Choose TPSP" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:180:10", "data-component-name": "p", className: "text-gray-600 text-center mb-12 max-w-2xl mx-auto", children: "Speed. Accuracy. First-time inspection pass rates." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 199,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:183:10", "data-component-name": "div", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: benefits.map(
          (benefit, i) => /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/Schools.tsx:185:14", "data-component-name": "Card", className: "border-0 shadow-sm bg-gray-50", "data-testid": `card-benefit-${i}`, children: /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/Schools.tsx:186:16", "data-component-name": "CardContent", className: "p-6 flex items-start gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:187:18", "data-component-name": "div", className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(benefit.icon, { "data-replit-metadata": "client/src/pages/Schools.tsx:188:20", "data-component-name": "benefit.icon", className: "w-6 h-6 text-primary" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:190:18", "data-component-name": "p", className: "font-medium text-gray-800", children: benefit.text }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 209,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this) }, i, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Schools.tsx:198:8", "data-component-name": "section", className: "mb-20 bg-gray-50 rounded-2xl p-8 md:p-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Schools.tsx:199:10", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4 text-center", children: "Complete Make-Ready Services" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:200:10", "data-component-name": "p", className: "text-gray-600 text-center mb-12 max-w-2xl mx-auto", children: "Single-source provider. No vendor juggling. One contract covers everything." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 219,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:203:10", "data-component-name": "div", className: "grid md:grid-cols-2 gap-4 max-w-4xl mx-auto", children: services.map(
          (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:205:14", "data-component-name": "div", className: "flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm", "data-testid": `item-service-${i}`, children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { "data-replit-metadata": "client/src/pages/Schools.tsx:206:16", "data-component-name": "CheckCircle", className: "w-5 h-5 text-primary shrink-0" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 225,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/pages/Schools.tsx:207:16", "data-component-name": "span", className: "font-medium", children: item }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 226,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 224,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 222,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Schools.tsx:214:8", "data-component-name": "section", className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Schools.tsx:215:10", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4 text-center", children: "Our Turn Season Process" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:216:10", "data-component-name": "p", className: "text-gray-600 text-center mb-12 max-w-2xl mx-auto", children: "Three-phase workflow with guaranteed readiness." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:219:10", "data-component-name": "div", className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: processSteps.map(
          (step, i) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:221:14", "data-component-name": "div", className: "text-center", "data-testid": `step-process-${i}`, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:222:16", "data-component-name": "div", className: "w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4", children: step.step }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 241,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/pages/Schools.tsx:225:16", "data-component-name": "h3", className: "text-xl font-bold mb-2", children: step.title }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 244,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:226:16", "data-component-name": "p", className: "text-gray-600", children: step.description }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 240,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Schools.tsx:233:8", "data-component-name": "section", className: "mb-20 bg-primary text-white rounded-2xl p-8 md:p-12", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:234:10", "data-component-name": "div", className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Schools.tsx:235:12", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-6", children: "High-Volume Capacity" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:236:12", "data-component-name": "div", className: "grid sm:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:237:14", "data-component-name": "div", className: "bg-white/10 rounded-xl p-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:238:16", "data-component-name": "div", className: "text-4xl font-bold text-[#FFD23F] mb-2", children: "40-60" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 257,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:239:16", "data-component-name": "div", className: "text-white/80", children: "Units/Week Standard" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 258,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 256,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:241:14", "data-component-name": "div", className: "bg-white/10 rounded-xl p-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:242:16", "data-component-name": "div", className: "text-4xl font-bold text-[#FFD23F] mb-2", children: "80-120" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 261,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:243:16", "data-component-name": "div", className: "text-white/80", children: "Units/Week Peak Season" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 262,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 260,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:246:12", "data-component-name": "p", className: "text-white/80 mb-6", children: "Dedicated cleaning teams, painting crews, repair techs, and QA inspectors ready for immediate deployment." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 265,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 252,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Schools.tsx:253:8", "data-component-name": "section", className: "mb-20 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Schools.tsx:254:10", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-8 text-center", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Accordion, { "data-replit-metadata": "client/src/pages/Schools.tsx:255:10", "data-component-name": "Accordion", type: "single", collapsible: true, className: "w-full", children: faqs.map(
          (faq, i) => /* @__PURE__ */ jsxDEV(AccordionItem, { "data-replit-metadata": "client/src/pages/Schools.tsx:257:14", "data-component-name": "AccordionItem", value: `item-${i}`, "data-testid": `accordion-faq-${i}`, children: [
            /* @__PURE__ */ jsxDEV(AccordionTrigger, { "data-replit-metadata": "client/src/pages/Schools.tsx:258:16", "data-component-name": "AccordionTrigger", className: "text-left font-semibold", children: faq.q }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 277,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(AccordionContent, { "data-replit-metadata": "client/src/pages/Schools.tsx:259:16", "data-component-name": "AccordionContent", className: "text-gray-600", children: faq.a }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 278,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 276,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 274,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/Schools.tsx:266:8", "data-component-name": "section", className: "text-center bg-gray-50 rounded-2xl p-12", "data-testid": "section-cta", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/Schools.tsx:267:10", "data-component-name": "h2", className: "text-3xl md:text-4xl font-bold mb-4", children: "Ready for Turn Season?" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 286,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/Schools.tsx:268:10", "data-component-name": "p", className: "text-gray-600 mb-8 max-w-xl mx-auto", children: "Get your custom capacity plan and turn-season quote. We're ready to discuss your timeline." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 287,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/Schools.tsx:271:10", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/Schools.tsx:272:12", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Schools.tsx:273:14", "data-component-name": "Button", size: "lg", className: "bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold text-lg px-8", "data-testid": "button-cta-quote", children: "Get a Turn-Season Quote" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 292,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Schools.tsx:277:12", "data-component-name": "a", href: "tel:1-800-791-7845", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Schools.tsx:278:14", "data-component-name": "Button", size: "lg", variant: "outline", "data-testid": "button-cta-call", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Schools.tsx:279:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 298,
              columnNumber: 17
            }, this),
            "1-800-791-7845"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 297,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 296,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/Schools.tsx:283:12", "data-component-name": "a", href: "tel:518-948-7156", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/Schools.tsx:284:14", "data-component-name": "Button", size: "lg", variant: "outline", "data-testid": "button-cta-call-local", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/Schools.tsx:285:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
              lineNumber: 304,
              columnNumber: 17
            }, this),
            "(518) 948-7156"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 303,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
            lineNumber: 302,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
          lineNumber: 290,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
        lineNumber: 285,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-replit-metadata": "client/src/pages/Schools.tsx:293:6", "data-component-name": "Footer" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
      lineNumber: 312,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/Schools.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}
_c = StudentHousing;
var _c;
$RefreshReg$(_c, "StudentHousing");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/Schools.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/Schools.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QyxRQUFHLDhGQUFFLE1BQUssWUFDVCxpQ0FBQyxVQUFLLGdHQUFFLE1BQUssTUFBSyxXQUFVLDJFQUEwRSxlQUFZLG9CQUFrQix1Q0FBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQSxVQUNBLHVCQUFDLGtHQUFFLE1BQUssc0JBQ04saUNBQUMsVUFBSyxnR0FBRSxNQUFLLE1BQUssU0FBUSxXQUFVLGVBQVksbUJBQzlDO0FBQUEsbUNBQUMsU0FBSSwrRkFBRSxXQUFVLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUErQjtBQUFBO0FBQUEsZUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHQSxLQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS0E7QUFBQSxVQUNBLHVCQUFDLGtHQUFFLE1BQUssb0JBQ04saUNBQUMsVUFBSyxnR0FBRSxNQUFLLE1BQUssU0FBUSxXQUFVLGVBQVkseUJBQzlDO0FBQUEsbUNBQUMsU0FBSSwrRkFBRSxXQUFVLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUErQjtBQUFBO0FBQUEsZUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHQSxLQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS0E7QUFBQSxhQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBa0JBO0FBQUEsV0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXdCQTtBQUFBLFNBL0lGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnSkE7QUFBQSxJQUVBLHVCQUFDLFVBQUssaUdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPO0FBQUEsT0E5TVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQStNQTtBQUVKO0FBQUFLLEtBL1J3QnJCO0FBQWMsSUFBQXFCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJOYXZiYXIiLCJGb290ZXIiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJBY2NvcmRpb24iLCJBY2NvcmRpb25Db250ZW50IiwiQWNjb3JkaW9uSXRlbSIsIkFjY29yZGlvblRyaWdnZXIiLCJDaGVja0NpcmNsZSIsIlBob25lIiwiQnVpbGRpbmcyIiwiU2hpZWxkIiwiQ2xvY2siLCJVc2VycyIsIlNwYXJrbGVzIiwiQ2xpcGJvYXJkQ2hlY2siLCJDYW1lcmEiLCJXcmVuY2giLCJIb21lIiwiTGluayIsIlN0dWRlbnRIb3VzaW5nIiwiYmVuZWZpdHMiLCJpY29uIiwidGV4dCIsInNlcnZpY2VzIiwiaG91c2luZ1R5cGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwicHJvY2Vzc1N0ZXBzIiwic3RlcCIsImZhcXMiLCJxIiwiYSIsIm1hcCIsInR5cGUiLCJpIiwiaXRlbSIsImoiLCJiZW5lZml0IiwiZmFxIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2Nob29scy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9Gb290ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25Db250ZW50LCBBY2NvcmRpb25JdGVtLCBBY2NvcmRpb25UcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hY2NvcmRpb25cIjtcbmltcG9ydCB7IENoZWNrQ2lyY2xlLCBQaG9uZSwgQnVpbGRpbmcyLCBTaGllbGQsIENsb2NrLCBVc2VycywgU3BhcmtsZXMsIENsaXBib2FyZENoZWNrLCBDYW1lcmEsIFdyZW5jaCwgSG9tZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwid291dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWRlbnRIb3VzaW5nKCkge1xuICBjb25zdCBiZW5lZml0cyA9IFtcbiAgICB7IGljb246IENsb2NrLCB0ZXh0OiBcIkJ1aWx0IGZvciB0aWdodCB0dXJuLXNlYXNvbiB0aW1lbGluZXNcIiB9LFxuICAgIHsgaWNvbjogQ2xpcGJvYXJkQ2hlY2ssIHRleHQ6IFwiUUMgY2hlY2tsaXN0ICsgc3VwZXJ2aXNvciBzaWduLW9mZiBvbiBldmVyeSB1bml0XCIgfSxcbiAgICB7IGljb246IENhbWVyYSwgdGV4dDogXCJQaG90byBkb2N1bWVudGF0aW9uIGZvciBhY2NvdW50YWJpbGl0eVwiIH0sXG4gICAgeyBpY29uOiBVc2VycywgdGV4dDogXCJTY2FsYWJsZSBjcmV3czogNDAtMTIwIHVuaXRzL3dlZWsgY2FwYWNpdHlcIiB9LFxuICAgIHsgaWNvbjogU2hpZWxkLCB0ZXh0OiBcIkZ1bGx5IGxpY2Vuc2VkLCBib25kZWQgJiBpbnN1cmVkXCIgfSxcbiAgICB7IGljb246IFNwYXJrbGVzLCB0ZXh0OiBcIkluc3BlY3Rpb24tcmVhZHksIG1vdmUtaW4gcmVhZHkgcXVhbGl0eVwiIH0sXG4gIF07XG5cbiAgY29uc3Qgc2VydmljZXMgPSBbXG4gICAgXCJEZWVwIGNsZWFuIGtpdGNoZW5zLCBiYXRocywgYmVkcm9vbXMsIGNvbW1vbiBhcmVhc1wiLFxuICAgIFwiUGFpbnQgdG91Y2gtdXBzICsgbWlub3IgcGF0Y2gvcmVwYWlyIGNvb3JkaW5hdGlvblwiLFxuICAgIFwiRmxvb3IgY2FyZSAoVkNUL0xWVC90aWxlL2NhcnBldClcIixcbiAgICBcIkRyeXdhbGwgcmVwYWlycyAmIHBhdGNoaW5nXCIsXG4gICAgXCJUcmFzaC1vdXQgJiBkZWJyaXMgcmVtb3ZhbFwiLFxuICAgIFwiQXBwbGlhbmNlIGNsZWFuaW5nICYgZGV0YWlsaW5nXCIsXG4gICAgXCJXaW5kb3cgJiBnbGFzcyBjbGVhbmluZ1wiLFxuICAgIFwiRmluYWwgaW5zcGVjdGlvbiBwcmVwICYgcHVuY2ggbGlzdCBjb21wbGV0aW9uXCIsXG4gIF07XG5cbiAgY29uc3QgaG91c2luZ1R5cGVzID0gW1xuICAgIHtcbiAgICAgIGljb246IEJ1aWxkaW5nMixcbiAgICAgIHRpdGxlOiBcIk9uLUNhbXB1cyBTdHVkZW50IEhvdXNpbmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRvcm1zLCByZXNpZGVuY2UgaGFsbHMsIGFuZCB1bml2ZXJzaXR5LW93bmVkIGFwYXJ0bWVudHNcIixcbiAgICAgIGl0ZW1zOiBbXCJUcmFkaXRpb25hbCBkb3Jtc1wiLCBcIlN1aXRlLXN0eWxlIGhvdXNpbmdcIiwgXCJSZXNpZGVuY2UgaGFsbHNcIiwgXCJSQSBhcGFydG1lbnRzXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBIb21lLFxuICAgICAgdGl0bGU6IFwiT2ZmLUNhbXB1cyBTdHVkZW50IEhvdXNpbmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlByaXZhdGUgc3R1ZGVudCBhcGFydG1lbnRzIGFuZCBwdXJwb3NlLWJ1aWx0IGNvbW11bml0aWVzXCIsXG4gICAgICBpdGVtczogW1wiU3R1ZGVudCBhcGFydG1lbnQgY29tcGxleGVzXCIsIFwiR2FyZGVuLXN0eWxlIGNvbW11bml0aWVzXCIsIFwiSGlnaC1yaXNlIHN0dWRlbnQgbGl2aW5nXCIsIFwiTWl4ZWQtdXNlIHN0dWRlbnQgcHJvcGVydGllc1wiXVxuICAgIH1cbiAgXTtcblxuICBjb25zdCBwcm9jZXNzU3RlcHMgPSBbXG4gICAge1xuICAgICAgc3RlcDogXCIxXCIsXG4gICAgICB0aXRsZTogXCJQcmUtUGxhbm5pbmcgJiBMb2dpc3RpY3NcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlVuaXQgbWF0cmljZXMgZXN0YWJsaXNoZWQsIHdhbGt0aHJvdWdocyBjb21wbGV0ZWQsIHNjaGVkdWxpbmcgY29vcmRpbmF0ZWQgd2l0aCBwcm9wZXJ0eSBtYW5hZ2VtZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0ZXA6IFwiMlwiLFxuICAgICAgdGl0bGU6IFwiQ29vcmRpbmF0ZWQgRXhlY3V0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTaW11bHRhbmVvdXMgY2xlYW5pbmcgYW5kIHBhaW50aW5nIGN5Y2xlcyB3aXRoIGxvZ2ljYWwgZmxvdyB0byBwcmV2ZW50IHJld29ya1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGVwOiBcIjNcIixcbiAgICAgIHRpdGxlOiBcIkZpbmFsIFFBICYgU2lnbi1PZmZcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkluZGVwZW5kZW50IFFBIGluc3BlY3RvcnMgY2hlY2sgZXZlcnkgdW5pdCBhZ2FpbnN0IHlvdXIgc3BlY3MuIFBhc3MgZ3VhcmFudGVlZC5cIlxuICAgIH1cbiAgXTtcblxuICBjb25zdCBmYXFzID0gW1xuICAgIHtcbiAgICAgIHE6IFwiV2hhdCBpcyB5b3VyIGNhcGFjaXR5IGR1cmluZyBwZWFrIHR1cm4gc2Vhc29uP1wiLFxuICAgICAgYTogXCJTdGFuZGFyZCBjYXBhY2l0eSBpcyA0MC02MCB1bml0cyBwZXIgd2Vlay4gRHVyaW5nIHBlYWsgdHVybiBzZWFzb24sIHdlIHNjYWxlIHRvIDgwLTEyMCB1bml0cyBwZXIgd2VlayB3aXRoIGRlZGljYXRlZCBjcmV3cy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgcTogXCJEbyB5b3UgaGFuZGxlIGJvdGggY2xlYW5pbmcgQU5EIHBhaW50aW5nP1wiLFxuICAgICAgYTogXCJZZXMuIFdlJ3JlIGEgc2luZ2xlLXNvdXJjZSBwcm92aWRlciBoYW5kbGluZyBhbGwgY2xlYW5pbmcsIHBhaW50aW5nLCByZXBhaXJzLCBhbmQgbWFrZS1yZWFkeSBzZXJ2aWNlcyB1bmRlciBvbmUgY29udHJhY3QuIE5vIG5lZWQgdG8gY29vcmRpbmF0ZSBtdWx0aXBsZSB2ZW5kb3JzLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBxOiBcIkhvdyBkbyB5b3UgZW5zdXJlIHF1YWxpdHkgb24gaGlnaC12b2x1bWUgdHVybnM/XCIsXG4gICAgICBhOiBcIkV2ZXJ5IHVuaXQgZ2V0cyBhIFFDIGNoZWNrbGlzdCwgc3VwZXJ2aXNvciBzaWduLW9mZiwgYW5kIHBob3RvIGRvY3VtZW50YXRpb24uIFdlIGhhdmUgZGVkaWNhdGVkIFFBIGluc3BlY3RvcnMgYXNzaWduZWQgcGVyIGJ1aWxkaW5nIG9yIHpvbmUuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHE6IFwiV2hhdCBhcmVhcyBkbyB5b3Ugc2VydmUgZm9yIHN0dWRlbnQgaG91c2luZz9cIixcbiAgICAgIGE6IFwiT3VyIGhlYWRxdWFydGVycyBpcyBpbiBBbGJhbnksIE5ZIENhcGl0YWwgUmVnaW9uLCBjb3ZlcmluZyBhbGwgQ2FwaXRhbCBEaXN0cmljdCBjb3VudGllcywgT25lb250YSBhcmVhLCBhbmQgQ2F0c2tpbGwgcmVnaW9uLiBXZSBhbHNvIHNlcnZlIEZsb3JpZGEgKE1pYW1pLCBOYXBsZXMsIEZvcnQgTXllcnMpIGFuZCBOb3J0aCBDYXJvbGluYSAoQ2hhcmxvdHRlLCBSYWxlaWdoLCBHcmVlbnNib3JvKS4gV2UgaGF2ZSBleHBlcmllbmNlIHdpdGggbWFqb3Igb3BlcmF0b3JzIGxpa2UgR3JleXN0YXIsIEhpbGxzaWRlLCBhbmQgQXVkZW4uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHE6IFwiQ2FuIHlvdSBtZWV0IHRpZ2h0IHR1cm4tc2Vhc29uIGRlYWRsaW5lcz9cIixcbiAgICAgIGE6IFwiQWJzb2x1dGVseS4gT3VyIGVudGlyZSBvcGVyYXRpb24gaXMgZW5naW5lZXJlZCBmb3IgdHVybiBzZWFzb27igJRzcGVlZCwgYWNjdXJhY3ksIGFuZCBmaXJzdC10aW1lIGluc3BlY3Rpb24gcGFzcyByYXRlcy4gV2UgcHJvdmlkZSBkYWlseSByZXBvcnRpbmcgYW5kIHVuaXQtYnktdW5pdCB0cmFja2luZy5cIlxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGJnLXdoaXRlXCI+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIHsvKiBIZXJvIEhlYWRlciAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdGV4dC13aGl0ZSBwdC0zMiBwYi0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctd2hpdGUvMjAgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBtYi02XCI+XG4gICAgICAgICAgICBPbi1DYW1wdXMgJiBPZmYtQ2FtcHVzIFNwZWNpYWxpc3RzXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBmb250LWRpc3BsYXkgZm9udC1ib2xkIG1iLTZcIiBkYXRhLXRlc3RpZD1cInRleHQtaGVyby10aXRsZVwiPlxuICAgICAgICAgICAgU3R1ZGVudCBIb3VzaW5nIFR1cm4gU2VydmljZXNcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI0ZGRDIzRl1cIj5DbGVhbmluZywgUGFpbnRpbmcgJiBKYW5pdG9yaWFsPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCB0ZXh0LXdoaXRlLzkwIG1heC13LTN4bCBteC1hdXRvIG1iLThcIj5cbiAgICAgICAgICAgIENvbXBsZXRlIG1ha2UtcmVhZHkgc2VydmljZXMgZm9yIGRvcm1zIGFuZCBwcml2YXRlIHN0dWRlbnQgY29tbXVuaXRpZXMuIE9uZSB2ZW5kb3IgZm9yIGNsZWFuaW5nLCBwYWludGluZywgYW5kIGphbml0b3JpYWzigJRzeW5jaHJvbml6ZWQgY3Jld3MsIHRpZ2h0IHRpbWVsaW5lcywgaW5zcGVjdGlvbi1yZWFkeSByZXN1bHRzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogU2VydmljZSBQaWxsYXJzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNCBtYXgtdy00eGwgbXgtYXV0byBtYi0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS8xMCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICA8QnVpbGRpbmcyIGNsYXNzTmFtZT1cInctNiBoLTYgbXgtYXV0byBtYi0yXCIgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkXCI+T24tQ2FtcHVzIEhvdXNpbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgcm91bmRlZC1sZyBwLTRcIj5cbiAgICAgICAgICAgICAgPEhvbWUgY2xhc3NOYW1lPVwidy02IGgtNiBteC1hdXRvIG1iLTJcIiAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5PZmYtQ2FtcHVzIEhvdXNpbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgcm91bmRlZC1sZyBwLTRcIj5cbiAgICAgICAgICAgICAgPFdyZW5jaCBjbGFzc05hbWU9XCJ3LTYgaC02IG14LWF1dG8gbWItMlwiIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZFwiPlBhaW50aW5nICYgUmVwYWlyczwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS8xMCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy02IGgtNiBteC1hdXRvIG1iLTJcIiAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5KYW5pdG9yaWFsIFNlcnZpY2VzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00IGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiYmctWyNGRkQyM0ZdIGhvdmVyOmJnLVsjRkZEMjNGXS85MCB0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHB4LTggcHktNiBzaGFkb3ctbGdcIiBkYXRhLXRlc3RpZD1cImJ1dHRvbi1oZXJvLXF1b3RlXCI+XG4gICAgICAgICAgICAgICAgR2V0IGEgVHVybi1TZWFzb24gUXVvdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOjEtODAwLTc5MS03ODQ1XCIgZGF0YS10ZXN0aWQ9XCJsaW5rLWhlcm8tcGhvbmVcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYm9yZGVyLXdoaXRlIGhvdmVyOmJnLXdoaXRlLzEwIHRleHQtbGcgcHgtOCBweS02XCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgMS04MDAtNzkxLTc4NDVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOjUxOC05NDgtNzE1NlwiIGRhdGEtdGVzdGlkPVwibGluay1oZXJvLXBob25lLWxvY2FsXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJvcmRlci13aGl0ZSBob3ZlcjpiZy13aGl0ZS8xMCB0ZXh0LWxnIHB4LTggcHktNlwiPlxuICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICg1MTgpIDk0OC03MTU2XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgcHktMTZcIj5cbiAgICAgICAgey8qIEhvdXNpbmcgVHlwZXMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTIwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyXCI+V2UgSGFuZGxlIEFsbCBTdHVkZW50IEhvdXNpbmcgVHlwZXM8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1jZW50ZXIgbWItMTIgbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgIFdoZXRoZXIgaXQncyB1bml2ZXJzaXR5LW93bmVkIGRvcm1zIG9yIHByaXZhdGUgb2ZmLWNhbXB1cyBjb21tdW5pdGllcywgd2UgaGF2ZSB0aGUgZXhwZXJpZW5jZSBhbmQgY2FwYWNpdHkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtOCBtYXgtdy01eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAge2hvdXNpbmdUeXBlcy5tYXAoKHR5cGUsIGkpID0+IChcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItcHJpbWFyeS8yMCBob3Zlcjpib3JkZXItcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiIGRhdGEtdGVzdGlkPXtgY2FyZC1ob3VzaW5nLXR5cGUtJHtpfWB9PlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtMnhsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICA8dHlwZS5pY29uIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0yXCI+e3R5cGUudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNlwiPnt0eXBlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3R5cGUuaXRlbXMubWFwKChpdGVtLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17an0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFdoeSBDaG9vc2UgVXMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTIwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyXCI+V2h5IE9wZXJhdG9ycyBDaG9vc2UgVFBTUDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlciBtYi0xMiBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgU3BlZWQuIEFjY3VyYWN5LiBGaXJzdC10aW1lIGluc3BlY3Rpb24gcGFzcyByYXRlcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7YmVuZWZpdHMubWFwKChiZW5lZml0LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyLTAgc2hhZG93LXNtIGJnLWdyYXktNTBcIiBkYXRhLXRlc3RpZD17YGNhcmQtYmVuZWZpdC0ke2l9YH0+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWxnIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJlbmVmaXQuaWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDBcIj57YmVuZWZpdC50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBUdXJuIFNlcnZpY2VzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0yMCBiZy1ncmF5LTUwIHJvdW5kZWQtMnhsIHAtOCBtZDpwLTEyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyXCI+Q29tcGxldGUgTWFrZS1SZWFkeSBTZXJ2aWNlczwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlciBtYi0xMiBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgU2luZ2xlLXNvdXJjZSBwcm92aWRlci4gTm8gdmVuZG9yIGp1Z2dsaW5nLiBPbmUgY29udHJhY3QgY292ZXJzIGV2ZXJ5dGhpbmcuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtNCBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAge3NlcnZpY2VzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC00IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXNtXCIgZGF0YS10ZXN0aWQ9e2BpdGVtLXNlcnZpY2UtJHtpfWB9PlxuICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcHJpbWFyeSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogUHJvY2VzcyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMjBcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj5PdXIgVHVybiBTZWFzb24gUHJvY2VzczwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlciBtYi0xMiBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgVGhyZWUtcGhhc2Ugd29ya2Zsb3cgd2l0aCBndWFyYW50ZWVkIHJlYWRpbmVzcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1heC13LTV4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICB7cHJvY2Vzc1N0ZXBzLm1hcCgoc3RlcCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBkYXRhLXRlc3RpZD17YHN0ZXAtcHJvY2Vzcy0ke2l9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgdGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi00XCI+XG4gICAgICAgICAgICAgICAgICB7c3RlcC5zdGVwfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+e3N0ZXAudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e3N0ZXAuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIENhcGFjaXR5IEhpZ2hsaWdodCAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMjAgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIHAtOCBtZDpwLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBtYi02XCI+SGlnaC1Wb2x1bWUgQ2FwYWNpdHk8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGdhcC04IG1iLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS8xMCByb3VuZGVkLXhsIHAtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtWyNGRkQyM0ZdIG1iLTJcIj40MC02MDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS84MFwiPlVuaXRzL1dlZWsgU3RhbmRhcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgcm91bmRlZC14bCBwLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LVsjRkZEMjNGXSBtYi0yXCI+ODAtMTIwPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwXCI+VW5pdHMvV2VlayBQZWFrIFNlYXNvbjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS84MCBtYi02XCI+XG4gICAgICAgICAgICAgIERlZGljYXRlZCBjbGVhbmluZyB0ZWFtcywgcGFpbnRpbmcgY3Jld3MsIHJlcGFpciB0ZWNocywgYW5kIFFBIGluc3BlY3RvcnMgcmVhZHkgZm9yIGltbWVkaWF0ZSBkZXBsb3ltZW50LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIEZBUSAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMjAgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLTggdGV4dC1jZW50ZXJcIj5GcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uczwvaDI+XG4gICAgICAgICAgPEFjY29yZGlvbiB0eXBlPVwic2luZ2xlXCIgY29sbGFwc2libGUgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICB7ZmFxcy5tYXAoKGZhcSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBrZXk9e2l9IHZhbHVlPXtgaXRlbS0ke2l9YH0gZGF0YS10ZXN0aWQ9e2BhY2NvcmRpb24tZmFxLSR7aX1gfT5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uVHJpZ2dlciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgZm9udC1zZW1pYm9sZFwiPntmYXEucX08L0FjY29yZGlvblRyaWdnZXI+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPntmYXEuYX08L0FjY29yZGlvbkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIENUQSAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JheS01MCByb3VuZGVkLTJ4bCBwLTEyXCIgZGF0YS10ZXN0aWQ9XCJzZWN0aW9uLWN0YVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPlJlYWR5IGZvciBUdXJuIFNlYXNvbj88L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItOCBtYXgtdy14bCBteC1hdXRvXCI+XG4gICAgICAgICAgICBHZXQgeW91ciBjdXN0b20gY2FwYWNpdHkgcGxhbiBhbmQgdHVybi1zZWFzb24gcXVvdGUuIFdlJ3JlIHJlYWR5IHRvIGRpc2N1c3MgeW91ciB0aW1lbGluZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00IGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiYmctWyNGRkQyM0ZdIGhvdmVyOmJnLVsjRkZEMjNGXS85MCB0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHB4LThcIiBkYXRhLXRlc3RpZD1cImJ1dHRvbi1jdGEtcXVvdGVcIj5cbiAgICAgICAgICAgICAgICBHZXQgYSBUdXJuLVNlYXNvbiBRdW90ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MS04MDAtNzkxLTc4NDVcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiIGRhdGEtdGVzdGlkPVwiYnV0dG9uLWN0YS1jYWxsXCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgMS04MDAtNzkxLTc4NDVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOjUxOC05NDgtNzE1NlwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgZGF0YS10ZXN0aWQ9XCJidXR0b24tY3RhLWNhbGwtbG9jYWxcIj5cbiAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy01IGgtNSBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAoNTE4KSA5NDgtNzE1NlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL3BhZ2VzL1NjaG9vbHMudHN4In0=