package com.kirian.reminders.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.kirian.reminders.entity.models.Users;

public interface IUsersDao extends CrudRepository<Users,Long>{

}
