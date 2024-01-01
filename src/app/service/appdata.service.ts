import { Injectable } from '@angular/core';
import jsonData from '../../assets/landmark.json';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {
  public landmark: any[] = [];

  getArray(): any[] {
    return this.landmark;
  }

  setArray(landmark: any[]): void {
    this.landmark = landmark;
  }
  constructor() {
    this.landmark = jsonData;
  }
}
