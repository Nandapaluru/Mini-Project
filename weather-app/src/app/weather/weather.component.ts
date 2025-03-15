import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf support
import { WeatherService } from '../weather.service';  // Import the WeatherService

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  imports: [FormsModule, CommonModule]  // Ensure FormsModule is imported here
})
export class WeatherComponent {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(
        (data) => {
          this.weatherData = data;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'City not found. Please try again.';
          this.weatherData = null;
        }
      );
    } else {
      this.errorMessage = 'Please enter a city name.';
      this.weatherData = null;
    }
  }
}
