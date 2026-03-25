import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/layout/Footer.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/components/layout/Footer.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Link } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
import { Phone, MapPin, Clock } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { SiFacebook, SiInstagram } from "/@fs/home/runner/workspace/node_modules/.vite/deps/react-icons_si.js?v=ff68c9af";
import logoImage from "/@fs/home/runner/workspace/attached_assets/image_1766950977561.png?import";
export function Footer() {
  return /* @__PURE__ */ jsxDEV("footer", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:8:4", "data-component-name": "footer", className: "bg-slate-900 text-slate-200 pt-16 pb-8", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:9:6", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:10:8", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:12:10", "data-component-name": "div", className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            "data-replit-metadata": "client/src/components/layout/Footer.tsx:13:12",
            "data-component-name": "img",
            src: logoImage,
            alt: "Total Property Solutions Pro LLC",
            className: "h-16 w-auto bg-white p-2 rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 32,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:18:12", "data-component-name": "p", className: "text-slate-400 text-sm leading-relaxed", children: "Commercial and residential cleaning, painting, renovations & post-construction services. Headquartered in Albany, NY Capital Region. Also serving Florida & North Carolina." }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:22:12", "data-component-name": "div", className: "flex gap-4 pt-2", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              "data-replit-metadata": "client/src/components/layout/Footer.tsx:23:14",
              "data-component-name": "a",
              href: "https://facebook.com/people/Commercial-And-Residential-Cleaning-Pro/100063888345691/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white",
              "data-testid": "link-facebook",
              children: /* @__PURE__ */ jsxDEV(SiFacebook, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:30:16", "data-component-name": "SiFacebook", className: "w-4 h-4" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
                lineNumber: 49,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
              lineNumber: 42,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              "data-replit-metadata": "client/src/components/layout/Footer.tsx:32:14",
              "data-component-name": "a",
              href: "https://instagram.com/miguelmedinacrcp/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white",
              "data-testid": "link-instagram",
              children: /* @__PURE__ */ jsxDEV(SiInstagram, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:39:16", "data-component-name": "SiInstagram", className: "w-4 h-4" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
                lineNumber: 58,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
              lineNumber: 51,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:45:10", "data-component-name": "div", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:46:12", "data-component-name": "h3", className: "text-white font-bold mb-4", children: "Quick Links" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:47:12", "data-component-name": "ul", className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:48:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:48:18", "data-component-name": "Link", href: "/", className: "hover:text-primary transition-colors", children: "Home" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 67,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:49:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:49:18", "data-component-name": "Link", href: "/student-housing", className: "hover:text-primary transition-colors", children: "Student Housing" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 68,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:50:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:50:18", "data-component-name": "Link", href: "/renovations", className: "hover:text-primary transition-colors", children: "Renovations" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 69,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:51:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:51:18", "data-component-name": "Link", href: "/post-construction", className: "hover:text-primary transition-colors", children: "Post-Construction" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 70,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:52:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:52:18", "data-component-name": "Link", href: "/contact", className: "hover:text-primary transition-colors", children: "Get a Quote" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 71,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:57:10", "data-component-name": "div", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:58:12", "data-component-name": "h3", className: "text-white font-bold mb-4", children: "Services" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:59:12", "data-component-name": "ul", className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:60:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:60:18", "data-component-name": "Link", href: "/commercial", className: "hover:text-primary transition-colors", children: "Commercial Cleaning" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 79,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:61:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:61:18", "data-component-name": "Link", href: "/student-housing", className: "hover:text-primary transition-colors", children: "Student Housing Turns" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 80,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:62:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:62:18", "data-component-name": "Link", href: "/renovations", className: "hover:text-primary transition-colors", children: "Painting & Renovations" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 81,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:63:14", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:63:18", "data-component-name": "Link", href: "/post-construction", className: "hover:text-primary transition-colors", children: "Post-Construction" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 82,
            columnNumber: 113
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:64:14", "data-component-name": "li", className: "text-slate-400 italic pt-2", children: "Call for more services" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:69:10", "data-component-name": "div", children: [
        /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:70:12", "data-component-name": "h3", className: "text-white font-bold mb-4", children: "Contact Us" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:71:12", "data-component-name": "ul", className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:72:14", "data-component-name": "li", className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:73:16", "data-component-name": "Phone", className: "w-5 h-5 text-primary shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:74:16", "data-component-name": "div", className: "flex flex-col", children: [
              /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:75:18", "data-component-name": "a", href: "tel:1-800-791-7845", className: "hover:text-white transition-colors font-semibold", "data-testid": "link-footer-phone", children: "1-800-791-7845" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
                lineNumber: 94,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:76:18", "data-component-name": "span", className: "text-sm text-gray-500", children: "Toll-Free" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
                lineNumber: 95,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:77:18", "data-component-name": "a", href: "tel:518-948-7156", className: "hover:text-white transition-colors mt-1", "data-testid": "link-footer-phone-local", children: "(518) 948-7156" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
                lineNumber: 96,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:78:18", "data-component-name": "span", className: "text-sm text-gray-500", children: "Albany Capital Region" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
                lineNumber: 97,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:81:14", "data-component-name": "li", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(Clock, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:82:16", "data-component-name": "Clock", className: "w-5 h-5 text-primary shrink-0" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:83:16", "data-component-name": "span", className: "font-semibold", children: "Open 24/7" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:85:14", "data-component-name": "li", className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "client/src/components/layout/Footer.tsx:86:16", "data-component-name": "MapPin", className: "w-5 h-5 text-primary shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
              lineNumber: 105,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:87:16", "data-component-name": "span", children: "HQ: Albany, NY Capital Region" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
              lineNumber: 106,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:93:8", "data-component-name": "div", className: "border-t border-slate-800 pt-8", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:94:10", "data-component-name": "div", className: "text-center text-sm text-slate-500", children: [
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:95:12", "data-component-name": "p", className: "mb-2", children: "Albany NY Capital Region | Oneonta | Catskill Region | Florida | North Carolina" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/layout/Footer.tsx:96:12", "data-component-name": "p", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Total Property Solutions Pro LLC. All rights reserved."
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/components/layout/Footer.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/layout/Footer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/layout/Footer.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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ZUFGM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFHQTtBQUFBLFVBQ0EsdUJBQUMsUUFBQyxzR0FBRSxXQUFVLDBCQUNaO0FBQUEsbUNBQUMsVUFBSywwR0FBRSxXQUFVLDBDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF3RDtBQUFBLFlBQ3hELHVCQUFDLFVBQUcsd0dBQUUsNkNBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbUM7QUFBQSxlQUZyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWtCQTtBQUFBLFdBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFxQkE7QUFBQSxTQWhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBaUZBO0FBQUEsSUFFQSx1QkFBQyxTQUFFLHNHQUFFLFdBQVUsa0NBQ2IsaUNBQUMsU0FBRSx1R0FBRSxXQUFVLHNDQUNiO0FBQUEsNkJBQUMsNEdBQUUsV0FBVSxRQUFPLCtGQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW1HO0FBQUEsTUFDbkcsdUJBQUMsNEdBQUU7QUFBQTtBQUFBLFNBQVEsb0JBQUlFLEtBQUssR0FBRUMsWUFBWTtBQUFBLFFBQUU7QUFBQSxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTJGO0FBQUEsU0FGN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUdBLEtBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUtBO0FBQUEsT0F6RkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTBGQSxLQTNGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNEZBO0FBRUo7QUFBQUMsS0FoR2dCSDtBQUFNLElBQUFHO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJMaW5rIiwiUGhvbmUiLCJNYXBQaW4iLCJDbG9jayIsIlNpRmFjZWJvb2siLCJTaUluc3RhZ3JhbSIsImxvZ29JbWFnZSIsIkZvb3RlciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkZvb3Rlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gXCJ3b3V0ZXJcIjtcbmltcG9ydCB7IFBob25lLCBNYWlsLCBNYXBQaW4sIENsb2NrIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgU2lGYWNlYm9vaywgU2lJbnN0YWdyYW0gfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSBcIkBhc3NldHMvaW1hZ2VfMTc2Njk1MDk3NzU2MS5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXNsYXRlLTkwMCB0ZXh0LXNsYXRlLTIwMCBwdC0xNiBwYi04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTEyIG1iLTEyXCI+XG4gICAgICAgICAgey8qIEJyYW5kICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICBzcmM9e2xvZ29JbWFnZX0gXG4gICAgICAgICAgICAgIGFsdD1cIlRvdGFsIFByb3BlcnR5IFNvbHV0aW9ucyBQcm8gTExDXCIgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTYgdy1hdXRvIGJnLXdoaXRlIHAtMiByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICBDb21tZXJjaWFsIGFuZCByZXNpZGVudGlhbCBjbGVhbmluZywgcGFpbnRpbmcsIHJlbm92YXRpb25zICYgcG9zdC1jb25zdHJ1Y3Rpb24gc2VydmljZXMuIFxuICAgICAgICAgICAgICBIZWFkcXVhcnRlcmVkIGluIEFsYmFueSwgTlkgQ2FwaXRhbCBSZWdpb24uIEFsc28gc2VydmluZyBGbG9yaWRhICYgTm9ydGggQ2Fyb2xpbmEuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgcHQtMlwiPlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vcGVvcGxlL0NvbW1lcmNpYWwtQW5kLVJlc2lkZW50aWFsLUNsZWFuaW5nLVByby8xMDAwNjM4ODgzNDU2OTEvXCIgXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctc2xhdGUtODAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibGluay1mYWNlYm9va1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2lGYWNlYm9vayBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL21pZ3VlbG1lZGluYWNyY3AvXCIgXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctc2xhdGUtODAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibGluay1pbnN0YWdyYW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNpSW5zdGFncmFtIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBRdWljayBMaW5rcyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIG1iLTRcIj5RdWljayBMaW5rczwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPkhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvc3R1ZGVudC1ob3VzaW5nXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+U3R1ZGVudCBIb3VzaW5nPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Jlbm92YXRpb25zXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+UmVub3ZhdGlvbnM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcG9zdC1jb25zdHJ1Y3Rpb25cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5Qb3N0LUNvbnN0cnVjdGlvbjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb250YWN0XCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+R2V0IGEgUXVvdGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU2VydmljZXMgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtYi00XCI+U2VydmljZXM8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb21tZXJjaWFsXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+Q29tbWVyY2lhbCBDbGVhbmluZzwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9zdHVkZW50LWhvdXNpbmdcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5TdHVkZW50IEhvdXNpbmcgVHVybnM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcmVub3ZhdGlvbnNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5QYWludGluZyAmIFJlbm92YXRpb25zPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Bvc3QtY29uc3RydWN0aW9uXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+UG9zdC1Db25zdHJ1Y3Rpb248L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIGl0YWxpYyBwdC0yXCI+Q2FsbCBmb3IgbW9yZSBzZXJ2aWNlczwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENvbnRhY3QgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtYi00XCI+Q29udGFjdCBVczwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1wcmltYXJ5IHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjEtODAwLTc5MS03ODQ1XCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBmb250LXNlbWlib2xkXCIgZGF0YS10ZXN0aWQ9XCJsaW5rLWZvb3Rlci1waG9uZVwiPjEtODAwLTc5MS03ODQ1PC9hPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+VG9sbC1GcmVlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDo1MTgtOTQ4LTcxNTZcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIG10LTFcIiBkYXRhLXRlc3RpZD1cImxpbmstZm9vdGVyLXBob25lLWxvY2FsXCI+KDUxOCkgOTQ4LTcxNTY8L2E+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5BbGJhbnkgQ2FwaXRhbCBSZWdpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcHJpbWFyeSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPk9wZW4gMjQvNzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1wcmltYXJ5IHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+SFE6IEFsYmFueSwgTlkgQ2FwaXRhbCBSZWdpb248L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAgcHQtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPkFsYmFueSBOWSBDYXBpdGFsIFJlZ2lvbiB8IE9uZW9udGEgfCBDYXRza2lsbCBSZWdpb24gfCBGbG9yaWRhIHwgTm9ydGggQ2Fyb2xpbmE8L3A+XG4gICAgICAgICAgICA8cD4mY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gVG90YWwgUHJvcGVydHkgU29sdXRpb25zIFBybyBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnRzeCJ9