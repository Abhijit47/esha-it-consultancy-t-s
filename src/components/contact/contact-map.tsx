export default function ContactMap() {
  return (
    <section>
      <div>
        <iframe
          name="google map"
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.3209911432814!2d55.42810327509644!3d25.39406377758468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f590049d15669%3A0x5449d74b71a4a333!2sAmber%20Gem%20Tower%20-26th%20Floor%20Ajman!5e0!3m2!1sen!2sin!4v1777432743828!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}
