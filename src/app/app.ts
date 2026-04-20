import { Component, signal } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, AboutComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
