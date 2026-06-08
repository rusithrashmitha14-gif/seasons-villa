import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For non-home pages, we want the header to be solid
  const headerClass = `header ${scrolled || !isHome ? 'scrolled' : ''}`;

  return (
    <header className={headerClass}>
      <div className="container header-container">
        <Link to="/" className="logo">Seasons Villa</Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/rooms" className="nav-link">Rooms</Link></li>
            <li><Link to="/explore" className="nav-link">Explore</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/" className="mobile-nav-link">Home</Link></li>
          <li><Link to="/rooms" className="mobile-nav-link">Rooms</Link></li>
          <li><Link to="/explore" className="mobile-nav-link">Explore</Link></li>
          <li><Link to="/about" className="mobile-nav-link">About</Link></li>
          <li><Link to="/contact" className="mobile-nav-link">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
