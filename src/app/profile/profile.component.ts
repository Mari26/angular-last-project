import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ProfileService } from '../shared/profile.service';
import { IProfileForm } from './shared/profile.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile: IProfileForm = {
    email: '',
    fullName: '',
    userName: '',
    uid: '',
    bio: '',
    id: '',
  };
  data: string | undefined;
  Users = [{
      "id": 5440,
      "name": "Wanda Lynch",
      "email": "wanda.lynch@example.com"
    },
    {
      "id": 6228,
      "name": "Katrina Graves",
      "email": "katrina.graves@example.com"
    },
    {
      "id": 1654,
      "name": "Louis Daniels",
      "email": "louis.daniels@example.com"
    },
    {
      "id": 1631,
      "name": "Gavin Sullivan",
      "email": "gavin.sullivan@example.com"
    }
  ]
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().then((user) => {
      if (user) {
        this.profileService.getProfileData(user.uid).subscribe((data) => {
          if (data[0]) {
            this.profile = { ...data[0] };
          }
        });
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.profileService.updateProfile(this.profile);
    }
  }
  
  
}
