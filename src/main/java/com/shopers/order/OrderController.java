package com.shopers.order;

import com.shopers.auth.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final JwtUtil jwtUtil;

    @PostMapping
    public ResponseEntity<OrderResponse> createOrder(
            @RequestBody CreateOrderRequest request,
            HttpServletRequest httpRequest) {
        
        String userEmail = getUserEmailFromToken(httpRequest);
        if (userEmail == null) {
            return ResponseEntity.status(401).build();
        }

        OrderResponse order = orderService.createOrder(userEmail, request.getItems());
        return ResponseEntity.ok(order);
    }

    @GetMapping("/my")
    public ResponseEntity<List<OrderResponse>> getMyOrders(HttpServletRequest httpRequest) {
        String userEmail = getUserEmailFromToken(httpRequest);
        if (userEmail == null) {
            return ResponseEntity.status(401).build();
        }

        List<OrderResponse> orders = orderService.getOrdersByUser(userEmail);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResponse> getOrder(
            @PathVariable Long orderId,
            HttpServletRequest httpRequest) {
        
        String userEmail = getUserEmailFromToken(httpRequest);
        if (userEmail == null) {
            return ResponseEntity.status(401).build();
        }

        try {
            OrderResponse order = orderService.getOrderById(orderId);
            return ResponseEntity.ok(order);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    private String getUserEmailFromToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            try {
                return jwtUtil.extractUsername(token);
            } catch (Exception e) {
                return null;
            }
        }
        return null;
    }
}