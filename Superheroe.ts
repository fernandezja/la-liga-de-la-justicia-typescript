
import {IMostreable} from './Interfaces/IMostreable'

export abstract class Superheroe
    implements IMostreable{
        
    private poder:number = 100;

    private getPoder(){
        return this.poder;
    }

    private setPoder(value:number){
        this.poder = value;
    }

    daniar(danio:number){
        this.setPoder(this.getPoder()-danio);
    }

    volar(){
        console.log('Volandoooo....');
    }

    abstract mostrar():string

}