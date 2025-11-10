import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Business Websites',
      description: 'Professional, responsive websites designed to represent your brand and engage your customers. Perfect for small businesses, startups, and established companies looking to establish or enhance their online presence.',
      features: [
        'Custom design tailored to your brand',
        'Fully responsive (mobile, tablet, desktop)',
        'Fast loading times and SEO optimization',
        'Content management system',
        'Contact forms and lead generation',
        'Social media integration',
      ],
      icon: '🏢',
    },
    {
      title: 'Portfolio Websites',
      description: 'Showcase your work, skills, and achievements with a stunning portfolio website. Ideal for designers, developers, photographers, artists, and creative professionals.',
      features: [
        'Beautiful gallery and project showcases',
        'Custom portfolio layouts',
        'Image optimization and lazy loading',
        'Project filtering and categorization',
        'Testimonials and client reviews',
        'Contact and inquiry forms',
      ],
      icon: '🎨',
    },
    {
      title: 'E-Commerce Stores',
      description: 'Complete online stores with secure payment processing, inventory management, and everything you need to sell products or services online.',
      features: [
        'Product catalog and management',
        'Shopping cart and checkout',
        'Payment gateway integration',
        'Inventory tracking',
        'Order management system',
        'Customer accounts and reviews',
        'Shipping and tax calculations',
      ],
      icon: '🛒',
    },
    {
      title: 'Booking Systems',
      description: 'Streamline appointments, reservations, and scheduling with integrated booking solutions that work seamlessly with your website.',
      features: [
        'Online appointment scheduling',
        'Calendar integration',
        'Email and SMS notifications',
        'Payment processing for bookings',
        'Customer management',
        'Automated reminders',
        'Multi-service and staff support',
      ],
      icon: '📅',
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to turn visitors into customers. Perfect for marketing campaigns, product launches, and lead generation.',
      features: [
        'Conversion-focused design',
        'A/B testing capabilities',
        'Lead capture forms',
        'Social proof integration',
        'Fast loading and optimization',
        'Mobile-first responsive design',
        'Analytics and tracking',
      ],
      icon: '🚀',
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web solutions designed to help your business succeed online
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#F4C542] mr-3 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                  <div className="text-8xl opacity-50">{service.icon}</div>
                </div>
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
            Let's discuss your project and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F4C542] text-[#0B1F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542]/90 transition-all duration-200 transform hover:scale-105"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border-2 border-[#F4C542] text-[#F4C542] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542] hover:text-[#0B1F3A] transition-all duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

