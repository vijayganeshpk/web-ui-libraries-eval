import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Provider, lightTheme } from '@adobe/react-spectrum';
import "~/styles/main.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider theme={lightTheme}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </Provider>
      </body>
    </html>
  );
}
