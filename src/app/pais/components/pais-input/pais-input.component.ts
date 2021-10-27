import { Component, EventEmitter, Output, OnInit  } from '@angular/core';
import { Subject } from 'rxjs/';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  //emitimos el termino y el termino es de tipo string por eso el emitter es de toipo string
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  //aqui emitimos el onenter que usaremos en por pais component 

  //para crear un debounse igual ecreamos un emiter
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

//aQUI INICIALIZAMOS UN DEBOUNCER CON UN SUBJETCT QUE ESTA DENTRO DE LOS RXJS
  //ES DE TIPO STRING E INICIALIZAMOS UNO NUEVO
  debouncer: Subject<string> = new Subject();

  termino:string = '';

  

  ngOnInit() { //se dispara solo una vez cuando el componente se inicializa
    //AQUI INICIALIZAMOS EL DEBOUNCER
    this.debouncer
       .pipe(debounceTime(300)) //USAMOS UN PIPE PARA RETRASAR QUE APAREZCA POR 300 MILISEGUNDOS
       .subscribe(valor => { //NOS SUBSCRIBIMOS  U EMITIMOS EL VALOR QUE ES EL TERMINO
         this.onDebounce.emit(valor);
         console.log('debouncer', valor);
      
    })
  }



  buscar() {

    //a la funcuion que emitimos le pasamos el termino de busqueda y lo demas se configura en el por pais components
    //en el apartado de app-
    this.onEnter.emit(this.termino);


  }

  teclaPresionada(){

    //AQUI USAMOS EL DEBOUNCER CON SU OPERADOR NEXT QUE A LA VEZ SIGUEL EL DEBOUNCER QUE ESTA EN NGONINIT Y HACE TODA ESA LOGICA
    this.debouncer.next(this.termino);

   //Y YA SOLO PASAMOS EL EMITER AL PADRE
    

  }
}
