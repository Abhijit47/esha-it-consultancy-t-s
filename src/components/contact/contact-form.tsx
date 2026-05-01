import { useRef, useState, type SubmitEvent } from 'react'

const acceessKey = import.meta.env.VITE_WEB3_API_KEY
const apiUrl = import.meta.env.VITE_WEB3_API_URL

export default function ContactForm() {
  const [result, setResult] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    if (!acceessKey || !apiUrl) {
      setResult('Configuration error: Missing API key or URL')

      setTimeout(() => {
        setResult('')
      }, 3000)
      return
    }
    formData.append('access_key', acceessKey)

    try {
      setIsLoading(true)
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setResult('Form submitted successfully!')
      }

      setTimeout(() => {
        setResult('')
        formRef.current?.reset()
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      setResult(
        'An error occurred while submitting the form. Please try again later.',
      )
      setTimeout(() => {
        setResult('')
        setIsLoading(false)
      }, 3000)
      console.error('Form submission error:', error)
      return
    }
  }

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {<p className={'mb-2'}>{result}</p>}
      <div className="row">
        <div className="col-md-6 mb-30">
          <div className="contact__form-area-item">
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
        </div>
        <div className="col-md-6 md-mb-30">
          <div className="contact__form-area-item">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="col-md-12 mb-30">
          <div className="contact__form-area-itemm">
            <input type="text" name="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="col-md-12 mb-30">
          <div className="contact__form-area-item">
            <select
              className=""
              aria-label="Service of Interest"
              name="service"
            >
              <option disabled>Select a service...</option>
              <option>Cloud Computing & Migration</option>
              <option>Cybersecurity Solutions</option>
              <option>IT Infrastructure Management</option>
              <option>Software Development</option>
              <option>ERP & Business Solutions</option>
              <option>Network Solutions</option>
              <option>AI & Intelligent Automation</option>
              <option>Data Analytics & Business Intelligence</option>
              <option>Digital Transformation</option>
              <option>IT Support & Managed Services</option>
              <option>IoT & Smart Technology</option>
              <option>IT Training & Consulting</option>
              <option>Other / General Inquiry</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__form-area-item">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__two-right-form-item">
            <button className="btn-one" type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Now'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
