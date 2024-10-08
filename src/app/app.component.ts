import { Component } from '@angular/core';
import { Empleado } from './empleado.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[] = [
    new Empleado ("Juan","Ayala","Presidente",7500),
    new Empleado ("Ana","Ayala","Directora",7500),
    new Empleado ("María","Ayala","Jefa sección",7500),
    new Empleado ("Laura","Ayala","Administrativo",7500),
  ];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}
