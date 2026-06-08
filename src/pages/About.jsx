import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const nextImg = () => {
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevImg = () => {
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="about-page" style={{ paddingTop: '80px' }}>
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Our Story</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Seasons Villa Sigiriya was born out of a desire to create a peaceful, slow-living retreat 
                in the heart of Sri Lanka's cultural triangle. Located ideally between the majestic 
                Sigiriya Rock Fortress and the sacred Dambulla Cave Temple, our villa offers guests 
                the perfect blend of accessibility and serenity.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                We believe that travel should be a calming experience. That’s why we've designed 
                every aspect of our villa—from the warm, earthy tones of our rooms to the quiet 
                garden spaces—to reflect the natural beauty of the Sri Lankan countryside.
              </p>
            </div>

            <img 
              src="/images/about_villa.jpg" 
              alt="Seasons Villa Exterior" 
              style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} 
            />

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Location Advantage</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Whether you are planning an early morning hike up the ancient Lion Rock or looking to 
                explore the wildlife on a safari, Seasons Villa Sigiriya places you right where you need to be.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'var(--color-text-muted)' }}>
                <li>&bull; Sigiriya Rock Fortress – 10 Minutes</li>
                <li>&bull; Pidurangala Sunrise Hike – 15 Minutes</li>
                <li>&bull; Minneriya Elephant Safari – 30 Minutes</li>
                <li>&bull; Dambulla Cave Temple – 10 Minutes</li>
                <li>&bull; Traditional Village Tour – 5 Minutes</li>
                <li>&bull; Polonnaruwa Ancient City – 1 Hour</li>
                <li>&bull; Anuradhapura Sacred City – Approx 1 Hour</li>
              </ul>
            </div>

            {/* Premium Sliding Gallery Section */}
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Villa Gallery</h2>
              
              <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                {/* Images Container */}
                <div style={{ 
                  display: 'flex', 
                  height: '100%', 
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentIdx * 100}%)`
                }}>
                  {images.map(num => (
                    <img 
                      key={num}
                      src={`/images/gallery_${num}.jpg`}
                      alt={`Villa Gallery ${num}`}
                      className="gallery-img-enhanced"
                      style={{ minWidth: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ))}
                </div>

                {/* Left Arrow */}
                <button 
                  onClick={prevImg}
                  aria-label="Previous image"
                  style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.9)', border: 'none', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-md)', color: 'var(--color-green)', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Right Arrow */}
                <button 
                  onClick={nextImg}
                  aria-label="Next image"
                  style={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.9)', border: 'none', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-md)', color: 'var(--color-green)', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
                >
                  <ChevronRight size={28} />
                </button>

                {/* Dots */}
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.75rem' }}>
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      style={{
                        width: '12px', height: '12px', borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer',
                        background: currentIdx === idx ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.5)',
                        transition: 'background 0.3s ease',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div style={{ background: 'var(--color-beige)', padding: '3rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-brown)' }}>Warm Sri Lankan Hospitality</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Our team is dedicated to making your stay as comfortable as possible. From arranging 
                delicious local cuisine to helping organize your excursions, we are here to ensure 
                you experience the true essence of Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
