import { AbstractControl, ValidatorFn } from '@angular/forms';


/**
 * pour l'instant le FormValidators ne bloque pas le bouton de recherche il se content simplement de faire les control
 * Film quand même trouver car API très permisive
 */
export class FormValidators {
  static integerBetween(min: number, max: number) : ValidatorFn {
    return (c : AbstractControl) => {
      console.log(c.value);
      if (!Number.isInteger(c.value)) {
        console.log("Je suis passé dans le if");
        return {
          integer: {
            valid: false
          }
        };
      } else if ((c.value < min) || (c.value > max)) {
        console.log("Je suis passé dans le else");
        return {
          limit: {
            valid: false
          }
        };
      }
      console.log(c.value + " Je ne suis passé dans aucun des deux");
      return null;
    }
  }
}
