package com.kirian.reminders.entity.services;

import java.util.List;

import com.kirian.reminders.entity.models.Users;

public interface IUsersService {
	public Users get(long id);
	public List <Users> getAll();
	public void post (Users users);
	public void put (Users users, long id);
	public void delete(long id);
}
