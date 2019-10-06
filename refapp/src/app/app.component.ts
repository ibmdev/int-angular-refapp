import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MontantComponent } from 'montant';
import { UploadComponent } from 'upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MontantComponent, UploadComponent]
})
export class AppComponent {
  title = 'refapp';
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    montant: new FormControl(''),
    listePiecesJointes: new FormControl([])
  });
}
