import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth-service';
import { LocalStorageService } from 'src/app/core/localStorage';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private authService: AuthService,
  ) {}
  
  userExist!: boolean;
  storeData = new FormGroup({
    email: new FormControl(this.storedEmail, [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  get storedEmail(): string {
    const checkEmail = this.storage.getItem('signup-email') || '';
    if (checkEmail == '') {
      return "Email"
    } else {
      return checkEmail;
    }
  }

  onSubmit() {
    this.authService.checkEmail(this.storeData.value.email!).subscribe((res: any) => {
      if (res == false) {
        this.userExist = false;
        this.storage.setItem("signup-pw", this.storeData.value.password);
        this.router.navigate(['/step2']);
        //Want to save password more safely
      } else {
        this.userExist = true;
      }
    })
  }
}
