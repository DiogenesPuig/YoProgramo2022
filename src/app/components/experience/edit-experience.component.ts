import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  experience: Experience = null;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit():void  {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      data => {
        this.experience = data;
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.experience)
    this.experienceService.update(id,this.experience).subscribe(
      data => {
        this.toastr.success('experiencia actualizada', "OK", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      });
  }

}
