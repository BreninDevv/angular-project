import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Alimento {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

@Injectable({ providedIn: 'root' })
export class NutricaoService {
  private readonly API_URL = 'https://angular-project-djy8.onrender.com/nutrition';

  constructor(private http: HttpClient) {}

  buscarAlimento(nome: string): Observable<Alimento[]> {
    return this.http.get<Alimento[]>(`${this.API_URL}?query=${nome}`);
  }
}
