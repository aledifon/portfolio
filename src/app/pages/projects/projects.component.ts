import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  public projects$!: Observable<Project[]>;

  constructor(private projectsService: ProjectsService){
    console.log("Projects component loaded!");
  }

  ngOnInit(){
    this.searchProjects();  
  }

  searchProjects(){
    this.projects$ = this.projectsService.getProjects();
  }
}
