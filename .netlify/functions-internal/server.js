var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_remix = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), server = (0, import_remix.createStylesServer)();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 14,
    columnNumber: 31
  }, this));
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${(0, import_remix.injectStyles)(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  loader: () => loader,
  meta: () => meta,
  shouldRevalidate: () => shouldRevalidate
});
var import_node = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_core3 = require("@mantine/core"), import_remix2 = require("@mantine/remix");

// app/components/AppHeader.tsx
var import_core = require("@mantine/core"), import_react2 = require("@remix-run/react"), import_icons_react = require("@tabler/icons-react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), AppHeader = (props) => {
  let isSearching = (0, import_react2.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Header, { height: 60, p: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_core.Container,
    {
      size: "lg",
      w: "100%",
      h: "100%",
      display: "flex",
      sx: { alignItems: "center" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Flex, { w: "100%", align: "center", justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Text, { weight: 800, size: "xl", color: "indigo", children: "CINEMIX" }, void 0, !1, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { method: "get", action: "/search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_core.Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_core.Input,
          {
            name: "q",
            size: "sm",
            placeholder: "Search",
            variant: "filled",
            disabled: isSearching,
            rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_core.ActionIcon,
              {
                color: "indigo",
                type: "submit",
                disabled: isSearching,
                loading: isSearching,
                variant: "filled",
                size: "lg",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons_react.IconSearch, { size: "1.2rem" }, void 0, !1, {
                  fileName: "app/components/AppHeader.tsx",
                  lineNumber: 50,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/AppHeader.tsx",
                lineNumber: 42,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 35,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/AppHeader.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/AppHeader.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/AppHeader.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}, AppHeader_default = AppHeader;

// app/services/RestAPIClient.ts
var API_URL = process.env.API_URL, RestAPIClient = class {
  constructor(path) {
    this.api_url = API_URL;
    this.get = (contextPath = "", params) => this.request(contextPath, "GET", params);
    this.post = (contextPath = "", body = {}) => this.request(contextPath, "POST", body);
    this.put = (contextPath = "", body = {}) => this.request(contextPath, "PUT", body);
    this.patch = (contextPath = "", body = {}) => this.request(contextPath, "PATCH", body);
    this.delete = (contextPath = "", body = {}) => this.request(contextPath, "DELETE", body);
    this.path = path;
  }
  async request(contextPath, method, payload) {
    let url = new URL(`${this.api_url}/${this.path}${contextPath}`);
    if (url.searchParams.append("api_key", process.env.API_KEY || ""), method === "GET" && payload)
      for (let key in payload)
        url.searchParams.append(key, payload == null ? void 0 : payload[key]);
    let options = {
      method,
      headers: {
        "Content-Type": "application/json"
      }
    };
    (method === "POST" || method === "PUT" || method === "PATCH" || method === "DELETE") && (options.body = payload instanceof FormData ? payload : JSON.stringify(payload));
    let res = await fetch(url, options);
    try {
      switch (!0) {
        case (res.status === 301 || res.status === 302 || res.type === "opaqueredirect"):
          break;
        case res.status > 201:
          let json5 = await (res == null ? void 0 : res.json());
          throw json5 ? {
            ...json5,
            status: res.status
          } : {
            message: res.statusText,
            status: res.status
          };
        case (res.status === 200 || res.status === 201):
          return await res.json();
      }
    } catch (e) {
      throw e;
    }
  }
}, RestAPIClient_default = RestAPIClient;

// app/services/configuration/configurationService.ts
var ConfigurationService = class extends RestAPIClient_default {
  constructor() {
    super("configuration");
    this.getConfiguration = () => this.get();
  }
}, configurationService_default = new ConfigurationService();

// app/services/genre/genreService.ts
var GenreService = class extends RestAPIClient_default {
  constructor() {
    super("genre");
    this.getGenres = async () => (await this.get("/movie/list")).genres;
  }
}, genreService_default = new GenreService();

// app/components/RouteTransition.tsx
var import_react3 = require("react"), import_nprogress = require("@mantine/nprogress"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function RouterTransition() {
  let { state } = (0, import_react4.useTransition)();
  return (0, import_react3.useEffect)(() => {
    state === "loading" && import_nprogress.nprogress.start(), state === "idle" && import_nprogress.nprogress.complete();
  }, [state]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_nprogress.NavigationProgress, { autoReset: !0, color: "indigo" }, void 0, !1, {
    fileName: "app/components/RouteTransition.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

// app/components/errors/ErrorHandler.tsx
var import_react6 = require("react");

// app/components/errors/BaseError.tsx
var import_core2 = require("@mantine/core"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), useStyles = (0, import_core2.createStyles)((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80
  },
  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
    [theme.fn.smallerThan("sm")]: {
      fontSize: 120
    }
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 32
    }
  },
  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5
  }
})), BaseError = (props) => {
  let { classes } = useStyles(), {
    status,
    title = "An Error Occurred",
    description = "Something went wrong. Please try again"
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core2.Container, { className: classes.root, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: classes.label, children: status }, void 0, !1, {
      fileName: "app/components/errors/BaseError.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core2.Title, { className: classes.title, children: title }, void 0, !1, {
      fileName: "app/components/errors/BaseError.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_core2.Text,
      {
        color: "dimmed",
        size: "lg",
        align: "center",
        className: classes.description,
        children: description
      },
      void 0,
      !1,
      {
        fileName: "app/components/errors/BaseError.tsx",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core2.Group, { position: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core2.Button, { variant: "subtle", size: "md", children: "Take me back to home page" }, void 0, !1, {
      fileName: "app/components/errors/BaseError.tsx",
      lineNumber: 79,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/errors/BaseError.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/errors/BaseError.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/errors/BaseError.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}, BaseError_default = BaseError;

// app/components/errors/InternalServerError.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), InternalServerError = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  BaseError_default,
  {
    status: 500,
    title: "Internal Server Error.",
    description: "There was an error processing your request. Please try again later."
  },
  void 0,
  !1,
  {
    fileName: "app/components/errors/InternalServerError.tsx",
    lineNumber: 5,
    columnNumber: 5
  },
  this
), InternalServerError_default = InternalServerError;

// app/components/errors/NotFound.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), NotFound = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  BaseError_default,
  {
    status: 404,
    title: "You have found a secret place.",
    description: "Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL."
  },
  void 0,
  !1,
  {
    fileName: "app/components/errors/NotFound.tsx",
    lineNumber: 6,
    columnNumber: 5
  },
  this
), NotFound_default = NotFound;

// app/components/errors/ErrorHandler.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ErrorHandler = (props) => {
  let { status = 0 } = props;
  return (0, import_react6.useMemo)(() => {
    switch (!0) {
      case status === 404:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NotFound_default, {}, void 0, !1, {
          fileName: "app/components/errors/ErrorHandler.tsx",
          lineNumber: 15,
          columnNumber: 16
        }, this);
      case status >= 500:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(InternalServerError_default, {}, void 0, !1, {
          fileName: "app/components/errors/ErrorHandler.tsx",
          lineNumber: 19,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BaseError_default, {}, void 0, !1, {
          fileName: "app/components/errors/ErrorHandler.tsx",
          lineNumber: 22,
          columnNumber: 16
        }, this);
    }
  }, [status]);
}, ErrorHandler_default = ErrorHandler;

// app/root.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Cinemix",
  viewport: "width=device-width,initial-scale=1"
});
(0, import_core3.createEmotionCache)({ key: "mantine" });
var loader = async () => {
  let [config, genres] = await Promise.all([
    configurationService_default.getConfiguration(),
    genreService_default.getGenres()
  ]);
  return (0, import_node.json)({ config, genres });
}, shouldRevalidate = () => !1;
function App() {
  var _a, _b, _c, _d;
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_core3.MantineProvider,
    {
      withGlobalStyles: !0,
      withNormalizeCSS: !0,
      theme: {
        colorScheme: "dark"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 60,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "link",
            {
              href: (_b = (_a = data == null ? void 0 : data.config) == null ? void 0 : _a.images) == null ? void 0 : _b.base_url,
              rel: "preconnect",
              crossOrigin: "anonymous"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 61,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "link",
            {
              href: (_d = (_c = data == null ? void 0 : data.config) == null ? void 0 : _c.images) == null ? void 0 : _d.secure_base_url,
              rel: "preconnect",
              crossOrigin: "anonymous"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 66,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core3.AppShell, { padding: "md", header: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AppHeader_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 73,
            columnNumber: 42
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 73,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 76,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(RouterTransition, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}
function CatchBoundary() {
  let caught = (0, import_react7.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_core3.MantineProvider,
    {
      withGlobalStyles: !0,
      withNormalizeCSS: !0,
      theme: {
        colorScheme: "dark"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: "en", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 99,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 101,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 98,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_core3.AppShell, { padding: "md", header: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AppHeader_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 104,
            columnNumber: 42
          }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ErrorHandler_default, { status: caught.status }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 104,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 107,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 103,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 90,
      columnNumber: 5
    },
    this
  );
}

// app/routes/movie/$movieId.tsx
var movieId_exports = {};
__export(movieId_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => movieId_default,
  loader: () => loader2,
  meta: () => meta2
});
var import_core6 = require("@mantine/core"), import_node2 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_icons_react2 = require("@tabler/icons-react");

// app/components/ProgressiveImage.tsx
var import_react8 = require("react"), import_core4 = require("@mantine/core"), import_react_intersection_observer = require("react-intersection-observer");

// app/assets/images/placeholder.jpeg
var placeholder_default = "/build/_assets/placeholder-6HUXTEQI.jpeg";

// app/components/ProgressiveImage.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), ProgressiveImage = (props) => {
  let { placeholder, src, ...rest } = props, [imgSrc, setImgSrc] = (0, import_react8.useState)(placeholder || src);
  (0, import_react8.useEffect)(() => {
    setImgSrc(placeholder || src);
  }, [placeholder, src]);
  let { inView, ref } = (0, import_react_intersection_observer.useInView)({
    triggerOnce: !0,
    fallbackInView: !0
  });
  (0, import_react8.useEffect)(() => {
    if (src && inView) {
      let img = new Image();
      img.src = src, img.onload = () => {
        setImgSrc(src);
      }, img.onerror = () => {
        setImgSrc(placeholder_default);
      };
    }
  }, [src, inView]);
  let customClass = placeholder && imgSrc === placeholder ? "loading" : "loaded";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_core4.Image,
    {
      src: imgSrc,
      alt: props.alt || "",
      sx: {
        transition: "filter 0.5s ease",
        ...customClass === "loading" ? {
          filter: "blur(4px)",
          clipPath: "inset(0)"
        } : {
          filter: "blur(0px)"
        }
      },
      ref,
      styles: {
        figure: {
          width: "100%",
          height: "100%"
        },
        imageWrapper: {
          width: "100%",
          height: "100%"
        }
      },
      ...rest
    },
    void 0,
    !1,
    {
      fileName: "app/components/ProgressiveImage.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}, ProgressiveImage_default = ProgressiveImage;

// app/hooks/useGetImagePath.ts
var import_react10 = require("react");

// app/hooks/useRootData.ts
var import_react9 = require("@remix-run/react"), useRootData = () => (0, import_react9.useMatches)()[0].data, useRootData_default = useRootData;

// app/hooks/useConfiguration.ts
var useConfiguration = () => {
  var _a;
  return (_a = useRootData_default()) == null ? void 0 : _a.config;
}, useConfiguration_default = useConfiguration;

// app/hooks/useGetImagePath.ts
var useGetImagePath = () => {
  var _a, _b;
  let config = useConfiguration_default(), url = ((_a = config == null ? void 0 : config.images) == null ? void 0 : _a.secure_base_url) || ((_b = config == null ? void 0 : config.images) == null ? void 0 : _b.base_url);
  return (0, import_react10.useCallback)(
    (path, size = "original") => `${url}/${size}/${path || ""}`,
    [url]
  );
}, useGetImagePath_default = useGetImagePath;

// app/services/movie/movieService.ts
var MovieService = class extends RestAPIClient_default {
  constructor() {
    super("movie");
    this.getNowPlayingMovies = async (req) => this.get("/now_playing", req);
    this.getTopRatedMovies = async (req) => this.get("/top_rated", req);
    this.getUpcomingMovies = async (req) => this.get("/upcoming", req);
    this.getSimilarMovies = async (req) => this.get(`/${req == null ? void 0 : req.movie_id}/similar`, req);
    this.getMovie = (id) => this.get(`/${id}`);
  }
}, movieService_default = new MovieService();

// app/utils/formatters.ts
var numberFormatter = (num, opts = { maximumFractionDigits: 12 }) => {
  let number = Number(num);
  return isNaN(number) ? "N/A" : num != null ? number.toLocaleString("en-US", opts) : "N/A";
};

// app/components/SimilarMovies/SimilarMovies.tsx
var import_core5 = require("@mantine/core"), import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), SimilarMovies = (props) => {
  let { data, ...rest } = props, getImagePath = useGetImagePath_default();
  return data != null && data.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core5.Box, { ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core5.Text, { weight: 500, size: "lg", children: "Similar Movies" }, void 0, !1, {
      fileName: "app/components/SimilarMovies/SimilarMovies.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_core5.SimpleGrid,
      {
        mt: "sm",
        cols: 6,
        breakpoints: [
          { maxWidth: "xl", cols: 6, spacing: "md" },
          { maxWidth: "lg", cols: 5, spacing: "md" },
          { maxWidth: "md", cols: 4, spacing: "md" },
          { maxWidth: "sm", cols: 3, spacing: "sm" },
          { maxWidth: "xs", cols: 2, spacing: "sm" }
        ],
        children: data == null ? void 0 : data.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_react11.Link,
          {
            to: `/movie/${movie.id}`,
            style: { textDecoration: "none" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_core5.Card,
              {
                p: 0,
                h: "100%",
                sx: (theme) => ({
                  "&:hover": {
                    backgroundColor: theme.colors.dark[5],
                    boxShadow: theme.shadows.lg
                  }
                }),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core5.AspectRatio, { ratio: 2 / 3, w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    ProgressiveImage_default,
                    {
                      placeholder: getImagePath(movie == null ? void 0 : movie.poster_path, "w92"),
                      src: getImagePath(movie == null ? void 0 : movie.poster_path, "w300"),
                      width: "100%",
                      height: "100%",
                      alt: movie == null ? void 0 : movie.title,
                      caption: movie == null ? void 0 : movie.title,
                      fit: "cover",
                      styles: {
                        figure: {
                          width: "100%",
                          height: "100%"
                        },
                        imageWrapper: {
                          width: "100%",
                          height: "100%"
                        }
                      }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SimilarMovies/SimilarMovies.tsx",
                      lineNumber: 50,
                      columnNumber: 17
                    },
                    this
                  ) }, movie.id, !1, {
                    fileName: "app/components/SimilarMovies/SimilarMovies.tsx",
                    lineNumber: 49,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_core5.Text, { size: "sm", mx: "xs", my: "sm", align: "center", children: movie == null ? void 0 : movie.title }, void 0, !1, {
                    fileName: "app/components/SimilarMovies/SimilarMovies.tsx",
                    lineNumber: 70,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/SimilarMovies/SimilarMovies.tsx",
                lineNumber: 39,
                columnNumber: 13
              },
              this
            )
          },
          movie.id,
          !1,
          {
            fileName: "app/components/SimilarMovies/SimilarMovies.tsx",
            lineNumber: 34,
            columnNumber: 11
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/SimilarMovies/SimilarMovies.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/SimilarMovies/SimilarMovies.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this) : null;
}, SimilarMovies_default = SimilarMovies;

// app/components/SimilarMovies/index.ts
var SimilarMovies_default2 = SimilarMovies_default;

// app/routes/movie/$movieId.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader2 = async ({ request, params }) => {
  let { movieId = "" } = params;
  try {
    return (0, import_node2.json)(
      {
        data: await movieService_default.getMovie(movieId || ""),
        similarMovies: await movieService_default.getSimilarMovies({
          movie_id: movieId
        })
      },
      {
        headers: { "Cache-Control": "public, max-age=120" }
      }
    );
  } catch {
    throw new Response("Not Found", {
      status: 404
    });
  }
}, meta2 = ({
  data,
  parentsData
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let config = (_a = parentsData == null ? void 0 : parentsData.root) == null ? void 0 : _a.config;
  return {
    "og:image": `${((_b = config == null ? void 0 : config.images) == null ? void 0 : _b.secure_base_url) || ((_c = config == null ? void 0 : config.images) == null ? void 0 : _c.base_url)}/${((_e = (_d = config == null ? void 0 : config.images) == null ? void 0 : _d.backdrop_sizes) == null ? void 0 : _e[0]) || "original"}/${(_f = data == null ? void 0 : data.data) == null ? void 0 : _f.backdrop_path}`,
    description: (_g = data == null ? void 0 : data.data) == null ? void 0 : _g.overview,
    title: (_h = data == null ? void 0 : data.data) != null && _h.title ? `${(_i = data == null ? void 0 : data.data) == null ? void 0 : _i.title} | Cinemix` : void 0
  };
}, MovieDetail = (props) => {
  var _a, _b, _c, _d;
  let { data, similarMovies } = (0, import_react12.useLoaderData)(), getImagePath = useGetImagePath_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Container, { size: "lg", px: { xs: "md" }, my: "md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Grid, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Grid.Col, { xs: 12, sm: 4, md: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.AspectRatio, { ratio: 2 / 3, w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        ProgressiveImage_default,
        {
          placeholder: getImagePath(data == null ? void 0 : data.poster_path, "w92"),
          src: getImagePath(data == null ? void 0 : data.poster_path),
          width: "100%",
          height: "100%",
          alt: data == null ? void 0 : data.title,
          fit: "cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 82,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/movie/$movieId.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/movie/$movieId.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Grid.Col, { xs: 12, sm: 8, md: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { weight: 500, size: "xl", children: [
          data == null ? void 0 : data.title,
          (data == null ? void 0 : data.status) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Badge, { variant: "filled", size: "md", color: "teal", mb: 6, ml: 6, children: data.status }, void 0, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          (data == null ? void 0 : data.adult) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Badge, { variant: "filled", size: "xs", color: "red", mb: 6, ml: 6, children: "18+" }, void 0, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        (data == null ? void 0 : data.original_title) !== (data == null ? void 0 : data.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { weight: 500, size: "md", color: "dimmed", children: data == null ? void 0 : data.original_title }, void 0, !1, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { size: "xs", italic: !0, color: "dimmed", children: data == null ? void 0 : data.tagline }, void 0, !1, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        !!((_a = data == null ? void 0 : data.production_companies) != null && _a.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { size: "sm", mt: 4, children: (_b = data == null ? void 0 : data.production_companies) == null ? void 0 : _b.map((c) => c.name).join(", ") }, void 0, !1, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_core6.Rating,
          {
            mt: 4,
            mb: 6,
            value: ((data == null ? void 0 : data.vote_average) ?? 0) / 2,
            fractions: 3,
            readOnly: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 121,
            columnNumber: 11
          },
          this
        ),
        (_c = data == null ? void 0 : data.genres) == null ? void 0 : _c.map((genre) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Badge, { mr: 4, mb: 4, mt: 4, size: "sm", color: "indigo", children: genre == null ? void 0 : genre.name }, genre.id, !1, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Flex, { direction: "row", align: "center", color: "dimmed", mt: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react2.IconCalendarEvent, {}, void 0, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { ml: 4, size: "sm", component: "span", children: data == null ? void 0 : data.release_date }, void 0, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Flex, { direction: "row", align: "center", color: "dimmed", mt: 6, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react2.IconClock, {}, void 0, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { ml: 4, size: "sm", component: "span", children: [
            data == null ? void 0 : data.runtime,
            " mins"
          ] }, void 0, !0, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Flex, { direction: "row", align: "center", color: "dimmed", mt: 6, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons_react2.IconHeadphones, {}, void 0, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          (_d = data == null ? void 0 : data.spoken_languages) == null ? void 0 : _d.map((lng) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Badge, { mr: 6, size: "sm", children: lng.english_name }, lng.iso_639_1, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        !!(data != null && data.budget) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { mt: 4, size: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("b", { children: "Production Budget" }, void 0, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, this),
          ": $",
          numberFormatter(data == null ? void 0 : data.budget)
        ] }, void 0, !0, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        !!(data != null && data.revenue) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { mt: 4, size: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("b", { children: "Revenue" }, void 0, !1, {
            fileName: "app/routes/movie/$movieId.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, this),
          ": $",
          numberFormatter(data == null ? void 0 : data.revenue)
        ] }, void 0, !0, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Text, { mt: 4, title: data == null ? void 0 : data.overview, color: "dimmed", size: "sm", children: data == null ? void 0 : data.overview }, void 0, !1, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_core6.Group, { mt: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_core6.Button,
            {
              component: "a",
              href: `https://www.imdb.com/title/${data == null ? void 0 : data.imdb_id}`,
              target: "_blank",
              color: "indigo",
              variant: "outline",
              children: "IMDB"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/movie/$movieId.tsx",
              lineNumber: 167,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_core6.Button,
            {
              component: "a",
              href: data == null ? void 0 : data.homepage,
              target: "_blank",
              color: "indigo",
              children: "Book Now"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/movie/$movieId.tsx",
              lineNumber: 176,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/movie/$movieId.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/movie/$movieId.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/movie/$movieId.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SimilarMovies_default2, { mt: "md", data: similarMovies == null ? void 0 : similarMovies.results }, void 0, !1, {
      fileName: "app/routes/movie/$movieId.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/movie/$movieId.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
};
function CatchBoundary2() {
  let caught = (0, import_react12.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ErrorHandler_default, { status: caught.status }, void 0, !1, {
    fileName: "app/routes/movie/$movieId.tsx",
    lineNumber: 194,
    columnNumber: 10
  }, this);
}
var movieId_default = MovieDetail;

// app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => search_default,
  loader: () => loader3,
  shouldRevalidate: () => shouldRevalidate2
});
var import_core11 = require("@mantine/core"), import_node3 = require("@remix-run/node"), import_node4 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_icons_react5 = require("@tabler/icons-react"), import_react19 = require("react");

// app/components/MovieList.tsx
var import_core9 = require("@mantine/core"), import_react17 = require("@remix-run/react"), import_react_intersection_observer3 = require("react-intersection-observer");

// app/components/MovieItem.tsx
var import_core7 = require("@mantine/core"), import_react14 = __toESM(require("react")), import_react_intersection_observer2 = require("react-intersection-observer");

// app/hooks/useGenres.ts
var import_react13 = require("react");
var import_keyBy = __toESM(require("lodash/keyBy")), useGenres = () => {
  var _a;
  return ((_a = useRootData_default()) == null ? void 0 : _a.genres) || [];
}, useGenresById = () => {
  let genres = useGenres();
  return (0, import_react13.useMemo)(() => (0, import_keyBy.default)(genres, "id"), [genres]);
};

// app/components/MovieItem.tsx
var import_icons_react3 = require("@tabler/icons-react"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), MovieItem = (props) => {
  let { data } = props, getImagePath = useGetImagePath_default(), { ref, inView } = (0, import_react_intersection_observer2.useInView)({
    triggerOnce: !0,
    threshold: 0.2,
    delay: 50
  }), genres = useGenresById();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Box, { ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_core7.Transition,
    {
      mounted: inView,
      transition: "fade",
      duration: 500,
      timingFunction: "ease",
      children: (style) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          import_react15.Link,
          {
            to: `/movie/${data.id}`,
            style: { textDecoration: "none" },
            prefetch: "intent",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_core7.Card,
              {
                shadow: "sm",
                radius: "md",
                p: 0,
                withBorder: !0,
                h: "100%",
                sx: (theme) => ({
                  "&:hover": {
                    backgroundColor: theme.colors.dark[5],
                    boxShadow: theme.shadows.lg
                  }
                }),
                style: {
                  ...style
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Flex, { direction: "row", children: [
                  !!(data != null && data.adult) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    import_core7.Badge,
                    {
                      variant: "filled",
                      size: "xs",
                      color: "red",
                      sx: { position: "absolute", right: 16, top: 18 },
                      children: "18+"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/MovieItem.tsx",
                      lineNumber: 71,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    import_core7.Box,
                    {
                      w: { base: 120, xs: 140, sm: 200, md: 200, lg: 200, xl: 200 },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                        import_core7.AspectRatio,
                        {
                          ratio: 2 / 3,
                          w: {
                            base: 120,
                            xs: 140,
                            sm: 200,
                            md: 200,
                            lg: 200,
                            xl: 200
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                            ProgressiveImage_default,
                            {
                              placeholder: getImagePath(data == null ? void 0 : data.poster_path, "w92"),
                              src: getImagePath(data == null ? void 0 : data.poster_path, "w300"),
                              width: "100%",
                              height: "100%",
                              alt: data == null ? void 0 : data.title,
                              fit: "cover"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/MovieItem.tsx",
                              lineNumber: 94,
                              columnNumber: 21
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/MovieItem.tsx",
                          lineNumber: 83,
                          columnNumber: 19
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/MovieItem.tsx",
                      lineNumber: 80,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Box, { ml: "md", mr: "md", mt: "sm", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Text, { weight: 500, size: "lg", mr: 36, children: data == null ? void 0 : data.title }, void 0, !1, {
                      fileName: "app/components/MovieItem.tsx",
                      lineNumber: 106,
                      columnNumber: 19
                    }, this),
                    (_a = data == null ? void 0 : data.genre_ids) == null ? void 0 : _a.map((id) => {
                      var _a2;
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Badge, { mr: 4, mb: 4, size: "sm", color: "indigo", children: (_a2 = genres == null ? void 0 : genres[id]) == null ? void 0 : _a2.name }, id, !1, {
                        fileName: "app/components/MovieItem.tsx",
                        lineNumber: 110,
                        columnNumber: 21
                      }, this);
                    }),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                      import_core7.Flex,
                      {
                        direction: "row",
                        align: "center",
                        justify: "space-between",
                        mt: 4,
                        wrap: "wrap",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Flex, { direction: "row", align: "center", color: "dimmed", mt: 4, children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_icons_react3.IconCalendarEvent, {}, void 0, !1, {
                              fileName: "app/components/MovieItem.tsx",
                              lineNumber: 122,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_core7.Text, { ml: 4, size: "xs", component: "span", children: data == null ? void 0 : data.release_date }, void 0, !1, {
                              fileName: "app/components/MovieItem.tsx",
                              lineNumber: 123,
                              columnNumber: 23
                            }, this)
                          ] }, void 0, !0, {
                            fileName: "app/components/MovieItem.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                            import_core7.Rating,
                            {
                              mt: 4,
                              value: ((data == null ? void 0 : data.vote_average) ?? 0) / 2,
                              fractions: 3,
                              readOnly: !0
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/MovieItem.tsx",
                              lineNumber: 127,
                              columnNumber: 21
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/components/MovieItem.tsx",
                        lineNumber: 114,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                      import_core7.Text,
                      {
                        mt: 4,
                        title: data == null ? void 0 : data.overview,
                        color: "dimmed",
                        size: "sm",
                        lineClamp: 2,
                        sx: (theme) => ({
                          [theme.fn.smallerThan("sm")]: {
                            display: "-webkit-box"
                          },
                          [theme.fn.largerThan("sm")]: {
                            display: "none"
                          }
                        }),
                        children: data == null ? void 0 : data.overview
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/MovieItem.tsx",
                        lineNumber: 134,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                      import_core7.Text,
                      {
                        mt: 4,
                        title: data == null ? void 0 : data.overview,
                        color: "dimmed",
                        size: "sm",
                        lineClamp: 4,
                        sx: (theme) => ({
                          [theme.fn.largerThan("sm")]: {
                            display: "-webkit-box"
                          },
                          [theme.fn.smallerThan("sm")]: {
                            display: "none"
                          }
                        }),
                        children: data == null ? void 0 : data.overview
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/MovieItem.tsx",
                        lineNumber: 151,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/components/MovieItem.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/MovieItem.tsx",
                  lineNumber: 69,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/MovieItem.tsx",
                lineNumber: 53,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/MovieItem.tsx",
            lineNumber: 48,
            columnNumber: 11
          },
          this
        );
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/MovieItem.tsx",
      lineNumber: 41,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/MovieItem.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}, MovieItem_default = import_react14.default.memo(MovieItem);

// app/components/MovieItemPlaceholder.tsx
var import_core8 = require("@mantine/core"), import_react16 = __toESM(require("react")), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), MovieItemPlaceholder = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Card, { shadow: "sm", radius: "md", p: 0, withBorder: !0, h: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Flex, { direction: "row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Box, { w: 200, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { width: "200px", h: 300, bg: "gray.0" }, void 0, !1, {
    fileName: "app/components/MovieItemPlaceholder.tsx",
    lineNumber: 11,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/MovieItemPlaceholder.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Box, { ml: "md", mr: "md", mt: "sm", w: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { height: "1rem", width: "100%", bg: "gray.0" }, void 0, !1, {
      fileName: "app/components/MovieItemPlaceholder.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { height: "1rem", width: "70%", bg: "gray.0", mt: "sm" }, void 0, !1, {
      fileName: "app/components/MovieItemPlaceholder.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { height: "1rem", width: "30%", bg: "gray.0", mt: "sm" }, void 0, !1, {
      fileName: "app/components/MovieItemPlaceholder.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { height: "0.75rem", width: "100%", bg: "gray.0", mt: "md" }, void 0, !1, {
      fileName: "app/components/MovieItemPlaceholder.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { height: "0.75rem", width: "100%", bg: "gray.0", mt: "sm" }, void 0, !1, {
      fileName: "app/components/MovieItemPlaceholder.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { height: "0.75rem", width: "100%", bg: "gray.0", mt: "sm" }, void 0, !1, {
      fileName: "app/components/MovieItemPlaceholder.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { height: "0.75rem", width: "100%", bg: "gray.0", mt: "sm" }, void 0, !1, {
      fileName: "app/components/MovieItemPlaceholder.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_core8.Skeleton, { height: "0.75rem", width: "50%", bg: "gray.0", mt: "sm" }, void 0, !1, {
      fileName: "app/components/MovieItemPlaceholder.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MovieItemPlaceholder.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/MovieItemPlaceholder.tsx",
  lineNumber: 9,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/MovieItemPlaceholder.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), MovieItemPlaceholder_default = import_react16.default.memo(MovieItemPlaceholder);

// app/components/MovieList.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), MovieList = (props) => {
  let { data: movies, onLoadMore, isLoadingMore, viewType = "grid" } = props, isTransitioning = (0, import_react17.useTransition)().state === "loading";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_core9.Grid, { gutter: "md", mih: "100vh", children: [
      movies == null ? void 0 : movies.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(GridItemWrapper, { viewType, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MovieItem_default, { data: item }, void 0, !1, {
        fileName: "app/components/MovieList.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, item.id, !1, {
        fileName: "app/components/MovieList.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)),
      isLoadingMore && !isTransitioning && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(GridItemWrapper, { viewType, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MovieItemPlaceholder_default, {}, void 0, !1, {
          fileName: "app/components/MovieList.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/MovieList.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(GridItemWrapper, { viewType, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MovieItemPlaceholder_default, {}, void 0, !1, {
          fileName: "app/components/MovieList.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/MovieList.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MovieList.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MovieList.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    !!(movies != null && movies.length) && !isLoadingMore && !isTransitioning && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_react_intersection_observer3.InView,
      {
        as: "div",
        initialInView: !1,
        onChange: (inView) => {
          inView && (onLoadMore == null || onLoadMore());
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/MovieList.tsx",
        lineNumber: 44,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/MovieList.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}, GridItemWrapper = ({ children, viewType }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  import_core9.Grid.Col,
  {
    ...viewType === "grid" ? {
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6
    } : {
      span: 12
    },
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/MovieList.tsx",
    lineNumber: 57,
    columnNumber: 3
  },
  this
), MovieList_default = MovieList;

// app/components/ViewTypeSegment.tsx
var import_core10 = require("@mantine/core"), import_icons_react4 = require("@tabler/icons-react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), ViewTypeSegment = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  import_core10.SegmentedControl,
  {
    data: [
      {
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_icons_react4.IconGridDots, { size: "1rem" }, void 0, !1, {
          fileName: "app/components/ViewTypeSegment.tsx",
          lineNumber: 15,
          columnNumber: 18
        }, this),
        value: "grid"
      },
      {
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_icons_react4.IconList, { size: "1rem" }, void 0, !1, {
          fileName: "app/components/ViewTypeSegment.tsx",
          lineNumber: 19,
          columnNumber: 18
        }, this),
        value: "list"
      }
    ],
    color: "indigo",
    size: "md",
    styles: {
      label: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    },
    display: {
      base: "none",
      xs: "none",
      sm: "none",
      md: "flex",
      lg: "flex",
      xl: "flex"
    },
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ViewTypeSegment.tsx",
    lineNumber: 12,
    columnNumber: 5
  },
  this
), ViewTypeSegment_default = ViewTypeSegment;

// app/services/search/searchService.ts
var SearchService = class extends RestAPIClient_default {
  constructor() {
    super("search");
    this.searchMovies = async (req) => this.get("/movie", req);
  }
}, searchService_default = new SearchService();

// app/routes/search.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), getParams = (searchParams) => ({
  page: Number(searchParams.get("page") || "1"),
  query: searchParams.get("q") || ""
}), loader3 = async ({ request }) => {
  let { query, page } = getParams(new URL(request.url).searchParams);
  if (!query)
    return (0, import_node3.redirect)("/");
  let data = await searchService_default.searchMovies({ query, page });
  return (0, import_node4.json)(data, {
    headers: { "Cache-Control": "public, max-age=120" }
  });
}, shouldRevalidate2 = ({
  currentParams,
  nextParams,
  formMethod,
  defaultShouldRevalidate,
  currentUrl,
  nextUrl
}) => currentUrl.searchParams.get("q") === nextUrl.searchParams.get("q") ? !1 : defaultShouldRevalidate, Search = () => {
  let data = (0, import_react18.useLoaderData)(), [movies, setMovies] = (0, import_react19.useState)((data == null ? void 0 : data.results) || []);
  (0, import_react19.useEffect)(() => {
    setMovies((data == null ? void 0 : data.results) || []);
  }, [data]);
  let hasNextPage = (movies == null ? void 0 : movies.length) < (data == null ? void 0 : data.total_results), fetcher = (0, import_react18.useFetcher)(), page = (0, import_react19.useRef)(1), isLoadingMore = fetcher.state === "loading" && page.current > 1, [params, setParams] = (0, import_react18.useSearchParams)(), searchText = params.get("q"), loadMore = (0, import_react19.useCallback)(() => {
    !hasNextPage || isLoadingMore || (page.current += 1, fetcher.load(`/search?page=${page.current}&q=${searchText}`));
  }, [fetcher, hasNextPage, isLoadingMore, searchText]);
  (0, import_react19.useEffect)(() => {
    fetcher.data && setMovies((prevItems) => {
      var _a;
      return [
        ...prevItems,
        ...((_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results) || []
      ];
    });
  }, [fetcher.data]);
  let viewType = params.get("view_type") || "grid", setViewType = (view_type) => setParams({ view_type }), isEmpty = !(movies != null && movies.length);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Container, { size: "lg", px: { xs: "md" }, my: "md", children: [
    !isEmpty && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Flex, { mb: "lg", mt: -16, align: "center", justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Text, { ml: "md", mb: "md", children: [
        numberFormatter(data == null ? void 0 : data.total_results),
        " movies for:",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("b", { children: searchText }, void 0, !1, {
          fileName: "app/routes/search.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/search.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ViewTypeSegment_default, { value: viewType, onChange: setViewType }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    isEmpty ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Flex, { pt: "5rem", align: "center", justify: "center", direction: "column", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_icons_react5.IconSearchOff, { size: "8rem" }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_core11.Text, { size: "lg", mt: "lg", children: [
        "No result found for ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("b", { children: searchText }, void 0, !1, {
          fileName: "app/routes/search.tsx",
          lineNumber: 115,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/search.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      MovieList_default,
      {
        data: movies,
        onLoadMore: loadMore,
        isLoadingMore
      },
      void 0,
      !1,
      {
        fileName: "app/routes/search.tsx",
        lineNumber: 106,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/search.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}, search_default = Search;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader4,
  shouldRevalidate: () => shouldRevalidate3
});
var import_core12 = require("@mantine/core"), import_node5 = require("@remix-run/node"), import_react20 = require("@remix-run/react");
var import_react21 = require("react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), getParams2 = (searchParams) => ({
  page: Number(searchParams.get("page") || "1"),
  tab: searchParams.get("tab") || "now-playing"
}), loader4 = async ({ request }) => {
  let { page, tab } = getParams2(new URL(request.url).searchParams), data;
  switch (tab) {
    case "now-playing": {
      data = await movieService_default.getNowPlayingMovies({ page });
      break;
    }
    case "top-rated": {
      data = await movieService_default.getTopRatedMovies({ page });
      break;
    }
    case "upcoming": {
      data = await movieService_default.getUpcomingMovies({ page });
      break;
    }
    default:
      throw new Response("Not Found", {
        status: 404
      });
  }
  return (0, import_node5.json)(data, {
    headers: { "Cache-Control": "public, max-age=120" }
  });
}, shouldRevalidate3 = ({
  currentParams,
  nextParams,
  formMethod,
  defaultShouldRevalidate,
  currentUrl,
  nextUrl
}) => currentUrl.searchParams.get("tab") === nextUrl.searchParams.get("tab") ? !1 : defaultShouldRevalidate, Index = () => {
  let data = (0, import_react20.useLoaderData)(), [movies, setMovies] = (0, import_react21.useState)((data == null ? void 0 : data.results) || []);
  (0, import_react21.useEffect)(() => {
    setMovies((data == null ? void 0 : data.results) || []);
  }, [data]);
  let hasNextPage = (movies == null ? void 0 : movies.length) < (data == null ? void 0 : data.total_results), fetcher = (0, import_react20.useFetcher)(), page = (0, import_react21.useRef)(1), isLoadingMore = fetcher.state === "loading" && page.current > 1, loadMore = (0, import_react21.useCallback)(() => {
    !hasNextPage || isLoadingMore || (page.current += 1, fetcher.load(`/?index&page=${page.current}`));
  }, [fetcher, hasNextPage, isLoadingMore]);
  (0, import_react21.useEffect)(() => {
    fetcher.data && setMovies((prevItems) => {
      var _a;
      return [
        ...prevItems,
        ...((_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.results) || []
      ];
    });
  }, [fetcher.data]);
  let [params, setParams] = (0, import_react20.useSearchParams)(), tab = params.get("tab") || "now-playing", viewType = params.get("view_type") || "grid";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core12.Container, { size: "lg", px: { xs: "md" }, my: "md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_core12.Flex, { mb: "lg", mt: -16, align: "center", justify: "space-between", wrap: "wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        import_core12.SegmentedControl,
        {
          onChange: (t) => setParams({ tab: t, view_type: viewType }),
          value: tab,
          data: [
            {
              label: "Now Playing",
              value: "now-playing"
            },
            {
              label: "Top Rated",
              value: "top-rated"
            },
            {
              label: "Upcoming",
              value: "upcoming"
            }
          ],
          color: "indigo",
          w: {
            base: "100%",
            xs: "auto",
            sm: "auto",
            md: "auto",
            lg: "auto",
            xl: "auto"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 102,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ViewTypeSegment_default, { value: viewType, onChange: (view_type) => setParams({ view_type, tab }) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      MovieList_default,
      {
        data: movies,
        onLoadMore: loadMore,
        isLoadingMore,
        viewType
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 131,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}, routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "94dada93", entry: { module: "/build/entry.client-X36U6LYX.js", imports: ["/build/_shared/chunk-L47QJRAF.js", "/build/_shared/chunk-YNHLTX3R.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PTKN2PTW.js", imports: ["/build/_shared/chunk-DS3B57DD.js", "/build/_shared/chunk-5PSC44L3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-EU4T7ZVO.js", imports: ["/build/_shared/chunk-NZDV4H7S.js", "/build/_shared/chunk-UWNSNNZ6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/movie/$movieId": { id: "routes/movie/$movieId", parentId: "root", path: "movie/:movieId", index: void 0, caseSensitive: void 0, module: "/build/routes/movie/$movieId-SAGZKT6R.js", imports: ["/build/_shared/chunk-A6SAKP4O.js", "/build/_shared/chunk-UWNSNNZ6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-7GRFRURV.js", imports: ["/build/_shared/chunk-A6SAKP4O.js", "/build/_shared/chunk-NZDV4H7S.js", "/build/_shared/chunk-UWNSNNZ6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-94DADA93.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/movie/$movieId": {
    id: "routes/movie/$movieId",
    parentId: "root",
    path: "movie/:movieId",
    index: void 0,
    caseSensitive: void 0,
    module: movieId_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
