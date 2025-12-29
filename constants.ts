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
export const LAB_BUILDING_IMAGE = 'assets/lab-building.jpg';

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
  { id: 't3', name: 'Ojasee Bapat', role: 'PhD Student', image: 'assets/team/ojasee-bapat.jpg', publicationIds: ['pp2', 'pp3', 'pub4'] },
  { id: 't4', name: 'Ruolin Fan', role: 'Research Associate', image: 'assets/team/ruolin-fan.jpeg', publicationIds: ['pp3', 'pp4', 'pp5', 'pub1', 'pub4'] },
  { id: 't5', name: 'Ilika Ghosh', role: 'Postdoctoral Fellow', image: 'assets/team/ilika-ghosh.jpg', publicationIds: ['pp1', 'pp3', 'pub2'] },
  { id: 't6', name: 'Juan Patarroyo', role: 'Research Assistant', image: 'assets/team/juan-patarroyo.jpg' },
  { id: 't7', name: 'Monil Shah', role: 'PhD Student', image: 'assets/team/monil-shah.jpeg', publicationIds: ['pp1', 'pp3', 'pub4'] },
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


export const PREPRINTS: Publication[] = [
  {
    id: 'pp1',
    year: 2025,
    title: 'Mitochondria structurally remodel near synapses to fuel the sustained energy demands of plasticity',
    citation: 'Shah, M., Ghosh, I., Pishos, L., Villani, V., Pancani, T., Yasuda, R., Sun, C., Kamasawa, N., & Rangaraju, V. (2025). bioRxiv.',
    link: 'https://doi.org/10.1101/2025.08.27.672715',
    coverImage: 'assets/preprints/biorxiv-logo.jpg'
  },
  {
    id: 'pp2',
    year: 2025,
    title: 'Activity-Regulated circSamm50 Modulates Mitochondrial Dynamics and Spine Structural Plasticity',
    citation: 'Chanda, K., Bapat, O., Wingfield, J., Avchalumov, Y., Kazantzis, M., Carter, J., Sharma, N., Davis, R. L., Yuan, J. X.-J., Rangaraju, V., & Puthanveettil, S. (2025). SSRN.',
    link: 'https://doi.org/10.2139/ssrn.5396301',
    coverImage: 'assets/preprints/ssrn-logo.png'
  },
  {
    id: 'pp3',
    year: 2025,
    title: 'Synapses drive local mitochondrial ATP synthesis to fuel plasticity',
    citation: 'Ghosh, I., Fan, R., Shah, M., Bapat, O., & Rangaraju, V. (2025). bioRxiv.',
    link: 'https://doi.org/10.1101/2025.04.09.648032',
    coverImage: 'assets/preprints/biorxiv-logo.jpg'
  },
  {
    id: 'pp4',
    year: 2025,
    title: 'An expanded palette of bright and photostable organellar Ca2+ sensors',
    citation: 'Moret, A., Farrants, H., Fan, R., Zingg, K. G., Silva, B., Roselli, C., Oertner, T. G., Gee, C. E., Hadjieconomou, D., Rangaraju, V., Schreiter, E. R., & Juan-Sanz, J. de. (2025). eLife.',
    link: 'https://elifesciences.org/reviewed-preprints/107845/',
    coverImage: 'assets/preprints/elife-logo.png'
  },
  {
    id: 'pp5',
    year: 2024,
    title: 'Mitochondrial Ca2+ efflux controls neuronal metabolism and long-term memory across species',
    citation: 'Vishwanath, A. A., Comyn, T., Chintaluri, C., Ramon-Duaso, C., Fan, R., Sivakumar, R., Lopez-Manzaneda, M., Preat, T., Vogels, T. P., Rangaraju, V., Busquets-Garcia, A., Placais, P.-Y., Pavlowsky, A., & Juan-Sanz, J. de. (2024). bioRxiv.',
    link: 'https://doi.org/10.1101/2024.02.01.578153',
    coverImage: 'assets/preprints/biorxiv-logo.jpg'
  }
];

export const CONTACT_INFO = {
  phone: '(561) 972-9414',
  email: 'Vidhya.Rangaraju@mpfi.org',
  address: 'Max Planck Florida Institute for Neuroscience',
  socials: [
    { icon: 'fa-brands fa-x-twitter', url: 'https://x.com/RangarajuVidhya', label: 'X' },
    { icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/vidhyarangarajuphd/', label: 'LinkedIn' },
    { icon: 'fa-solid fa-graduation-cap', url: 'https://scholar.google.com/citations?user=uudWngwAAAAJ&hl=en', label: 'Google Scholar' },
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
    id: 'n9',
    title: 'MPFI Neuroscientist Shares Insights into Brain Power ‘Neighborhoods’ that May Impact ALS, Alzheimer’s Care',
    date: 'March 20, 2024',
    image: 'assets/news/brain-power-neighborhoods.jpg',
    category: 'Event',
    content: 'A new understanding of memory formation and storage based on how neurons are powered could lead to novel treatments for neurodegenerative diseases like amyotrophic lateral sclerosis (ALS), Parkinson’s disease and Alzheimer’s disease.\n\nNeuroscientist Dr. Vidhya Rangaraju shared exciting discoveries from her laboratory at Max Planck Florida Institute for Neuroscience (MPFI) with nearly 500 attendees at this year’s second Science Meets Music event on February 21, 2024.\n\nIn her talk, Dr. Rangaraju discussed important work conducted in her lab to help understand how the brain’s 86 billion neurons are fueled as they make and store new memories. Neurons are the message delivery cells of the brain that carry information throughout the body. Her Science Meets Music session covered three new and important findings:\n\nMitochondria in the brain are strategically positioned, like distribution warehouses, to deliver energy to brain synapses.\nCalcium alerts the mitochondria to the need to produce energy.\nWhen the protein “glue” VAP is not present, mitochondria can drift away from the synapses they power.\nHow Brain Fuel Helps Form New Memories\n\nInterruptions in the brain’s energy supply can result in neurological disorders that affect memory formation and storage. The Rangaraju Lab set out to understand how these processes are powered at the synapse, which is the junction between two brain cells.\n\nThousands of molecules help brain neurons grow, store information and create new memories. These molecules require fuel, which is created in mitochondria, organelles that function as “energy factories” in the brain.\n\nJust like online retailers position shipping warehouses across the world to provide next-day deliveries, Dr. Rangaraju and her team discovered that mitochondria are positioned in synapse “neighborhoods” throughout the brain for quick delivery of energy.\n\n“When the synapses need energy, they don’t have to wait for the cell body to deliver the energy,” she explained. “The brain has these local warehouses, the mitochondria, located near where energy is needed.”\n\nDr. Rangaraju discovered that calcium alerts mitochondria to the need to produce energy. When triggered, the mitochondria respond by dramatically increasing their size to accommodate production of ATP, which is then distributed to the neuron.\n\nMitochondria are held in place by a protein “glue” called VAP. When VAP isn’t present, mitochondria can move away from the synapses they power, leaving the brain unable to produce new memories and vulnerable to neurodegenerative conditions.\n\n“These fundamental discoveries allow us to look at old problems like ALS from a new angle,” Dr. Rangaraju said. “By better understanding how our bodies work, we can begin to develop new therapies to help.”\n\nThe evening also featured performances from pianist Madison Yan, an alum of Dreyfoos School of Arts and a student at the Frost School of music. Yan has won national and international awards recognizing her musical talents.\n\nAbout Dr. Rangaraju\n\nDr. Rangaraju joined MPFI in early 2020 after completing a fellowship at the Max Planck Institute for Brain Research in Germany. She earned her Ph.D. at Weill Cornell Medicine in New York and has received several awards for her research. In 2023, she was awarded $1.2 million from the Chan Zuckerberg Initiative to explore dysfunctions of brain energy supply.\n\nUp Next: The Science of Smell\n\nScience Meets Music is hosted by MPFI and held three times a year at Benjamin High School in Palm Beach Gardens. The next event is March 27, 2024, and will feature Prof. Dr. Bill Hansson of Max Planck Institute for Chemical Ecology giving a talk titled “Smelling to Survive”.\n\nAccompanying Prof. Dr. Hansson will be the Chamber Music Society of Palm Beach Ensemble. The event is free and open to the public, and registration is required. Register today.\n\nFor media inquiries, contact Katie Edwards at katie.edwards@mpfi.org.\n\nScience Meets Music is generously sponsored by the Honorable David Fischer & Mrs. Jennifer Fischer.'
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
    id: 'n0',
    title: 'Max Planck Florida Announces 2024 Science Meets Music Lineup',
    date: 'January 9, 2024',
    image: 'assets/news/science-meets-music-2024.jpg',
    category: 'Event',
    content: 'Visionary neuroscientists and virtuoso musicians will showcase their talents side by side as Max Planck Florida Institute for Neuroscience (MPFI) continues its popular Science Meets Music series.\n\nThe series of performances and lectures spotlights the shared vales of curiosity and dedication that allow artists and scientists to discover new ideas with discipline and precision. The combination makes for a uniquely fascinating event to inspire and enlighten South Florida audiences.\n\nScience Meets Music is hosted at the Benjamin Upper School, 4875 Grandiflora Circle, Palm Beach Gardens, Fl 33418. There is no charge to attend, and registration is required. Register now.\n\n2024 Schedule of Events\n\nFrom Chemistry to Circuitry: Reimagining the Future of Mental Wellness with New Technology | January 31, 2024\nJoin MPFI’s newest Scientific Director Dr. Lin Tian to explore how breakthrough technology can change the way we think about mental wellness. This session will explore how the Tian Lab uses new tools to understand basic aspects of the brain, creating a future where personalized treatments reduce the impact of mental illness. Musicians from The Palm Beach Symphony will present selections of music to complement the session. This event is generously sponsored by the Honorable David Fischer and Mrs. Jennifer Fischer.\n\nHow Are Memories Powered? | February 21, 2024\nIlluminating the mysteries behind how the brain makes memories, MPFI research group leader Dr. Vidhya Rangaraju will explore how the Rangaraju Lab investigates the energy use and supply of biological processes in neurons. Pianist Madison Yan will perform alongside Dr. Rangaraju’s discussion.\n\nSmelling to Survive | March 27, 2024\nIn this scent-sational session, Professor Dr. Bill S. Hansson, Director and Scientific Member at the Max Planck Institute for Chemical Ecology, will explore fascinating examples of smelling in myriad animals and plants. He will also address how our “smellscape” is affected by human activities during the Anthropocene period and examples of the most recent research on the smell ecology of insects. The Chamber Music Society of Palm Beach Ensemble will perform selections of music to accompany Prof. Dr. Hansson’s evening lecture.\n\nFor media inquiries, contact Katie Edwards, Associate Vice President, Public Engagement, at katie.edwards@mpfi.org.'
  },
  {
    id: 'n7',
    title: 'MPFI Researcher Awarded $1.2 Million from Chan Zuckerberg Initiative',
    date: 'November 8, 2023',
    image: 'assets/news/czi-award-2023.jpg',
    category: 'Award',
    content: 'Dr. Vidhya Rangaraju has been named a recipient of the Chan Zuckerberg Initiative’s “Ben Barres Early Career Acceleration Award,” which will provide her lab with $1.2 million over four years to study dysfunctions of brain energy supply.\n\nDr. Rangaraju is a Research Group Leader at the Max Planck Florida Institute for Neuroscience (MPFI). With this award, her lab will investigate the causes of disrupted energy supply in neurons that lead to motor and cognitive impairments in amyotrophic lateral sclerosis (ALS). Dr. Rangaraju and her research team will use super-resolution microscopy to visualize the energy-producing mitochondria within neurons and determine if ALS-disease-linked mutations disrupt their stabilization. They will combine this approach with their newly developed biosensors to measure neuronal energy levels and investigate the metabolic disruptions that impair learning and memory in ALS.\n\nThe Ben Barres Early Career Acceleration Awards are part of the CZI Neurodegeneration Challenge Network (NCDN), launched in 2018 to bring researchers from diverse disciplines and expertise to create an open collaboration and better understand neurodegenerative diseases.\n\n“We are thrilled to receive the generous support of the Chan Zuckerberg Initiative. This grant allows my lab to expand our research program into risky, new directions of in vivo behavior models and human iPSC neuron models of ALS, allowing us to tackle neuronal cell biology from a new perspective. Understanding what happens in the brain when mitochondrial energy is disrupted has tremendous potential to find common mechanisms across many neurodegenerative diseases, such as ALS, Parkinson’s, and Alzheimer’s,” said Dr. Rangaraju.\n\nThe Rangaraju Lab utilizes state-of-the-art technologies to measure mitochondrial structure and function in health and disease. Many neurodegenerative disorders are characterized by mitochondrial dysfunction; however, the underlying causes of this dysfunction are mostly unknown.'
  },
  {
    id: 'n8',
    title: 'Rangaraju Lab Awarded Grant to Study Mitochondrial Function',
    date: 'August 10, 2021',
    image: 'assets/news/rangaraju-lab-grant-2021.jpg',
    category: 'Award',
    content: 'Max Planck Florida Institute for Neuroscience announces that Dr. Vidhya Rangaraju’s Neuroenergentics Lab has been awarded a grant from the Louis D. Srybnik Foundation, Inc. to study the underlying neuronal chemistry of mitochondrial function. This grant will allow Dr. Ilika Ghosh, a postdoctoral scholar in the Rangaraju Lab, to expand on a new technique the lab developed to visualize a chemical called adenosine triphosphate (ATP) during synaptic plasticity.\n\nThe brain consumes a high amount of energy for cognitive functions such as learning and memory. Glucose is the primary brain fuel broken down by various biochemical pathways to produce the energy currency, ATP. A significant part of this happens in mitochondria in the brain.\n\nHow mitochondrial ATP synthesis is controlled during learning and memory is still not well understood, even though mitochondrial dysfunction is known to play a role in many age-related neurodegenerative diseases such as Alzheimer’s, Huntington’s, and Parkinson’s disease.\n\nThe Rangaraju Lab hopes to reveal the role of ATP in synaptic plasticity by using cutting-edge techniques to visualize and measure ATP in spines and dendrites. Identifying the energy sources and molecular factors that drive plasticity will provide essential insights into ATP regulation in memory formation.\n\nCurrently, in the US alone, over 6.2 million people above the age of 65 have Alzheimer’s disease, and by 2050, this number is estimated to rise to 13 million. Since mitochondrial dysfunction is a known cause of neurodegeneration and dementia, learning about the mechanisms that regulate mitochondrial ATP is critical to understanding memory formation and cognition.\n\n“We are grateful to the Louis D. Srybnik foundation for their support. We hope that our results may lead to the development of future diagnostic and therapeutic strategies for the millions of people who suffer from the impacts of neurodegenerative disease,” said Dr. Ghosh.'
  }
];
