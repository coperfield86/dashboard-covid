import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {CovidApiService} from "../../services/covid-api.service";
import {CovidInfo} from "../../models/covid-info";
import {Country} from "../../models/country";
import {CovidResponse} from "../../models/covid-response";
import {Color, Label} from "ng2-charts";
import {ChartDataSets, ChartType} from "chart.js";

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnChanges {

  countriesCovidData: CovidInfo[] = [];

  citiesDataSets: ChartDataSets[] = [];
  citieslabels: Label[] = [];

  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  barChartColors: Color[] = [
    {
      backgroundColor: 'rgba(214, 38, 20, 0.6)',
      borderColor: 'rgba(214, 38, 20, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(214, 38, 20, 1)'
    },
    {
      backgroundColor: 'rgba(41, 45, 54 ,0.6)',
      borderColor: 'rgba(41, 45, 54, 1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(41, 45, 54,0.8)'
    },
    {
      backgroundColor: 'rgba(87, 166, 62, 0.6)',
      borderColor: 'rgba(87, 166, 62, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(87, 166, 62, 1)'
    },
  ];

  public barChartType: ChartType = 'bar';

  @Input() country: Country;

  constructor(private covidApiService: CovidApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.country) {
      this.covidApiService.getInfo(this.country.name).subscribe((response: CovidResponse) => {
        if (response && response.data && response.message.includes("OK")) {
          this.countriesCovidData = response.data.covid19Stats;
          this.drawCovidDataChart();
        } else {
          this.countriesCovidData = [];
          this.drawCovidDataChart();
        }
      }, (error) => {
        // this.numberInfo = null;
      });
    }
  }

  drawCovidDataChart() {
    const confirmed = [];
    const deaths = [];
    const recovered = [];

    this.citieslabels = [];
    this.countriesCovidData.forEach((city, index) => {
      this.citieslabels.push(city.province || city.country);
      confirmed.push(city.confirmed);
      deaths.push(city.deaths);
      recovered.push(city.recovered);
    });

    this.citiesDataSets = [
      {data: confirmed, label: 'Casos Confirmados'},
      {data: deaths, label: 'Muertes'},
      {data: recovered, label: 'Recuperados'},
    ];
  }

}
