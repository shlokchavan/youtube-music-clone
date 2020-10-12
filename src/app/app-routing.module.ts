import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NoAuthGuard } from '@app/guard/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/player',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('@modules/home/home.module').then(m => m.HomeModule)
      // },
      {
        path: 'player',
        loadChildren: () =>
          import('@modules/main-player/main-player.module').then(
            m => m.MainPlayerModule
          )
      },
      {
        path: 'explore',
        loadChildren: () =>
          import('@modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'library',
        loadChildren: () =>
          import('@modules/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
