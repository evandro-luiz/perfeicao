import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logincliente',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'logincliente',
    loadChildren: () => import('./logincliente/logincliente.module').then( m => m.LoginclientePageModule)
  },
  {
    path: 'homecliente',
    loadChildren: () => import('./homecliente/homecliente.module').then( m => m.HomeclientePageModule)
  },
  {
    path: 'cadcliente',
    loadChildren: () => import('./cadcliente/cadcliente.module').then( m => m.CadclientePageModule)
  },
  {
    path: 'perfilcliente',
    loadChildren: () => import('./perfilcliente/perfilcliente.module').then( m => m.PerfilclientePageModule)
  },
  {
    path: 'esqsenha',
    loadChildren: () => import('./esqsenha/esqsenha.module').then( m => m.EsqsenhaPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
