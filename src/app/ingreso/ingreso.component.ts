import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  @Input() ingreso:Ingreso;
  
  constructor(private ingresoService:IngresoService) { }

  ngOnInit(): void {
  }

  eliminarRegistro(ingreso: Ingreso) {
      this.ingresoService.eliminar(ingreso);
  }
}
