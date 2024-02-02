import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppdataService } from '../../service/appdata.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent implements OnInit {
  id = '';
  landmark: any;
  view: any;
  //Object Injection
  constructor(
    private activeatedRoute: ActivatedRoute,
    private appData: AppdataService
  ) {}

  ngOnInit() {
    this.id = this.activeatedRoute.snapshot.paramMap.get('id') || '';
    this.landmark = this.appData.getArray();
    for (const i of this.landmark) {
      if (this.id == i.idx.toString()) {
        this.view = i;
        return;
      }
    }
  }
}
