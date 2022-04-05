import {Chat} from "./Class/Chat";
import {Dauphin} from "./Class/Dauphin";



let date = new Date();


const monChat: Chat = new Chat('Jesus', date, 3);
const monDauphin : Dauphin = new Dauphin('Flipper', date, 10);

monChat.miauler();
monChat.marcher();
monChat.respirerHorsDeLeau();
monChat.display();

monDauphin.cliquetter();
monDauphin.nager();
monDauphin.respirerSousEau();
monDauphin.retenirRespiration();
monDauphin.display();