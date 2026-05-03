import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
// import { Project } from '../../models/project.model';
import { ProjectUI } from '../../models/project-ui.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  // $ indicates this is an Observable (RxJS stream, not a final value)
  // ! tells TypeScript not to require immediate initialization (it will be assigned later in the lifecycle)
  // public projects$!: Observable<Project[]>;
  public projects$!: Observable<ProjectUI[]>;

  constructor(private projectsService: ProjectsService){
    console.log("Projects component loaded!");
  }

  ngOnInit(){
    this.searchProjects();  
  }

  searchProjects(){
    this.projects$ = this.projectsService.getProjects();
  }

  toogleProjectExpand(p: ProjectUI):void{
    p.isExpanded = !p.isExpanded;

    p.contributionsVisible = p.isExpanded ? p.contributions :p.contributions.slice(0,2);

    p.impactVisible = p.isExpanded ? p.impact :p.impact.slice(0,2);
  }

  showMessage(): void{
    alert("pressed button");
  }
}
