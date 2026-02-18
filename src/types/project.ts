export interface Project {
  number: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  accentColor: string;
  tags: string[];
  highlights: string[];
  stack: string[];
  image?: string;
}
