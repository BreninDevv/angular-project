import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nutritional-info',
  imports: [],
  standalone: true,
  templateUrl: './nutritional-info.html',
  styleUrl: './nutritional-info.css',
})
export class NutritionalInfo {
  name = input<string>('');
}
