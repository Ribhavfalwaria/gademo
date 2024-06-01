import { Injectable } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Injectable({
  providedIn: 'root'
})
export class GaService {

  constructor(private $gaService: GoogleAnalyticsService) { }

}
