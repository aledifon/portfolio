import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectUI } from '../models/project-ui.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  // Path to local JSON file (acts as a fake backend in this case)
  private projectsPath = 'assets/data/projects.json';  

  constructor(private http: HttpClient){}

  /**
   * Fetch projects from JSON and transform them into UI-ready models.
   * 
   * We convert Project (backend/data model) into ProjectUI (frontend model)
   * by adding UI-specific state like "isExpanded".
   */
  getProjects(): Observable<ProjectUI[]> {
    // console.log("Executing HTTP request");

    // return this.http.get<Project[]>(this.projectsPath);    

    return this.http.get<Project[]>(this.projectsPath).pipe(

       /**
       * RxJS map operator:
       * transforms the emitted HTTP response (Project[])
       * into a new array of ProjectUI
       */
      map((projects: Project[]) => 

         /**
         * Array map:
         * converts each Project into a ProjectUI
         */
        projects.map(p => this.toProjectUI(p))
      )
    );
  }

  /**
   * Converts a pure data model (Project)
   * into a UI model (ProjectUI)
   * by adding frontend-only state.
   */
  private toProjectUI(p: Project): ProjectUI {
    return{
      ...p,                                              // copy all backend fields
      isExpanded: false,                                 // default UI state
      showLinks: false,
      contributionsVisible: p.contributions.slice(0,2),  // visible UI data
      impactVisible: p.impact.slice(0,2)
    };
  }
}
