import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Searchmovie {

  constructor(private http: HttpClient) { }

  search(action: any, title: string, year: number = 0): void {

    // variable intermédiaire
    let result = {};

    // Variable qui rendra dynamique le choix de l'année, si renseigné donne l'année sinon rien
    let y = year? `&year=${year}` : '';

    /**
     * Attention pour ne pas avoir d'erreur avec cette APi il faut une clé exemple apikey=b267f2ad
     * Remplacer &y=${year} par ${y} pour prendre en compte l'année saisi ou non
     */
    this.http.get(`http://www.omdbapi.com/?apikey=b267f2ad&t=${title}${y}&plot=full`)
      .subscribe(res => {
        action(res);
      })
  }
}
