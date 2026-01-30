import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Code, Network, Server, Cpu, BarChart3, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Agentic AI',
      desc: 'Empowering the AI-First Enterprise',
      path: '/ai-agentic-ai',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=400'
    },
    {
      icon: Cloud,
      title: 'Cloud',
      desc: 'The Ultimate Destination for All Your Cloud Solutions',
      path: '/cloud-services',
      image: 'https://images.unsplash.com/photo-1752670352717-00f00392792e?w=400'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      desc: 'Robust Cybersecurity Solutions for a Reliable Future',
      path: '/cybersecurity',
      image: 'https://images.pexels.com/photos/225250/pexels-photo-225250.jpeg?w=400'
    },
    {
      icon: Code,
      title: 'Digital Services',
      desc: 'Transforming Ideas into Digital Reality',
      path: '/digital-services',
      image: 'https://images.unsplash.com/photo-1633184297371-6a91e49832d9?w=400'
    },
    {
      icon: Network,
      title: 'Blockchain',
      desc: 'Connected With Resiliency & Security',
      path: '/blockchain',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=400'
    },
    {
      icon: Server,
      title: 'Enterprise & SaaS',
      desc: 'Creative Solutions for Evolving Business Needs',
      path: '/enterprise-saas',
      image: 'https://images.pexels.com/photos/4389465/pexels-photo-4389465.jpeg?w=400'
    },
    {
      icon: Cpu,
      title: 'Managed Services',
      desc: 'Engineering Tech Success That Scales',
      path: '/managed-services',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      desc: 'Driving Growth Through Data Intelligence',
      path: '/data-analytics',
      image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=400'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Engineering',
      desc: 'Elicit Excellence & Increase Client Satisfaction',
      path: '/quality-engineering',
      image: 'https://images.unsplash.com/photo-1580920461931-fcb03a940df5?w=400'
    },
    {
      icon: Network,
      title: 'Supply Chain',
      desc: 'AI-Driven Supply Chain Ecosystem',
      path: '/supply-chain',
      image: 'https://images.pexels.com/photos/7691694/pexels-photo-7691694.jpeg?w=400'
    }
  ];

  const partners = [
    { name: 'Verifone', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"%3E%3Crect fill="%23003D7A" width="120" height="40" rx="4"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="14" font-weight="bold" text-anchor="middle" dy=".3em"%3EVerifone%3C/text%3E%3C/svg%3E' },
    { name: 'MOHR Partners', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"%3E%3Crect fill="%23000" width="120" height="40" rx="4"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="12" font-weight="bold" text-anchor="middle" dy=".3em"%3EMOHR Partners%3C/text%3E%3C/svg%3E' },
    { name: 'BMO', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"%3E%3Crect fill="%2300539F" width="120" height="40" rx="4"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="16" font-weight="bold" text-anchor="middle" dy=".3em"%3EBMO%3C/text%3E%3C/svg%3E' },
    { name: 'T-Mobile', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"%3E%3Crect fill="%23E20074" width="120" height="40" rx="4"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="14" font-weight="bold" text-anchor="middle" dy=".3em"%3ET-Mobile%3C/text%3E%3C/svg%3E' },
    { name: 'AT&T', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"%3E%3Crect fill="%2300A8E0" width="120" height="40" rx="4"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="16" font-weight="bold" text-anchor="middle" dy=".3em"%3EAT%26T%3C/text%3E%3C/svg%3E' },
    { name: 'Toyota', logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"%3E%3Crect fill="%23EB0A1E" width="120" height="40" rx="4"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="16" font-weight="bold" text-anchor="middle" dy=".3em"%3ETOYOTA%3C/text%3E%3C/svg%3E' }
  ];

  const faqs = [
    {
      question: "What is digital transformation and why is it important?",
      answer: "Digital transformation is the integration of digital technology into all areas of business, fundamentally changing how you operate and deliver value to customers. According to McKinsey research, companies that embrace comprehensive digital transformation achieve 3.5x higher revenue growth compared to their peers. It's essential for staying competitive in today's rapidly evolving business landscape."
    },
    {
      question: "How long does a typical digital transformation project take?",
      answer: "The timeline varies based on scope and complexity. Strategic roadmap development typically takes 4-8 weeks, while implementation phases can range from 3-18 months. Our phased approach ensures you see measurable results early, with most clients experiencing a 40% reduction in operational costs within the first year."
    },
    {
      question: "What industries does VDart Digital specialize in?",
      answer: "We serve clients across automotive, financial services, telecommunications, healthcare, and retail sectors. Our 15+ years of experience with Fortune 500 companies like Toyota, T-Mobile, and BMO has given us deep expertise in both industry-specific challenges and cross-sector best practices."
    },
    {
      question: "How do you ensure ROI from AI and cloud implementations?",
      answer: "We establish clear KPIs upfront and use data-driven approaches throughout implementation. Our AI solutions typically achieve 4.2x ROI in the first year, while cloud migrations deliver 60% faster time-to-market. We provide ongoing analytics dashboards to track performance against your business objectives in real-time."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes. Our Managed Services team provides 24/7 support, proactive monitoring, and continuous optimization. We view ourselves as long-term strategic partners—Toyota has worked with us consistently since 2017 because we evolve solutions alongside their changing business needs."
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': 'Digital Transformation',
          'provider': {
            '@type': 'Organization',
            'name': 'VDart Digital'
          },
          'areaServed': 'Worldwide',
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Digital Solutions',
            'itemListElement': services.map(s => ({
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': s.title,
                'description': s.desc
              }
            }))
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Businesses Through
              <span className="text-[#003D7A]"> Digital Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              VDart Digital partners with organizations to deliver end-to-end digital transformation services—driving innovation, operational agility, and measurable business outcomes. According to <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">McKinsey Digital research (2024)</a>, companies that embrace comprehensive digital transformation achieve <strong>3.5x higher revenue growth</strong> compared to their industry peers.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/contact-us"
                className="px-8 py-4 bg-[#003D7A] text-white rounded-lg hover:bg-[#002855] transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/about-us"
                className="px-8 py-4 border-2 border-[#003D7A] text-[#003D7A] rounded-lg hover:bg-[#003D7A] hover:text-white transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl p-8 mb-16 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Innovation Takeaways</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              <li className="flex items-start space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span>**AI-First Strategy:** Empowering enterprises with agentic AI workflows.</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span>**Modern Infrastructure:** Scalable cloud-native solutions for agility.</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <span>**Trusted Partnerships:** Strategic digital consulting for measurable ROI.</span>
              </li>
            </ul>
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who are our Strategic Partners?</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className="h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-[#003D7A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                We work with our clients to understand their business processes,{' '}
                <span className="text-yellow-400">identify their pain points,</span>
                <span className="text-yellow-400"> and develop solutions</span> that improve their efficiency, effectiveness, and profitability.
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                By deeply understanding your unique IT infrastructure and business goals, we craft tailored solutions that optimize efficiency and unlock hidden potential within your business processes. Our clients typically see <strong>40% reduction in operational costs</strong> and <strong>60% faster time-to-market</strong> for new digital initiatives within the first year of engagement.
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span className="text-lg font-semibold">Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580920461931-fcb03a940df5?w=600"
                alt="Digital Solutions"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How can we help your business grow?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We partner with you to understand your unique business processes, identify pain points, and deploy specific digital solutions that enhance efficiency and drive long-term profitability.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#003D7A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <div className="flex items-center text-[#003D7A] font-semibold">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#003D7A] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <blockquote className="text-lg mb-6 italic">
                <p>"VDart Digital has been a consistently strong supplier for Toyota since 2017. We view VDart Digital as a strategic partner, and we are actively working to introduce them to other groups in the company."</p>
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1618591552964-837a5a315fb2?w=100&h=100&fit=crop"
                  alt="Jake Garrity"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Jake Garrity</p>
                  <p className="text-sm text-blue-200">Senior Manager, Indirect Procurement - Toyota</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <blockquote className="text-lg mb-6 italic">
                <p>"Toyota's Supplier Diversity program is over 22 years old and is recognized as an industry leader. VDart Digital is one of our partners that has consistently met and exceeded our stringent requirements."</p>
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=100&h=100&fit=crop"
                  alt="Bonnie Clinton"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Bonnie Clinton</p>
                  <p className="text-sm text-blue-200">VP & CPO Indirect Procurement - Toyota</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Common questions about our digital transformation services
          </p>
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with VDart Digital to drive innovation and achieve measurable business outcomes.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#003D7A] text-white rounded-lg hover:bg-[#002855] transition-all transform hover:scale-105 shadow-lg"
          >
            <span className="text-lg font-semibold">Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;