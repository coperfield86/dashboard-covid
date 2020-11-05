import {CovidDataResponse} from "./covid-data-response";

export class CovidResponse {
  error: boolean;
  statusCode: number;
  message: string;
  data: CovidDataResponse;
}
