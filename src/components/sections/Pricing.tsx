import { Check } from "lucide-react";
import { Button } from "../ui/button";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "$15",
    description: "Perfect for small teams just getting started.",
    features: [
      "5 users included",
      "2GB of storage",
      "Basic support",
      "Basic analytics",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: "$30",
    description: "For professional teams scaling their business.",
    features: [
      "20 users included",
      "10GB of storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "$60",
    description: "For organizations with complex requirements.",
    features: [
      "Unlimited users",
      "100GB of storage",
      "24/7 support",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of all sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the perfect plan for your needs. Always know what you'll pay.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`
                flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10
                ${tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : ""}
                ${tierIdx === 0 ? "lg:rounded-r-none" : ""}
                ${tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : ""}
              `}>
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`text-lg font-semibold leading-8 ${
                      tier.mostPopular ? "text-brand-600" : "text-gray-900"
                    }`}>
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-brand-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brand-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-brand-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={tier.mostPopular ? "default" : "outline"}
                className={`mt-8 w-full ${
                  tier.mostPopular
                    ? ""
                    : "border-brand-600 text-brand-600 hover:bg-brand-50"
                }`}>
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
