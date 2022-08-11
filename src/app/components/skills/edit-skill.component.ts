import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/model/skill';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(
    private skillService: SkillsService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.skill)
    this.skillService.update(id,this.skill).subscribe(
      data => {
        this.toastr.success('habilidad actualizada', "OK", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });//err.error.mensaje
        this.router.navigate(['/'])
      });
  }

}
