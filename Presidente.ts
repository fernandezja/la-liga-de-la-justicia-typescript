
import {IMostreable} from './Interfaces/IMostreable'
/// <reference path="Interfaces/IMostreable.ts" />

class Presidente 
    implements IMostreable{

        mostrar():string{
            return 'Soy el PRESI!';
        }
}