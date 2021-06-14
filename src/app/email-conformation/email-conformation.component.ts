import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email-conformation',
  templateUrl: './email-conformation.component.html',
  styleUrls: ['./email-conformation.component.scss']
})
export class EmailConformationComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
