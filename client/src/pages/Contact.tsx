import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Contact.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ff68c9af"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/runner/workspace/client/src/pages/Contact.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { Navbar } from "/src/components/layout/Navbar.tsx";
import { Footer } from "/src/components/layout/Footer.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { useForm } from "/@fs/home/runner/workspace/node_modules/.vite/deps/react-hook-form.js?v=ff68c9af";
import { zodResolver } from "/@fs/home/runner/workspace/node_modules/.vite/deps/@hookform_resolvers_zod.js?v=ff68c9af";
import { insertContactRequestSchema } from "/@fs/home/runner/workspace/shared/schema.ts";
import { useCreateContactRequest } from "/src/hooks/use-contact.ts";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "/src/components/ui/form.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Textarea } from "/src/components/ui/textarea.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/src/components/ui/select.tsx";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "/@fs/home/runner/workspace/node_modules/.vite/deps/lucide-react.js?v=ff68c9af";
import { z } from "/@fs/home/runner/workspace/node_modules/.vite/deps/zod.js?v=ff68c9af";
const formSchema = insertContactRequestSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Please provide a bit more detail"),
  serviceType: z.string().min(1, "Please select a service")
});
export default function Contact() {
  _s();
  const mutation = useCreateContactRequest();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
    }
  });
  const onSubmit = (data) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-primary text-white pt-32 pb-20", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl font-display font-bold mb-4", children: "Get a Quote" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-white/80", children: "We're available 24/7 to discuss your project needs" }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 md:px-6 py-12 -mt-10 mb-12 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-1 space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-2xl shadow-lg border border-gray-100", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold mb-6", children: "Contact Information" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 86,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 85,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-gray-500 mb-1", children: "Phone" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 89,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "tel:1-800-791-7845", className: "block text-lg font-bold text-gray-900 hover:text-primary transition-colors", "data-testid": "link-contact-phone-tollfree", children: "1-800-791-7845" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 90,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-500", children: "Toll-Free" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 93,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "tel:518-948-7156", className: "block text-lg font-bold text-gray-900 hover:text-primary transition-colors mt-2", "data-testid": "link-contact-phone-local", children: "(518) 948-7156" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 94,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-500", children: "Albany Capital Region" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 97,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 88,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 102,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-gray-500 mb-1", children: "Email" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 106,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("a", { href: "mailto:TotalPropertySolutionsProLLC@gmail.com", className: "block text-sm font-semibold text-gray-900 hover:text-primary transition-colors break-all", "data-testid": "link-contact-email", children: "TotalPropertySolutionsProLLC@gmail.com" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 107,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 105,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxDEV(Clock, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 115,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-gray-500 mb-1", children: "Hours" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 118,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-gray-900 font-bold", children: "Open 24/7" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 119,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 125,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 124,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-gray-500 mb-1", children: "Service Areas" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 128,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-gray-900 font-semibold", children: "HQ: Albany, NY Capital Region" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 129,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm mt-1", children: [
                  "Oneonta | Catskill Region",
                  /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 133,
                    columnNumber: 48
                  }, this),
                  "Florida | North Carolina"
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 132,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 127,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-primary p-8 rounded-2xl shadow-lg text-white", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold mb-4", children: "Why Choose Us?" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 shrink-0" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 145,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Fully Insured & Bonded" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 146,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 shrink-0" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 149,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Trained Professionals" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 150,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 148,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 shrink-0" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 153,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Eco-Friendly Options" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 154,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 152,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 shrink-0" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 157,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "100% Satisfaction Guarantee" }, void 0, false, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 158,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-full", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold mb-2", children: "Send Us a Message" }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "Fill out the form below for a free quote. We typically respond within 24 hours." }, void 0, false, {
            fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Form, { ...form, children: /* @__PURE__ */ jsxDEV("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV(
              FormField,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
                  /* @__PURE__ */ jsxDEV(FormLabel, { children: "Full Name" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 182,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      placeholder: "John Doe",
                      className: "bg-gray-50 h-12",
                      "data-testid": "input-name",
                      ...field
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                      lineNumber: 184,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 183,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 191,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 181,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 177,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              FormField,
              {
                control: form.control,
                name: "phone",
                render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
                  /* @__PURE__ */ jsxDEV(FormLabel, { children: "Phone Number" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 201,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      placeholder: "(555) 000-0000",
                      className: "bg-gray-50 h-12",
                      "data-testid": "input-phone",
                      ...field
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                      lineNumber: 203,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 202,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 210,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 200,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 196,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
            lineNumber: 176,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV(
              FormField,
              {
                control: form.control,
                name: "email",
                render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
                  /* @__PURE__ */ jsxDEV(FormLabel, { children: "Email Address" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 222,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(
                    Input,
                    {
                      placeholder: "john@example.com",
                      className: "bg-gray-50 h-12",
                      "data-testid": "input-email",
                      ...field
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                      lineNumber: 224,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 223,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 231,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 221,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 217,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              FormField,
              {
                control: form.control,
                name: "serviceType",
                render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
                  /* @__PURE__ */ jsxDEV(FormLabel, { children: "Service Type" }, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 241,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                    /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(SelectTrigger, { className: "bg-gray-50 h-12", "data-testid": "select-service", children: /* @__PURE__ */ jsxDEV(SelectValue, { placeholder: "Select a service" }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                      lineNumber: 245,
                      columnNumber: 33
                    }, this) }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                      lineNumber: 244,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                      lineNumber: 243,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectContent, { children: [
                      /* @__PURE__ */ jsxDEV(SelectItem, { value: "schools", children: "Schools" }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                        lineNumber: 249,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectItem, { value: "renovations", children: "Renovations" }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                        lineNumber: 250,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectItem, { value: "post-construction", children: "Post-Construction" }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                        lineNumber: 251,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectItem, { value: "commercial", children: "Commercial Cleaning" }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                        lineNumber: 252,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectItem, { value: "turnover", children: "Turnover" }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                        lineNumber: 253,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV(SelectItem, { value: "residential", children: "Residential" }, void 0, false, {
                        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                        lineNumber: 254,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                      lineNumber: 248,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 242,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 257,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 240,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 236,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
            lineNumber: 216,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV(
            FormField,
            {
              control: form.control,
              name: "message",
              render: ({ field }) => /* @__PURE__ */ jsxDEV(FormItem, { children: [
                /* @__PURE__ */ jsxDEV(FormLabel, { children: "Message" }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 268,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV(FormControl, { children: /* @__PURE__ */ jsxDEV(
                  Textarea,
                  {
                    placeholder: "Tell us about your property and cleaning needs...",
                    className: "bg-gray-50 min-h-[150px] resize-none",
                    "data-testid": "textarea-message",
                    ...field
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                    lineNumber: 270,
                    columnNumber: 27
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 269,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV(FormMessage, {}, void 0, false, {
                  fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                  lineNumber: 277,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
                lineNumber: 267,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 263,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              type: "submit",
              size: "lg",
              className: "w-full h-14 text-lg font-bold bg-[#FFD23F] hover:bg-[#FFD23F]/90 text-gray-900 shadow-lg",
              disabled: mutation.isPending,
              "data-testid": "button-submit",
              children: mutation.isPending ? "Sending Request..." : "Send Request"
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
              lineNumber: 282,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
          lineNumber: 175,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
      lineNumber: 299,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/client/src/pages/Contact.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
_s(Contact, "eR+WBWrgnH3hs4b1Cl6qbEnJVjI=", false, function() {
  return [useCreateContactRequest, useForm];
});
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/pages/Contact.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/pages/Contact.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFRQTtBQUFBLGFBbkhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFvSEEsS0FySEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXNIQTtBQUFBLFdBOUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUErSEEsS0FoSUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWlJQTtBQUFBLFNBek5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EyTkEsS0E1TkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTZOQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQTFPVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMk9BO0FBRUo7QUFBQ2YsR0FsUXVCRCxTQUFPO0FBQUEsVUFDWjdCLHlCQUVKSCxPQUFPO0FBQUE7QUFBQWlELEtBSEVqQjtBQUFPLElBQUFpQjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiTmF2YmFyIiwiRm9vdGVyIiwiQnV0dG9uIiwidXNlRm9ybSIsInpvZFJlc29sdmVyIiwiaW5zZXJ0Q29udGFjdFJlcXVlc3RTY2hlbWEiLCJ1c2VDcmVhdGVDb250YWN0UmVxdWVzdCIsIkZvcm0iLCJGb3JtQ29udHJvbCIsIkZvcm1GaWVsZCIsIkZvcm1JdGVtIiwiRm9ybUxhYmVsIiwiRm9ybU1lc3NhZ2UiLCJJbnB1dCIsIlRleHRhcmVhIiwiU2VsZWN0IiwiU2VsZWN0Q29udGVudCIsIlNlbGVjdEl0ZW0iLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJQaG9uZSIsIk1haWwiLCJNYXBQaW4iLCJDbG9jayIsIkNoZWNrQ2lyY2xlIiwieiIsImZvcm1TY2hlbWEiLCJleHRlbmQiLCJlbWFpbCIsInN0cmluZyIsInBob25lIiwibWluIiwibmFtZSIsIm1lc3NhZ2UiLCJzZXJ2aWNlVHlwZSIsIkNvbnRhY3QiLCJfcyIsIm11dGF0aW9uIiwiZm9ybSIsInJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsIm11dGF0ZSIsIm9uU3VjY2VzcyIsInJlc2V0IiwiaGFuZGxlU3VibWl0IiwiY29udHJvbCIsImZpZWxkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImlzUGVuZGluZyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNvbnRhY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5pbXBvcnQgeyBpbnNlcnRDb250YWN0UmVxdWVzdFNjaGVtYSB9IGZyb20gXCJAc2hhcmVkL3NjaGVtYVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGFjdFJlcXVlc3QgfSBmcm9tIFwiQC9ob29rcy91c2UtY29udGFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybUNvbnRyb2wsIEZvcm1GaWVsZCwgRm9ybUl0ZW0sIEZvcm1MYWJlbCwgRm9ybU1lc3NhZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Zvcm1cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBTZWxlY3QsIFNlbGVjdENvbnRlbnQsIFNlbGVjdEl0ZW0sIFNlbGVjdFRyaWdnZXIsIFNlbGVjdFZhbHVlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIjtcbmltcG9ydCB7IFBob25lLCBNYWlsLCBNYXBQaW4sIENsb2NrLCBDaGVja0NpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmNvbnN0IGZvcm1TY2hlbWEgPSBpbnNlcnRDb250YWN0UmVxdWVzdFNjaGVtYS5leHRlbmQoe1xuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbChcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIiksXG4gIHBob25lOiB6LnN0cmluZygpLm1pbigxMCwgXCJQaG9uZSBudW1iZXIgbXVzdCBiZSBhdCBsZWFzdCAxMCBkaWdpdHNcIiksXG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDIsIFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVyc1wiKSxcbiAgbWVzc2FnZTogei5zdHJpbmcoKS5taW4oMTAsIFwiUGxlYXNlIHByb3ZpZGUgYSBiaXQgbW9yZSBkZXRhaWxcIiksXG4gIHNlcnZpY2VUeXBlOiB6LnN0cmluZygpLm1pbigxLCBcIlBsZWFzZSBzZWxlY3QgYSBzZXJ2aWNlXCIpLFxufSk7XG5cbnR5cGUgRm9ybURhdGEgPSB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgbXV0YXRpb24gPSB1c2VDcmVhdGVDb250YWN0UmVxdWVzdCgpO1xuICBcbiAgY29uc3QgZm9ybSA9IHVzZUZvcm08Rm9ybURhdGE+KHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoZm9ybVNjaGVtYSksXG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGhvbmU6IFwiXCIsXG4gICAgICBzZXJ2aWNlVHlwZTogXCJcIixcbiAgICAgIG1lc3NhZ2U6IFwiXCJcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IEZvcm1EYXRhKSA9PiB7XG4gICAgbXV0YXRpb24ubXV0YXRlKGRhdGEsIHtcbiAgICAgIG9uU3VjY2VzczogKCkgPT4gZm9ybS5yZXNldCgpXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGJnLXdoaXRlXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICBcbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdGV4dC13aGl0ZSBwdC0zMiBwYi0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1kaXNwbGF5IGZvbnQtYm9sZCBtYi00XCI+R2V0IGEgUXVvdGU8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZS84MFwiPldlJ3JlIGF2YWlsYWJsZSAyNC83IHRvIGRpc2N1c3MgeW91ciBwcm9qZWN0IG5lZWRzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNiBweS0xMiAtbXQtMTAgbWItMTIgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogQ29udGFjdCBJbmZvIENhcmRzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMSBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtMnhsIHNoYWRvdy1sZyBib3JkZXIgYm9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi02XCI+Q29udGFjdCBJbmZvcm1hdGlvbjwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXByaW1hcnkgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgbWItMVwiPlBob25lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjEtODAwLTc5MS03ODQ1XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIiBkYXRhLXRlc3RpZD1cImxpbmstY29udGFjdC1waG9uZS10b2xsZnJlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDEtODAwLTc5MS03ODQ1XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+VG9sbC1GcmVlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjUxOC05NDgtNzE1NlwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIG10LTJcIiBkYXRhLXRlc3RpZD1cImxpbmstY29udGFjdC1waG9uZS1sb2NhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICg1MTgpIDk0OC03MTU2XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+QWxiYW55IENhcGl0YWwgUmVnaW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtcHJpbWFyeSBzaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIG1iLTFcIj5FbWFpbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpUb3RhbFByb3BlcnR5U29sdXRpb25zUHJvTExDQGdtYWlsLmNvbVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9ycyBicmVhay1hbGxcIiBkYXRhLXRlc3RpZD1cImxpbmstY29udGFjdC1lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRvdGFsUHJvcGVydHlTb2x1dGlvbnNQcm9MTENAZ21haWwuY29tXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXByaW1hcnkgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENsb2NrIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgbWItMVwiPkhvdXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZFwiPk9wZW4gMjQvNzwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXByaW1hcnkgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1hcFBpbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIG1iLTFcIj5TZXJ2aWNlIEFyZWFzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBIUTogQWxiYW55LCBOWSBDYXBpdGFsIFJlZ2lvblxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgT25lb250YSB8IENhdHNraWxsIFJlZ2lvbjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgRmxvcmlkYSB8IE5vcnRoIENhcm9saW5hXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgcC04IHJvdW5kZWQtMnhsIHNoYWRvdy1sZyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+V2h5IENob29zZSBVcz88L2gzPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUgY2xhc3NOYW1lPVwidy01IGgtNSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5GdWxseSBJbnN1cmVkICYgQm9uZGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUgY2xhc3NOYW1lPVwidy01IGgtNSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5UcmFpbmVkIFByb2Zlc3Npb25hbHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTUgaC01IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkVjby1GcmllbmRseSBPcHRpb25zPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUgY2xhc3NOYW1lPVwidy01IGgtNSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4xMDAlIFNhdGlzZmFjdGlvbiBHdWFyYW50ZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENvbnRhY3QgRm9ybSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IG1kOnAtMTAgcm91bmRlZC0yeGwgc2hhZG93LXhsIGJvcmRlciBib3JkZXItZ3JheS0xMDAgaC1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMlwiPlNlbmQgVXMgYSBNZXNzYWdlPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICBGaWxsIG91dCB0aGUgZm9ybSBiZWxvdyBmb3IgYSBmcmVlIHF1b3RlLiBXZSB0eXBpY2FsbHkgcmVzcG9uZCB3aXRoaW4gMjQgaG91cnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8Rm9ybSB7Li4uZm9ybX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RnVsbCBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGgtMTJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaW5wdXQtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlBob25lIE51bWJlcjwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIoNTU1KSAwMDAtMDAwMFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBoLTEyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImlucHV0LXBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FbWFpbCBBZGRyZXNzPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImpvaG5AZXhhbXBsZS5jb21cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgaC0xMlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJpbnB1dC1lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlcnZpY2VUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5TZXJ2aWNlIFR5cGU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvblZhbHVlQ2hhbmdlPXtmaWVsZC5vbkNoYW5nZX0gZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBoLTEyXCIgZGF0YS10ZXN0aWQ9XCJzZWxlY3Qtc2VydmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBzZXJ2aWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJzY2hvb2xzXCI+U2Nob29sczwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwicmVub3ZhdGlvbnNcIj5SZW5vdmF0aW9uczwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwicG9zdC1jb25zdHJ1Y3Rpb25cIj5Qb3N0LUNvbnN0cnVjdGlvbjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiY29tbWVyY2lhbFwiPkNvbW1lcmNpYWwgQ2xlYW5pbmc8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cInR1cm5vdmVyXCI+VHVybm92ZXI8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cInJlc2lkZW50aWFsXCI+UmVzaWRlbnRpYWw8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5NZXNzYWdlPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgYWJvdXQgeW91ciBwcm9wZXJ0eSBhbmQgY2xlYW5pbmcgbmVlZHMuLi5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIG1pbi1oLVsxNTBweF0gcmVzaXplLW5vbmVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInRleHRhcmVhLW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTE0IHRleHQtbGcgZm9udC1ib2xkIGJnLVsjRkZEMjNGXSBob3ZlcjpiZy1bI0ZGRDIzRl0vOTAgdGV4dC1ncmF5LTkwMCBzaGFkb3ctbGdcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bXV0YXRpb24uaXNQZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImJ1dHRvbi1zdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bXV0YXRpb24uaXNQZW5kaW5nID8gXCJTZW5kaW5nIFJlcXVlc3QuLi5cIiA6IFwiU2VuZCBSZXF1ZXN0XCJ9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9jbGllbnQvc3JjL3BhZ2VzL0NvbnRhY3QudHN4In0=