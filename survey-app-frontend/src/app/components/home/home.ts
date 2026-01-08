//Names:
 //Sanjana Kambalapally - G01506405
 //Shreya Shitole - G01517081
 //Shravani Vasa - G01543148
 //Akhil Akkineni - G01547445

 //THis file defines the home component.


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}