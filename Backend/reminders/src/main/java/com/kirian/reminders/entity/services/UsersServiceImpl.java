package com.kirian.reminders.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kirian.reminders.entity.dao.IUsersDao;
import com.kirian.reminders.entity.models.Users;

@Service
public class UsersServiceImpl implements IUsersService {
	@Autowired
	private IUsersDao usersdao;

	@Override
	public Users get(long id) {
		return usersdao.findById(id).get();
	}

	@Override
	public List<Users> getAll() {

		return (List<Users>) usersdao.findAll();
	}
	

	@Override
	public void post(Users users) {
		usersdao.save(users);

	}

	@Override
	public void put(Users users, long id) {
		usersdao.findById(id).ifPresent((x) -> {
			users.setId(id);
			usersdao.save(users);

		});

	}

	@Override
	public void delete(long id) {
		usersdao.deleteById(id);

	}
}
