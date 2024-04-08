import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  //.MAP = BUSCAR/RECORRER
  //.FLAT = APLASTA EL ARREGLO O SEA JUNTA LOS ARREGLOS QUE ESTAN DENTRO DE ARREGLOS
  //.FILTER = FILTRA (ROUTE) POR UNA CONDICION (ROUTE && ROUTE.PATH) QUE LA RUTA EXISTA Y TENGA PATH
  public menuItems = routes
  .map(
    route => route.children ?? [] )
    .flat()
    .filter (route => route && route.path)
    .filter (route => !route.path?.includes(':')); //SI LA RUTA .PATH INCLUYE ':' SE ELIMINA

    


}
