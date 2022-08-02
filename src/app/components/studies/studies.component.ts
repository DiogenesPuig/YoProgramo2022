import { Component, OnInit } from '@angular/core';
import { Studies } from 'src/app/model/studies';
import { StudiesService } from 'src/app/service/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  studies: Studies[] = []

  constructor(private studiesService: StudiesService) { }

  ngOnInit(): void {
    this.loadStudies()
  }

  loadStudies():void{
    this.studiesService.list().subscribe(
      data => {
        this.studies = data;
      }
    )
  }
}
