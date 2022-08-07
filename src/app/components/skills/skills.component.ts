import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/model/skill';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = []
  
  constructor(
    private skillsService: SkillsService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.loadSkils();
  }

  loadSkils():void{
    this.skillsService.list().subscribe(
      data=> {
        this.skills = data;
      },err => {
        console.log(err)
      }
    )
  }

  deleteSkill(id: any){
    this.skillsService.delete(id).subscribe(
      data => {
        this.toastr.success('Experiencia eliminada con exito',"OK", {timeOut: 3000,positionClass:'toast-top-center'});
        this.loadSkils();
      },
      err => {
        this.toastr.error("error al crear la experiencia","Fail", {timeOut: 3000, positionClass:'toast-top-center'});
      }
    );
  }

}
