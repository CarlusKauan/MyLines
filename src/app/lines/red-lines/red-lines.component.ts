import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/Line';

@Component({
  selector: 'app-red-lines',
  templateUrl: './red-lines.component.html',
  styleUrls: ['./red-lines.component.scss'],
})
export class RedLinesComponent implements OnInit {
  lines: Line[] = [
    {
      imagem:
        'https://i0.wp.com/diariodotransporte.com.br/wp-content/uploads/2019/05/48663-1.jpg?fit=1890%2C1299&ssl=1',
      nome: 'Corinthians - Itaquera',
      descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      imagem:
        'http://www.metro.sp.gov.br/sua-viagem/images/linhas/linha-3-vermelha/tatuape/estacao-tatuape.jpg',
      nome: 'Tatuapé',
      descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      imagem:
        'https://i0.wp.com/diariodotransporte.com.br/wp-content/uploads/2020/05/Bras_sabado.jpg?fit=1280%2C720&ssl=1',
      nome: 'Brás',
      descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
