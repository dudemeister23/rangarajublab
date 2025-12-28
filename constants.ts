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

// Image paths - These point to the public/assets folder
export const LAB_LOGO = 'assets/logo.png';
export const MPFI_LOGO = 'assets/mpfi-logo.png';
export const LAB_TEAM_PHOTO = 'assets/lab-team-group.jpg';
export const DR_RANGARAJU_PHOTO = 'assets/dr-vidhya-rangaraju.jpg';
export const HERO_BACKGROUND = 'assets/hero-bg.png';

export const TEAM_REEL = [
  { url: LAB_TEAM_PHOTO },
  { url: 'assets/team-reel/photo2.jpg' },
  { url: 'assets/team-reel/photo3.jpg' },
  { url: 'assets/team-reel/photo4.jpg' },
  { url: 'assets/team-reel/photo5.jpg' },
  { url: 'assets/team-reel/photo6.jpg' },
  { url: 'assets/team-reel/photo7.jpg' },
  { url: 'assets/team-reel/photo8.jpg' },
  { url: 'assets/team-reel/photo9.jpg' },
  { url: 'assets/team-reel/photo10.jpg' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 't1', name: 'Dr. Vidhya Rangaraju', role: 'Group Leader / PI', image: DR_RANGARAJU_PHOTO },
  { id: 't2', name: 'Debalina Acharyya', role: 'Postdoctoral Fellow', image: 'assets/team/debalina-acharyya.jpg' },
  { id: 't3', name: 'Ojasee Bapat', role: 'PhD Student', image: 'assets/team/ojasee-bapat.jpg' },
  { id: 't4', name: 'Ruolin Fan', role: 'Research Associate', image: 'assets/team/ruolin-fan.jpeg' },
  { id: 't5', name: 'Ilika Ghosh', role: 'Postdoctoral Fellow', image: 'assets/team/ilika-ghosh.jpg' },
  { id: 't6', name: 'Juan Patarroyo', role: 'Research Assistant', image: 'assets/team/juan-patarroyo.jpg' },
  { id: 't7', name: 'Monil Shah', role: 'PhD Student', image: 'assets/team/monil-shah.jpeg' },
  { id: 't8', name: 'Nitheyaa Shree Ramesh', role: 'Postdoctoral Fellow', image: 'assets/team/nitheyaa-shree.jpg' },
  { id: 't9', name: 'Nimmy Varghese Thiruthanathil', role: 'Postdoctoral Fellow', image: 'assets/team/nimmy-varghese.jpg' },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    year: 2024,
    title: 'Periodic ER-plasma membrane junctions support long-range Ca2+ signal integration in dendrites',
    citation: 'Benedetti, L., Fan, R., Weigel, A. V., Moore, A. S., Houlihan, P. R., Kittisopikul, M., Park, G., Petruncio, A., Hubbard, P. M., Pang, S., Xu, C. S., Hess, H. F., Saalfeld, S., Rangaraju, V., Clapham, D. E., De Camilli, P., Ryan, T. A., & Lippincott-Schwartz, J. (2024). Periodic ER-plasma membrane junctions support long-range Ca2+ signal integration in dendrites. Cell.',
    link: 'https://doi.org/10.1016/j.cell.2024.11.029',
    coverImage: 'assets/publications/pub1-cover.jpg'
  },
  {
    id: 'pub2',
    year: 2024,
    title: 'Synaptically-targeted long non-coding RNA SLAMR promotes structural plasticity by increasing translation and CaMKII activity',
    citation: 'Espadas, I., Wingfield, J. L., Nakahata, Y., Chanda, K., Grinman, E., Ghosh, I., Bauer, K. E., Raveendra, B., Kiebler, M. A., Yasuda, R., Rangaraju, V., & Puthanveettil, S. (2024). Synaptically-targeted long non-coding RNA SLAMR promotes structural plasticity by increasing translation and CaMKII activity. Nature Communications, 15(1), 1–24.',
    link: 'https://doi.org/10.1038/s41467-024-46972-8',
    coverImage: 'assets/publications/pub2-cover.jpg'
  },
  {
    id: 'pub3',
    year: 2024,
    title: 'NMNAT2 supports vesicular glycolysis via NAD homeostasis to fuel fast axonal transport',
    citation: 'Yang, S., Niou, Z.-X., Enriquez, A., LaMar, J., Huang, J.-Y., Ling, K., Jafar-Nejad, P., Gilley, J., Coleman, M. P., Tennessen, J. M., Rangaraju, V., & Lu, H.-C. (2024). NMNAT2 supports vesicular glycolysis via NAD homeostasis to fuel fast axonal transport. Molecular Neurodegeneration, 19(1), 13.',
    link: 'https://doi.org/10.1186/s13024-023-00690-9',
    coverImage: 'assets/publications/pub3-cover.webp'
  },
  {
    id: 'pub4',
    year: 2024,
    title: 'VAP spatially stabilizes dendritic mitochondria to locally support synaptic plasticity',
    citation: 'Bapat, O., Purimetla, T., Kruessel, S., Shah, M., Fan, R., Thum, C., Rupprecht, F., Langer, J. D., & Rangaraju, V. (2024). VAP spatially stabilizes dendritic mitochondria to locally support synaptic plasticity. Nature Communications, 15: 205',
    link: 'https://doi.org/10.1038/s41467-023-44233-8',
    coverImage: 'assets/publications/pub4-cover.jpg'
  },
  {
    id: 'pub5',
    year: 2021,
    title: 'The Prevalence and Specificity of Local Protein Synthesis during Neuronal Synaptic Plasticity',
    citation: 'Sun, C., Nold, A., Fusco, C.M., Rangaraju, V.*, Tchumatchenko, T., Heilemann, M., Schuman, E.M. (2021). The Prevalence and Specificity of Local Protein Synthesis during Neuronal Synaptic Plasticity. Science Advances 7, eabj0790. *senior author',
    link: 'https://www.science.org/doi/10.1126/sciadv.abj0790',
    coverImage: 'assets/publications/pub5-cover.jpg'
  },
  {
    id: 'pub6',
    year: 2019,
    title: 'Pleiotropic mitochondria: The influence of mitochondria on neuronal development and disease',
    citation: 'Rangaraju, V.,* Lewis, T. L. Jr.,* Hirabayashi, Y.* Bergami, M.,* Motori, E.,* Cartoni, R.,* Kwon, S., Courchet, J. (2019). Pleiotropic mitochondria: The influence of mitochondria on neuronal development and disease. Journal of Neuroscience 39, 8200-8208. *equal contribution',
    link: 'https://www.jneurosci.org/content/39/42/8200',
    coverImage: 'assets/publications/pub6-cover.jpg'
  },
  {
    id: 'pub7',
    year: 2019,
    title: 'A genetically encodable cell-type-specific protein synthesis inhibitor',
    citation: 'Heumüller, M., Glock, C., Rangaraju, V., Biever, A., Schuman, E.M. (2019) A genetically encodable cell-type-specific protein synthesis inhibitor. Nature Methods 16, 699-702.',
    link: 'https://www.nature.com/articles/s41592-019-0468-x',
    coverImage: 'assets/publications/pub7-cover.png'
  },
  {
    id: 'pub8',
    year: 2019,
    title: 'Spatially stable mitochondrial compartments fuel local translation during plasticity',
    citation: 'Rangaraju, V., Lauterbach, M., and Schuman, E.M. (2019). Spatially stable mitochondrial compartments fuel local translation during plasticity. Cell 176, 73-84.e15',
    link: 'https://www.sciencedirect.com/science/article/pii/S0092867418316271?via%3Dihub',
    coverImage: 'assets/publications/pub8-cover.jpg'
  },
  {
    id: 'pub9',
    year: 2017,
    title: 'Local translation in neuronal compartments: how local is local?',
    citation: 'Rangaraju, V.*, tom Dieck, S., and Schuman, E.M. (2017). Local translation in neuronal compartments: how local is local? EMBO reports 18, 693-711. *corresponding author',
    link: 'https://www.embopress.org/doi/full/10.15252/embr.201744045',
    coverImage: 'assets/publications/pub9-cover.webp'
  },
  {
    id: 'pub10',
    year: 2014,
    title: 'Activity-driven local ATP synthesis is required for synaptic function',
    citation: 'Rangaraju, V., Calloway, N., and Ryan, T.A. (2014). Activity-driven local ATP synthesis is required for synaptic function. Cell 156, 825-835.',
    link: 'https://www.sciencedirect.com/science/article/pii/S0092867414000130?via%3Dihub',
    coverImage: 'assets/publications/pub10-cover.jpg'
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