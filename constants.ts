import { Project, TeamMember, Publication, SocialLink, NewsItem } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#bio' },
  { label: 'Research', href: '#research' },
  { label: 'News', href: '#news' },
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
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Dr. Vidhya Rangaraju Speaks at “Music and the Mind”',
    date: 'January 24, 2025',
    image: 'assets/news/music-and-mind.jpg',
    category: 'Event',
    content: 'Max Planck Florida Institute for Neuroscience (MPFI) was honored to participate in the prestigious “Renée Fleming: Music and the Mind” event held at the Kravis Center in West Palm Beach on Monday, January 6. The event was facilitated by the Metropolitan Opera legend Renée Fleming, who shared her work advocating for scientific research that allows us to better understand the powerful link between brain health and the arts.\n\nIncluded in a trio of esteemed panelists was MPFI Research Group Leader Dr. Vidhya Rangaraju, who captivated the audience with an overview of her cutting-edge research. Dr. Rangaraju’s work studies how mitochondria, the “powerplants” of our cells, fuel brain activity and how disruptions of these minuscule powerplants can result in devastating conditions such as Alzheimer’s, Parkinson’s, and Lou Gehrig’s diseases.\n\nAs part of the discussion, Dr. Rangaraju emphasized the importance of researching how musical training and experience contribute to cognitive resilience while offering hope and inspiration for healthy aging.\n\nThe event also featured Dr. Patricia Izbicki, neuroscientist, classical pianist, and forthcoming music therapist, as well as Dr. Orville Lawton, Artistic Director of The Ebony Chorale of The Palm Beaches.\n\n“Renée Fleming: Music and the Mind” underscored the profound impact of artistic endeavors on neurological wellness and showcased how neuroscience continues to illuminate the vital role of music in our lives. MPFI is proud to contribute to this important conversation and remains committed to advancing our understanding of the brain through innovative research.'
  },
  {
    id: 'n2',
    title: 'New Hope for Understanding Neurodegenerative Disorders: MPFI Research Group Leader Awarded Second Grant from the Chan Zuckerberg Initiative',
    date: 'December 2, 2024',
    image: 'assets/news/czi-grant.jpg',
    category: 'Award',
    content: 'The Chan Zuckerberg Initiative (CZI) has awarded a $60,000 grant to Max Planck Florida Institute for Neuroscience (MPFI) Research Group Leader Dr. Vidhya Rangaraju, in collaboration with Dr. Allen Kaasik, Professor of Pharmacology and Molecular Toxicology at the University of Tartu, Estonia. This grant supports their shared mission to develop novel imaging tools for measuring and rescuing synaptic ATP levels in neurodegenerative diseases.\n\nThis funding is part of the CZI Neuroscience program, which is built on the vision that progress in solving neurodegenerative diseases will come from bringing new talent and ideas from diverse disciplines and expertise into the neurodegeneration field, building interdisciplinary collaborations, empowering the broader scientific community with robust tools and platforms, and creating a culture of innovation, collaboration, and open science.\n\n“There are so many questions remaining to be answered about neurodegenerative diseases. That is why we are particularly grateful to receive the support of the Chan Zuckerberg Initiative for the second time. This grant empowers my lab to venture into new directions in neuronal ATP imaging with an interdisciplinary vantage point. By embracing open science and cross-disciplinary collaborations, we are ready to answer questions on how mitochondrial energy supply is disrupted in neurodegenerative disease—a pursuit with great potential for our lab and the wider neuroscience community,” said Rangaraju.\n\nDr. Kaasik expressed excitement for the project, saying, “I am excited to collaborate with Dr. Rangaraju and the team on this innovative project, which brings together cutting-edge imaging techniques and interdisciplinary expertise. With this grant from the Chan Zuckerberg Initiative, we are one step closer to identifying new ways to support neuronal health and prevent the debilitating effects of diseases like Huntington’s and Wolfram syndrome.”\n\nThe Rangaraju Lab was founded at Max Planck Florida Institute for Neuroscience in 2020, with a goal of investigating the energy use and supply of biological processes in neurons.'
  },
  {
    id: 'n3',
    title: 'Dr. Vidhya Rangaraju Wins Prestigious NIH Director’s New Innovator Award for Research on Brain Energy Mechanisms',
    date: 'October 8, 2024',
    image: 'assets/news/nih-innovator.jpg',
    category: 'Award',
    content: 'A Research Group Leader at the Max Planck Florida Institute for Neuroscience (MPFI), has been awarded the prestigious NIH Director’s New Innovator Award for her research on how the brain generates and regulates energy. The award will provide Dr. Rangaraju with $2.895 million over five years.\n\nThis highly competitive award was established in 2007 to recognize outstanding researchers tackling bold and high-impact scientific challenges. Only 10% of researchers who apply for the award are selected. Dr. Rangaraju is the third scientist from MPFI to earn this coveted honor, highlighting the institute’s leadership in cutting-edge neuroscience.\n\n“Dr. Rangaraju’s innovative research is a testament to the groundbreaking work happening at Max Planck Florida and is critical for understanding the many neuronal diseases that are based on energy deficiencies such as neurodegenerative diseases and mitochondrial disorders,” said Dr. David Fitzpatrick, CEO and Scientific Director of MPFI.\n\nUnderstanding How the Brain is Powered\n\nDr. Rangaraju’s research focuses on neuroenergetics, the complex regulation of energy supply and demand in the brain. Her work has broad implications for understanding how neurons sustain energy to support essential functions like learning, memory, and brain development. One key discovery by Dr. Rangaraju’s team is the role of the ALS-linked protein VAP in stabilizing mitochondria within neuronal dendrites, helping neurons locally fuel the synaptic plasticity that underlies learning and memory.\n\n“My lab is dedicated to unraveling the core mechanisms that fuel cognitive function and how they are broken in neurodegenerative diseases like ALS, Alzheimer’s, and Parkinson’s. Being named an NIH Director’s New Innovator is an incredible honor, and I am thrilled that our work on brain energy dynamics is receiving this recognition and support,” said Dr. Rangaraju.'
  },
  {
    id: 'n4',
    title: 'Dr. Vidhya Rangaraju Honored with the SfN Janett Rosenberg Trubatch Career Development Award',
    date: 'September 18, 2024',
    image: 'assets/news/sfn-award.png',
    category: 'Award',
    content: 'Dr. Vidhya Rangaraju, Research Group Leader at the Max Planck Florida Institute for Neuroscience (MPFI), has been awarded the prestigious Janett Rosenberg Trubatch Career Development Award at the 2024 Society for Neuroscience (SfN) Annual Meeting. This award recognizes early-career neuroscientists who have demonstrated exceptional creativity and originality in their research while successfully transitioning toward tenure.\n\nThe award, which includes a $2,000 prize and complimentary registration to the SfN Annual Meeting, supports the professional growth of early-career female neuroscientists who have made significant contributions to the field. Recipients are selected from a global pool of applicants. Dr. Rangaraju’s recognition highlights her innovative work in understanding how energy is regulated within the brain, particularly focusing on mitochondria’s role in synaptic plasticity and cognitive function. Her research has implications for understanding critical brain functions like learning, memory, and development and offers potential insights into neurodegenerative conditions.\n\nDr. Rangaraju was nominated for the Trubatch Award by Dr. Erin Schuman, Scientific Director of the Max Planck Institute for Brain Research in Frankfurt. “Vidhya Rangaraju is one of the brightest, most hard-working and insightful young scientists I know, and her exciting future studies will provide important information on how mitochondrial energy supply fuels and regulates learning, memory and behavior,” Dr. Schuman said.\n\nDr. Rangaraju expressed her gratitude, stating, “It is an honor to receive this award, which recognizes our past and current research on the energy supply mechanisms of essential brain functions. This recognition from the Society for Neuroscience is a validation of our efforts to uncover novel mitochondrial mechanisms that could lead to better treatments for neurodegenerative diseases like ALS, Parkinson’s, and Alzheimer’s.”'
  },
  {
    id: 'n5',
    title: 'Stories of WiN feature Dr. Vidhya Rangaraju',
    date: 'September 3, 2024',
    image: 'assets/news/stories-of-win.png',
    category: 'Podcast',
    audioUrl: 'assets/audio/win-podcast-rangaraju.mp3',
    content: 'Life, as we know it, depends entirely on energy. Every breath, every muscle twitch, and the production of even the tiniest protein rely on our bodies’ remarkable ability to transform organic matter into energy. This delicate balance between metabolic supply and demand is particularly crucial in the brain, which accounts for around 20% of our overall energy consumption. Dr. Vidhya Rangaraju is fascinated by how neurons and synapses meet their extensive and ever-changing energy demands. Now a Research Group Leader at the Max Planck Florida Institute for Neuroscience, Vidhya and her lab seek to unravel the cellular and molecular mechanisms underpinning energy supply in the brain.'
  },
  {
    id: 'n6',
    title: 'Rangaraju Lab research highlighted in The Scientist',
    date: 'March 13, 2024',
    image: 'assets/news/the-scientist.png',
    category: 'Publication',
    externalLink: 'https://www.the-scientist.com/how-mitochondria-stay-still-in-neurons-71720',
    content: 'Read The Scientist article on how the lab discovered that the ALS-linked protein VAP anchors mitochondria near synapses to support memory formation.'
  },
  {
    id: 'n7',
    title: 'MPFI Researcher Awarded $1.2 Million from Chan Zuckerberg Initiative',
    date: 'November 8, 2023',
    image: 'assets/news/czi-award-2023.jpg',
    category: 'Award',
    content: 'Dr. Vidhya Rangaraju has been named a recipient of the Chan Zuckerberg Initiative’s “Ben Barres Early Career Acceleration Award,” which will provide her lab with $1.2 million over four years to study dysfunctions of brain energy supply.\n\nDr. Rangaraju is a Research Group Leader at the Max Planck Florida Institute for Neuroscience (MPFI). With this award, her lab will investigate the causes of disrupted energy supply in neurons that lead to motor and cognitive impairments in amyotrophic lateral sclerosis (ALS). Dr. Rangaraju and her research team will use super-resolution microscopy to visualize the energy-producing mitochondria within neurons and determine if ALS-disease-linked mutations disrupt their stabilization. They will combine this approach with their newly developed biosensors to measure neuronal energy levels and investigate the metabolic disruptions that impair learning and memory in ALS.\n\nThe Ben Barres Early Career Acceleration Awards are part of the CZI Neurodegeneration Challenge Network (NCDN), launched in 2018 to bring researchers from diverse disciplines and expertise to create an open collaboration and better understand neurodegenerative diseases.\n\n“We are thrilled to receive the generous support of the Chan Zuckerberg Initiative. This grant allows my lab to expand our research program into risky, new directions of in vivo behavior models and human iPSC neuron models of ALS, allowing us to tackle neuronal cell biology from a new perspective. Understanding what happens in the brain when mitochondrial energy is disrupted has tremendous potential to find common mechanisms across many neurodegenerative diseases, such as ALS, Parkinson’s, and Alzheimer’s,” said Dr. Rangaraju.\n\nThe Rangaraju Lab utilizes state-of-the-art technologies to measure mitochondrial structure and function in health and disease. Many neurodegenerative disorders are characterized by mitochondrial dysfunction; however, the underlying causes of this dysfunction are mostly unknown.'
  }
];
