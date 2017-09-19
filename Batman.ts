import {Superheroe} from './Superheroe'

//Para que esta clase sea accesible desde otro archivo debo exportarla
export default class Batman extends Superheroe{


    constructor() {
        super();
    }

    volar(){
        console.error('Que tomaste!? YO no vuelo');
    }

    mostrar(){
        return 'I am Batman!';
    }
}