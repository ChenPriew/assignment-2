import { Component, OnInit } from '@angular/core';
import jsonData from '../../../assets/landmark.json';
import { AppdataService } from '../../service/appdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  landmarks = jsonData;
  landmark: any;
  country = '';
  landmarkSer: any;

  countries = [
    { value: 'ญี่ปุ่น', label: 'ญี่ปุ่น' },
    { value: 'ประเทศไทย', label: 'ประเทศไทย' },
    { value: 'เนเธอร์แลนด์', label: 'เนเธอร์แลนด์' },
  ];

  constructor(private appData: AppdataService) {}

  ngOnInit(): void {
    this.landmarkSer = this.appData.getArray();
    console.log(this.landmarkSer);
  }

  findOne(id: HTMLInputElement) {
    this.landmark = new Array();
    if (id.value == '' || parseInt(id.value) == 0) {
      this.appData.setArray(this.landmarks);
      this.landmarkSer = this.appData.getArray();
    } else {
      for (let lm of this.landmarks) {
        if (lm.idx.toString() == id.value) {
          this.landmark.push(lm);
        }
      }
      this.appData.setArray(this.landmark);
      this.landmarkSer = this.appData.getArray();
    }
  }
  findName(name: HTMLInputElement) {
    this.landmark = new Array();

    for (let lm of this.landmarks) {
      const lowerCaseLandmarkName = lm.name.toLowerCase();
      const lowerCaseInputValue = String(name.value).toLowerCase();

      if (lowerCaseLandmarkName.includes(lowerCaseInputValue)) {
        this.landmark.push(lm);
      }
    }
    this.appData.setArray(this.landmark);
    console.log(this.appData.landmark);
    this.landmarkSer = this.appData.getArray();
  }

  selectCountry() {
    this.landmark = new Array();

    for (let lm of this.landmarks) {
      if (lm.country == this.country) {
        this.landmark.push(lm);
      }
    }
    this.appData.setArray(this.landmark);
    this.landmarkSer = this.appData.getArray();
  }
}
