import { createRootRoute, HeadContent, Scripts } from "@tanstack/solid-router";
import type { ParentComponent } from "solid-js";
import { HydrationScript } from "solid-js/web";

import appCss from "../styles.css?url";

const RootDocument: ParentComponent = (props) => {
  return (
    <html lang="en">
      <head>
        <HydrationScript />
      </head>
      <body class="antialiased">
        <HeadContent />
        {props.children}
        <Scripts />
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Tauri + TanStack Start",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});
