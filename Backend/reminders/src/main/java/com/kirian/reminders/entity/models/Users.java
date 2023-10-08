package com.kirian.reminders.entity.models;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")


public class Users implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String email;
	private String password;
	@JsonIgnore
	@OneToMany(mappedBy="users")
	private List<Reminder> reminder;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<Reminder> getReminder() {
		return reminder;
	}
	public void setReminder(List<Reminder> reminder) {
		this.reminder = reminder;
	}
	public Users(int id, String email, String password, List<Reminder> reminder) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.reminder = reminder;
	}
	public Users() {

	}

}
