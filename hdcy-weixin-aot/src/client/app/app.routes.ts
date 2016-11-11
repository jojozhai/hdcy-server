import {Routes} from '@angular/router';

import {HomeRoutes} from './home/index';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/video',
        pathMatch: 'full'
    },
    ...HomeRoutes,
];
