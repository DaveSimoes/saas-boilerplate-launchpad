import { CheckIcon } from "lucide-react";

const features = [
  {
    name: "Modern stack",
    description:
      "Built with React, Next.js, TypeScript, and Tailwind CSS for a modern and maintainable codebase that scales with your business needs.",
  },
  {
    name: "Responsive design",
    description:
      "Fully responsive design that looks great on any device, from mobile phones to desktop computers.",
  },
  {
    name: "Authentication",
    description:
      "Ready-to-use authentication system with login, registration, and password reset functionality.",
  },
  {
    name: "Dark mode",
    description:
      "Support for light and dark mode with seamless transitions and system preference detection.",
  },
  {
    name: "Customizable",
    description:
      "Easily customizable with Tailwind CSS and modular components that can be modified to match your brand.",
  },
  {
    name: "SEO optimized",
    description:
      "Built with SEO best practices in mind to help your SaaS rank better in search engines.",
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">
            Faster development
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build your SaaS
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This template provides all the essential features needed to get your
            SaaS up and running quickly, allowing you to focus on building your
            unique business logic.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-brand-600">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
