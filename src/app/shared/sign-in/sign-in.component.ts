import { Component } from '@angular/core';
import { userData } from './interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/service';
import jwt_decode from 'jwt-decode';
import { LocalStorageService } from 'src/app/core/localStorage';
import { AuthService } from 'src/app/core/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private AuthService: AuthService,
    private router: Router,
  ) {}

  input : userData[] = [];

  storeData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  onSubmit() {
    if (this.storeData.valid) {
      this.AuthService.signIn(this.storeData).subscribe((res: any) => {
        console.log('res', res);
        // const decodedToken = jwt_decode(res.accessToken);
        // console.log(decodedToken);
        localStorage.setItem('userInfo', res.accessToken);
        this.router.navigate(['/movie-list']);
      })
    }
  }
}
