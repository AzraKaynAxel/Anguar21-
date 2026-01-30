import { Component, OnInit } from '@angular/core';

/**
 * On a besoin d'importer ReactiveFormsModule pour lier le formulaire html au FormGroup placé dessus
 */
import {FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

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
  searchForm : FormGroup = new FormGroup({
  });

  constructor(private formBuilder: FormBuilder) {}

  /**
   * On intialise
   */
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      title: [''],
      year: [2018]
    })
  }

  startSearch(): void {
    this.searchForm.value.title;
    this.searchForm.value.year;

    console.log("Recherche lancé")
  }
}
