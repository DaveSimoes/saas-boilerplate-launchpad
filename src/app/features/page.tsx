import { CheckIcon } from "lucide-react";

const featureComparison = [
  {
    name: "Core Features",
    features: [
      { name: "Responsive Design", starter: true, pro: true, enterprise: true },
      {
        name: "Authentication System",
        starter: true,
        pro: true,
        enterprise: true,
      },
      { name: "Dark Mode Support", starter: true, pro: true, enterprise: true },
      { name: "SEO Optimized", starter: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Advanced Features",
    features: [
      {
        name: "Multi-language Support",
        starter: false,
        pro: true,
        enterprise: true,
      },
      {
        name: "Analytics Dashboard",
        starter: false,
        pro: true,
        enterprise: true,
      },
      { name: "API Access", starter: false, pro: true, enterprise: true },
      {
        name: "Team Collaboration",
        starter: false,
        pro: false,
        enterprise: true,
      },
      { name: "Custom Domain", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    name: "Support",
    features: [
      { name: "Email Support", starter: true, pro: true, enterprise: true },
      { name: "Live Chat", starter: false, pro: true, enterprise: true },
      { name: "Phone Support", starter: false, pro: false, enterprise: true },
      {
        name: "Dedicated Account Manager",
        starter: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white pt-24 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build your SaaS
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our template is packed with features to help you build, launch and
            grow your SaaS business.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            {/* Feature grid */}
            <div className="flex flex-col gap-y-6">
              {[0, 2].map((idx) => (
                <div key={idx} className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {featureComparison[idx].name}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {featureComparison[idx].features.map((feature) => (
                      <li key={feature.name} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-6 text-gray-600">
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-y-6">
              <div className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {featureComparison[1].name}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {featureComparison[1].features.map((feature) => (
                    <li key={feature.name} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-6 text-gray-600">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional feature highlight */}
              <div className="rounded-2xl bg-brand-600 p-8">
                <h3 className="text-lg font-semibold leading-8 text-white">
                  Additional Benefits
                </h3>
                <p className="mt-2 text-sm text-brand-100">
                  Our SaaS template provides everything you need to get started
                  quickly.
                </p>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-6 text-white">
                      Regular updates and improvements
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-6 text-white">
                      Comprehensive documentation
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-6 text-white">
                      Premium support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
