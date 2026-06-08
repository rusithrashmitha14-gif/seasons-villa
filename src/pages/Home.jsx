import { Link } from 'react-router-dom';
import { MapPin, Leaf, Wifi, Car, Coffee, Users, Snowflake, Mountain, TreePine } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="/images/cover_photo.jpg" 
          alt="Seasons Villa Sigiriya Exterior" 
          className="hero-bg" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Seasons Villa Sigiriya</h1>
          <p className="hero-subtitle">
            A peaceful retreat between Sigiriya and Dambulla surrounded by nature
          </p>
          <div className="hero-actions">
            <Link to="/rooms#booking-widget" className="btn btn-primary">Check Availability</Link>
            <Link to="/rooms" className="btn btn-secondary" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)' }}>
              View Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <Leaf size={40} style={{ color: 'var(--color-green)', marginBottom: '1.5rem' }} />
          <h2 className="section-title">Welcome to Peace</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
            Seasons Villa Sigiriya is a peaceful countryside retreat located between Sigiriya and Dambulla, 
            offering guests a calm escape surrounded by nature, comfort, and warm Sri Lankan hospitality.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section section-beige">
        <div className="container">
          <h2 className="section-title">Why Stay With Us</h2>
          <div className="grid-3" style={{ marginTop: '3rem' }}>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <MapPin size={40} style={{ color: 'var(--color-green)', margin: '0 auto 1rem auto' }} />
              <h3>Location Advantage</h3>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Perfectly situated between the ancient Sigiriya Rock and Dambulla Cave Temple.</p>
            </div>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Leaf size={40} style={{ color: 'var(--color-green)', margin: '0 auto 1rem auto' }} />
              <h3>Nature Surroundings</h3>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Immerse yourself in lush greenery and slow tropical living.</p>
            </div>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <Users size={40} style={{ color: 'var(--color-green)', margin: '0 auto 1rem auto' }} />
              <h3>Family Friendly</h3>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Spacious rooms and a welcoming environment for families and couples alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Accommodation</h2>
          <p className="section-subtitle">Comfortable, air-conditioned rooms designed for restful nights.</p>
          
          {/* Entire Villa - Featured */}
          <div className="card" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative' }}>
              <img src="/images/entire_villa.jpg" alt="Entire Villa" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-green)', color: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
                Featured
              </div>
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Rent the Entire Villa</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Perfect for large families or groups. Enjoy complete privacy, exclusive access to all facilities, and a spacious living area.</p>
              <Link to="/rooms#entire-villa" className="text-green" style={{ fontWeight: '600', fontSize: '1.1rem' }}>View Details & Book &rarr;</Link>
            </div>
          </div>
          
          <div className="grid-3">
            {/* Family Room */}
            <div className="card">
              <img src="/images/family_room.jpg" alt="Family Room" className="room-img-enhanced" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Family Room</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>2 King Beds • Up to 4 Guests</p>
                <Link to="/rooms" className="text-green" style={{ fontWeight: '500' }}>View Details &rarr;</Link>
              </div>
            </div>

            {/* Double Room */}
            <div className="card">
              <img src="/images/double_room.jpg" alt="Double Room" className="room-img-enhanced" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Double Room</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>1 King Bed • Up to 2 Guests</p>
                <Link to="/rooms" className="text-green" style={{ fontWeight: '500' }}>View Details &rarr;</Link>
              </div>
            </div>

            {/* Triple Room */}
            <div className="card">
              <img src="/images/triple_room.jpg" alt="Triple Room" className="room-img-enhanced" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Triple Room</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>1 Twin + 1 Queen Bed • Up to 3 Guests</p>
                <Link to="/rooms" className="text-green" style={{ fontWeight: '500' }}>View Details &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section section-beige">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Facilities & Services</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: 'var(--shadow-sm)' }}>
                <Wifi size={24} className="text-green" />
              </div>
              <span style={{ fontWeight: '500' }}>Free WiFi</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: 'var(--shadow-sm)' }}>
                <Car size={24} className="text-green" />
              </div>
              <span style={{ fontWeight: '500' }}>Free Parking</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: 'var(--shadow-sm)' }}>
                <Coffee size={24} className="text-green" />
              </div>
              <span style={{ fontWeight: '500' }}>Restaurant</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: 'var(--shadow-sm)' }}>
                <Snowflake size={24} className="text-green" />
              </div>
              <span style={{ fontWeight: '500' }}>Air Conditioning</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: 'var(--shadow-sm)' }}>
                <Mountain size={24} className="text-green" />
              </div>
              <span style={{ fontWeight: '500' }}>Mountain View</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: 'var(--shadow-sm)' }}>
                <TreePine size={24} className="text-green" />
              </div>
              <span style={{ fontWeight: '500' }}>Garden</span>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Teaser Section */}
      <section className="section section-light" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ display: 'inline-block', color: 'var(--color-green)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Explore Sigiriya</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Discover World-Class Attractions Just Minutes Away</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                Make Seasons Villa your base for adventure. From the iconic Sigiriya Rock Fortress and thrilling Minneriya Elephant Safaris to ancient cultural treasures and authentic village tours, the best of Sri Lanka is right at our doorstep.
              </p>
              <Link to="/explore" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>See All Experiences</Link>
            </div>
            <div style={{ flex: '1 1 400px', position: 'relative' }}>
              <img src="/images/explore/sigiriya_rock.jpg" alt="Sigiriya Rock" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} />
              <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', background: 'var(--color-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', zIndex: 10 }}>
                <div style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--color-green)' }}>10 Mins</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>To Sigiriya Rock</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experience Section */}
      <section className="section section-beige">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Traditional Sri Lankan Dining</h2>
            <p className="section-subtitle">Savor authentic local flavors prepared fresh at the villa.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Breakfast Card */}
            <div className="card" style={{ overflow: 'hidden' }}>
              <img src="/images/breakfast.jpg" alt="Traditional Sri Lankan Breakfast" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-green)' }}>Authentic Breakfast</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>Start your day with a wholesome and delicious traditional Sri Lankan breakfast, freshly prepared every morning.</p>
              </div>
            </div>

            {/* Dinner Card */}
            <div className="card" style={{ overflow: 'hidden' }}>
              <img src="/images/dinner.jpg" alt="Traditional Sri Lankan Dinner" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-green)' }}>Authentic Dinner</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>Enjoy a rich, flavorful spread of local curries and traditional dishes after a long day of exploring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section section-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'var(--color-green)', color: 'var(--color-white)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-lg)', fontWeight: '600', marginBottom: '1rem' }}>
            9.2 / 10 – Wonderful
          </div>
          <h2 className="section-title">Guest Reviews</h2>
          <p className="section-subtitle">Based on verified guest experiences</p>
          
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div className="card" style={{ padding: '2rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
              "The host was perfect and very caring. We extended our stay because it was so comfortable."
            </div>
            <div className="card" style={{ padding: '2rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
              "Very helpful staff and excellent safari arrangements."
            </div>
            <div className="card" style={{ padding: '2rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
              "Beautiful house, great location between Dambulla and Sigiriya."
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--color-green)', color: 'var(--color-white)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-white)' }}>Experience Peaceful Nature Living</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', opacity: '0.9' }}>
            Book your stay at Seasons Villa Sigiriya today.
          </p>
          <Link to="/rooms#booking-widget" className="btn" style={{ background: 'var(--color-white)', color: 'var(--color-green)' }}>
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
