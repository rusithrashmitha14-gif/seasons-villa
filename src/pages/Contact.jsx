import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page" style={{ paddingTop: '80px' }}>
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            We'd love to hear from you. Reach out for bookings, inquiries, or safari arrangements.
          </p>

          <div className="grid-2">
            {/* Contact Details */}
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Get in Touch</h3>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <MapPin className="text-green" style={{ marginTop: '0.25rem' }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Address</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>
                      No 6, Janaudanagama, Inamaluwa,<br />
                      21124, Dambulla, Sri Lanka
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Phone className="text-green" style={{ marginTop: '0.25rem' }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Phone</strong>
                    <span style={{ color: 'var(--color-text-muted)' }}>077 785 9691</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Mail className="text-green" style={{ marginTop: '0.25rem' }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Email</strong>
                    <a href="mailto:seasonsvilla.lk@gmail.com" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>seasonsvilla.lk@gmail.com</a>
                  </div>
                </div>
                
                {/* WhatsApp Button */}
                <div style={{ marginTop: '2rem' }}>
                  <a 
                    href="https://wa.me/94777859691" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn"
                    style={{ background: '#25D366', color: 'white', display: 'inline-flex', gap: '0.5rem' }}
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div style={{ height: '100%', minHeight: '400px', width: '100%' }}>
              <iframe 
                title="Seasons Villa Location"
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: 'var(--radius-md)', minHeight: '400px' }} 
                loading="lazy" 
                allowFullScreen 
                src="https://maps.google.com/maps?q=Seasons+Villa,+No+6,+Janaudanagama,+Inamaluwa,+21124,+Dambulla,+Sri+Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
