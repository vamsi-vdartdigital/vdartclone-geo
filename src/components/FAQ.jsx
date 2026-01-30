import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = ({ faqs, schema = true }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Generate FAQPage schema
    const faqSchema = schema ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    } : null;

    return (
        <>
            {faqSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            )}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                {faq.question}
                            </h3>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FAQ;
