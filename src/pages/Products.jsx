import { useSearchParams } from 'react-router-dom'
import products from '../data/products.json'

const categoryLabels = {
    all: 'All Products',
    regular: 'Sony Regular',
    handmade: 'Handmade Sinks',
    quartz: 'Quartz Sinks',
}

export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get('category') || 'all'
    const filtered = category === 'all' ? products : products.filter(p => p.category === category)

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>{categoryLabels[category] || 'Our Products'}</h1>
                    <p>Explore our complete range of premium kitchen sinks</p>
                </div>
            </section>

            {/* Products */}
            <section className="section">
                <div className="container">
                    {/* Filter Bar */}
                    <div className="filter-bar">
                        {Object.entries(categoryLabels).map(([key, label]) => (
                            <button
                                key={key}
                                className={`filter-btn ${category === key ? 'active' : ''}`}
                                onClick={() => setSearchParams(key === 'all' ? {} : { category: key })}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="product-grid">
                        {filtered.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-card-image">
                                    {product.image ? (
                                        <img src={`/images/${product.image}`} alt={product.name} />
                                    ) : (
                                        <span style={{ color: '#ccc' }}>No Image</span>
                                    )}
                                </div>
                                <div className="product-card-body">
                                    <h3>{product.name}</h3>
                                    {product.size && <p className="product-meta">📏 Size: {product.size}</p>}
                                    {product.description && <p className="product-meta">{product.description}</p>}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#94a3b8' }}>
                            <p style={{ fontSize: '1.25rem' }}>No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
