import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/ServiceAreas.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/pages/ServiceAreas.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Navbar } from "/src/components/layout/Navbar.tsx";
import { Footer } from "/src/components/layout/Footer.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { MapPin, Phone, Building2, Star } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { Link } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
export default function ServiceAreas() {
  const capitalRegionCounties = [
    "Albany County",
    "Rensselaer County",
    "Schenectady County",
    "Saratoga County",
    "Columbia County",
    "Greene County",
    "Warren County",
    "Washington County"
  ];
  const catskillRegion = [
    "Delaware County",
    "Ulster County",
    "Sullivan County",
    "Schoharie County"
  ];
  const oneontaArea = [
    "Otsego County",
    "Cooperstown",
    "Oneonta",
    "Sidney"
  ];
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:35:4", "data-component-name": "div", className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:36:6", "data-component-name": "Navbar" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:39:6", "data-component-name": "section", className: "bg-primary text-white pt-32 pb-20", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:40:8", "data-component-name": "div", className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:41:10", "data-component-name": "h1", className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "Service Areas" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:42:10", "data-component-name": "p", className: "text-xl text-white/80 max-w-2xl mx-auto", children: "Professional cleaning, renovation, and post-construction services across New York, North Carolina, and Florida." }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:48:6", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 py-16", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:50:8", "data-component-name": "div", className: "mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:51:10", "data-component-name": "div", className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:52:12", "data-component-name": "div", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4", children: [
            /* @__PURE__ */ jsxDEV(Star, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:53:14", "data-component-name": "Star", className: "w-4 h-4" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            "Headquarters & Primary Service Area"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:56:12", "data-component-name": "h2", className: "text-3xl font-bold", children: "Albany, New York - Capital Region" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:59:10", "data-component-name": "Card", className: "border-2 border-primary mb-8", children: [
          /* @__PURE__ */ jsxDEV(CardHeader, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:60:12", "data-component-name": "CardHeader", className: "text-center pb-4 bg-primary/5", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:61:14", "data-component-name": "div", className: "w-20 h-20 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Building2, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:62:16", "data-component-name": "Building2", className: "w-10 h-10 text-white" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(CardTitle, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:64:14", "data-component-name": "CardTitle", className: "text-2xl", children: "Capital Region Headquarters" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:65:14", "data-component-name": "p", className: "text-muted-foreground mt-2", children: "Our main office serving the greater Albany area and surrounding counties" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:69:12", "data-component-name": "CardContent", className: "pt-6", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:70:14", "data-component-name": "div", className: "grid md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:72:16", "data-component-name": "div", className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-5", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:73:18", "data-component-name": "h4", className: "font-bold text-lg mb-3 text-primary", children: "Capital Region Counties" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 92,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:74:18", "data-component-name": "ul", className: "space-y-2", children: capitalRegionCounties.map(
                (county, i) => /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:76:22", "data-component-name": "li", className: "flex items-center gap-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:77:24", "data-component-name": "MapPin", className: "w-4 h-4 text-primary shrink-0" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 96,
                    columnNumber: 25
                  }, this),
                  county
                ] }, i, true, {
                  fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                  lineNumber: 95,
                  columnNumber: 21
                }, this)
              ) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 91,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:85:16", "data-component-name": "div", className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-5", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:86:18", "data-component-name": "h4", className: "font-bold text-lg mb-3 text-primary", children: "Oneonta Area" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 105,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:87:18", "data-component-name": "ul", className: "space-y-2", children: oneontaArea.map(
                (area, i) => /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:89:22", "data-component-name": "li", className: "flex items-center gap-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:90:24", "data-component-name": "MapPin", className: "w-4 h-4 text-primary shrink-0" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 109,
                    columnNumber: 25
                  }, this),
                  area
                ] }, i, true, {
                  fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                  lineNumber: 108,
                  columnNumber: 21
                }, this)
              ) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 106,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 104,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:98:16", "data-component-name": "div", className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-5", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:99:18", "data-component-name": "h4", className: "font-bold text-lg mb-3 text-primary", children: "Catskill Region" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 118,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:100:18", "data-component-name": "ul", className: "space-y-2", children: catskillRegion.map(
                (area, i) => /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:102:22", "data-component-name": "li", className: "flex items-center gap-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:103:24", "data-component-name": "MapPin", className: "w-4 h-4 text-primary shrink-0" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 122,
                    columnNumber: 25
                  }, this),
                  area
                ] }, i, true, {
                  fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                  lineNumber: 121,
                  columnNumber: 21
                }, this)
              ) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 119,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 117,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:115:8", "data-component-name": "div", className: "mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:116:10", "data-component-name": "h2", className: "text-2xl font-bold text-center mb-8", children: "Additional Service Areas" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:117:10", "data-component-name": "div", className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:119:12", "data-component-name": "Card", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:120:14", "data-component-name": "CardHeader", className: "text-center pb-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:121:16", "data-component-name": "div", className: "w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:122:18", "data-component-name": "MapPin", className: "w-8 h-8 text-primary" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 141,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 140,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(CardTitle, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:124:16", "data-component-name": "CardTitle", className: "text-2xl", children: "North Carolina" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 143,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 139,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:126:14", "data-component-name": "CardContent", className: "text-center", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:127:16", "data-component-name": "p", className: "text-muted-foreground mb-4", children: "Commercial cleaning, student housing, painting, renovations, and post-construction projects throughout North Carolina." }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 146,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:130:16", "data-component-name": "div", className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:131:18", "data-component-name": "p", className: "font-semibold text-foreground", children: "Key Areas:" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                  lineNumber: 150,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:132:18", "data-component-name": "ul", className: "text-muted-foreground mt-2 space-y-1", children: [
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:133:20", "data-component-name": "li", children: "Charlotte" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 152,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:134:20", "data-component-name": "li", children: "Raleigh" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 153,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:135:20", "data-component-name": "li", children: "Greensboro" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:136:20", "data-component-name": "li", children: "Durham" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 155,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:137:20", "data-component-name": "li", children: "Winston-Salem" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 156,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                  lineNumber: 151,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 149,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 145,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 138,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:144:12", "data-component-name": "Card", children: [
            /* @__PURE__ */ jsxDEV(CardHeader, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:145:14", "data-component-name": "CardHeader", className: "text-center pb-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:146:16", "data-component-name": "div", className: "w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:147:18", "data-component-name": "MapPin", className: "w-8 h-8 text-primary" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 166,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 165,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(CardTitle, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:149:16", "data-component-name": "CardTitle", className: "text-2xl", children: "Florida" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 164,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(CardContent, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:151:14", "data-component-name": "CardContent", className: "text-center", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:152:16", "data-component-name": "p", className: "text-muted-foreground mb-4", children: "Commercial cleaning, student housing turns, painting, and post-construction support throughout Florida." }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 171,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:155:16", "data-component-name": "div", className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:156:18", "data-component-name": "p", className: "font-semibold text-foreground", children: "Key Areas:" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                  lineNumber: 175,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:157:18", "data-component-name": "ul", className: "text-muted-foreground mt-2 space-y-1", children: [
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:158:20", "data-component-name": "li", children: "Miami" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 177,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:159:20", "data-component-name": "li", children: "Naples" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 178,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:160:20", "data-component-name": "li", children: "Fort Myers" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 179,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:161:20", "data-component-name": "li", children: "Cape Coral" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 180,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:162:20", "data-component-name": "li", children: "Tampa" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                    lineNumber: 181,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                  lineNumber: 176,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
                lineNumber: 174,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 170,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:171:8", "data-component-name": "section", className: "text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:172:10", "data-component-name": "h2", className: "text-3xl font-bold mb-4", children: "Not Sure If We Serve Your Area?" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:173:10", "data-component-name": "p", className: "text-muted-foreground mb-8 max-w-xl mx-auto", children: "Contact us to discuss your project. We're always expanding our service areas." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:176:10", "data-component-name": "div", className: "flex flex-col sm:flex-row gap-4 justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:177:12", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:178:14", "data-component-name": "Button", size: "lg", className: "bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold", children: "Get a Free Quote" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:182:12", "data-component-name": "a", href: "tel:1-800-791-7845", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:183:14", "data-component-name": "Button", size: "lg", variant: "outline", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:184:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 203,
              columnNumber: 17
            }, this),
            "1-800-791-7845"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 202,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 201,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:188:12", "data-component-name": "a", href: "tel:518-948-7156", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:189:14", "data-component-name": "Button", size: "lg", variant: "outline", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:190:16", "data-component-name": "Phone", className: "w-5 h-5 mr-2" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
              lineNumber: 209,
              columnNumber: 17
            }, this),
            "(518) 948-7156"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
            lineNumber: 207,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-replit-metadata": "client/src/pages/ServiceAreas.tsx:198:6", "data-component-name": "Footer" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/ServiceAreas.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
_c = ServiceAreas;
var _c;
$RefreshReg$(_c, "ServiceAreas");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/ServiceAreas.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/ServiceAreas.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFJQTtBQUFBLFVBQ0EsdUJBQUMsdUdBQUUsTUFBSyxzQkFDTixpQ0FBQyxVQUFLLHFHQUFFLE1BQUssTUFBSyxTQUFRLFdBQ3hCO0FBQUEsbUNBQUMsU0FBSSxvR0FBRSxXQUFVLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUErQjtBQUFBO0FBQUEsZUFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHQSxLQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS0E7QUFBQSxVQUNBLHVCQUFDLHVHQUFFLE1BQUssb0JBQ04saUNBQUMsVUFBSyxxR0FBRSxNQUFLLE1BQUssU0FBUSxXQUN4QjtBQUFBLG1DQUFDLFNBQUksb0dBQUUsV0FBVSxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBK0I7QUFBQTtBQUFBLGVBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0EsS0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUtBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWtCQTtBQUFBLFdBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF3QkE7QUFBQSxTQW5KRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBb0pBO0FBQUEsSUFFQSx1QkFBQyxVQUFLLHNHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLE9BbktUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvS0E7QUFFSjtBQUFBRSxLQWpNd0JSO0FBQVksSUFBQVE7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJNYXBQaW4iLCJQaG9uZSIsIkJ1aWxkaW5nMiIsIlN0YXIiLCJMaW5rIiwiU2VydmljZUFyZWFzIiwiY2FwaXRhbFJlZ2lvbkNvdW50aWVzIiwiY2F0c2tpbGxSZWdpb24iLCJvbmVvbnRhQXJlYSIsIm1hcCIsImNvdW50eSIsImkiLCJhcmVhIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2VydmljZUFyZWFzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9OYXZiYXJcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IE1hcFBpbiwgUGhvbmUsIEJ1aWxkaW5nMiwgU3RhciB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwid291dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VBcmVhcygpIHtcbiAgY29uc3QgY2FwaXRhbFJlZ2lvbkNvdW50aWVzID0gW1xuICAgIFwiQWxiYW55IENvdW50eVwiLFxuICAgIFwiUmVuc3NlbGFlciBDb3VudHlcIiwgXG4gICAgXCJTY2hlbmVjdGFkeSBDb3VudHlcIixcbiAgICBcIlNhcmF0b2dhIENvdW50eVwiLFxuICAgIFwiQ29sdW1iaWEgQ291bnR5XCIsXG4gICAgXCJHcmVlbmUgQ291bnR5XCIsXG4gICAgXCJXYXJyZW4gQ291bnR5XCIsXG4gICAgXCJXYXNoaW5ndG9uIENvdW50eVwiXG4gIF07XG5cbiAgY29uc3QgY2F0c2tpbGxSZWdpb24gPSBbXG4gICAgXCJEZWxhd2FyZSBDb3VudHlcIixcbiAgICBcIlVsc3RlciBDb3VudHlcIixcbiAgICBcIlN1bGxpdmFuIENvdW50eVwiLFxuICAgIFwiU2Nob2hhcmllIENvdW50eVwiXG4gIF07XG5cbiAgY29uc3Qgb25lb250YUFyZWEgPSBbXG4gICAgXCJPdHNlZ28gQ291bnR5XCIsXG4gICAgXCJDb29wZXJzdG93blwiLFxuICAgIFwiT25lb250YVwiLFxuICAgIFwiU2lkbmV5XCJcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgYmctd2hpdGVcIj5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdGV4dC13aGl0ZSBwdC0zMiBwYi0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1kaXNwbGF5IGZvbnQtYm9sZCBtYi00XCI+U2VydmljZSBBcmVhczwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlLzgwIG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICBQcm9mZXNzaW9uYWwgY2xlYW5pbmcsIHJlbm92YXRpb24sIGFuZCBwb3N0LWNvbnN0cnVjdGlvbiBzZXJ2aWNlcyBhY3Jvc3MgTmV3IFlvcmssIE5vcnRoIENhcm9saW5hLCBhbmQgRmxvcmlkYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNiBweS0xNlwiPlxuICAgICAgICB7LyogUHJpbWFyeSBSZWdpb24gLSBBbGJhbnkgQ2FwaXRhbCBSZWdpb24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGQgdGV4dC1zbSBtYi00XCI+XG4gICAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICBIZWFkcXVhcnRlcnMgJiBQcmltYXJ5IFNlcnZpY2UgQXJlYVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+QWxiYW55LCBOZXcgWW9yayAtIENhcGl0YWwgUmVnaW9uPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItcHJpbWFyeSBtYi04XCI+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwYi00IGJnLXByaW1hcnkvNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgaC0yMCBteC1hdXRvIG1iLTQgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8QnVpbGRpbmcyIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5DYXBpdGFsIFJlZ2lvbiBIZWFkcXVhcnRlcnM8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTJcIj5cbiAgICAgICAgICAgICAgICBPdXIgbWFpbiBvZmZpY2Ugc2VydmluZyB0aGUgZ3JlYXRlciBBbGJhbnkgYXJlYSBhbmQgc3Vycm91bmRpbmcgY291bnRpZXNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICAgICAgey8qIENhcGl0YWwgUmVnaW9uIENvdW50aWVzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHJvdW5kZWQtbGcgcC01XCI+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgbWItMyB0ZXh0LXByaW1hcnlcIj5DYXBpdGFsIFJlZ2lvbiBDb3VudGllczwvaDQ+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXBpdGFsUmVnaW9uQ291bnRpZXMubWFwKChjb3VudHksIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnkgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50eX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogT25lb250YSBBcmVhICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHJvdW5kZWQtbGcgcC01XCI+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgbWItMyB0ZXh0LXByaW1hcnlcIj5PbmVvbnRhIEFyZWE8L2g0PlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICB7b25lb250YUFyZWEubWFwKChhcmVhLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1wcmltYXJ5IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcmVhfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBDYXRza2lsbCBSZWdpb24gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDAgcm91bmRlZC1sZyBwLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyBtYi0zIHRleHQtcHJpbWFyeVwiPkNhdHNraWxsIFJlZ2lvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXRza2lsbFJlZ2lvbi5tYXAoKGFyZWEsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnkgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU2Vjb25kYXJ5IFJlZ2lvbnMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTZcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLThcIj5BZGRpdGlvbmFsIFNlcnZpY2UgQXJlYXM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtOCBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgey8qIE5vcnRoIENhcm9saW5hICovfVxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBiLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBteC1hdXRvIG1iLTQgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5Ob3J0aCBDYXJvbGluYTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICBDb21tZXJjaWFsIGNsZWFuaW5nLCBzdHVkZW50IGhvdXNpbmcsIHBhaW50aW5nLCByZW5vdmF0aW9ucywgYW5kIHBvc3QtY29uc3RydWN0aW9uIHByb2plY3RzIHRocm91Z2hvdXQgTm9ydGggQ2Fyb2xpbmEuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHJvdW5kZWQtbGcgcC00XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZFwiPktleSBBcmVhczo8L3A+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTIgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5DaGFybG90dGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UmFsZWlnaDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5HcmVlbnNib3JvPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkR1cmhhbTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5XaW5zdG9uLVNhbGVtPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgIHsvKiBGbG9yaWRhICovfVxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBiLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBteC1hdXRvIG1iLTQgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5GbG9yaWRhPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIENvbW1lcmNpYWwgY2xlYW5pbmcsIHN0dWRlbnQgaG91c2luZyB0dXJucywgcGFpbnRpbmcsIGFuZCBwb3N0LWNvbnN0cnVjdGlvbiBzdXBwb3J0IHRocm91Z2hvdXQgRmxvcmlkYS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDAgcm91bmRlZC1sZyBwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+S2V5IEFyZWFzOjwvcD5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMiBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk1pYW1pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk5hcGxlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Gb3J0IE15ZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkNhcGUgQ29yYWw8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+VGFtcGE8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENUQSAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHJvdW5kZWQtMnhsIHAtMTJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5Ob3QgU3VyZSBJZiBXZSBTZXJ2ZSBZb3VyIEFyZWE/PC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItOCBtYXgtdy14bCBteC1hdXRvXCI+XG4gICAgICAgICAgICBDb250YWN0IHVzIHRvIGRpc2N1c3MgeW91ciBwcm9qZWN0LiBXZSdyZSBhbHdheXMgZXhwYW5kaW5nIG91ciBzZXJ2aWNlIGFyZWFzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQganVzdGlmeS1jZW50ZXIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJiZy1bI0ZGRDIzRl0gaG92ZXI6YmctWyNGRkQyM0ZdLzkwIHRleHQtZ3JheS05MDAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgR2V0IGEgRnJlZSBRdW90ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MS04MDAtNzkxLTc4NDVcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgIDEtODAwLTc5MS03ODQ1XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDo1MTgtOTQ4LTcxNTZcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICg1MTgpIDk0OC03MTU2XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvcGFnZXMvU2VydmljZUFyZWFzLnRzeCJ9