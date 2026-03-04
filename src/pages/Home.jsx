import { Link } from 'react-router-dom'
import products from '../data/products.json'

export default function Home() {
    const getImage = (cat) => {
        const p = products.find(p => p.category === cat && p.image)
        return p ? `/images/${p.image}` : ''
    }

    return (
        <>
            {/* Hero */}
            <section className="hero">
                <div className="container hero-content">
                    <span className="hero-badge">🏭 Trusted B2B Supplier</span>
                    <h1>Premium Kitchen Sinks for <span className="accent">Modern Spaces</span></h1>
                    <p>Sony Sinks is a trusted B2B supplier, offering bulk kitchen sink solutions in a variety of sizes and finishes for dealers, builders, and interior professionals.</p>
                    <div className="hero-actions">
                        <Link to="/products" className="btn btn-primary btn-lg">Explore Products</Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg">Request Quote</Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat"><h3>500+</h3><p>Product Models</p></div>
                        <div className="stat"><h3>3</h3><p>Product Ranges</p></div>
                        <div className="stat"><h3>10+</h3><p>Years Experience</p></div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Sony Sinks?</h2>
                        <p className="subtitle">Delivering durability and style for commercial and residential bulk projects.</p>
                    </div>
                    <div className="features-grid">
                        {[
                            ['🛡️', 'Unmatched Durability', 'Engineered to withstand heavy daily use with premium grade stainless steel and composite materials.'],
                            ['✨', 'Elegant Finishes', 'From matte to polished and satin, our finishes are designed to complement any interior style.'],
                            ['📏', 'Versatile Sizes', 'A comprehensive range of dimensions to fit any kitchen platform requirement perfectly.'],
                            ['🤝', 'B2B Focused', 'Bulk order capabilities, competitive pricing, and dedicated support for dealers and builders.'],
                        ].map(([icon, title, desc]) => (
                            <div className="feature-card" key={title}>
                                <div className="feature-icon">{icon}</div>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Product Ranges</h2>
                        <p className="subtitle">Three distinct collections to meet every requirement</p>
                    </div>
                    <div className="category-grid">
                        {[
                            { key: 'regular', tag: 'Popular', name: 'Sony Regular Sinks', desc: 'The standard of reliability. Classic designs for everyday utility, available in multiple bowl configurations.' },
                            { key: 'handmade', tag: 'Premium', name: 'Handmade Sinks', desc: 'Crafted with precision. Deep bowls with sharp, clean lines for a contemporary modern look.' },
                            { key: 'quartz', tag: 'Luxury', name: 'Quartz Sinks', desc: 'Ultimate resilience. Heat and scratch resistant composite material for modern kitchens.' },
                        ].map(cat => (
                            <Link to={`/products?category=${cat.key}`} className="category-card" key={cat.key}>
                                <div className="category-image-wrapper">
                                    {getImage(cat.key) && <img className="category-image" src={getImage(cat.key)} alt={cat.name} />}
                                    <span className="category-tag">{cat.tag}</span>
                                </div>
                                <h3>{cat.name}</h3>
                                <p>{cat.desc}</p>
                                <span className="card-link">View Collection →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="container">
                    <h2>Ready to Place a Bulk Order?</h2>
                    <p>Get competitive B2B pricing for your next project. Reach out to our sales team.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Contact Sales Team</Link>
                </div>
            </section>
        </>
    )
}
