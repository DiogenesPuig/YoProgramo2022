import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profile: Profile = null;

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.profileService.detail(id).subscribe(
      data => {
        this.profile = data;
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });//err.error.mensaje
        this.router.navigate(['/'])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.profile)
    this.profileService.update(id,this.profile).subscribe(
      data => {
        this.toastr.success('perfil actualizado', "OK", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });//err.error.mensaje
        this.router.navigate(['/'])
      });
  }

}
