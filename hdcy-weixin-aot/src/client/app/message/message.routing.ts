import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MessageListComponent} from "./message-list.component";
import {MessageDetailComponent} from "./message-detail.component";

const messageRoutes: Routes = [
    {path: 'message', component: MessageListComponent},
    {path: 'message/:id', component: MessageDetailComponent}
];

export const messageRouting: ModuleWithProviders = RouterModule.forChild(messageRoutes);
