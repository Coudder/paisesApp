import { Component  } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises:Country[] = [];

  constructor( private paisService: PaisService) { }

 
  buscar(termino: string){ //se manda el termino de busqueda
   // console.log(this.termino);
    this.hayError=false; //ponemos el error en falso
    this.termino = termino; //al termino local se le asigna el termino que manda 

    this.paisService.buscarPais(this.termino).subscribe( //nos subscribimos al servicio le pasamos el trermino de busqueda
      (paises) => {
        console.log(paises); //mostramos la respuesta

        this.paises = paises;
        
        
      },
      (err)=> {
        console.log('Error'); //y manejamos los errores
        console.info(err);
        this.hayError = true;
        this.paises = []
      }
      );
  }

  sugerencias(termino:string){
        this.hayError = false
        //TODO: crear sugerencias
  }



}
