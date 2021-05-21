package com.usf.projeto.curso.crud.meetingroom.repository;

import com.usf.projeto.curso.crud.meetingroom.model.Room;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}
