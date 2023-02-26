import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from '../model/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: Transferencia[];
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient)
  {
    this.listaTransferencia = [];
  }

  get transferencias()
  {
    return this.listaTransferencia;
  }

  public todas(): Observable<Transferencia[]>
  {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  public addicionar(transferencia: Transferencia): Observable<Transferencia>
  {
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }
}