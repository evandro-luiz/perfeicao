import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginpodologo',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'loginpodologo',
    loadChildren: () => import('./loginpodologo/loginpodologo.module').then( m => m.LoginpodologoPageModule)
  },
  {
    path: 'homepodologo',
    loadChildren: () => import('./homepodologo/homepodologo.module').then( m => m.HomepodologoPageModule)
  },
  {
    path: 'cadpodologo',
    loadChildren: () => import('./cadpodologo/cadpodologo.module').then( m => m.CadpodologoPageModule)
  },
  {
    path: 'perfilpodologo',
    loadChildren: () => import('./perfilpodologo/perfilpodologo.module').then( m => m.PerfilpodologoPageModule)
  },
  {
    path: 'esqsenha',
    loadChildren: () => import('./esqsenha/esqsenha.module').then( m => m.EsqsenhaPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./sair/sair.module').then( m => m.SairPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
