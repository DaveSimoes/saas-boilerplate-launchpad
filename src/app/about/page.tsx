export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're on a mission to help developers build SaaS products faster.
            Our template provides all the essential features you need to get
            started without reinventing the wheel.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div>
              <dt className="text-base font-semibold leading-7 text-brand-600">
                Our Story
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We started this project in 2025 after repeatedly building
                similar SaaS foundations from scratch. We decided to create a
                high-quality, customizable template that would help developers
                launch faster while maintaining code quality and best practices.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-brand-600">
                Our Technology
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We carefully selected our tech stack to provide a balance of
                developer experience, performance, and maintainability. With
                React, Next.js, TypeScript, and Tailwind CSS, we've created a
                modern foundation that's easy to build upon.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-brand-600">
                Our Values
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We believe in high-quality code, developer happiness, and
                helping businesses launch faster. All our templates follow best
                practices for accessibility, performance, and security.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
