package com.shopers.order;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderLineResponse {
    private Long id;
    private Long productId;
    private String productName;
    private Integer quantity;
    private Double priceEach;
    private Double lineTotal;
}
