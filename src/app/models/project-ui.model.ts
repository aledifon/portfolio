import { Project } from "./project.model";

// Create an alias or extended type which extends the Project type whith an extra field
export type ProjectUI = Project & {
    isExpanded: boolean;
    contributionsVisible: string[];
    impactVisible: string[];
  };