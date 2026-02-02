import { Component, OnInit } from '@angular/core';
import { Searchmovie } from '../services/searchmovie';

/**
 * On a besoin d'importer ReactiveFormsModule pour lier le formulaire html au FormGroup placé dessus
 */
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormValidators } from '../form-validators';

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

    /** Valide le formulaire ou non */
    this.titleControl = this.formBuilder.control('', [Validators.required, Validators.maxLength(30), Validators.pattern(this.titlePattern)]);
    this.yearControl = this.formBuilder.control('2018', [Validators.pattern(this.yearPattern), FormValidators.integerBetween(1900, 2024)]);
    this.searchForm = this.formBuilder.group({
      title: this.titleControl,
      year: this.yearControl
    });
  }

  startSearch(): void {

    // On vient informer si champ sont valid
    /**
     * Plus propre que ceci
     *
     * let titleVerif = this.titleControl.valid ? this.titleControl.value : null;
     * let yearVerif = this.yearControl.valid ? this.yearControl.value : null;
     *
     *
     */
    let titleVerif = this.titleControl.valid ? this.titleControl.value : null;
    let yearVerif = this.yearControl.valid ? this.yearControl.value : null;

    /*if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
      return;
    }*/

    let action = (data: Object) => {
      console.log(data); // fonction qui deviendra un callback
    }

    // A ce moment précis action deviens un callback
    // On Souaite récupérer la saisi utilisateur

    if(titleVerif)

    this.searchMovie.search(action, titleVerif, yearVerif);
  }
}
