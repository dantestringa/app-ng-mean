import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Consulta } from "../../models/consulta";
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //Creamos una variable de tipo formulario
  public consultaForm: FormGroup;

  constructor(
    private consultaService: ConsultaService,
    private fb: FormBuilder,
    private router: Router
  ) {
      this.consultaForm = this.fb.group({
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        whatsapp: ['', Validators.required],
        ingreso: ['', Validators.required],
        salida: ['', Validators.required],
        mensaje: ['', Validators.required],
      })
    }

  //Funcion para enviar datos
  realizarConsulta(){
    const Consulta: Consulta = {
      nombre: this.consultaForm.get('nombre')?.value,
      email: this.consultaForm.get('email')?.value,
      whatsapp: this.consultaForm.get('whatsapp')?.value,
      ingreso: this.consultaForm.get('ingreso')?.value,
      salida: this.consultaForm.get('salida')?.value,
      mensaje: this.consultaForm.get('mensaje')?.value
    }
    this.consultaService.guardarConsulta(Consulta).subscribe({
      error: (e) => console.log(e)
    })

    this.consultaForm.reset()

    /*setTimeout(() => {
      this.router.navigate(['home'])
      
    }, 2000);*/
  }


  ngOnInit(): void {
  }



}
