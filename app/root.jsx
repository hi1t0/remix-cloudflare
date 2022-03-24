import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import Navbar from "./navbar";
import Footer from "./footer";

import globalStylesUrl from "~/styles/global.css";

export function meta() {
  return {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  };
}

export function links() {
  return [
    { rel: "stylesheet", href: globalStylesUrl},
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <div className="remix-app__main" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <div className="container remix-app__main-content">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
