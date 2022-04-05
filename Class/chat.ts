import { Terrestre } from "../Interfaces/terrestre";
import { Mammifere } from "./mammifere";

export class Chat extends Mammifere implements Terrestre {
    
    /**
     * 
     * Permet d'afficher la phrase Miaou !!
     * 
     */
    miauler(): void {
        console.log('Miaou !!');
    }

     /**
     * 
     * Permet d'afficher la phrase je respire hors de l'eau !!
     * 
     */
    respirerHorsDeLeau(): void {
        console.log('Je respire hors de l\'eau, sous l\'eau je meurs !!');
    }

    /**
     * 
     * Permet d'afficher la phrase je marche seul !!
     * 
     */
    marcher(): void {
        console.log('Je marche seul !!');
    }

}