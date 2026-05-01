export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem",
        /* 9px */
        md: ".375rem",
        /* 6px */
        sm: ".1875rem"
        /* 3px */
      },
      colors: {
        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)"
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)"
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)"
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)"
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)"
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhaWx3aW5kLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhcmtNb2RlOiBbXCJjbGFzc1wiXSxcbiAgY29udGVudDogW1wiLi9jbGllbnQvaW5kZXguaHRtbFwiLCBcIi4vY2xpZW50L3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fVwiXSxcbiAgdGhlbWU6IHtcbiAgICBleHRlbmQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czoge1xuICAgICAgICBsZzogXCIuNTYyNXJlbVwiLCAvKiA5cHggKi9cbiAgICAgICAgbWQ6IFwiLjM3NXJlbVwiLCAvKiA2cHggKi9cbiAgICAgICAgc206IFwiLjE4NzVyZW1cIiwgLyogM3B4ICovXG4gICAgICB9LFxuICAgICAgY29sb3JzOiB7XG4gICAgICAgIC8vIEZsYXQgLyBiYXNlIGNvbG9ycyAocmVndWxhciBidXR0b25zKVxuICAgICAgICBiYWNrZ3JvdW5kOiBcImhzbCh2YXIoLS1iYWNrZ3JvdW5kKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWZvcmVncm91bmQpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgYm9yZGVyOiBcImhzbCh2YXIoLS1ib3JkZXIpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgaW5wdXQ6IFwiaHNsKHZhcigtLWlucHV0KSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1jYXJkKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tY2FyZC1mb3JlZ3JvdW5kKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgYm9yZGVyOiBcImhzbCh2YXIoLS1jYXJkLWJvcmRlcikgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICB9LFxuICAgICAgICBwb3BvdmVyOiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tcG9wb3ZlcikgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLXBvcG92ZXItZm9yZWdyb3VuZCkgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJoc2wodmFyKC0tcG9wb3Zlci1ib3JkZXIpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgfSxcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXByaW1hcnkpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1wcmltYXJ5LWZvcmVncm91bmQpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgICBib3JkZXI6IFwidmFyKC0tcHJpbWFyeS1ib3JkZXIpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXNlY29uZGFyeSkgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLXNlY29uZGFyeS1mb3JlZ3JvdW5kKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgYm9yZGVyOiBcInZhcigtLXNlY29uZGFyeS1ib3JkZXIpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG11dGVkOiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tbXV0ZWQpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgYm9yZGVyOiBcInZhcigtLW11dGVkLWJvcmRlcilcIixcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZW50OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tYWNjZW50KSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tYWNjZW50LWZvcmVncm91bmQpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgICBib3JkZXI6IFwidmFyKC0tYWNjZW50LWJvcmRlcilcIixcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJ1Y3RpdmU6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1kZXN0cnVjdGl2ZSkgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWRlc3RydWN0aXZlLWZvcmVncm91bmQpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgICBib3JkZXI6IFwidmFyKC0tZGVzdHJ1Y3RpdmUtYm9yZGVyKVwiLFxuICAgICAgICB9LFxuICAgICAgICByaW5nOiBcImhzbCh2YXIoLS1yaW5nKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgXCIxXCI6IFwiaHNsKHZhcigtLWNoYXJ0LTEpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgICBcIjJcIjogXCJoc2wodmFyKC0tY2hhcnQtMikgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIFwiM1wiOiBcImhzbCh2YXIoLS1jaGFydC0zKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgXCI0XCI6IFwiaHNsKHZhcigtLWNoYXJ0LTQpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgICBcIjVcIjogXCJoc2wodmFyKC0tY2hhcnQtNSkgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICB9LFxuICAgICAgICBzaWRlYmFyOiB7XG4gICAgICAgICAgcmluZzogXCJoc2wodmFyKC0tc2lkZWJhci1yaW5nKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tc2lkZWJhcikgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLXNpZGViYXItZm9yZWdyb3VuZCkgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJoc2wodmFyKC0tc2lkZWJhci1ib3JkZXIpIC8gPGFscGhhLXZhbHVlPilcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaWRlYmFyLXByaW1hcnlcIjoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXNpZGViYXItcHJpbWFyeSkgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgYm9yZGVyOiBcInZhcigtLXNpZGViYXItcHJpbWFyeS1ib3JkZXIpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwic2lkZWJhci1hY2NlbnRcIjoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXNpZGViYXItYWNjZW50KSAvIDxhbHBoYS12YWx1ZT4pXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCkgLyA8YWxwaGEtdmFsdWU+KVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJ2YXIoLS1zaWRlYmFyLWFjY2VudC1ib3JkZXIpXCJcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgb25saW5lOiBcInJnYigzNCAxOTcgOTQpXCIsXG4gICAgICAgICAgYXdheTogXCJyZ2IoMjQ1IDE1OCAxMSlcIixcbiAgICAgICAgICBidXN5OiBcInJnYigyMzkgNjggNjgpXCIsXG4gICAgICAgICAgb2ZmbGluZTogXCJyZ2IoMTU2IDE2MyAxNzUpXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZm9udEZhbWlseToge1xuICAgICAgICBzYW5zOiBbXCJJbnRlclwiLCBcInNhbnMtc2VyaWZcIl0sXG4gICAgICAgIGRpc3BsYXk6IFtcIk91dGZpdFwiLCBcInNhbnMtc2VyaWZcIl0sXG4gICAgICAgIHNlcmlmOiBbXCJ2YXIoLS1mb250LXNlcmlmKVwiXSxcbiAgICAgICAgbW9ubzogW1widmFyKC0tZm9udC1tb25vKVwiXSxcbiAgICAgIH0sXG4gICAgICBrZXlmcmFtZXM6IHtcbiAgICAgICAgXCJhY2NvcmRpb24tZG93blwiOiB7XG4gICAgICAgICAgZnJvbTogeyBoZWlnaHQ6IFwiMFwiIH0sXG4gICAgICAgICAgdG86IHsgaGVpZ2h0OiBcInZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodClcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBcImFjY29yZGlvbi11cFwiOiB7XG4gICAgICAgICAgZnJvbTogeyBoZWlnaHQ6IFwidmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KVwiIH0sXG4gICAgICAgICAgdG86IHsgaGVpZ2h0OiBcIjBcIiB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBcImFjY29yZGlvbi1kb3duXCI6IFwiYWNjb3JkaW9uLWRvd24gMC4ycyBlYXNlLW91dFwiLFxuICAgICAgICBcImFjY29yZGlvbi11cFwiOiBcImFjY29yZGlvbi11cCAwLjJzIGVhc2Utb3V0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZXF1aXJlKFwidGFpbHdpbmRjc3MtYW5pbWF0ZVwiKSwgcmVxdWlyZShcIkB0YWlsd2luZGNzcy90eXBvZ3JhcGh5XCIpXSxcbn0gc2F0aXNmaWVzIENvbmZpZztcbiJdLCJtYXBwaW5ncyI6IkFBRUEsZUFBZTtBQUFBLEVBQ2IsVUFBVSxDQUFDLE9BQU87QUFBQSxFQUNsQixTQUFTLENBQUMsdUJBQXVC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