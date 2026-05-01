import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ChatWidget.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/components/ChatWidget.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/@fs/home/runner/workspace/node_modules/.vite/deps/react.js?v=ff68c9af"; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { Button } from "/src/components/ui/button.tsx";
import { Card } from "/src/components/ui/card.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { MessageCircle, X, Send, Loader2 } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { cn } from "/src/lib/utils.ts";
export function ChatWidget() {
  _s();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(
    [
      {
        role: "assistant",
        content: "Hi! I'm here to help answer questions about our student housing turn services, renovations, and cleaning. How can I assist you today?"
      }
    ]
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });
      if (!response.ok) throw new Error("Failed to send message");
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.content) {
                assistantMessage += data.content;
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    role: "assistant",
                    content: assistantMessage
                  };
                  return newMessages;
                });
              }
            } catch {
            }
          }
        }
      }
    } catch (error) {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting. Please call us at (980) 228-9209 or email TotalPropertySolutionsProLLC@gmail.com"
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    !isOpen && /* @__PURE__ */ jsxDEV(
      Button,
      {
        "data-replit-metadata": "client/src/components/ChatWidget.tsx:109:8",
        "data-component-name": "Button",
        onClick: () => setIsOpen(true),
        className: "fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg",
        size: "icon",
        "data-testid": "button-chat-open",
        children: /* @__PURE__ */ jsxDEV(MessageCircle, { "data-replit-metadata": "client/src/components/ChatWidget.tsx:115:10", "data-component-name": "MessageCircle", className: "w-6 h-6" }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
        lineNumber: 128,
        columnNumber: 7
      },
      this
    ),
    isOpen && /* @__PURE__ */ jsxDEV(Card, { "data-replit-metadata": "client/src/components/ChatWidget.tsx:120:8", "data-component-name": "Card", className: "fixed bottom-6 right-6 z-50 w-[360px] h-[500px] flex flex-col shadow-2xl border-2", "data-testid": "chat-widget", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ChatWidget.tsx:121:10", "data-component-name": "div", className: "bg-primary text-white p-4 rounded-t-md flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ChatWidget.tsx:122:12", "data-component-name": "div", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "client/src/components/ChatWidget.tsx:123:14", "data-component-name": "h3", className: "font-bold", children: "Total Property Solutions" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "client/src/components/ChatWidget.tsx:124:14", "data-component-name": "p", className: "text-sm text-white/80", children: "Ask us anything" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-replit-metadata": "client/src/components/ChatWidget.tsx:126:12",
            "data-component-name": "Button",
            variant: "ghost",
            size: "icon",
            onClick: () => setIsOpen(false),
            className: "text-white hover:bg-white/20",
            "data-testid": "button-chat-close",
            children: /* @__PURE__ */ jsxDEV(X, { "data-replit-metadata": "client/src/components/ChatWidget.tsx:133:14", "data-component-name": "X", className: "w-5 h-5" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
              lineNumber: 152,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
            lineNumber: 145,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ChatWidget.tsx:137:10", "data-component-name": "div", className: "flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50", children: [
        messages.map(
          (message, i) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              "data-replit-metadata": "client/src/components/ChatWidget.tsx:139:14",
              "data-component-name": "div",
              className: cn(
                "max-w-[85%] p-3 rounded-lg text-sm",
                message.role === "user" ? "ml-auto bg-primary text-white" : "bg-white border shadow-sm"
              ),
              "data-testid": `message-${message.role}-${i}`,
              children: message.content || /* @__PURE__ */ jsxDEV(Loader2, { "data-replit-metadata": "client/src/components/ChatWidget.tsx:150:18", "data-component-name": "Loader2", className: "w-4 h-4 animate-spin" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
                lineNumber: 169,
                columnNumber: 13
              }, this)
            },
            i,
            false,
            {
              fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
              lineNumber: 158,
              columnNumber: 11
            },
            this
          )
        ),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ChatWidget.tsx:154:12", "data-component-name": "div", ref: messagesEndRef }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ChatWidget.tsx:157:10", "data-component-name": "div", className: "p-4 border-t bg-white rounded-b-md", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "client/src/components/ChatWidget.tsx:158:12", "data-component-name": "div", className: "flex gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          Input,
          {
            "data-replit-metadata": "client/src/components/ChatWidget.tsx:159:14",
            "data-component-name": "Input",
            ref: inputRef,
            value: input,
            onChange: (e) => setInput(e.target.value),
            onKeyDown: handleKeyDown,
            placeholder: "Type your question...",
            disabled: isLoading,
            className: "flex-1",
            "data-testid": "input-chat-message"
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
            lineNumber: 178,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            "data-replit-metadata": "client/src/components/ChatWidget.tsx:169:14",
            "data-component-name": "Button",
            onClick: sendMessage,
            disabled: !input.trim() || isLoading,
            size: "icon",
            className: "bg-primary",
            "data-testid": "button-chat-send",
            children: isLoading ? /* @__PURE__ */ jsxDEV(Loader2, { "data-replit-metadata": "client/src/components/ChatWidget.tsx:177:18", "data-component-name": "Loader2", className: "w-4 h-4 animate-spin" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
              lineNumber: 196,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV(Send, { "data-replit-metadata": "client/src/components/ChatWidget.tsx:179:18", "data-component-name": "Send", className: "w-4 h-4" }, void 0, false, {
              fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
              lineNumber: 198,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
            lineNumber: 188,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
        lineNumber: 177,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
        lineNumber: 176,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/components/ChatWidget.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
_s(ChatWidget, "Ab1fhTJujwUePlHk/tYwdxvpYQA=");
_c = ChatWidget;
var _c;
$RefreshReg$(_c, "ChatWidget");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/components/ChatWidget.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/components/ChatWidget.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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IklucHV0IiwiTWVzc2FnZUNpcmNsZSIsIlgiLCJTZW5kIiwiTG9hZGVyMiIsImNuIiwiQ2hhdFdpZGdldCIsIl9zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwiaW5wdXQiLCJzZXRJbnB1dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2VzRW5kUmVmIiwiaW5wdXRSZWYiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZm9jdXMiLCJzZW5kTWVzc2FnZSIsInRyaW0iLCJ1c2VyTWVzc2FnZSIsInByZXYiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsIm9rIiwiRXJyb3IiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJhc3Npc3RhbnRNZXNzYWdlIiwiZG9uZSIsInZhbHVlIiwicmVhZCIsImNodW5rIiwiZGVjb2RlIiwibGluZXMiLCJzcGxpdCIsImxpbmUiLCJzdGFydHNXaXRoIiwiZGF0YSIsInBhcnNlIiwic2xpY2UiLCJuZXdNZXNzYWdlcyIsImxlbmd0aCIsImVycm9yIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwibWFwIiwiaSIsInRhcmdldCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNoYXRXaWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTWVzc2FnZUNpcmNsZSwgWCwgU2VuZCwgTG9hZGVyMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgcm9sZTogXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0V2lkZ2V0KCkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW1xuICAgIHtcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICBjb250ZW50OiBcIkhpISBJJ20gaGVyZSB0byBoZWxwIGFuc3dlciBxdWVzdGlvbnMgYWJvdXQgb3VyIHN0dWRlbnQgaG91c2luZyB0dXJuIHNlcnZpY2VzLCByZW5vdmF0aW9ucywgYW5kIGNsZWFuaW5nLiBIb3cgY2FuIEkgYXNzaXN0IHlvdSB0b2RheT9cIlxuICAgIH1cbiAgXSk7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XG4gICAgbWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNjcm9sbFRvQm90dG9tKCk7XG4gIH0sIFttZXNzYWdlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3BlbiAmJiBpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbaXNPcGVuXSk7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpbnB1dC50cmltKCkgfHwgaXNMb2FkaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCB1c2VyTWVzc2FnZSA9IGlucHV0LnRyaW0oKTtcbiAgICBzZXRJbnB1dChcIlwiKTtcbiAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiB1c2VyTWVzc2FnZSB9XSk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NoYXRcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogdXNlck1lc3NhZ2UgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZVwiKTtcblxuICAgICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keT8uZ2V0UmVhZGVyKCk7XG4gICAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgICBsZXQgYXNzaXN0YW50TWVzc2FnZSA9IFwiXCI7XG5cbiAgICAgIHNldE1lc3NhZ2VzKHByZXYgPT4gWy4uLnByZXYsIHsgcm9sZTogXCJhc3Npc3RhbnRcIiwgY29udGVudDogXCJcIiB9XSk7XG5cbiAgICAgIHdoaWxlIChyZWFkZXIpIHtcbiAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgaWYgKGRvbmUpIGJyZWFrO1xuXG4gICAgICAgIGNvbnN0IGNodW5rID0gZGVjb2Rlci5kZWNvZGUodmFsdWUpO1xuICAgICAgICBjb25zdCBsaW5lcyA9IGNodW5rLnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJkYXRhOiBcIikpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxpbmUuc2xpY2UoNikpO1xuICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgYXNzaXN0YW50TWVzc2FnZSArPSBkYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlcyA9IFsuLi5wcmV2XTtcbiAgICAgICAgICAgICAgICAgIG5ld01lc3NhZ2VzW25ld01lc3NhZ2VzLmxlbmd0aCAtIDFdID0ge1xuICAgICAgICAgICAgICAgICAgICByb2xlOiBcImFzc2lzdGFudFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBhc3Npc3RhbnRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld01lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldE1lc3NhZ2VzKHByZXYgPT4gWy4uLnByZXYsIHtcbiAgICAgICAgcm9sZTogXCJhc3Npc3RhbnRcIixcbiAgICAgICAgY29udGVudDogXCJTb3JyeSwgSSdtIGhhdmluZyB0cm91YmxlIGNvbm5lY3RpbmcuIFBsZWFzZSBjYWxsIHVzIGF0ICg5ODApIDIyOC05MjA5IG9yIGVtYWlsIFRvdGFsUHJvcGVydHlTb2x1dGlvbnNQcm9MTENAZ21haWwuY29tXCJcbiAgICAgIH1dKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNlbmRNZXNzYWdlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshaXNPcGVuICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNiByaWdodC02IHotNTAgcm91bmRlZC1mdWxsIHctMTQgaC0xNCBiZy1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnkvOTAgc2hhZG93LWxnXCJcbiAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJidXR0b24tY2hhdC1vcGVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxNZXNzYWdlQ2lyY2xlIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNiByaWdodC02IHotNTAgdy1bMzYwcHhdIGgtWzUwMHB4XSBmbGV4IGZsZXgtY29sIHNoYWRvdy0yeGwgYm9yZGVyLTJcIiBkYXRhLXRlc3RpZD1cImNoYXQtd2lkZ2V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGUgcC00IHJvdW5kZWQtdC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Ub3RhbCBQcm9wZXJ0eSBTb2x1dGlvbnM8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUvODBcIj5Bc2sgdXMgYW55dGhpbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzIwXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJidXR0b24tY2hhdC1jbG9zZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC00IHNwYWNlLXktNCBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgIFwibWF4LXctWzg1JV0gcC0zIHJvdW5kZWQtbGcgdGV4dC1zbVwiLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICA/IFwibWwtYXV0byBiZy1wcmltYXJ5IHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctd2hpdGUgYm9yZGVyIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YG1lc3NhZ2UtJHttZXNzYWdlLnJvbGV9LSR7aX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudCB8fCAoXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyMiBjbGFzc05hbWU9XCJ3LTQgaC00IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxkaXYgcmVmPXttZXNzYWdlc0VuZFJlZn0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci10IGJnLXdoaXRlIHJvdW5kZWQtYi1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBxdWVzdGlvbi4uLlwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaW5wdXQtY2hhdC1tZXNzYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaW5wdXQudHJpbSgpIHx8IGlzTG9hZGluZ31cbiAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJidXR0b24tY2hhdC1zZW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyMiBjbGFzc05hbWU9XCJ3LTQgaC00IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxTZW5kIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9jb21wb25lbnRzL0NoYXRXaWRnZXQudHN4In0=