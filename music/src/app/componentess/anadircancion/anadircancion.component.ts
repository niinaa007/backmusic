import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MostrarcancionesanadidasService } from 'src/app/servicios/mostrarcancionesanadidas.service';

@Component({
  selector: 'app-anadircancion',
  templateUrl: './anadircancion.component.html',
  styleUrls: ['./anadircancion.component.css']
})
export class AnadircancionComponent implements OnInit {

  @Input() cancion;
  @Output() cancionNueva = new EventEmitter();

  listaCancionesAnadidas = [];
  constructor(private mostrarcancionesanadidasService: MostrarcancionesanadidasService ) { }

  ngOnInit(): void {
  }

  anadirCancion(){
    this.cancionNueva.emit(this.cancionNueva);
  }

}
