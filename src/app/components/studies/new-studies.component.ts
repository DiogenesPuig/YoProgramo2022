import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Studies } from 'src/app/model/studies';
import { StudiesService } from 'src/app/service/studies.service';

@Component({
  selector: 'app-new-studies',
  templateUrl: './new-studies.component.html',
  styleUrls: ['./new-studies.component.css']
})
export class NewStudiesComponent implements OnInit {
  nombre = "";
  descripcion = ""
  inicio = new Date()
  fin = new Date()

  constructor(
    private studiesService: StudiesService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const study = new Studies(this.nombre, this.descripcion, this.inicio, this.fin)
    this.studiesService.save(study).subscribe(
      data => {
        this.toastr.success('experiencia Creada con exito', "OK", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error("error al crear la experiencia", "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });//err.error.mensaje
        this.router.navigate(['/'])
      }
    );}


  }
