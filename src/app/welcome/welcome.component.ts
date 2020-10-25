import { Component, OnInit, ElementRef, Inject} from '@angular/core';
import { BackendService } from '../backend.service';
import { OverallReport } from '../model/overall-report';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public items : OverallReport;
  public hideloader: boolean;
  constructor(public backendService: BackendService) { }

  ngOnInit(): void {
   this.getOverallReport();
   this.hideloader = true;
  }

getOverallReport(): void{
 this.backendService.findAll().then(
    item => {
    this.items = item;
    this.hideloader = false;
    },
    err => {
    console.log(err);
    });
  }

}
