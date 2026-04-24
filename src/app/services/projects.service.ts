import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private projectsPath = '/assets/data/projects.json';
  private apiUrl;

  constructor(private http: HttpClient){
    this.apiUrl = "http://localhost:4200" + this.projectsPath;
  }

  getProjects(){
    console.log("Executing HTTP request");
    return this.http.get<Project[]>(this.apiUrl);
  }

  ngOnInit(){
    this.getProjects();
  }
}
