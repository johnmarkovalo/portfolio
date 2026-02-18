export interface ExperienceProject {
  name: string;
  description: string;
  url?: string;
  tags: string[];
}

export interface Experience {
  company: string;
  location: string;
  totalDuration: string;
  roles: Role[];
  highlights: string[];
  stack: string[];
  projects?: ExperienceProject[];
}

export interface Role {
  title: string;
  period: string;
  current?: boolean;
}
