import { use } from 'react';

async function fetchProducts() {
    const res = await fetch('http://localhost:3000/api/products');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export default function ProductsPage() {
    const products = use(fetchProducts());
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
