import { Component, OnInit } from '@angular/core';
import {NumbersApiService} from "../../services/numbers-api.service";
import {NumberInfo} from "../../models/number-info";

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  numberInfo: NumberInfo;

  constructor(private numbersService: NumbersApiService) { }

  ngOnInit(): void {
    this.numbersService.getNumberInfo().subscribe((numberInfo: NumberInfo) => {
      this.numberInfo = numberInfo;
    }, (error) => {
      this.numberInfo = null;
    });
  }

}
