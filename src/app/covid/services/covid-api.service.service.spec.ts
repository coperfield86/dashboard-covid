import { TestBed } from '@angular/core/testing';
import {CovidApiService} from "./covid-api.service";


describe('CovidApi.ServiceService', () => {
  let service: CovidApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
