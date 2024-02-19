# Remix with Adobe Spectrum Design System (React Spectrum)

## Setup Remix

Start with creating remix project wih vite template

```shell
npx create-remix@latest --template remix-run/remix/templates/unstable-vite
```

## Setup React Spectrum

Add React Spectrum

```shell
npm i @adobe/react-spectrum
```

Need to add the following in the noExternal to `vite.config.ts`. `@adobe/react-spectrum` is an umbrella package for the remaining @react-spectrum packages.

References:

- [Unable to use Adobe's React Spectrum package with Astro
  #5401](https://github.com/adobe/react-spectrum/issues/5401#issuecomment-1815445715)
- [Next.js](https://react-spectrum.adobe.com/react-spectrum/ssr.html#nextjs)

```js
ssr: {
    noExternal: [
      "@adobe/react-spectrum",
      "@react-spectrum/actionbar",
      "@react-spectrum/actiongroup",
      "@react-spectrum/avatar",
      "@react-spectrum/badge",
      "@react-spectrum/breadcrumbs",
      "@react-spectrum/button",
      "@react-spectrum/buttongroup",
      "@react-spectrum/calendar",
      "@react-spectrum/checkbox",
      "@react-spectrum/combobox",
      "@react-spectrum/contextualhelp",
      "@react-spectrum/datepicker",
      "@react-spectrum/dialog",
      "@react-spectrum/divider",
      "@react-spectrum/dnd",
      "@react-spectrum/form",
      "@react-spectrum/icon",
      "@react-spectrum/illustratedmessage",
      "@react-spectrum/inlinealert",
      "@react-spectrum/image",
      "@react-spectrum/label",
      "@react-spectrum/labeledvalue",
      "@react-spectrum/layout",
      "@react-spectrum/link",
      "@react-spectrum/list",
      "@react-spectrum/listbox",
      "@react-spectrum/menu",
      "@react-spectrum/meter",
      "@react-spectrum/numberfield",
      "@react-spectrum/overlays",
      "@react-spectrum/picker",
      "@react-spectrum/progress",
      "@react-spectrum/provider",
      "@react-spectrum/radio",
      "@react-spectrum/slider",
      "@react-spectrum/searchfield",
      "@react-spectrum/statuslight",
      "@react-spectrum/switch",
      "@react-spectrum/table",
      "@react-spectrum/tabs",
      "@react-spectrum/tag",
      "@react-spectrum/text",
      "@react-spectrum/textfield",
      "@react-spectrum/theme-dark",
      "@react-spectrum/theme-default",
      "@react-spectrum/theme-light",
      "@react-spectrum/tooltip",
      "@react-spectrum/view",
      "@react-spectrum/well",
      "@spectrum-icons/illustrations",
      "@spectrum-icons/ui",
      "@spectrum-icons/workflow",
    ],
  },
```

Add the necessary markup to the `root.tsx`

```tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "@remix-run/react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";

export default function App() {
  const navigate = useNavigate();
  return (
.
.
.

        <Provider
          colorScheme="light"
          theme={defaultTheme}
          router={{ navigate }}
          minHeight="100dvh"
        >
          <Outlet />
        </Provider>
        <ScrollRestoration />
.
.
.

  );
}
```

`colorScheme` is set to `light` to force `light` theme, if left out it changes as per the browsers color theme preference.
