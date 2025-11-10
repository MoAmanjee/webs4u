import Link from 'next/link';

export default function Hosting() {
  const hostingPlans = [
    {
      name: 'Basic Hosting',
      price: 'R150',
      period: 'per month',
      description: 'Perfect for small websites and portfolios',
      features: [
        '10 GB storage',
        '100 GB bandwidth',
        'Free SSL certificate',
        'Email support',
        '99.9% uptime guarantee',
        'Daily backups',
        'Basic security monitoring',
        '1 email account',
      ],
      popular: false,
    },
    {
      name: 'Business Hosting',
      price: 'R300',
      period: 'per month',
      description: 'Ideal for growing businesses and e-commerce sites',
      features: [
        '50 GB storage',
        '500 GB bandwidth',
        'Free SSL certificate',
        'Priority email support',
        '99.9% uptime guarantee',
        'Daily backups + weekly snapshots',
        'Advanced security monitoring',
        '5 email accounts',
        'CDN included',
        'Performance optimization',
      ],
      popular: true,
    },
    {
      name: 'Premium Hosting',
      price: 'R500',
      period: 'per month',
      description: 'Complete solution for high-traffic websites',
      features: [
        'Unlimited storage',
        'Unlimited bandwidth',
        'Free SSL certificate',
        '24/7 priority support',
        '99.99% uptime guarantee',
        'Real-time backups',
        'Enterprise security monitoring',
        'Unlimited email accounts',
        'Global CDN',
        'Advanced performance optimization',
        'DDoS protection',
        'Dedicated IP address',
      ],
      popular: false,
    },
  ];

  const hostingFeatures = [
    {
      icon: '🚀',
      title: 'Fast & Reliable',
      description: 'Lightning-fast servers with 99.9% uptime guarantee. Your website will load quickly and stay online.',
    },
    {
      icon: '🔒',
      title: 'Secure Hosting',
      description: 'Free SSL certificates, daily backups, and advanced security monitoring to keep your site safe.',
    },
    {
      icon: '📧',
      title: 'Email Accounts',
      description: 'Professional email accounts with your domain name (e.g., info@yourdomain.com).',
    },
    {
      icon: '⚡',
      title: 'Performance Optimized',
      description: 'Optimized servers and CDN included to ensure your website loads fast for all visitors.',
    },
    {
      icon: '🛠️',
      title: 'Easy Management',
      description: 'User-friendly control panel to manage your website, emails, and settings easily.',
    },
    {
      icon: '💬',
      title: 'Expert Support',
      description: 'Get help when you need it with our responsive support team.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Website Hosting Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reliable, secure, and fast hosting solutions for your website. We handle all the technical details so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Why Choose Our Hosting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
              Why Choose Our Hosting?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive hosting solutions designed to keep your website fast, secure, and always online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
              Choose Your Hosting Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible hosting plans to match your needs. All plans include free SSL, backups, and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
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
                    <span className="text-gray-600"> {plan.period}</span>
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
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
              What's Included with All Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Free SSL Certificate (HTTPS)',
              'Daily Automated Backups',
              '99.9% Uptime Guarantee',
              '24/7 Server Monitoring',
              'Security Updates & Patches',
              'Easy-to-Use Control Panel',
              'Domain Name Setup',
              'DNS Management',
              'Email Setup & Configuration',
              'Website Migration Assistance',
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-[#F4C542] mr-3 font-bold text-xl">✓</span>
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1F3A] text-center mb-12">
            Hosting Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Do I need to purchase hosting separately?',
                answer: 'No! When you purchase a website from us, we can include hosting in your package. However, if you already have a website or prefer to manage hosting separately, we offer standalone hosting plans.',
              },
              {
                question: 'Can I transfer my existing website to your hosting?',
                answer: 'Yes! We provide free website migration services. We\'ll handle the technical details of moving your website to our servers.',
              },
              {
                question: 'What happens if my website goes down?',
                answer: 'We monitor all hosted websites 24/7. If there\'s an issue, we\'ll be notified immediately and work to resolve it quickly. Our uptime guarantee ensures your site stays online.',
              },
              {
                question: 'Can I upgrade or downgrade my hosting plan?',
                answer: 'Absolutely! You can change your hosting plan at any time. We\'ll help you migrate to the plan that best fits your needs.',
              },
              {
                question: 'Do you provide email hosting?',
                answer: 'Yes! All our hosting plans include email accounts with your domain name. The number of email accounts depends on your chosen plan.',
              },
              {
                question: 'How do backups work?',
                answer: 'We perform automated daily backups of all websites. Premium plans include real-time backups. You can also request manual backups at any time.',
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

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your hosting needs and find the perfect plan for your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F4C542] text-[#0B1F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542]/90 transition-all duration-200 transform hover:scale-105"
            >
              Get Hosting Quote
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-[#F4C542] text-[#F4C542] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542] hover:text-[#0B1F3A] transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

