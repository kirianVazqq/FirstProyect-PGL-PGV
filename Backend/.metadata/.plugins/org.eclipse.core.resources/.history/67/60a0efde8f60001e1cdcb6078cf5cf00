


package com.kirian.reminders.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kirian.reminders.entity.models.Reminder;
import com.kirian.reminders.entity.models.Users;
import com.kirian.reminders.entity.services.IReminderService;
import com.kirian.reminders.entity.services.IUsersService;

@RestController
@CrossOrigin(origins = "*")

public class UsersController {


	@Autowired
	IUsersService usersService;

	@GetMapping("/users")
	public List<Users> getAll() {
		return usersService.getAll();
	}

	@GetMapping("/users/{id}")
	public Users getOne(@PathVariable(value = "id") long id) {
		return usersService.get(id);
	}

	@PutMapping("/users/{id}")
	public void put(@RequestBody Users users, @PathVariable(value = "id") long id) {
		usersService.put(users, id);
	}

	@DeleteMapping("/users/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		usersService.delete(id);
	}
	@PostMapping("/users")
	public void post(@RequestBody Users users) {
		usersService.post(users);
	}

		
	

	}
	

