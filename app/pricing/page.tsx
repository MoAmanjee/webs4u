import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'R2,000',
      description: 'Perfect for small businesses and startups getting started online',
      features: [
        'Up to 5 pages',
        'Responsive design (mobile, tablet, desktop)',
        'Contact form',
        'Basic SEO optimization',
        'Social media integration',
        '1 month of free support',
        '2 rounds of revisions',
      ],
      popular: false,
    },
    {
      name: 'Business',
      price: 'R4,500',
      description: 'Ideal for growing businesses that need more features',
      features: [
        'Up to 10 pages',
        'Custom design and branding',
        'Advanced contact forms',
        'SEO optimization',
        'Google Analytics integration',
        'Content management system',
        '3 months of free support',
        'Unlimited revisions',
        'Performance optimization',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: 'R8,000',
      description: 'Complete solution for established businesses',
      features: [
        'Unlimited pages',
        'Fully custom design',
        'E-commerce functionality',
        'Booking/reservation system',
        'Advanced SEO & marketing tools',
        'Custom integrations',
        '6 months of free support',
        'Priority support',
        'Unlimited revisions',
        'Performance & security optimization',
        'Training & documentation',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include hosting setup and deployment.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 rounded-lg p-8 ${
                  plan.popular
                    ? 'border-[#F4C542] shadow-xl scale-105'
                    : 'border-gray-200'
                } transition-all duration-200 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#F4C542] text-[#0B1F3A] px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#0B1F3A]">
                      {plan.price}
                    </span>
                    <span className="text-gray-600"> one-time</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#F4C542] mr-3 font-bold text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-[#F4C542] text-[#0B1F3A] hover:bg-[#F4C542]/90 transform hover:scale-105'
                      : 'bg-[#0B1F3A] text-white hover:bg-[#0B1F3A]/90'
                  }`}
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom solution? We can create a tailored package for your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-[#0B1F3A] text-[#0B1F3A] px-8 py-3 rounded-lg font-semibold hover:bg-[#0B1F3A] hover:text-white transition-colors duration-200"
            >
              Contact Us for Custom Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1F3A] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'What is included in the price?',
                answer: 'All plans include design, development, hosting setup, domain configuration, and initial deployment. Support periods vary by plan.',
              },
              {
                question: 'Can I upgrade or downgrade my plan later?',
                answer: 'Yes! We can adjust your plan based on your changing needs. Contact us to discuss upgrades or modifications.',
              },
              {
                question: 'How long does it take to build a website?',
                answer: 'Timeline varies by plan complexity. Starter plans typically take 2-3 weeks, Business plans 3-4 weeks, and Premium plans 4-6 weeks.',
              },
              {
                question: 'Do you provide ongoing maintenance?',
                answer: 'Yes, we offer maintenance packages for all plans. The included support period covers bug fixes and minor updates. Extended maintenance can be arranged.',
              },
              {
                question: 'What if I need additional features?',
                answer: 'We can add custom features to any plan. Additional features are priced based on complexity and will be discussed before implementation.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

