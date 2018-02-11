import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdvisories } from './advisories';
import { AdvisoriesService } from './advisories.service';

@Component({
  selector: 'pm-advisories',
  templateUrl: './advisories.component.html',
  styleUrls: ['./advisories.component.css']
})
export class AdvisoriesComponent implements OnInit {
  pageTitle: string = 'Advisories Detail';
  errorMessage: string;
  advisories: IAdvisories[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _advisoriesService: AdvisoriesService
  ) {}

  ngOnInit(): void {
    this._advisoriesService
      .getAdvisories()
      .subscribe(
        advisories => (this.advisories = advisories),
        error => (this.errorMessage = <any>error)
      );
  }

  onBack(): void {
    this._router.navigate(['/advisories']);
  }
}
