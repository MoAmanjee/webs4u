import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Hosting() {
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
      description: 'We handle all the technical details so you can focus on your business.',
    },
    {
      icon: '💬',
      title: 'Expert Support',
      description: 'Get help when you need it with our responsive support team.',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="pt-16">
        {/* Header */}
        <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5a] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Website Hosting Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We can host your custom website for you. Let us handle all the technical details so you can focus on your business.
            </p>
          </div>
        </section>

        {/* Why Choose Our Hosting */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
                Why Let Us Host Your Website?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When we build your custom website, we can also handle the hosting for you. This means you don't have to worry about servers, security, or technical maintenance.
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

        {/* What's Included */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
                What's Included
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'Free SSL Certificate (HTTPS)',
                'Daily Automated Backups',
                '99.9% Uptime Guarantee',
                '24/7 Server Monitoring',
                'Security Updates & Patches',
                'Domain Name Setup',
                'DNS Management',
                'Email Setup & Configuration',
                'Website Migration Assistance',
                'Ongoing Technical Support',
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[#F4C542] mr-3 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
                How It Works
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#F4C542] text-[#0B1F3A] rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">We Build Your Website</h3>
                  <p className="text-gray-600">We design and develop your custom website according to your needs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#F4C542] text-[#0B1F3A] rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">We Set Up Hosting</h3>
                  <p className="text-gray-600">We configure and set up reliable hosting for your website, including domain setup and email accounts.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#F4C542] text-[#0B1F3A] rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">We Handle Everything</h3>
                  <p className="text-gray-600">We manage updates, backups, security, and all technical aspects so you can focus on your business.</p>
                </div>
              </div>
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
                  question: 'Do I need to purchase hosting separately?',
                  answer: 'No! When you purchase a website from us, we can include hosting in your package. We handle everything for you.',
                },
                {
                  question: 'What if my website goes down?',
                  answer: 'We monitor all hosted websites 24/7. If there\'s an issue, we\'ll be notified immediately and work to resolve it quickly.',
                },
                {
                  question: 'Can I transfer my existing website to your hosting?',
                  answer: 'Yes! We provide free website migration services. We\'ll handle the technical details of moving your website to our hosting.',
                },
                {
                  question: 'Do you provide email hosting?',
                  answer: 'Yes! All our hosting includes email accounts with your domain name (e.g., info@yourdomain.com).',
                },
                {
                  question: 'How do backups work?',
                  answer: 'We perform automated daily backups of all websites. You can also request manual backups at any time.',
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
              Let's discuss your website project and hosting needs. We'll create a custom solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F4C542] text-[#0B1F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542]/90 transition-all duration-200 transform hover:scale-105"
              >
                Get a Quote
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
      <Footer />
    </>
  );
}
