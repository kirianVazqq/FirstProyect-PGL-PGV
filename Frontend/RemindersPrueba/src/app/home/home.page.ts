import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminders.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  reminders: any = [];


  constructor(private reminderService: ReminderService) {}
  ngOnInit(): void {
      this.getReminders()
  }
  getReminders() {
    this.reminderService.getReminders().subscribe((response) => {
      this.reminders = response;
    });
  }
}
