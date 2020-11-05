import {CovidInfo} from "./covid-info";

export class CovidDataResponse {
  lastChecked: Date
  covid19Stats: CovidInfo[]
}
