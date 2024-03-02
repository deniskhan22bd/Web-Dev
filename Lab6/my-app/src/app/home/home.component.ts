import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AlbumsComponent } from '../albums/albums.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HomeComponent, AboutComponent, AlbumsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
