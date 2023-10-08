package com.kirian.reminders.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirian.reminders.entity.dao.IReminderDao;
import com.kirian.reminders.entity.models.Reminder;
@Service
public class ReminderServiceImpl implements IReminderService {
@Autowired
private IReminderDao reminderDao;

@Override
public List<Reminder> findByUserId(Long userId) {
    return reminderDao.findByUsers_Id(userId);
}
	@Override
	public Reminder get(long id) {
		return reminderDao.findById(id).get();
	}

	@Override
	public List<Reminder> getAll() {
	
		return (List<Reminder>) reminderDao.findAll();
	}

	@Override
	public void post(Reminder reminder) {
		reminderDao.save(reminder);

		
	}

	@Override
	public void put(Reminder reminder, long id) {
reminderDao.findById(id).ifPresent((x)-> {
	reminder.setId(id);
	reminderDao.save(reminder);
	
});
		
	}

	@Override
	public void delete(long id) {
reminderDao.deleteById(id);
		
	}

	
}
