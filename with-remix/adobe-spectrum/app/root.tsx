import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "@remix-run/react";
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import "~/styles/main.css";

export default function App() {
  const navigate = useNavigate();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider colorScheme="light" theme={defaultTheme} router={{ navigate }} minHeight="100dvh">
          <Outlet />
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
