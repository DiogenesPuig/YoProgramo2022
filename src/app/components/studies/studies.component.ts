import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Studies } from 'src/app/model/studies';
import { StudiesService } from 'src/app/service/studies.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  studies: Studies[] = []
  roles: string[];
  isLogged = false;

  constructor(
    private studiesService: StudiesService,
    private toastr: ToastrService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.loadStudies()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadStudies(): void {
    this.studiesService.list().subscribe(
      data => {
        this.studies = data;
      }
    )
  }

  deleteStudy(id: any) {
    this.studiesService.delete(id).subscribe(
      data => {
        this.toastr.success('Experiencia eliminada con exito', "OK", { timeOut: 3000, positionClass: 'toast-top-center' });
        this.loadStudies();
      },
      err => {
        this.toastr.error(err.error.message, "Fail", { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }
}
