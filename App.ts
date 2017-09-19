
//Para acceder a las otras clases y sus propiedades y métodos debo importarlas
import Batman from './Batman'
import {Superheroe} from './Superheroe'

class Startup {
    public static main() {
        console.log('Comenzando...');
        let b1 = new Batman();
        

        b1.volar();
        
        b1.daniar(10);

        //ERROR!!!!! ===>> CLASE ABSTRACTA!!
        let s1 = new Superheroe();
        
        // console.log('Terminando...');

        return;
    }
}

Startup.main();


