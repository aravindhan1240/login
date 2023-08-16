import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  userName: string = '';

  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit(){
    this.userName = this.route.snapshot.params['userName'];
  }

  Back(){
    this.router.navigate(['/login'])
  }
}
