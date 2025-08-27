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

-- Insert sample products if table is empty (avoid duplicates)
INSERT INTO products (name, description, price, image_url, stock, category) 
SELECT * FROM (VALUES
    ('Wireless Headphones', 'High-quality wireless headphones with noise cancellation', 99.99, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', 50, 'Electronics'),
    ('Smart Watch', 'Advanced fitness tracking and smart notifications', 199.99, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', 30, 'Electronics'),
    ('Laptop Backpack', 'Durable backpack designed for laptops and daily commute', 49.99, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', 25, 'Accessories'),
    ('Bluetooth Speaker', 'Portable speaker with excellent sound quality', 79.99, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', 40, 'Electronics'),
    ('Phone Case', 'Protective case with stylish design', 24.99, 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop', 100, 'Accessories'),
    ('Wireless Mouse', 'Ergonomic wireless mouse for productivity', 39.99, 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop', 60, 'Electronics'),
    ('Running Shoes', 'Lightweight athletic shoes for running', 89.99, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', 35, 'Footwear'),
    ('Coffee Mug', 'Ceramic mug perfect for your morning coffee', 19.99, 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop', 80, 'Home')
) AS t(name, description, price, image_url, stock, category)
WHERE NOT EXISTS (SELECT 1 FROM products LIMIT 1);
