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
  publicationIds?: string[]; // IDs of associated publications/preprints
  email?: string; // Contact email
}

export interface Publication {
  id: string;
  year: number;
  title: string;
  citation: string;
  link?: string;
  coverImage?: string; // Image of the publication/magazine cover
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
  category?: string;
  audioUrl?: string;
  externalLink?: string;
}