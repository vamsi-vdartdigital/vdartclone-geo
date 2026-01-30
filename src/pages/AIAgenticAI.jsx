import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Network, Zap, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const AIAgenticAI = () => {
  const capabilities = [
    { icon: Brain, title: 'AI & NLP', desc: 'Natural language processing and understanding' },
    { icon: Cpu, title: 'Computer Vision', desc: 'Advanced image and video analysis' },
    { icon: Network, title: 'ML & MLOps', desc: 'Machine learning operations at scale' },
    { icon: Zap, title: 'Speech Recognition', desc: 'Voice-enabled intelligent systems' }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="AI & Agentic AI Services | VDart Digital"
        description="Empowering the AI-First Enterprise with intelligent, adaptive, and scalable AI solutions for smarter decision-making."
        keywords="AI services, agentic AI, machine learning, NLP, computer vision, MLOps"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'AI & Agentic AI Consulting',
          'description': 'End-to-end AI strategy, model development, and agentic workflow integration.',
          'provider': {
            '@type': 'Organization',
            'name': 'VDart Digital'
          }
        }}
      />

      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">How can AI & Agentic Intelligence Transform Your Enterprise?</h1>
            <p className="text-2xl text-blue-100 mb-8">
              Empowering the AI-First Enterprise
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              We deliver intelligent, adaptive, and scalable AI solutions designed for smarter decision-making. Our mission is to help organizations harness the power of artificial intelligence to transform operations, enhance customer experiences, and drive innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-blue-50 rounded-2xl p-8 mb-16 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic AI Takeaways</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start space-x-2 text-gray-700">
                <Zap className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span>**Agentic Workflows:** Moving beyond simple LLMs to autonomous, objective-driven AI agents.</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <Zap className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span>**Enterprise Scalability:** MLOps and cloud-native AI infrastructure built for growth.</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <Zap className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span>**Data Intelligence:** Turning raw data into predictive, actionable business insights.</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-700">
                <Zap className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span>**Ethical AI:** Ensuring transparency, security, and fairness in every AI deployment.</span>
              </li>
            </ul>
          </div>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">What AI capabilities do we offer?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our comprehensive AI services enable organizations to build intelligent systems that learn, adapt, and evolve with your business needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cap.title}</h3>
                  <p className="text-gray-600">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600"
                alt="AI Technology"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Business with AI</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our AI and Agentic AI solutions help you automate complex processes, gain actionable insights from data, and create intelligent applications that adapt to changing business needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Intelligent automation and process optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Advanced analytics and predictive modeling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Custom AI solutions tailored to your industry</span>
                </li>
              </ul>
              <Link
                to="/contact-us"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAgenticAI;