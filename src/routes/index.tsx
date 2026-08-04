import { createFileRoute } from "@tanstack/solid-router";
import { invoke } from "@tauri-apps/api/core";
import { type Component, createSignal } from "solid-js";
import { RoundedButton } from "../components/RoundedButton";

const Home: Component = () => {
  const [greeted, setGreeted] = createSignal<string | null>(null);

  const greet = (): void => {
    invoke<string>("greet")
      .then((s) => {
        setGreeted(s);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  };

  return (
    <div class="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter-sans)]">
      <main class="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div class="flex flex-row gap-2 items-center">
          <img
            class="dark:invert"
            src="/tanstack.svg"
            alt="TanStack logo"
            width={180}
            height={38}
          />
          <span class="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-cyan-500">
            Start
          </span>
        </div>

        <ol class="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-jetbrains-mono)]">
          <li class="mb-2">
            Get started by editing{" "}
            <code class="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/routes/index.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div class="flex flex-col gap-2 items-start">
          <RoundedButton onClick={greet} title='Call "greet" from Rust' />
          <p class="wrap-break-word w-md">
            {greeted() ?? "Click the button to call the Rust function"}
          </p>
        </div>
      </main>
      <footer class="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          class="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tanstack.com/start/latest/docs/framework/solid/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          class="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tanstack.com/start/latest/docs/framework/solid/examples/start-basic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          class="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tanstack.com/start"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to tanstack.com/start →
        </a>
      </footer>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
});
