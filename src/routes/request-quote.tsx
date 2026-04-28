import NotFound from '#/components/not-found'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/request-quote')({
  head: () => ({
    meta: [
      {
        title: 'Request Quote | Esha IT Consultancy',
      },
      {
        name: 'description',
        content:
          'Esha IT Consultancy is a leading provider of IT solutions and services, dedicated to helping businesses leverage technology for growth and success. With a team of experienced professionals, we offer a wide range of services including software development, cloud computing, cybersecurity, and IT consulting. Our mission is to deliver innovative and customized solutions that meet the unique needs of our clients, enabling them to stay competitive in the ever-evolving digital landscape.',
      },
    ],
  }),
  component: RouteComponent,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="Request Quote" innerTitle="Request Quote" />
      <RequestQuoteMain />
    </main>
  )
}

const RequestQuoteMain = () => {
  return (
    <div className="request-quote__area section-padding">
      <div className="container">
        <form action="#">
          <div className="request-quote__area-inputs">
            <div className="request-quote__area-input-field">
              <label htmlFor="first-name">First Name *</label>
              <input type="text" id="first-name" placeholder="First" />
            </div>
            <div className="request-quote__area-input-field">
              <label htmlFor="last-name">Last Name *</label>
              <input type="text" id="last-name" placeholder="Last" />
            </div>
            <div className="request-quote__area-input-field">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="request-quote__area-input-field">
              <label htmlFor="number">Number *</label>
              <input type="text" id="number" placeholder="+ 00 123 4567" />
            </div>
            <div className="request-quote__area-input-field">
              <label htmlFor="company">Company/Organization *</label>
              <input type="text" id="company" placeholder="Envato" />
            </div>
            <div className="request-quote__area-input-field">
              <label htmlFor="website">Website *</label>
              <input type="text" id="website" placeholder="http://envato.com" />
            </div>
          </div>
          <div className="request-quote__area-service-input">
            <span>What services can we provide you? *</span>
            <div className="request-quote__area-service-input-single">
              <input type="checkbox" id="seo" />
              <label htmlFor="seo">Optimization (SEO)</label>
            </div>
            <div className="request-quote__area-service-input-single">
              <input type="checkbox" id="web-design" />
              <label htmlFor="web-design">Web Design</label>
            </div>
            <div className="request-quote__area-service-input-single">
              <input type="checkbox" id="web-hosting" />
              <label htmlFor="web-hosting">Web Hosting</label>
            </div>
            <div className="request-quote__area-service-input-single">
              <input type="checkbox" id="maintenance" />
              <label htmlFor="maintenance">Maintenance</label>
            </div>
          </div>
          <label htmlFor="message" className="mb-2">
            Message *
          </label>
          <textarea id="message" placeholder="Type Here"></textarea>
          <input type="submit" value="Submit Now" className="btn-two mt-4" />
        </form>
      </div>
    </div>
  )
}
