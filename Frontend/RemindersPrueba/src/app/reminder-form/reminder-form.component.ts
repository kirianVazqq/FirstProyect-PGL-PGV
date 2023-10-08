import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminders.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.scss'],
})
export class ReminderFormComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  userId: number | null = null;
  private subs: Subscription = new Subscription();
  date = new Date();
  today = this.date.toLocaleDateString('fr-CA');
  editingId: number | null = null;
  showEditForm: boolean = false;
  showRequireText: boolean = false;
  reminders: any = [];
  form!: FormGroup;
  formEdit!: FormGroup;
  constructor(
    private usersService: UsersService,
    private reminderService: ReminderService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.subs.add(
      this.usersService.isAuthenticated$.subscribe((state) => {
        this.isAuthenticated = state;
      })
    );
    this.subs.add(
      this.usersService.currentUserId$.subscribe((id) => {
        this.userId = id;
        this.getRemindersUsers()
      })
    );

    // this.getReminders();
    this.form = new FormGroup({
      fecha: new FormControl(''),
      informacion: new FormControl(''),
    });
    this.formEdit = new FormGroup({
      fechaEdit: new FormControl(''),
      informacionEdit: new FormControl(''),
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  getRemindersUsers() {
    if (this.userId !== null) {
      this.reminderService.getRemindersByUserId(this.userId).subscribe((response) => {
        this.reminders = response;
        console.log(this.userId)
      });
    }
    
  }
  getReminders() {
    this.reminderService.getReminders().subscribe((response) => {
      this.reminders = response;
    });
  }

  addReminder() {
    const fecha = this.form.get('fecha')?.value;
    const informacion = this.form.get('informacion')?.value;

    if (informacion && this.userId) {  // Asegúrate de que la información y el userId estén presentes
      this.reminderService.addReminder(fecha, informacion).subscribe(
        (response) => {
          this.getReminders();
          this.form.reset();
        },
        (error) => {
          console.error('Error al agregar el recordatorio:', error);
        }
      );
    } else {
      console.log("Falta información o ID de usuario para agregar el recordatorio.");
    }
}

  deleteReminder(id: number) {
    this.reminderService.deleteReminder(id).subscribe(
      (response) => {
        this.reminders = response;
        this.getReminders();
      },
      (error) => {
        console.error('Error al borrar el recordatorio', error);
      }
    );
  }
  editButton(reminder: any, id: number) {
    this.editingId = id;
    this.showEditForm = true;
    this.formEdit.setValue({
      fechaEdit: reminder.date,
      informacionEdit: reminder.info,
    });
   
  }
  editReminder(id: number) {
    const fecha = this.formEdit.get('fechaEdit')?.value;
    const informacion = this.formEdit.get('informacionEdit')?.value;
    this.reminderService.editReminder(id, fecha, informacion).subscribe(
      (response) => {
        this.reminders = response;
        this.getReminders();
        this.showEditForm = false;
      },
      (error) => {
        console.error('Hubo un error al editar el recordatorio:', error);
      }
    );
  }
}
