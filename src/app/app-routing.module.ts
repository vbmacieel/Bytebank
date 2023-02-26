import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { TransferenciasComponent } from "./transferencias/transferencias.component";
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";

export const routes: Routes = [
    {path: '', redirectTo: 'transferencias', pathMatch: 'full'},
    {path: 'transferencias', component: TransferenciasComponent},
    {path: 'nova-transferencia', component: NovaTransferenciaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}