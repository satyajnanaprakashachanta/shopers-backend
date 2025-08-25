package com.shopers.order;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderResponse {
    private Long id;
    private String userEmail;
    private Double total;
    private LocalDateTime createdAt;
    private List<OrderLineResponse> orderLines;
}

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
class OrderLineResponse {
    private Long id;
    private Long productId;
    private String productName;
    private Integer quantity;
    private Double priceEach;
}
