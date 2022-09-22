import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient  ) {
    console.log('Spotify Service Ready');
   }

   getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA58-63uhA93x2XNBvfVaiNXpxUbk5aq1S4NU1sI0QlJrb8OfUz01JsLDy5KSM606icFWuZ_cjK2nkjnpPKCQDjdT9DyNULNgEGVE7b8sp_Pp1y-Wg'
    });

    return this.http.get(url, {headers});

   }

   getNewReleases(){

    return this.getQuery('browse/new-releases')
                .pipe( map ((data: any) => data['albums'].items)); 

   }

   getArtistas( termino: string ){
    
    return this.getQuery(`search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8%2Cfr%3Bq%3D0.7&offset=0&limit=20`)
                .pipe( map ((data:any) => data['artists'].items));

  }

  getArtista( id: string ){
    
    return this.getQuery(`artists/${id}`);

  }

  getTopTracks( id: string ){
    
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map ((data:any) => data['tracks']));

  }
}