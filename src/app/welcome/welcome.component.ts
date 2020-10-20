import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { OverallReport } from '../model/overall-report';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public items : OverallReport;
  constructor(public backendService: BackendService) { }

  ngOnInit(): void {
   this.getOverallReport();
  }

getOverallReport(){
 this.backendService.findAll().then(
    item => {
    this.items = item;
    },
    err => {
    console.log(err);
    });
  }
}
