import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Background } from './components/background/background';
import { Card } from './components/card/card';
import { ImcCalculator } from './features/imc-calculator/imc-calculator';
import { NutritionalInfo } from './features/nutritional-info/nutritional-info';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Header, Background, Card, ImcCalculator, NutritionalInfo, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
