import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/Line';
@Component({
  selector: 'app-green-lines',
  templateUrl: './green-lines.component.html',
  styleUrls: ['./green-lines.component.scss'],
})
export class GreenLinesComponent implements OnInit {
  lines: Line[] = [
    {
      imagem:
        'https://www.metro.sp.gov.br/sua-viagem/images/linhas/linha-15-prata/vila-uniao/estacao.jpg',
      nome: 'Vila União',
      descricao: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    },
    {
      imagem:
        'https://mobilidadesampa.com.br/wp-content/uploads/2016/10/20150227_105841.jpg',
      nome: 'Vila Prudente',
      descricao: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    },
    {
      imagem:
        'https://vejasp.abril.com.br/wp-content/uploads/2018/12/metro-sp-transporte-publico.jpg',
      nome: 'Madalena',
      descricao: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
