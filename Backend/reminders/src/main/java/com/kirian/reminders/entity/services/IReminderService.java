package com.kirian.reminders.entity.services;

import java.util.List;

import com.kirian.reminders.entity.models.Reminder;

public interface IReminderService {
public Reminder get(long id);
public List <Reminder> getAll();
public void post (Reminder reminder);
public void put (Reminder reminder, long id);
public void delete(long id);
List<Reminder> findByUserId(Long userId);

}
