import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(private auth: AuthService) { }

  ionViewWillEnter() { }

  logout() {
    this.auth.logout();
  }
}
