interface StackItem {
  name: string;
  icon?: string;
  invert?: boolean;
}

type LinkType = 'github' | 'paper' | 'demo' | 'doc' | 'video';

export interface Project{
    id: string;
    title: string;
    year: string;
    role: string;
    stack: StackItem[];
    description: string;
    contributions: string[];
    impact: string[];
    image?: string;
    links?: 
      {
        label: string;
        url: string;
        type?: LinkType;
    }[];
}