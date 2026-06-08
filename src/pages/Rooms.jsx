import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

const Rooms = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="rooms-page" style={{ paddingTop: '80px' }}>
      <section className="section section-light">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Our Accommodation</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Choose from our beautifully appointed rooms designed for ultimate comfort and relaxation.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* Entire Villa */}
            <div id="entire-villa" className="room-card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <img src="/images/entire_villa.jpg" alt="Entire Villa" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <div style={{ display: 'inline-block', background: 'var(--color-green)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem' }}>Premium Choice</div>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Entire Villa</h2>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                  <span><strong>Capacity:</strong> Up to 15 Guests</span>
                  <span><strong>Bedrooms:</strong> 5 Rooms</span>
                </div>
                <p style={{ marginBottom: '1.5rem' }}>
                  Experience ultimate privacy and space by renting the entire Seasons Villa. Ideal for family gatherings or groups of friends, offering exclusive access to all bedrooms, the expansive living room, and dining areas.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> 5 Bedrooms & Bathrooms</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Private Living Room</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Exclusive Garden Access</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Free WiFi & Parking</li>
                </ul>
                
                <a href="#booking-widget" className="btn btn-primary" style={{ marginTop: '1rem' }}>Book Entire Villa</a>
                
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
            {/* Family Room */}
            <div id="family-room" className="room-card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <img src="/images/family_room.jpg" alt="Family Room" className="room-img-enhanced" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Family Room</h2>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                  <span><strong>Capacity:</strong> Up to 4 Guests</span>
                  <span><strong>Bed:</strong> 2 King Beds</span>
                </div>
                <p style={{ marginBottom: '1.5rem' }}>
                  Spacious and beautifully decorated, our Family Room is perfect for those traveling together. Enjoy natural light, garden views, and premium comfort.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Air-conditioned</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Private bathroom</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Garden view</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Free WiFi</li>
                </ul>
                
                <a href="#booking-widget" className="btn btn-primary" style={{ marginTop: '1rem' }}>Book This Room</a>
                
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />

            {/* Double Room */}
            <div id="double-room" className="room-card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <img src="/images/double_room.jpg" alt="Double Room" className="room-img-enhanced" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Double Room</h2>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                  <span><strong>Capacity:</strong> 2 Guests</span>
                  <span><strong>Bed:</strong> 1 King Bed</span>
                </div>
                <p style={{ marginBottom: '1.5rem' }}>
                  A cozy and intimate setting, ideal for couples. Designed with minimal earthy tones to ensure a restful night after a day of exploring Sigiriya.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Air-conditioned</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Private bathroom</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Work desk</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Free toiletries</li>
                </ul>

                <a href="#booking-widget" className="btn btn-primary" style={{ marginTop: '1rem' }}>Book This Room</a>

              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />

            {/* Triple Room */}
            <div id="triple-room" className="room-card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <img src="/images/triple_room.jpg" alt="Triple Room" className="room-img-enhanced" style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Triple Room</h2>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                  <span><strong>Capacity:</strong> 3 Guests</span>
                  <span><strong>Bed:</strong> 1 Twin + 1 Queen</span>
                </div>
                <p style={{ marginBottom: '1.5rem' }}>
                  Flexible sleeping arrangements with warm, elegant decor. Experience genuine Sri Lankan hospitality in a serene environment.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Air-conditioned</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Dining area</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Comfortable bedding</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} className="text-green" /> Free WiFi</li>
                </ul>

                <a href="#booking-widget" className="btn btn-primary" style={{ marginTop: '1rem' }}>Book This Room</a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Custom Booking Widget Section */}
      <section id="booking-widget" className="section section-beige">
        <div className="container">
          <h2 className="section-title">Check Availability & Book</h2>
          <p className="section-subtitle">Select your dates and preferred room below.</p>
          
          <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '1rem', boxShadow: 'var(--shadow-md)', marginTop: '2rem' }}>
            <iframe 
              src="https://brandspire-booking.vercel.app/embed/property-irmano" 
              width="100%" 
              height="900px" 
              style={{ border: 'none', borderRadius: 'var(--radius-sm)' }}
              title="Seasons Villa Booking"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
