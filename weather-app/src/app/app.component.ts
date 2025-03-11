import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';  // Provide HttpClient
import { importProvidersFrom } from '@angular/core';  // ✅ Import importProvidersFrom
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule
import { WeatherComponent } from './weather/weather.component';  // Import WeatherComponent

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this as a standalone component
  template: `<app-weather></app-weather>`,  // Use WeatherComponent in the template
  imports: [WeatherComponent]  // Import WeatherComponent
})
export class AppComponent {}


