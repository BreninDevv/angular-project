import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc-calculator',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './imc-calculator.html',
  styleUrl: './imc-calculator.css',
})
export class ImcCalculator {
  name = input<string>('');
  peso = signal<number | null>(null);
  altura = signal<number | null>(null);

  resultado = signal<number>(0);

  calcularImc() {
    const p = this.peso();
    const a = this.altura();

    if (p && a) {
      const h = a / 100;
      const imc = p / (h * h);

      this.resultado.set(Number(imc.toFixed(2)));
    }
  }
}
