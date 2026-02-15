export interface Experience {
  company: string;
  location: string;
  totalDuration: string;
  roles: Role[];
  highlights: string[];
  stack: string[];
}

export interface Role {
  title: string;
  period: string;
  current?: boolean;
}
