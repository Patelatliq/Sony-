import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>About Sony Industries</h1>
                    <p>Manufacturing excellence since 2017</p>
                </div>
            </section>

            {/* About Intro */}
            <section className="section">
                <div className="container">
                    <div className="about-intro">
                        <div>
                            <h2>Crafting Quality, Building Trust</h2>
                            <p>Sony Industries is a leading manufacturer and B2B supplier of premium high-quality kitchen sinks. Established in 2017, we serve dealers, builders, and interior professionals across India with a commitment to effective and timely delivery.</p>
                            <p>Our dedication to quality materials, precise engineering, and competitive pricing has made us a preferred partner for businesses looking to source kitchen sinks in bulk.</p>
                            <p>Specializing in classic stainless steel (SS), modern handmade, and quartz composite sinks, our comprehensive catalog covers every need and budget of the modern kitchen industry.</p>
                        </div>
                        <div className="about-intro-image">🏭</div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <h2>At a Glance</h2>
                    </div>
                    <div className="stats-row">
                        {[
                            ['500+', 'Product Models'],
                            ['3', 'Product Ranges'],
                            ['8+', 'Years Experience'],
                            ['100+', 'Dealer Partners'],
                        ].map(([val, label]) => (
                            <div className="stat-card" key={label}>
                                <h3>{val}</h3>
                                <p>{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="container">
                    <h2>Become a Dealer Partner</h2>
                    <p>Join our growing network of dealers and builders across India.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
                </div>
            </section>
        </>
    )
}
