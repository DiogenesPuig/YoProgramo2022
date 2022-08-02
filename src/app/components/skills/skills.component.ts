import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = []
  
  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
  }

  loadSkils():void{
    this.skillsService.list().subscribe(
      data=> {
        this.skills = data;
      }
    )
  }

  deleteSkill(id: any){
    alert('borrar el ' + id)
  }

}
