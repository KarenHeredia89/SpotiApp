import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient  ) {
    console.log('Spotify Service Ready');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA8t3ICheQM2tWCTg-uQA_k_AKoLEbGE4dGc3ooXT93HQwZp8xD4lPVO3iLpb6Q7g1YWHHp5UHQ7vyjZ_AhIvW-mtkO3Rp_ioPDrYoaNiKNWqOqmks'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
     
   }
}
