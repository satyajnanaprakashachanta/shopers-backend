package com.shopers;

import com.shopers.product.Product;
import com.shopers.product.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ShopersApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(ShopersApplication.class, args);
    }
    
    @Bean
    public CommandLineRunner initDatabase(ProductRepository productRepository) {
        return args -> {
            // Only seed if database is empty
            if (productRepository.count() == 0) {
                productRepository.save(Product.builder()
                    .name("Wireless Headphones")
                    .description("High-quality wireless headphones with noise cancellation")
                    .price(99.99)
                    .imageUrl("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300")
                    .build());
                    
                productRepository.save(Product.builder()
                    .name("Smart Watch")
                    .description("Feature-rich smartwatch with health monitoring")
                    .price(249.99)
                    .imageUrl("https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300")
                    .build());
                    
                productRepository.save(Product.builder()
                    .name("Laptop Backpack")
                    .description("Durable and stylish laptop backpack with multiple compartments")
                    .price(59.99)
                    .imageUrl("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300")
                    .build());
                    
                productRepository.save(Product.builder()
                    .name("Smartphone")
                    .description("Latest smartphone with advanced camera and processing power")
                    .price(699.99)
                    .imageUrl("https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300")
                    .build());
                    
                productRepository.save(Product.builder()
                    .name("Coffee Maker")
                    .description("Premium coffee maker for the perfect brew every morning")
                    .price(129.99)
                    .imageUrl("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300")
                    .build());
                    
                System.out.println("Sample products have been added to the database!");
            }
        };
    }
}
