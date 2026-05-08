import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "projects", component: ProjectsComponent},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    
    // 404 fallback
    {path: "**", component: NotFoundComponent}  // Default route in case of typing 
                                                // an invalid route 
];
