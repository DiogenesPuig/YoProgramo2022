import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  nombre = "";
  descripcion = ""

  constructor(
    private experienceService: ExperienceService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // rehace rel backend con dto en todos los servicios
  onCreate(): void {
    const experience = new Experience(this.nombre, this.descripcion)
    this.experienceService.save(experience).subscribe(
      data => {
        this.toastr.success('experiencia Creada con exito', "OK", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.text, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });//err.error.mensaje
        this.router.navigate(['/'])
      }
    )

  }
}
