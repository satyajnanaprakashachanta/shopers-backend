package com.shopers.product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        
        // If database is empty, return sample data for frontend testing
        if (products.isEmpty()) {
            return getSampleProducts();
        }
        
        return products;
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = getProductById(id);
        
        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setImageUrl(productDetails.getImageUrl());
        product.setStock(productDetails.getStock());
        product.setCategory(productDetails.getCategory());
        
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        productRepository.delete(product);
    }

    private List<Product> getSampleProducts() {
        List<Product> sampleProducts = new ArrayList<>();
        
        sampleProducts.add(Product.builder()
                .id(1L)
                .name("Wireless Headphones")
                .description("High-quality wireless headphones with noise cancellation")
                .price(99.99)
                .imageUrl("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop")
                .stock(50)
                .category("Electronics")
                .build());
                
        sampleProducts.add(Product.builder()
                .id(2L)
                .name("Smart Watch")
                .description("Advanced fitness tracking and smart notifications")
                .price(199.99)
                .imageUrl("https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop")
                .stock(30)
                .category("Electronics")
                .build());
                
        sampleProducts.add(Product.builder()
                .id(3L)
                .name("Laptop Backpack")
                .description("Durable backpack designed for laptops and daily commute")
                .price(49.99)
                .imageUrl("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop")
                .stock(25)
                .category("Accessories")
                .build());
                
        sampleProducts.add(Product.builder()
                .id(4L)
                .name("Bluetooth Speaker")
                .description("Portable speaker with excellent sound quality")
                .price(79.99)
                .imageUrl("https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop")
                .stock(40)
                .category("Electronics")
                .build());
                
        sampleProducts.add(Product.builder()
                .id(5L)
                .name("Phone Case")
                .description("Protective case with stylish design")
                .price(24.99)
                .imageUrl("https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop")
                .stock(100)
                .category("Accessories")
                .build());
                
        sampleProducts.add(Product.builder()
                .id(6L)
                .name("Wireless Mouse")
                .description("Ergonomic wireless mouse for productivity")
                .price(39.99)
                .imageUrl("https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop")
                .stock(60)
                .category("Electronics")
                .build());
                
        return sampleProducts;
    }
}
