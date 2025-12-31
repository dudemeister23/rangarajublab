export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string; // Optional custom image URL
  publicationIds?: string[]; // IDs of associated publications/preprints
  awardIds?: string[]; // IDs of associated awards and honors
  email?: string; // Contact email
  joinedYear?: string; // Year joined the lab
}

export interface Award {
  id: string;
  title: string;
  recipient: string;
  date: string;
  endDate?: string; // For awards with a duration (e.g., fellowships)
  type: 'award' | 'honor';
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

export interface AlumniMember {
  id: string;
  name: string;
  labRole?: string;
  details?: string; // e.g., "PhD at MPFI"
  image?: string;
  objectPosition?: string;
  scale?: number;
  link?: string;
}

export interface AlumniGroup {
  category: string;
  members: AlumniMember[];
}

export interface MediaItem {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail?: string;
}