import { useState } from 'react'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '', company: '', email: '', phone: '', inquiry_type: 'bulk_order', message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({ name: '', company: '', email: '', phone: '', inquiry_type: 'bulk_order', message: '' })
    }

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for bulk orders, dealer inquiries, and quotations</p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Info */}
                        <div className="contact-info">
                            <h2>Let's Talk Business</h2>
                            <p>Whether you're a dealer looking to stock our products or a builder needing bulk supplies, we'd love to hear from you.</p>

                            <div className="contact-detail">
                                <div className="contact-detail-icon">📍</div>
                                <div>
                                    <h4>Head Office / Factory</h4>
                                    <p>01, Matel Road, Dhuva<br />Morbi - 363641<br />Gujarat, India</p>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-detail-icon">📞</div>
                                <div>
                                    <h4>Phone (Sales Inquiry)</h4>
                                    <p>Kush Nakrani<br />+91 9638058480</p>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-detail-icon">✉️</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>sonyindustries@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-detail-icon">🕐</div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="contact-form">
                            <h3>Send Us an Inquiry</h3>

                            {submitted && (
                                <div className="alert-success">
                                    ✅ Thank you for your inquiry! We will get back to you shortly.
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Your Name *</label>
                                        <input type="text" required placeholder="Full Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name *</label>
                                        <input type="text" required placeholder="Your Company" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input type="email" required placeholder="email@company.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone *</label>
                                        <input type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Inquiry Type</label>
                                    <select value={formData.inquiry_type} onChange={e => setFormData({ ...formData, inquiry_type: e.target.value })}>
                                        <option value="bulk_order">Bulk Order</option>
                                        <option value="dealer">Become a Dealer</option>
                                        <option value="quotation">Request Quotation</option>
                                        <option value="other">General Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea rows="5" required placeholder="Describe your requirements, product range interest, quantities, etc."
                                        value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Submit Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
