import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src="/images/logo.png" alt="Sony Industries" className="footer-logo-image" />
                        <p>Premium B2B kitchen sink supplier. Trusted by dealers and builders across India.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">All Products</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Product Range</h4>
                        <ul>
                            <li><Link to="/products?category=regular">Sony Regular</Link></li>
                            <li><Link to="/products?category=handmade">Handmade Sinks</Link></li>
                            <li><Link to="/products?category=quartz">Quartz Sinks</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Get in Touch</h4>
                        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>01, Matel Road, Dhuva<br />Morbi - 363641, Gujarat</p>
                        <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>📞 +91 9638058480<br />✉️ sonyindustries@gmail.com<br />👤 Kush Nakrani</p>
                        <Link to="/contact" className="btn btn-primary btn-sm">Request Quote</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Sony Sinks. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
