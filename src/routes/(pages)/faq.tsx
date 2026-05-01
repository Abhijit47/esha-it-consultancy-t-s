import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/(pages)/faq')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="Question & Ans." innerTitle="FAQ's" />

      <div className="faq__three section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-collapse">
                <FaqOne />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-collapse">
                <FaqTwo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const FaqOne = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1)
  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We specialize in a broad range of IT services, including software development, cloud services, cyber security, IT consulting, and tech support. Visit our Services page for detailed information.',
    },
    {
      question: 'How can I request a quote for my project?',
      answer:
        'Fill out the contact form on this page, providing as many details as possible about your project. A representative will be in touch within one business day to discuss your needs and provide a tailored quote.',
    },
    {
      question: 'What is your process for client inquiries?',
      answer:
        "We prioritize getting back to you quickly. After an inquiry is submitted, it'll be routed to the appropriate team, who will review your information and respond with the next steps or a request for further details.",
    },
    {
      question: 'What are your hours of operation? ',
      answer:
        'Our office is open Monday-Friday from 9 AM to 5 PM [Time Zone]. For support outside of these hours, please consult our support package details or use our emergency contact methods outlined above.',
    },
  ]
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-collapse">
      {faqs.map((faq, index) => (
        <div className="faq-collapse-item" key={index}>
          <div
            className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="faq-collapse-item-card-header"
              onClick={() => toggleFaq(index)}
            >
              <i
                className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}
              ></i>
              <h6>{faq.question}</h6>
            </div>
            <div
              className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const FaqTwo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const faqs = [
    {
      question: 'Do you have any Partnerships?',
      answer:
        'es, we have several international partnerships as well as some  to help cater to our global clients. For more information, please contact our partnership division through this page.',
    },
    {
      question: 'What is your approach to cybersecurity?',
      answer:
        'We take a proactive and comprehensive approach to cybersecurity, implementing layered security measures to protect your data, applications, and networks from threats.',
    },
    {
      question: 'Can I get a free consultation for  needs?',
      answer:
        'We offer a free initial consultation to understand your business requirements and propose how our services can assist you. Please use our online booking system or call us directly to schedule your consultation.',
    },
    {
      question: 'How can I submit a support ticket?',
      answer:
        'For current clients requiring technical support, please visit the Support section of our website and submit a ticket through our automated system. Our technical team aims to respond to all tickets within 24 hours.',
    },
  ]
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-collapse">
      {faqs.map((faq, index) => (
        <div className="faq-collapse-item" key={index}>
          <div
            className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="faq-collapse-item-card-header"
              onClick={() => toggleFaq(index)}
            >
              <i
                className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}
              ></i>
              <h6>{faq.question}</h6>
            </div>
            <div
              className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
