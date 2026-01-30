import { Component, OnInit } from '@angular/core';
import { Searchmovie } from '../services/searchmovie';

/**
 * On a besoin d'importer ReactiveFormsModule pour lier le formulaire html au FormGroup placé dessus
 */
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './searchform.html',
  styleUrl: './searchform.css',
})


export class Searchform implements OnInit  {

  /**
   * On instancie les valeurs
   *
   * FormControl va permettre de connecter les valeurs html et ts
   */
  searchForm : FormGroup = new FormGroup({});
  titleControl: FormControl = new FormControl({});
  yearControl: FormControl = new FormControl({});

  /** On instancie tout ce que l'on pourrais avoir besoin */
  constructor(private formBuilder: FormBuilder,
    private searchMovie: Searchmovie) {}

  /**
   * utilisation des Regex pour le contrôle
   * ^ commence par
   * $ termine par
   * + un ou plusieurs
   * * séro ou pliseurs
   * () groupe de caractère
   * [] caractère seul
   * \s espace
   * \d chiffre entre 0-9
   */
  titlePattern = '^[a-zA-Z\d]+[a-zA-Z\s,.\d]*';
  yearPattern = '^(19|20)\d{2}$';

  /**
   * On intialise
   */
  ngOnInit() {

    /** Valide le formulaire ou non et donc bloque la rquête si nécessaire */
    this.titleControl = this.formBuilder.control('', [Validators.required, Validators.maxLength(30), Validators.pattern(this.titlePattern)])
    this.yearControl = this.formBuilder.control('2018', [Validators.min(1900), Validators.max(2025), Validators.pattern(this.yearPattern)])
    this.searchForm = this.formBuilder.group({
      title: this.titleControl,
      year: this.yearControl
    })
  }

  startSearch(): void {
    let action = (data: Object) => {
      console.log(data); // fonction qui deviendra un callback
    }

    // A ce moment précis action deviens un callback
    // On Souaite récupérer la saisi utilisateur

    this.searchMovie.search(action, this.searchForm.value.title, this.searchForm.value.year);
  }
}
