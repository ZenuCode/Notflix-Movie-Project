import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/localStorage';
import { AuthService } from 'src/app/core/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {
  constructor(
    private AuthService: AuthService,
    private storage: LocalStorageService,
    private router: Router,
  ) {}

  storeData = new FormGroup({
    username: new FormControl('', [Validators.required]),
    tmdbKey: new FormControl('', Validators.required),
  })

  allFill() {
    const emailFill = this.storeData.controls['username'];
    const pwFill = this.storeData.controls['tmdbKey'];
    return emailFill.value == '' && pwFill.value == '' && emailFill.untouched && pwFill.untouched;
  }

  onSubmit() {
    this.storage.setItem("signup-username", this.storeData.value.username);
    this.storage.setItem("signup-tmdb", this.storeData.value.tmdbKey)
    this.router.navigate(['/step3']);
  }
}
