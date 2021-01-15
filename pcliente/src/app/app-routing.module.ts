import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['logincliente']);
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
    loadChildren: () => import('./homecliente/homecliente.module').then( m => m.HomeclientePageModule),

    canActivate : [AngularFireAuthGuard], 

    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'cadcliente',
    loadChildren: () => import('./cadcliente/cadcliente.module').then( m => m.CadclientePageModule)
  },
  {
    path: 'perfilcliente',
    loadChildren: () => import('./perfilcliente/perfilcliente.module').then( m => m.PerfilclientePageModule),

    canActivate : [AngularFireAuthGuard], 

    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'esqsenha',
    loadChildren: () => import('./esqsenha/esqsenha.module').then( m => m.EsqsenhaPageModule)
  },
  {
    path: 'consulta/:id',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule),

    canActivate : [AngularFireAuthGuard], 

    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'sair',
    loadChildren: () => import('./sair/sair.module').then( m => m.SairPageModule),

    canActivate : [AngularFireAuthGuard], 

    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'vconsulta',
    loadChildren: () => import('./vconsulta/vconsulta.module').then( m => m.VconsultaPageModule),

    canActivate : [AngularFireAuthGuard], 

    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'detconsulta/:id',
    loadChildren: () => import('./detconsulta/detconsulta.module').then( m => m.DetconsultaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
