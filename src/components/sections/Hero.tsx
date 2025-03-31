import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <Link href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-brand-600/10 px-3 py-1 text-sm font-semibold leading-6 text-brand-600 ring-1 ring-inset ring-brand-600/10">
                    New features
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Just released</span>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Build your next <span className="gradient-text">SaaS</span> in
                record time
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A professional starting point for your next SaaS product. Built
                with modern technologies and ready for customization.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg">Get started</Button>
                <Link
                  href="/docs"
                  className="text-sm font-semibold leading-6 text-gray-900">
                  View documentation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-brand-600/10 ring-1 ring-brand-50 md:-mr-20 lg:-mr-36"
            aria-hidden="true"
          />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-brand-600 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div
                className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-brand-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                aria-hidden="true"
              />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          App.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          Dashboard.jsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      {/* Code sample */}
                      <pre className="text-sm leading-6 text-gray-300">
                        <code>
                          <span className="text-brand-400">import </span>
                          <span className="text-gray-300">React </span>
                          <span className="text-brand-400">from </span>
                          <span className="text-emerald-300">
                            &apos;react&apos;
                          </span>
                          <br />
                          <br />
                          <span className="text-brand-400">
                            export default function{" "}
                          </span>
                          <span className="text-yellow-300">App</span>
                          <span className="text-gray-300">() </span>
                          <span className="text-brand-400">{"{"}</span>
                          <br />
                          <span className="text-gray-300">
                            {"  "}
                            <span className="text-brand-400">return </span>
                            <span className="text-brand-400">(</span>
                            <br />
                          </span>
                          <span className="text-gray-300">{"    "}</span>
                          <span className="text-blue-400">&lt;div</span>
                          <span className="text-cyan-300"> className</span>
                          <span className="text-gray-300">=</span>
                          <span className="text-emerald-300">
                            &quot;app&quot;
                          </span>
                          <span className="text-blue-400">&gt;</span>
                          <br />
                          <span className="text-gray-300">{"      "}</span>
                          <span className="text-blue-400">&lt;h1&gt;</span>
                          <span className="text-gray-100">
                            Welcome to SaaS Template
                          </span>
                          <span className="text-blue-400">&lt;/h1&gt;</span>
                          <br />
                          <span className="text-gray-300">{"    "}</span>
                          <span className="text-blue-400">&lt;/div&gt;</span>
                          <br />
                          <span className="text-gray-300">{"  "}</span>
                          <span className="text-brand-400">)</span>
                          <br />
                          <span className="text-brand-400">{"}"}</span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
