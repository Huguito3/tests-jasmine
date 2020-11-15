import { MedicoService } from './medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  medicos: any[] = [];
  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre: string): string {
    return `Saludos ${nombre}`;
  }

  obtenerMedicos() {
    this.medicoService.getMedicos().subscribe(
      (medicos: any[]) => { this.medicos = medicos; }
    )
  }

}
