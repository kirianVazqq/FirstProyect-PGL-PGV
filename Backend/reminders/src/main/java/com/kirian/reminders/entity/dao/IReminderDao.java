package com.kirian.reminders.entity.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.kirian.reminders.entity.models.Reminder;

public interface IReminderDao extends CrudRepository<Reminder,Long>{
	 List<Reminder> findByUsers_Id(Long userId);
}
