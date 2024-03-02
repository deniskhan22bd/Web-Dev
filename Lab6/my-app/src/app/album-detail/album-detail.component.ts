import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album !: Album
  titleInput: string = ''



  constructor(
    private route : ActivatedRoute,
    private albumsService: AlbumsService,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.albumsService.getAlbum(id).subscribe(album => this.album = album);

        
      }
    })
  }

  changeTitle(){
    this.album.title = this.titleInput;
  }
}
