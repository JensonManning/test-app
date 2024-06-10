import { Component } from '@angular/core';

@Component({
  selector: 'app-appbar',
  standalone: true,
  imports: [],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.scss'
})
export class AppbarComponent {
  userName : String = 'Jenson Manning';
  userTitle : String = 'App Admin';
  userImage : String ='';
    getUserName(){
      this.userName = 'Jenson Manning';
      return this.userName;
    }
    getUserTitle(){
      this.userTitle = 'App Admin';
      return this.userTitle;
    }
}
