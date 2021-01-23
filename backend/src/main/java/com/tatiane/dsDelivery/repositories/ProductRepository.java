package com.tatiane.dsDelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tatiane.dsDelivery.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	List<Product> findAllByOrderByNameAsc();
}
