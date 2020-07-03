import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage {

  constructor(private auth: AuthService) { }

  ionViewWillEnter() {
    this.auth.access();
  }

}
