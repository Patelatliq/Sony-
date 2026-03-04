import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()

    return (
        <nav className="navbar" id="main-navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <h2>SONY<span>Sinks</span></h2>
                </Link>

                <div className="nav-menu" id="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <div className="dropdown">
                        <span className="nav-link dropdown-toggle">Products ▾</span>
                        <div className="dropdown-menu">
                            <Link to="/products?category=regular" className="dropdown-item">Sony Regular</Link>
                            <Link to="/products?category=handmade" className="dropdown-item">Handmade Sinks</Link>
                            <Link to="/products?category=quartz" className="dropdown-item">Quartz Sinks</Link>
                        </div>
                    </div>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>

                <div className="nav-actions">
                    <Link to="/contact" className="nav-phone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>Sales Inquiry</span>
                    </Link>
                </div>

                <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>

            <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`} id="mobile-menu">
                <Link to="/" className="mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
                <div className="mobile-heading">Products</div>
                <Link to="/products?category=regular" className="mobile-sublink" onClick={() => setMobileOpen(false)}>Sony Regular</Link>
                <Link to="/products?category=handmade" className="mobile-sublink" onClick={() => setMobileOpen(false)}>Handmade Sinks</Link>
                <Link to="/products?category=quartz" className="mobile-sublink" onClick={() => setMobileOpen(false)}>Quartz Sinks</Link>
                <Link to="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>About Us</Link>
                <Link to="/contact" className="mobile-link" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>
        </nav>
    )
}
