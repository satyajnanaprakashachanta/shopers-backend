package com.shopers.order;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderResponse createOrder(String userEmail, List<OrderItemRequest> items) {
        // Create order entity
        Order order = Order.builder()
                .userEmail(userEmail)
                .build();

        // Create order lines
        List<OrderLine> orderLines = items.stream()
                .map(item -> OrderLine.builder()
                        .productId(item.getProductId())
                        .productName(item.getProductName())
                        .quantity(item.getQuantity())
                        .priceEach(item.getPrice())
                        .order(order)
                        .build())
                .collect(Collectors.toList());

        order.setOrderLines(orderLines);
        
        // Calculate total
        double total = orderLines.stream()
                .mapToDouble(OrderLine::getLineTotal)
                .sum();
        order.setTotal(total);

        // Save order
        Order savedOrder = orderRepository.save(order);

        return convertToOrderResponse(savedOrder);
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> getOrdersByUser(String userEmail) {
        List<Order> orders = orderRepository.findByUserEmailOrderByCreatedAtDesc(userEmail);
        return orders.stream()
                .map(this::convertToOrderResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public OrderResponse getOrderById(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + orderId));
        return convertToOrderResponse(order);
    }

    private OrderResponse convertToOrderResponse(Order order) {
        List<OrderLineResponse> lineResponses = order.getOrderLines().stream()
                .map(line -> OrderLineResponse.builder()
                        .id(line.getId())
                        .productId(line.getProductId())
                        .productName(line.getProductName())
                        .quantity(line.getQuantity())
                        .priceEach(line.getPriceEach())
                        .lineTotal(line.getLineTotal())
                        .build())
                .collect(Collectors.toList());

        return OrderResponse.builder()
                .id(order.getId())
                .userEmail(order.getUserEmail())
                .total(order.getTotal())
                .createdAt(order.getCreatedAt())
                .lines(lineResponses)
                .build();
    }
}
