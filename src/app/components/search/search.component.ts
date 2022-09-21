import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  loader: boolean = false;

  constructor(private spotify: SpotifyService) {  }

  buscar(termino: string) {

    console.log(termino);
    this.loader = true;

    this.spotify.getArtistas(termino)
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loader = false;
      })
  }

}
