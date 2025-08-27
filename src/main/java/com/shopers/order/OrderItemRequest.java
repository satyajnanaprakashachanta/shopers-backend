package com.shopers.order;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderItemRequest {
    private Long productId;
    private String productName;
    private Integer quantity;
    private Double price;
}
