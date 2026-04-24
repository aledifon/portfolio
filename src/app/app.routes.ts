import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "projects", component: ProjectsComponent},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent}    
    // {path: "**", component: Page404Component}           // Default route in case of typing 
                                                        // an invalid route
];
