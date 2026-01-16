import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Background } from '../../components/background/background';
import { Card } from '../../components/card/card';
import { ImcCalculator } from '../../features/imc-calculator/imc-calculator';
import { NutritionalInfo } from '../../features/nutritional-info/nutritional-info';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Background, Card, ImcCalculator, NutritionalInfo],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
