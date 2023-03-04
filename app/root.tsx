import { json, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import {
  MantineProvider,
  createEmotionCache,
  AppShell,
  Header,
} from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import AppHeader from "./components/AppHeader";
import configurationService from "./services/configuration/configurationService";
import genreService from "./services/genre/genreService";
import { RouterTransition } from "./components/RouteTransition";
import NotFound from "./components/errors/NotFound";
import InternalServerError from "./components/errors/InternalServerError";
import { useMemo } from "react";
import ErrorHandler from "./components/errors/ErrorHandler";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Cinemix",
  viewport: "width=device-width,initial-scale=1",
});

createEmotionCache({ key: "mantine" });

export const loader = async () => {
  const [config, genres] = await Promise.all([
    configurationService.getConfiguration(),
    genreService.getGenres(),
  ]);
  return json({ config, genres });
};

export const shouldRevalidate = () => false;

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <AppShell padding="md" header={<AppHeader />}>
            <Outlet />
          </AppShell>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <RouterTransition />
        </body>
      </html>
    </MantineProvider>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <AppShell padding="md" header={<AppHeader />}>
            <ErrorHandler status={caught.status} />
          </AppShell>
          <ScrollRestoration />
        </body>
      </html>
    </MantineProvider>
  );
}
