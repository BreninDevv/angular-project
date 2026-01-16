import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NutricaoService, Alimento } from '../../services/nutricao.js';

@Component({
  selector: 'app-nutritional-info',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './nutritional-info.html',
  styleUrl: './nutritional-info.css',
})
export class NutritionalInfo {
  name = input<string>('');
  alimentoEncontrado: Alimento | null = null;
  textoBusca: string = '';

  constructor(private nutricaoService: NutricaoService) {}

  fazerBusca() {
    if (!this.textoBusca.trim()) return;

    this.nutricaoService.buscarAlimento(this.textoBusca).subscribe({
      next: (data: any[]) => {
        if (data && data.length > 0) {
          this.alimentoEncontrado = data[0];
        } else {
          this.alimentoEncontrado = null;
          alert('Alimento não encontrado na base do USDA.');
        }
      },
      error: (err) => {
        console.error('Erro ao buscar dados:', err);
        this.alimentoEncontrado = null;
      },
    });
  }
}
