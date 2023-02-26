import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from 'src/app/service/transferencia.service';
import { Transferencia } from '../model/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{
  public title: string = "Nova Transferência";
  public valor!: number;
  public destino!: string;

  constructor(private service: TransferenciaService,
    private router: Router){}

  public adicionarTransferencia()
  {
    const transferencia: Transferencia = {valor: this.valor, destino: this.destino}
    this.service.addicionar(transferencia).subscribe({
      next: (novaTransferencia) => {
        console.log(novaTransferencia);
        this.router.navigateByUrl('transferencias');
      },
      error(err) {
          console.error(err);
      },
    });
  }
}
