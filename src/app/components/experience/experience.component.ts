import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = []

  constructor(private experienceService: ExperienceService ) { }

  ngOnInit(): void {
    this.loadExperiences();
  }

  loadExperiences():void{
    this.experienceService.list().subscribe(
      data => {
        this.experiences = data;
      },
      err => {
        console.log(err)
      }
    );
  }

  deleteExperience(id: any){
    alert('borrar el ' + id)
  }
  
}
