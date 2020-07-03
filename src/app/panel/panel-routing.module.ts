import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelPage } from './panel.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/workspaces',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PanelPage,
    children: [
      {
        path: 'workspaces',
        loadChildren: () => import('./workspaces/workspaces.module').then(m => m.WorkspacesPageModule)
      },
      {
        path: 'channels',
        loadChildren: () => import('./channels/channels.module').then(m => m.ChannelsPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'files',
        loadChildren: () => import('./files/files.module').then(m => m.FilesPageModule)
      },
      {
        path: 'organization',
        loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/app/workspaces',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelPageRoutingModule { }
