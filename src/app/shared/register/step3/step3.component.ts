import { Component } from '@angular/core';
import { plans } from '../step3/interface';
import { LocalStorageService } from 'src/app/core/localStorage';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth-service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private AuthService: AuthService,
  ) {}

  plan: number = 0;
  plans : plans[] = [
    {
      info: ["Monthly price", "Video quality", "Resolution", "Watch on your TV, computer, mobile phone and tablet", "Downloads"],
    }, {
      info : ["$6.99", "Great", "1080p", "✓", "—"],
    }, {
      info : ["$15.49", "Great", "1080p", "✓", "✓"],
    }, {
      info : ["$19.99", "Best", "4K+HDR", "✓", "✓"],
    }
  ]

  selectPlan(plan: any) {
    this.plan = plan;
  }

  redIt(data : number) {
    for (let pos in this.plans) {
      if (parseInt(pos) == data) {
        this.plans[pos].red = true;
        this.plans[pos].index = data;
      } else {
        this.plans[pos].red = false;
        this.plans[pos].index = data;
      }
    }
  }

  onSubmit() {
    if (this.plan == 1) {
      this.storage.setItem("signup-role", "USER");
    } else if (this.plan == 2) {
      this.storage.setItem("signup-role", "SUPERUSER");
    } else if (this.plan == 3) {
      this.storage.setItem("signup-role", "ADMIN");
    }

    const username = this.storage.getItem("signup-username");
    const password = this.storage.getItem("signup-pw");
    const email = this.storage.getItem("signup-email");
    const role = this.storage.getItem("signup-role");
    const tmdb = this.storage.getItem("signup-tmdb");
    let userInfo = [username, password, email, role, tmdb];

    // this.AuthService.signUp(userInfo).subscribe((res: any) => {
    //   this.storage.setItem("userInfo", res.accessToken);
    // })
    this.router.navigate(['/movie-list']);
  }
}
