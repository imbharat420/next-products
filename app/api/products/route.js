// Ensure that you use a full URL for the fetch request
export async function GET() {
    try {
        const res = await fetch('http://localhost:5000/api/products', {
            cache: 'no-store', // Ensures fresh data on every request
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const products = await res.json();
        return new Response(JSON.stringify(products), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
