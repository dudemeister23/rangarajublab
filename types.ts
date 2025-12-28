export interface Project {
  id: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string; // Optional custom image URL
}

export interface Publication {
  id: string;
  year: number;
  citation: string;
  link?: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}