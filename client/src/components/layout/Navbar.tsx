import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/layout/Navbar.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/components/layout/Navbar.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { Link, useLocation } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
import { Button } from "/src/components/ui/button.tsx";
import { Menu, X, Phone } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import __vite__cjsImport6_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=ff68c9af"; const useState = __vite__cjsImport6_react["useState"]; const useEffect = __vite__cjsImport6_react["useEffect"];
import { cn } from "/src/lib/utils.ts";
import logoImage from "/@fs/home/runner/workspace/attached_assets/image_1766950977561.png?import";
export function Navbar() {
  _s();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/student-housing", label: "Student Housing" },
    { href: "/renovations", label: "Renovations" },
    { href: "/post-construction", label: "Post-Construction" },
    { href: "/commercial", label: "Commercial Cleaning" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/contact", label: "Contact" }
  ];
  const isActive = (path) => location === path;
  return /* @__PURE__ */ jsxDEV(
    "nav",
    {
      "data-replit-metadata": "client/src/components/layout/Navbar.tsx:34:4",
      "data-component-name": "nav",
      className: cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-2" : "bg-white py-3"
      ),
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:40:6", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:41:8", "data-component-name": "div", className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:42:10", "data-component-name": "Link", href: "/", className: "flex items-center gap-2 group", "data-testid": "link-logo", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              "data-replit-metadata": "client/src/components/layout/Navbar.tsx:43:12",
              "data-component-name": "img",
              src: logoImage,
              alt: "Total Property Solutions Pro LLC",
              className: "h-20 md:h-24 w-auto",
              "data-testid": "img-logo"
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
              lineNumber: 62,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:52:10", "data-component-name": "div", className: "hidden lg:flex items-center gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:53:12", "data-component-name": "div", className: "flex items-center gap-4", children: navLinks.map(
              (link) => /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:55:16", "data-component-name": "Link", href: link.href, children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:56:18", "data-component-name": "div", className: cn(
                "text-sm font-medium transition-colors cursor-pointer hover:text-primary relative py-1",
                "text-gray-700",
                isActive(link.href) && "text-primary font-bold"
              ), children: [
                link.label,
                isActive(link.href) && /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:63:22", "data-component-name": "span", className: "absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                  lineNumber: 82,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 75,
                columnNumber: 19
              }, this) }, link.href, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 74,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:69:12", "data-component-name": "div", className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:70:14", "data-component-name": "a", href: "tel:1-800-791-7845", className: "flex items-center gap-2 text-sm font-semibold text-gray-900", "data-testid": "link-phone", children: [
                /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:71:16", "data-component-name": "Phone", className: "w-4 h-4 text-primary" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                  lineNumber: 90,
                  columnNumber: 17
                }, this),
                "1-800-791-7845"
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 89,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:74:14", "data-component-name": "span", className: "text-gray-300", children: "|" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 93,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:75:14", "data-component-name": "a", href: "tel:518-948-7156", className: "flex items-center gap-2 text-sm text-gray-600", "data-testid": "link-phone-local", children: "(518) 948-7156" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:78:14", "data-component-name": "Link", href: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:79:16", "data-component-name": "Button", className: "bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold shadow-md", "data-testid": "button-get-quote", children: "Get a Free Quote" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 98,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 97,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-replit-metadata": "client/src/components/layout/Navbar.tsx:87:10",
              "data-component-name": "button",
              className: "lg:hidden p-2 text-gray-600",
              onClick: () => setIsOpen(!isOpen),
              "data-testid": "button-mobile-menu",
              children: isOpen ? /* @__PURE__ */ jsxDEV(X, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:92:22", "data-component-name": "X", className: "w-6 h-6" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 111,
                columnNumber: 23
              }, this) : /* @__PURE__ */ jsxDEV(Menu, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:92:50", "data-component-name": "Menu", className: "w-6 h-6" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
                lineNumber: 111,
                columnNumber: 144
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
              lineNumber: 106,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        isOpen && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:99:8", "data-component-name": "div", className: "absolute top-full left-0 w-full bg-white shadow-xl border-t lg:hidden animate-in slide-in-from-top-5", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:100:10", "data-component-name": "div", className: "flex flex-col p-6 gap-3", children: [
          navLinks.map(
            (link) => /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:102:14", "data-component-name": "Link", href: link.href, onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:103:16", "data-component-name": "div", className: cn(
              "text-base font-medium p-3 rounded-lg hover:bg-gray-50",
              isActive(link.href) ? "text-primary bg-green-50" : "text-gray-600"
            ), children: link.label }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
              lineNumber: 122,
              columnNumber: 17
            }, this) }, link.href, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
              lineNumber: 121,
              columnNumber: 11
            }, this)
          ),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:111:12", "data-component-name": "div", className: "h-px bg-gray-100 my-2" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:112:12", "data-component-name": "a", href: "tel:1-800-791-7845", className: "flex items-center gap-2 p-3 font-semibold text-gray-900", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:113:14", "data-component-name": "Phone", className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
              lineNumber: 132,
              columnNumber: 15
            }, this),
            "1-800-791-7845"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:116:12", "data-component-name": "a", href: "tel:518-948-7156", className: "flex items-center gap-2 p-3 text-gray-600", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:117:14", "data-component-name": "Phone", className: "w-5 h-5 text-primary" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
              lineNumber: 136,
              columnNumber: 15
            }, this),
            "(518) 948-7156 - Albany"
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:120:12", "data-component-name": "Link", href: "/contact", onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "client/src/components/layout/Navbar.tsx:121:14", "data-component-name": "Button", className: "w-full mt-2 bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 font-bold", size: "lg", children: "Get a Free Quote" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
          lineNumber: 118,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/client/src/components/layout/Navbar.tsx",
      lineNumber: 53,
      columnNumber: 5
    },
    this
  );
}
_s(Navbar, "iD6za+yDzDdI0vbp5oUMG7rYZJE=", false, function() {
  return [useLocation];
});
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/layout/Navbar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/layout/Navbar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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O0FBQUEsZUEyQkE7QUFBQTtBQUFBO0FBQUEsSUE1Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBOEZBO0FBRUo7QUFBQUYsR0ExSGdCRCxRQUFNO0FBQUEsVUFHRFQsV0FBVztBQUFBO0FBQUE0QixLQUhoQm5CO0FBQU0sSUFBQW1CO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJMaW5rIiwidXNlTG9jYXRpb24iLCJCdXR0b24iLCJNZW51IiwiWCIsIlBob25lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjbiIsImxvZ29JbWFnZSIsIk5hdmJhciIsIl9zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsImxvY2F0aW9uIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2TGlua3MiLCJocmVmIiwibGFiZWwiLCJpc0FjdGl2ZSIsInBhdGgiLCJtYXAiLCJsaW5rIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmF2YmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJ3b3V0ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBNZW51LCBYLCBQaG9uZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gXCJAYXNzZXRzL2ltYWdlXzE3NjY5NTA5Nzc1NjEucG5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9jYXRpb25dID0gdXNlTG9jYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHNldFNjcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gMjApO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG5hdkxpbmtzID0gW1xuICAgIHsgaHJlZjogXCIvXCIsIGxhYmVsOiBcIkhvbWVcIiB9LFxuICAgIHsgaHJlZjogXCIvc3R1ZGVudC1ob3VzaW5nXCIsIGxhYmVsOiBcIlN0dWRlbnQgSG91c2luZ1wiIH0sXG4gICAgeyBocmVmOiBcIi9yZW5vdmF0aW9uc1wiLCBsYWJlbDogXCJSZW5vdmF0aW9uc1wiIH0sXG4gICAgeyBocmVmOiBcIi9wb3N0LWNvbnN0cnVjdGlvblwiLCBsYWJlbDogXCJQb3N0LUNvbnN0cnVjdGlvblwiIH0sXG4gICAgeyBocmVmOiBcIi9jb21tZXJjaWFsXCIsIGxhYmVsOiBcIkNvbW1lcmNpYWwgQ2xlYW5pbmdcIiB9LFxuICAgIHsgaHJlZjogXCIvc2VydmljZS1hcmVhc1wiLCBsYWJlbDogXCJTZXJ2aWNlIEFyZWFzXCIgfSxcbiAgICB7IGhyZWY6IFwiL2NvbnRhY3RcIiwgbGFiZWw6IFwiQ29udGFjdFwiIH0sXG4gIF07XG5cbiAgY29uc3QgaXNBY3RpdmUgPSAocGF0aDogc3RyaW5nKSA9PiBsb2NhdGlvbiA9PT0gcGF0aDtcblxuICByZXR1cm4gKFxuICAgIDxuYXZcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZml4ZWQgdy1mdWxsIHotNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGJvcmRlci1iIGJvcmRlci10cmFuc3BhcmVudFwiLFxuICAgICAgICBzY3JvbGxlZCA/IFwiYmctd2hpdGUvOTUgYmFja2Ryb3AtYmx1ci1tZCBzaGFkb3ctc20gYm9yZGVyLWdyYXktMjAwIHB5LTJcIiA6IFwiYmctd2hpdGUgcHktM1wiXG4gICAgICApfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBncm91cFwiIGRhdGEtdGVzdGlkPVwibGluay1sb2dvXCI+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICBzcmM9e2xvZ29JbWFnZX0gXG4gICAgICAgICAgICAgIGFsdD1cIlRvdGFsIFByb3BlcnR5IFNvbHV0aW9ucyBQcm8gTExDXCIgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjAgbWQ6aC0yNCB3LWF1dG9cIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImltZy1sb2dvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgey8qIERlc2t0b3AgTmF2ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggaXRlbXMtY2VudGVyIGdhcC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2xpbmsuaHJlZn0gaHJlZj17bGluay5ocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcHJpbWFyeSByZWxhdGl2ZSBweS0xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTcwMFwiLFxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZShsaW5rLmhyZWYpICYmIFwidGV4dC1wcmltYXJ5IGZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgICAgICApfT5cbiAgICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIHtpc0FjdGl2ZShsaW5rLmhyZWYpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgdy1mdWxsIGgtMC41IGJnLXByaW1hcnkgcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDoxLTgwMC03OTEtNzg0NVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCIgZGF0YS10ZXN0aWQ9XCJsaW5rLXBob25lXCI+XG4gICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICAxLTgwMC03OTEtNzg0NVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj58PC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjUxOC05NDgtNzE1NlwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiIGRhdGEtdGVzdGlkPVwibGluay1waG9uZS1sb2NhbFwiPlxuICAgICAgICAgICAgICAgICg1MTgpIDk0OC03MTU2XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bI0ZGRDIzRl0gaG92ZXI6YmctWyNGRkQyM0ZdLzkwIHRleHQtZ3JheS05MDAgZm9udC1ib2xkIHNoYWRvdy1tZFwiIGRhdGEtdGVzdGlkPVwiYnV0dG9uLWdldC1xdW90ZVwiPlxuICAgICAgICAgICAgICAgICAgR2V0IGEgRnJlZSBRdW90ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSBCdXR0b24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuIHAtMiB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYnV0dG9uLW1vYmlsZS1tZW51XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNPcGVuID8gPFggY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+IDogPE1lbnUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTW9iaWxlIE1lbnUgKi99XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTAgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy14bCBib3JkZXItdCBsZzpoaWRkZW4gYW5pbWF0ZS1pbiBzbGlkZS1pbi1mcm9tLXRvcC01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNiBnYXAtM1wiPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICA8TGluayBrZXk9e2xpbmsuaHJlZn0gaHJlZj17bGluay5ocmVmfSBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICBcInRleHQtYmFzZSBmb250LW1lZGl1bSBwLTMgcm91bmRlZC1sZyBob3ZlcjpiZy1ncmF5LTUwXCIsXG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZShsaW5rLmhyZWYpID8gXCJ0ZXh0LXByaW1hcnkgYmctZ3JlZW4tNTBcIiA6IFwidGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtcHggYmctZ3JheS0xMDAgbXktMlwiIC8+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOjEtODAwLTc5MS03ODQ1XCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0zIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAxLTgwMC03OTEtNzg0NVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDo1MTgtOTQ4LTcxNTZcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTMgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAoNTE4KSA5NDgtNzE1NiAtIEFsYmFueVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIG10LTIgYmctWyNGRkQyM0ZdIGhvdmVyOmJnLVsjRkZEMjNGXS85MCB0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZFwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIEdldCBhIEZyZWUgUXVvdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhci50c3gifQ==