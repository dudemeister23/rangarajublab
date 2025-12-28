import { Project, TeamMember, Publication, SocialLink } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#bio' },
  { label: 'Research', href: '#research' },
  { label: 'Team', href: '#team' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Spatial Stabilization Mechanisms',
    description: 'Using APEX-based proximity labeling and advanced imaging to quantify mitochondria-actin interactions. We discovered a distinct role for the ALS-linked protein VAP in stabilizing mitochondria within dendrites for long durations of plasticity, fueling learning and memory.'
  },
  {
    id: 'p2',
    title: 'Local Mitochondrial ATP Production',
    description: 'We developed novel spine- and mitochondrial-ATP reporters to image ATP within single spines. We dissect molecular mechanisms driving mitochondrial ATP synthesis in response to plasticity and identify novel temporal regulators of ATP synthesis.'
  },
  {
    id: 'p3',
    title: 'Ultrastructural Remodeling',
    description: 'Using a correlative light and electron microscopy (CLEM) pipeline combining functional imaging with Cryo-ET and DNA-PAINT to characterize mitochondrial ultrastructure and ribosome recruitment during neuronal plasticity.'
  },
  {
    id: 'p4',
    title: 'Mitochondrial Biogenesis',
    description: 'Investigating how neuronal compartments manage local mitochondrial biogenesis. We employ ribosome profiling, RNA sequencing, and metabolic labeling to identify locally translated mitochondrial transcripts.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 't1', name: 'Dr. Vidhya Rangaraju', role: 'Group Leader / PI' },
  { id: 't2', name: 'Debalina Acharyya', role: 'Postdoctoral Fellow' },
  { id: 't3', name: 'Ojasee Bapat', role: 'PhD Student' },
  { id: 't4', name: 'Ruolin Fan', role: 'Research Associate' },
  { id: 't5', name: 'Ilika Ghosh', role: 'Postdoctoral Fellow' },
  { id: 't6', name: 'Juan Patarroyo', role: 'Research Assistant' },
  { id: 't7', name: 'Monil Shah', role: 'PhD Student' },
  { id: 't8', name: 'Nitheyaa Shree Ramesh', role: 'Postdoctoral Fellow' },
  { id: 't9', name: 'Nimmy Varghese Thiruthanathil', role: 'Postdoctoral Fellow' },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    year: 2025,
    citation: 'Shah, M., Ghosh, I., Pishos, L., ... & Rangaraju, V. Mitochondria structurally remodel near synapses to fuel the sustained energy demands of plasticity. bioRxiv.',
    link: '#'
  },
  {
    id: 'pub2',
    year: 2025,
    citation: 'Chanda, K., ... Rangaraju, V. & Puthanveettil, S. Activity-Regulated circSamm50 Modulates Mitochondrial Dynamics and Spine Structural Plasticity. Social Science Research Network.',
    link: '#'
  },
  {
    id: 'pub3',
    year: 2025,
    citation: 'Ghosh, I., Fan, R., Shah, M., Bapat, O., & Rangaraju, V. Synapses drive local mitochondrial ATP synthesis to fuel plasticity. bioRxiv.',
    link: '#'
  },
  {
    id: 'pub4',
    year: 2024,
    citation: 'Bapat, O., Purimetla, T., ... & Rangaraju, V. VAP spatially stabilizes dendritic mitochondria to locally support synaptic plasticity. Nature Communications, 15: 205.',
    link: '#'
  },
  {
    id: 'pub5',
    year: 2024,
    citation: 'Benedetti, L., ... Rangaraju, V., ... & Lippincott-Schwartz, J. Periodic ER-plasma membrane junctions support long-range Ca2+ signal integration in dendrites. Cell.',
    link: '#'
  },
  {
    id: 'pub6',
    year: 2021,
    citation: 'Sun, C., Nold, A., Fusco, C.M., Rangaraju, V.*, Tchumatchenko, T., Heilemann, M., Schuman, E.M. The Prevalence and Specificity of Local Protein Synthesis during Neuronal Synaptic Plasticity. Science Advances 7.',
    link: '#'
  },
  {
    id: 'pub7',
    year: 2019,
    citation: 'Rangaraju, V.*, Lewis, T. L. Jr.*, ... Pleiotropic mitochondria: The influence of mitochondria on neuronal development and disease. Journal of Neuroscience 39.',
    link: '#'
  },
  {
    id: 'pub8',
    year: 2019,
    citation: 'Rangaraju, V., Lauterbach, M., and Schuman, E.M. Spatially stable mitochondrial compartments fuel local translation during plasticity. Cell 176.',
    link: '#'
  },
  {
    id: 'pub9',
    year: 2017,
    citation: 'Rangaraju, V.*, tom Dieck, S., and Schuman, E.M. Local translation in neuronal compartments: how local is local? EMBO reports 18.',
    link: '#'
  },
  {
    id: 'pub10',
    year: 2014,
    citation: 'Rangaraju, V., Calloway, N., and Ryan, T.A. Activity-driven local ATP synthesis is required for synaptic function. Cell 156.',
    link: '#'
  }
];

export const CONTACT_INFO = {
  phone: '(561) 972-9414',
  email: 'Vidhya.Rangaraju@mpfi.org',
  address: 'Max Planck Florida Institute for Neuroscience',
  socials: [
    { icon: 'fa-brands fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fa-brands fa-linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'fa-solid fa-graduation-cap', url: '#', label: 'Google Scholar' },
  ] as SocialLink[]
};