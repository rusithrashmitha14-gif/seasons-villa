import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const attractions = [
  {
    id: 1,
    name: 'Sigiriya Rock Fortress',
    category: 'Heritage',
    badge: 'UNESCO World Heritage Site',
    time: '10 Minutes',
    description: "Climb Sri Lanka's most iconic rock fortress and discover ancient palace ruins, frescoes, and breathtaking panoramic views from the summit.",
    image: '/images/explore/sigiriya_rock.jpg'
  },
  {
    id: 2,
    name: 'Pidurangala Sunrise Hike',
    category: 'Adventure',
    time: '15 Minutes',
    description: "Experience a spectacular sunrise hike with one of the most famous viewpoints in Sri Lanka overlooking Sigiriya Rock.",
    image: '/images/explore/pidurangala.jpg'
  },
  {
    id: 3,
    name: 'Minneriya Elephant Safari',
    category: 'Wildlife',
    time: '30 Minutes',
    description: "Witness wild elephants in their natural habitat and enjoy an unforgettable jeep safari through Minneriya National Park.",
    image: '/images/explore/minneriya.jpg'
  },
  {
    id: 4,
    name: 'Dambulla Cave Temple',
    category: 'Culture',
    badge: 'UNESCO World Heritage Site',
    time: '10 Minutes',
    description: "Explore a UNESCO World Heritage cave temple featuring ancient murals, centuries-old Buddha statues, and remarkable Buddhist history.",
    image: '/images/explore/dambulla.jpg'
  },
  {
    id: 5,
    name: 'Traditional Village Tour',
    category: 'Culture',
    time: '5 Minutes',
    description: "Discover authentic Sri Lankan village life through traditional cooking, local food tasting, catamaran rides, and cultural experiences.",
    image: '/images/explore/village_tour.jpg'
  },
  {
    id: 6,
    name: 'Polonnaruwa Ancient City',
    category: 'Heritage',
    badge: 'UNESCO World Heritage Site',
    time: '1 Hour',
    description: "Visit the ancient capital of Sri Lanka and explore well-preserved temples, royal palaces, and archaeological treasures.",
    image: '/images/explore/polonnaruwa.jpg'
  },
  {
    id: 7,
    name: 'Anuradhapura Sacred City',
    category: 'Heritage',
    badge: 'UNESCO World Heritage Site',
    time: 'Approximately 1 Hour',
    description: "Explore the first ancient capital of Sri Lanka, home to magnificent stupas, sacred temples, ancient reservoirs, and the revered Sri Maha Bodhi tree. Discover over 2,000 years of history.",
    highlights: ['Sri Maha Bodhi Sacred Tree', 'Ruwanwelisaya Stupa', 'Jetavanaramaya', 'Ancient Monasteries', 'Archaeological Ruins'],
    image: '/images/explore/anuradhapura.jpg'
  }
];

const categories = ['All Experiences', 'Heritage', 'Wildlife', 'Adventure', 'Culture'];

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState('All Experiences');

  const filteredAttractions = attractions.filter(attr => {
    if (activeFilter === 'All Experiences') return true;
    if (activeFilter === 'Culture' && attr.id === 7) return true; // Anuradhapura is also Culture per requirements
    if (activeFilter === 'Heritage' && attr.id === 4) return true; // Dambulla is also Heritage
    return attr.category === activeFilter;
  });

  const handleArrangeClick = (name) => {
    let text = `Hello, I am interested in arranging a visit to ${name} during my stay.`;
    if (name === 'Anuradhapura Sacred City') {
      text = "Hello, I am interested in arranging a day trip to Anuradhapura during my stay.";
    }
    window.open(`https://wa.me/94777859691?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="explore-page" style={{ paddingTop: '80px', backgroundColor: 'var(--color-offwhite)' }}>
      {/* Header Section */}
      <section className="section" style={{ background: 'var(--color-green)', color: 'var(--color-white)', textAlign: 'center', padding: '6rem 1.5rem' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Explore Sigiriya</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: '0.9', lineHeight: '1.6' }}>
            Discover world-famous landmarks, wildlife adventures, cultural treasures, and authentic local experiences just minutes from the villa.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section container">
        {/* Filtering */}
        <div className="filter-tabs">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid-3" style={{ gap: '3rem' }}>
          {filteredAttractions.map((attr, index) => (
            <article key={attr.id} className="glass-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div style={{ position: 'relative', height: '300px' }}>
                <img src={attr.image} alt={attr.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-green)', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', boxShadow: 'var(--shadow-sm)' }}>
                  {attr.category}
                </div>
                {attr.badge && (
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '0.6rem 1.2rem', fontSize: '0.85rem', fontWeight: '500', backdropFilter: 'blur(4px)' }}>
                    {attr.badge}
                  </div>
                )}
              </div>
              
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>{attr.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-brown)', marginBottom: '1.2rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <Clock size={16} /> Travel Time: {attr.time}
                </div>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.7' }}>
                  {attr.description}
                </p>
                {attr.highlights && (
                  <ul style={{ marginBottom: '2rem', paddingLeft: '1.2rem', color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    {attr.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                )}
                <button 
                  onClick={() => handleArrangeClick(attr.name)}
                  className="btn btn-primary" 
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', padding: '1rem' }}
                >
                  Arrange Through Our Villa <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Concierge Banner */}
      <section className="section section-beige">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', background: 'var(--color-white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Need Help Planning Your Stay?</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
            Our team can assist with safari bookings, transport arrangements, guided tours, and local experiences before or during your stay.
          </p>
          <a href="https://wa.me/94777859691?text=Hello,%20I%20need%20help%20planning%20my%20stay%20and%20arranging%20tours." target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ borderColor: 'var(--color-green)', color: 'var(--color-green)', padding: '1rem 2rem' }}>
            Contact Concierge
          </a>
        </div>
      </section>
    </div>
  );
};

export default Explore;
