import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Studies } from 'src/app/model/studies';
import { StudiesService } from 'src/app/service/studies.service';

@Component({
  selector: 'app-edit-studies',
  templateUrl: './edit-studies.component.html',
  styleUrls: ['./edit-studies.component.css']
})
export class EditStudiesComponent implements OnInit {

  study: Studies = null;
  
  constructor(
    private studiesService: StudiesService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.studiesService.detail(id).subscribe(
      data => {
        this.study = data;
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });//err.error.mensaje
        this.router.navigate(['/'])
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.study)
    this.studiesService.update(id,this.study).subscribe(
      data => {
        this.toastr.success('experiencia actualizada', "OK", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });//err.error.mensaje
        //this.router.navigate(['/'])
      });
  }
}
