import { Animal } from "../Interfaces/animal";

export abstract class Mammifere implements Animal{

    _nom: string;
    _poids: number;
    _dateNaissance: Date;

    constructor(nom: string,dateNaissance: Date, poids: number) {
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = dateNaissance;
    }

    /**
     * 
     * Affiche les details de l'animal (nom, date de naissance, poid)
     * 
     */
    display(): void {

        let dateToFrench = '0'+this.dateNaissance.getDate() + '/0' + ((this.dateNaissance.getMonth())) + '/' + this.dateNaissance.getFullYear()

        console.log(`
            Nom: ${this.nom},
            Date de naissance: ${dateToFrench},
            Poid : ${this.poids} kg
        `)
        
    }

    get dateNaissance(): Date {
        return this._dateNaissance;
    }

    set dateNaissance(value: Date) {
        this._dateNaissance = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get poids(): number {
        return this._poids;
    }

    set poids(value: number) {
        this._poids = value;
    }

}