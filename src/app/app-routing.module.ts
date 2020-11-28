import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('../modules/search-gif/search-gif.module').then(m => m.SearchGifModule)
  },
  {
    path: 'trend',
    loadChildren: () => import('../modules/tranding-gif/tranding-gif.module').then(m => m.TrandingGifModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
