import Link from 'next/link';

export default function About() {
  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'SEO Optimization', level: 85 },
    { name: 'E-Commerce', level: 80 },
    { name: 'API Integration', level: 90 },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Two passionate Computer Science graduates on a mission to make professional websites accessible to everyone
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
                Our Story
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl text-[#0B1F3A] font-semibold">
                Webs4U was founded by two passionate Computer Science Honours graduates who shared a single goal — to make professional, high-performing websites accessible to everyone.
              </p>

              <p>
                After years of studying code, design, and systems architecture, we realized that technology isn't just about algorithms — it's about people. We wanted to use our skills to help small businesses, startups, and entrepreneurs tell their stories online through clean design and smart engineering.
              </p>

              <p>
                What started as late-night coding sessions between two friends became a growing digital brand built on integrity, creativity, and results.
              </p>

              <div className="bg-gradient-to-br from-[#F4C542] to-[#f5d066] rounded-lg p-8 my-8">
                <p className="text-xl font-bold text-[#0B1F3A] mb-4 text-center">
                  At Webs4U, we don't just build websites — we build digital experiences that inspire trust and drive success.
                </p>
              </div>

              <p className="text-xl text-[#0B1F3A] font-semibold text-center">
                Our mission is simple: to help others grow through technology, one website at a time.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0B1F3A]/90 transition-all duration-200 transform hover:scale-105"
              >
                Let's Build Your Website
              </Link>
            </div>
          </div>
        </div>
      </section>

          {/* Our Values */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-[#0B1F3A] text-center mb-12">
                What We Stand For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Integrity</h3>
                  <p className="text-gray-600">We believe in honest communication, transparent pricing, and delivering on our promises.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Creativity</h3>
                  <p className="text-gray-600">Every project is an opportunity to innovate and create something unique that represents your brand.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Results</h3>
                  <p className="text-gray-600">We measure success by your success. Your growth is our motivation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-[#0B1F3A] text-center mb-12">
                Technologies We Work With
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'React', 'Next.js', 'TypeScript', 'JavaScript',
                  'Tailwind CSS', 'Node.js', 'Express', 'MongoDB',
                  'PostgreSQL', 'Git', 'GitHub', 'Vercel',
                  'Netlify', 'Figma', 'Adobe XD', 'WordPress'
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#0B1F3A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0B1F3A]/90 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and see how we can bring your vision to life.
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
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

