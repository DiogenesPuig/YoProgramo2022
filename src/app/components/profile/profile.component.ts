import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/service/profile.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile[] = []
  isLogged = false;

  constructor(private profileService: ProfileService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loadProfile();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadProfile(): void {
    this.profileService.getProfiles().subscribe(
      data => {
        this.profile = data;
      }
    )
  }

}
