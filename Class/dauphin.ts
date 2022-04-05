import { Aquatique } from "../Interfaces/aquatique";
import { Mammifere } from "./mammifere";

export class Dauphin extends Mammifere implements Aquatique{

    /**
     * 
     * Permet d'afficher la phrase je respire sous l'eau
     * 
     */
    respirerSousEau(): void {
        console.log('Je respire sous l\'eau bloubloublou !!');
    }

    /**
     * 
     * Permet d'afficher la phrase je nage seul
     * 
     */
    nager() : void {
        console.log('Je nage seul !!');
    }

    /**
     * 
     * Permet d'afficher la phrase je cliquette
     * 
     */
    cliquetter() : void {
        console.log('Je cliquette !!');
    }

    /**
     * 
     * Permet d'afficher la phrase je retien ma respiration
     * 
     */
    retenirRespiration() : void {
        console.log('Je retien ma respiration très longtemps !!');
    }

}