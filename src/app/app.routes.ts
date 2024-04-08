import { Routes } from '@angular/router';

export const routes: Routes = [


    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        children:[
            {
                path:'change-detection',
                title:'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component').then(c => c.ChangeDetectionComponent)
            },
            {
                path:'control-flow',
                title:'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component').then(c => c.ControlFlowComponent)
            },
            {
                path:'defer-option',
                title:'Defer Option',
                loadComponent: () => import('./dashboard/pages/defer-option/defer-option.component').then(c => c.DeferOptionComponent)
            },
            {
                path:'defer-views',
                title:'Defer Views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component').then(c => c.DeferViewsComponent)
            },
            {
                path:'user/:id',
                title:'User',
                loadComponent: () => import('./dashboard/pages/user/user.component').then(c => c.UserComponent)
            },
            {
                path:'user-list',
                title:'User List',
                loadComponent: () => import('./dashboard/pages/users/users.component').then(c => c.UsersComponent)
            },
            {
                path:'view-transition',
                title:'View Trasition',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component').then(c => c.ViewTransitionComponent)
            },
            {
                path:'view-transition-2',
                title:'View Trasition 2',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component').then(c => c.ViewTransition2Component)
            },
            {
                path:'',
                redirectTo:'control-flow',
                pathMatch: 'full'
            }
        ]
    },{
        path:'',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }

];
