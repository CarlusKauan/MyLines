import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/Line';
@Component({
  selector: 'app-yellow-lines',
  templateUrl: './yellow-lines.component.html',
  styleUrls: ['./yellow-lines.component.scss']
})
export class YellowLinesComponent implements OnInit {

  lines: Line[] = [
    {
      imagem: 'https://img.r7.com/images/2016/10/05/98kdnz2ono_5l81sum8i2_file?dimensions=460x305',
      nome: 'Faria Lima',
      descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imagem: 'https://mobilidadesampa.com.br/wp-content/uploads/2015/12/luz4.jpg',
      nome: 'Estação Luz',
      descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      imagem: 'https://viatrolebus.com.br/wp-content/uploads/2013/12/estacao-luz-linha-4-amarela-plataforma.jpg',
      nome: 'Butantã',
      descricao: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
