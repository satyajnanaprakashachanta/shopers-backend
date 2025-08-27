package com.shopers.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductDataLoader implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Only load products if database is empty
        if (productRepository.count() == 0) {
            loadSampleProducts();
        }
    }

    public void loadSampleProducts() {
        List<Product> sampleProducts = List.of(
            Product.builder()
                .name("Wireless Headphones")
                .description("High-quality wireless headphones with noise cancellation")
                .price(99.99)
                .imageUrl("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop")
                .stock(50)
                .category("Electronics")
                .build(),
                
            Product.builder()
                .name("Smart Watch")
                .description("Advanced fitness tracking and smart notifications")
                .price(199.99)
                .imageUrl("https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop")
                .stock(30)
                .category("Electronics")
                .build(),
                
            Product.builder()
                .name("Laptop Backpack")
                .description("Durable backpack designed for laptops and daily commute")
                .price(49.99)
                .imageUrl("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop")
                .stock(25)
                .category("Accessories")
                .build(),
                
            Product.builder()
                .name("Bluetooth Speaker")
                .description("Portable speaker with excellent sound quality")
                .price(79.99)
                .imageUrl("https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop")
                .stock(40)
                .category("Electronics")
                .build()
        );
        
        productRepository.saveAll(sampleProducts);
        System.out.println("✅ Loaded " + sampleProducts.size() + " sample products!");
    }
}
