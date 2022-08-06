import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/model/skill';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre="";
  descripcion=""

  constructor(
    private skillService: SkillsService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Skill(this.nombre)
    this.skillService.save(skill).subscribe(
      data => {
        this.toastr.success('experiencia Creada con exito',"OK", {timeOut: 3000,positionClass:'toast-top-center'});
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error("error al crear la experiencia","Fail", {timeOut: 3000, positionClass:'toast-top-center'});//err.error.mensaje
        this.router.navigate(['/'])
      }
    )

  }
}
