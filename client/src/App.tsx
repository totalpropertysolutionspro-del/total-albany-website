import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/App.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Switch, Route } from "/@fs/home/runner/workspace/node_modules/.vite/deps/wouter.js?v=ff68c9af";
import { queryClient } from "/src/lib/queryClient.ts";
import { QueryClientProvider } from "/@fs/home/runner/workspace/node_modules/.vite/deps/@tanstack_react-query.js?v=ff68c9af";
import { Toaster } from "/src/components/ui/toaster.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip.tsx";
import NotFound from "/src/pages/not-found.tsx";
import Home from "/src/pages/Home.tsx";
import Schools from "/src/pages/Schools.tsx";
import Renovations from "/src/pages/Renovations.tsx";
import PostConstruction from "/src/pages/PostConstruction.tsx";
import Commercial from "/src/pages/Commercial.tsx";
import ServiceAreas from "/src/pages/ServiceAreas.tsx";
import Contact from "/src/pages/Contact.tsx";
import { ChatWidget } from "/src/components/ChatWidget.tsx";
function Router() {
  return /* @__PURE__ */ jsxDEV(Switch, { "data-replit-metadata": "client/src/App.tsx:18:4", "data-component-name": "Switch", children: [
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:19:6", "data-component-name": "Route", path: "/", component: Home }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:20:6", "data-component-name": "Route", path: "/student-housing", component: Schools }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:21:6", "data-component-name": "Route", path: "/renovations", component: Renovations }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:22:6", "data-component-name": "Route", path: "/post-construction", component: PostConstruction }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:23:6", "data-component-name": "Route", path: "/commercial", component: Commercial }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:24:6", "data-component-name": "Route", path: "/service-areas", component: ServiceAreas }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:25:6", "data-component-name": "Route", path: "/contact", component: Contact }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-replit-metadata": "client/src/App.tsx:26:6", "data-component-name": "Route", component: NotFound }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/App.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
_c = Router;
function App() {
  return /* @__PURE__ */ jsxDEV(QueryClientProvider, { "data-replit-metadata": "client/src/App.tsx:33:4", "data-component-name": "QueryClientProvider", client: queryClient, children: /* @__PURE__ */ jsxDEV(TooltipProvider, { "data-replit-metadata": "client/src/App.tsx:34:6", "data-component-name": "TooltipProvider", children: [
    /* @__PURE__ */ jsxDEV(Router, { "data-replit-metadata": "client/src/App.tsx:35:8", "data-component-name": "Router" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(ChatWidget, { "data-replit-metadata": "client/src/App.tsx:36:8", "data-component-name": "ChatWidget" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, { "data-replit-metadata": "client/src/App.tsx:37:8", "data-component-name": "Toaster" }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/App.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/App.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/client/src/App.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "Router");
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JNOzs7Ozs7Ozs7Ozs7Ozs7O0FBbEJOLFNBQVNBLFFBQVFDLGFBQWE7QUFDOUIsU0FBU0MsbUJBQW1CO0FBQzVCLFNBQVNDLDJCQUEyQjtBQUNwQyxTQUFTQyxlQUFlO0FBQ3hCLFNBQVNDLHVCQUF1QjtBQUNoQyxPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0Msc0JBQXNCO0FBQzdCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxrQkFBa0I7QUFDekIsT0FBT0MsYUFBYTtBQUNwQixTQUFTQyxrQkFBa0I7QUFFM0IsU0FBU0MsU0FBUztBQUNoQixTQUNFLHVCQUFDLFVBQUssb0ZBQ0o7QUFBQSwyQkFBQyxTQUFJLG1GQUFFLE1BQUssS0FBSSxXQUFXUixRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdDO0FBQUEsSUFDaEMsdUJBQUMsU0FBSSxtRkFBRSxNQUFLLG9CQUFtQixXQUFXQyxXQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtEO0FBQUEsSUFDbEQsdUJBQUMsU0FBSSxtRkFBRSxNQUFLLGdCQUFlLFdBQVdDLGVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBa0Q7QUFBQSxJQUNsRCx1QkFBQyxTQUFJLG1GQUFFLE1BQUssc0JBQXFCLFdBQVdDLG9CQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTZEO0FBQUEsSUFDN0QsdUJBQUMsU0FBSSxtRkFBRSxNQUFLLGVBQWMsV0FBV0MsY0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnRDtBQUFBLElBQ2hELHVCQUFDLFNBQUksbUZBQUUsTUFBSyxrQkFBaUIsV0FBV0MsZ0JBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBcUQ7QUFBQSxJQUNyRCx1QkFBQyxTQUFJLG1GQUFFLE1BQUssWUFBVyxXQUFXQyxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTBDO0FBQUEsSUFDMUMsdUJBQUMsU0FBSSxtRkFBRSxXQUFXUCxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTJCO0FBQUEsT0FSN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNBO0FBRUo7QUFBQVUsS0FiU0Q7QUFlVCxTQUFTRSxNQUFNO0FBQ2IsU0FDRSx1QkFBQyx1QkFBa0IsaUdBQUUsUUFBUWYsYUFDM0IsaUNBQUMsbUJBQWMsNkZBQ2I7QUFBQSwyQkFBQyxVQUFLLHNGQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLElBQ1AsdUJBQUMsY0FBUywwRkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVc7QUFBQSxJQUNYLHVCQUFDLFdBQU0sdUZBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFRO0FBQUEsT0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUEsS0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUE7QUFFSjtBQUFBZ0IsTUFWU0Q7QUFZVCxlQUFlQTtBQUFHLElBQUFELElBQUFFO0FBQUFDLGFBQUFILElBQUE7QUFBQUcsYUFBQUQsS0FBQSIsIm5hbWVzIjpbIlN3aXRjaCIsIlJvdXRlIiwicXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiVG9hc3RlciIsIlRvb2x0aXBQcm92aWRlciIsIk5vdEZvdW5kIiwiSG9tZSIsIlNjaG9vbHMiLCJSZW5vdmF0aW9ucyIsIlBvc3RDb25zdHJ1Y3Rpb24iLCJDb21tZXJjaWFsIiwiU2VydmljZUFyZWFzIiwiQ29udGFjdCIsIkNoYXRXaWRnZXQiLCJSb3V0ZXIiLCJfYyIsIkFwcCIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tIFwid291dGVyXCI7XG5pbXBvcnQgeyBxdWVyeUNsaWVudCB9IGZyb20gXCIuL2xpYi9xdWVyeUNsaWVudFwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvYXN0ZXJcIjtcbmltcG9ydCB7IFRvb2x0aXBQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9vbHRpcFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCJAL3BhZ2VzL25vdC1mb3VuZFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIkAvcGFnZXMvSG9tZVwiO1xuaW1wb3J0IFNjaG9vbHMgZnJvbSBcIkAvcGFnZXMvU2Nob29sc1wiO1xuaW1wb3J0IFJlbm92YXRpb25zIGZyb20gXCJAL3BhZ2VzL1Jlbm92YXRpb25zXCI7XG5pbXBvcnQgUG9zdENvbnN0cnVjdGlvbiBmcm9tIFwiQC9wYWdlcy9Qb3N0Q29uc3RydWN0aW9uXCI7XG5pbXBvcnQgQ29tbWVyY2lhbCBmcm9tIFwiQC9wYWdlcy9Db21tZXJjaWFsXCI7XG5pbXBvcnQgU2VydmljZUFyZWFzIGZyb20gXCJAL3BhZ2VzL1NlcnZpY2VBcmVhc1wiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIkAvcGFnZXMvQ29udGFjdFwiO1xuaW1wb3J0IHsgQ2hhdFdpZGdldCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2hhdFdpZGdldFwiO1xuXG5mdW5jdGlvbiBSb3V0ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFN3aXRjaD5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3N0dWRlbnQtaG91c2luZ1wiIGNvbXBvbmVudD17U2Nob29sc30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlbm92YXRpb25zXCIgY29tcG9uZW50PXtSZW5vdmF0aW9uc30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3Bvc3QtY29uc3RydWN0aW9uXCIgY29tcG9uZW50PXtQb3N0Q29uc3RydWN0aW9ufSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvY29tbWVyY2lhbFwiIGNvbXBvbmVudD17Q29tbWVyY2lhbH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3NlcnZpY2UtYXJlYXNcIiBjb21wb25lbnQ9e1NlcnZpY2VBcmVhc30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnRhY3RcIiBjb21wb25lbnQ9e0NvbnRhY3R9IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICA8L1N3aXRjaD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPFRvb2x0aXBQcm92aWRlcj5cbiAgICAgICAgPFJvdXRlciAvPlxuICAgICAgICA8Q2hhdFdpZGdldCAvPlxuICAgICAgICA8VG9hc3RlciAvPlxuICAgICAgPC9Ub29sdGlwUHJvdmlkZXI+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9BcHAudHN4In0=