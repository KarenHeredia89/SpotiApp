import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent  {

  artista: any = {};
  loader: boolean;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
                private spotify: SpotifyService ) { 
        
    this.loader = true;

    this.router.params.subscribe( params => {
      
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);

    });

  }

  getArtista( id: string ) {
    this.spotify.getArtista( id )
        .subscribe( (artista) => {
          console.log(artista);
          this.artista = artista;
          this.loader = false;

        });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        })
  }

  

}
