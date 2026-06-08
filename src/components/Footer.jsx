import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">Seasons Villa Sigiriya</h3>
            <p className="footer-text">
              A peaceful countryside retreat located between Sigiriya and Dambulla, 
              offering guests a calm escape surrounded by nature.
            </p>
          </div>
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/rooms" style={{ color: '#ccc' }}>Accommodation</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/about" style={{ color: '#ccc' }}>Our Story</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/contact" style={{ color: '#ccc' }}>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Contact</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#ccc' }}>
              <MapPin size={18} style={{ marginRight: '0.5rem', color: 'var(--color-green-light)' }} />
              <span>No 6, Janaudanagama, Inamaluwa, 21124, Dambulla</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#ccc' }}>
              <Phone size={18} style={{ marginRight: '0.5rem', color: 'var(--color-green-light)' }} />
              <span>077 785 9691</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Seasons Villa Sigiriya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
