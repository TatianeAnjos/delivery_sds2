package com.tatiane.dsDelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tatiane.dsDelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

	
}
