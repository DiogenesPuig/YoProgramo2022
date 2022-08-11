import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = []
  roles: string[];
  isLogged = false;

  constructor(
    private experienceService: ExperienceService,
    private toastr: ToastrService,
    private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.loadExperiences();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isLogged = true;
      }
    });
  }

  loadExperiences():void{
    this.experienceService.list().subscribe(
      data => {
        this.experiences = data;
      },
      err => {
        this.toastr.error(err.error.message,"Fail", {timeOut: 3000, positionClass:'toast-top-center'});
      }
    );
  }

  deleteExperience(id: any){
    this.experienceService.delete(id).subscribe(
      data => {
        this.toastr.success('Experiencia eliminada con exito',"OK", {timeOut: 3000,positionClass:'toast-top-center'});
        this.loadExperiences();
      },
      err => {
        this.toastr.error(err.error.message,"Fail", {timeOut: 3000, positionClass:'toast-top-center'});
      }
    );
  }
  
}
