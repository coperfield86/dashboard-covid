import { Component, OnInit } from '@angular/core';
import {NumberInfo} from "../../../numbers/models/number-info";
import {ChucknorrisApiService} from "../../services/chucknorris-api.service";
import {ChuckNorrisInfo} from "../../models/chuck-norris-info";

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent implements OnInit {

  chuckNorrisInfo: ChuckNorrisInfo;

  constructor(private chuckNorrisApiService: ChucknorrisApiService) { }

  ngOnInit(): void {
    this.chuckNorrisApiService.getInfo().subscribe((chuckNorrisInfo: ChuckNorrisInfo) => {
      this.chuckNorrisInfo = chuckNorrisInfo;
    }, (error) => {
      this.chuckNorrisInfo = null;
    });
  }
}
