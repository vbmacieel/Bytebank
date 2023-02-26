import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/app/service/transferencia.service';
import { Transferencia } from '../model/transferencia.model';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent implements OnInit{
  public transferencias: Transferencia[];

  constructor(private service: TransferenciaService) 
  {
    this.transferencias = [];
  }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias) => 
      this.transferencias = transferencias);
  }
}
