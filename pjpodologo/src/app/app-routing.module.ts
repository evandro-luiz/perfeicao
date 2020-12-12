import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
