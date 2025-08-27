-- PostgreSQL Schema for Production
-- This will be executed automatically when the app starts

-- Users table (if not exists)
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table (if not exists)
CREATE TABLE IF NOT EXISTS products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(500),
    stock INTEGER DEFAULT 0,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table (if not exists)
CREATE TABLE IF NOT EXISTS orders (
    id BIGSERIAL PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order lines table (if not exists)
CREATE TABLE IF NOT EXISTS order_lines (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    price_each DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

-- Insert sample products if table is empty
INSERT INTO products (name, description, price, image_url, stock, category) 
SELECT * FROM (VALUES
    ('Classic Tee', 'Soft cotton t-shirt', 19.99, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', 120, 'Apparel'),
    ('Crew Hoodie', 'Fleece-lined, cozy', 39.99, 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', 80, 'Apparel'),
    ('Running Shoes', 'Lightweight daily runners', 59.99, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', 65, 'Footwear'),
    ('Wireless Mouse', '2.4G ergonomic mouse', 14.99, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', 200, 'Electronics'),
    ('Mechanical Keyboard', 'Blue switches, RGB', 69.99, 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400', 45, 'Electronics'),
    ('USB-C Charger', '45W fast charging', 24.99, 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400', 150, 'Electronics'),
    ('Water Bottle', 'Insulated stainless steel', 22.50, 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400', 140, 'Home'),
    ('Backpack', 'Laptop compartment, 25L', 49.00, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', 70, 'Accessories'),
    ('Socks (3-pack)', 'Breathable ankle socks', 9.99, 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400', 300, 'Apparel'),
    ('Desk Lamp', 'LED, adjustable arm', 27.99, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', 95, 'Home'),
    ('Gaming Headset', 'Surround sound, mic', 49.99, 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400', 60, 'Electronics'),
    ('Phone Stand', 'Aluminum, foldable', 12.49, 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400', 180, 'Accessories')
) AS t(name, description, price, image_url, stock, category)
WHERE NOT EXISTS (SELECT 1 FROM products LIMIT 1);
