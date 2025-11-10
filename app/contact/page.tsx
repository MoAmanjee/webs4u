'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Open mailto link to send email
        if (data.mailtoLink) {
          window.location.href = data.mailtoLink;
        }
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', businessType: '', message: '' });
        }, 5000);
      } else {
        alert('Failed to send message. Please try again or email us directly at prowebs4you@gmail.com');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback to mailto if API fails
      const emailSubject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
      const emailBody = encodeURIComponent(
        `New contact form submission:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Business Type: ${formData.businessType || 'Not specified'}\n\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:prowebs4you@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', businessType: '', message: '' });
      }, 5000);
    }
  };

  const whatsappNumber = '0608270838'; // Primary WhatsApp number
  const whatsappMessage = encodeURIComponent('Hello! I\'m interested in your web development services.');
  const whatsappUrl = `https://wa.me/27${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  const emailAddress = 'Prowebs4you@gmail.com';
  const phoneNumber1 = '(060) 827 0838';
  const phoneNumber2 = '(060) 036 2113';

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life. Fill out the form below or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
                Send Us a Message
              </h2>
              {submitted && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg mb-6">
                  Thank you! Your message has been received. We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C542] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C542] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C542] focus:outline-none transition-colors"
                  >
                    <option value="">Select business type</option>
                    <option value="small-business">Small Business</option>
                    <option value="startup">Startup</option>
                    <option value="professional">Professional/Individual</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C542] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B1F3A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0B1F3A]/90 transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
                Other Ways to Reach Us
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#F4C542] rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-[#0B1F3A]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3A]">Email</h3>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-gray-600 hover:text-[#F4C542] transition-colors"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="block w-full bg-[#0B1F3A] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#0B1F3A]/90 transition-colors duration-200"
                  >
                    Send Email
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#F4C542] rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-[#0B1F3A]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3A]">Phone</h3>
                      <p className="text-gray-600">{phoneNumber1}</p>
                      <p className="text-gray-600">{phoneNumber2}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#F4C542] rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-[#0B1F3A]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B1F3A]">WhatsApp</h3>
                      <p className="text-gray-600">Chat with us directly</p>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#25D366]/90 transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F4C542] to-[#f5d066] rounded-lg p-6">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Response Time</h3>
                <p className="text-[#0B1F3A]/80">
                  We typically respond within 24 hours. For urgent inquiries, please use WhatsApp for faster response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

