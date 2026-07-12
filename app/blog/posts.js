export const posts = [
  {
    slug: '12-ans-growth-marketing',
    title: 'Ce que 12 ans en growth marketing m\'ont appris sur la croissance durable',
    excerpt: 'Douze ans dans le growth marketing, ça laisse le temps de voir passer beaucoup de modes. Voici les principes qui, eux, n\'ont pas bougé.',
    date: '2026-07-12',
    readingTime: '6 min',
    tags: ['Growth Marketing', 'Stratégie', 'Expérience'],
    content: [
      { type: 'p', text: 'Douze ans dans le growth marketing, ça laisse le temps de voir passer beaucoup de modes. Des frameworks qui promettent la croissance en 30 jours, des « hacks » qui marchent une fois puis plus jamais, des tableaux de bord remplis de métriques qui impressionnent en réunion mais qui ne disent rien de la santé réelle d\'un produit. Avec le recul, ce ne sont pas ces recettes qui ont fait la différence. C\'est une poignée de principes, souvent à contre-courant de ce qu\'on lit sur LinkedIn.' },

      { type: 'h2', text: 'La croissance rapide et la croissance durable ne se construisent pas de la même façon' },
      { type: 'p', text: 'Le growth hacking a popularisé l\'idée qu\'on pouvait faire exploser une courbe d\'acquisition avec la bonne astuce au bon moment. C\'est vrai, parfois. Mais une courbe qui explose sans fondation derrière — sans rétention, sans produit qui tient ses promesses, sans process capable d\'absorber le volume — redescend aussi vite qu\'elle est montée.' },
      { type: 'p', text: 'La vraie question n\'est jamais « comment je fais x10 ce mois-ci », mais « qu\'est-ce qui, dans six mois, fera que les utilisateurs que j\'ai acquis aujourd\'hui sont toujours là ». C\'est moins spectaculaire, ça se vend moins bien en conférence, mais c\'est ce qui distingue une entreprise qui grandit d\'une entreprise qui gonfle.' },

      { type: 'h2', text: 'Les meilleures décisions marketing ne viennent pas du marketing seul' },
      { type: 'p', text: 'C\'est sans doute la leçon la plus contre-intuitive de ces douze années : les meilleures stratégies de croissance naissent rarement dans une réunion marketing. Elles naissent au croisement du produit, de la technique et du terrain. Un onboarding mal pensé côté produit tue plus d\'acquisition qu\'une mauvaise campagne. Un temps de chargement trop long coûte plus cher qu\'un budget pub mal alloué.' },
      { type: 'p', text: 'Comprendre la technique — même sans coder soi-même au quotidien — change profondément la façon de faire du marketing. Ça permet de poser les bonnes questions aux équipes produit, de prioriser les vrais leviers plutôt que les optimisations cosmétiques, et d\'arrêter de traiter le marketing comme un silo qu\'on active après coup.' },

      { type: 'h2', text: 'Les données racontent une histoire, mais rarement celle qu\'on veut entendre' },
      { type: 'p', text: 'Un tableau de bord bien construit est un outil précieux. Mal utilisé, c\'est un piège à confirmation : on finit par ne regarder que les métriques qui vont dans le sens de ce qu\'on a déjà décidé de faire. Douze ans de tests, d\'hypothèses invalidées et de campagnes qui ne se sont pas comportées comme prévu m\'ont appris à me méfier de mes propres intuitions autant que des chiffres.' },
      { type: 'p', text: 'La discipline la plus utile qu\'on puisse développer en growth, ce n\'est pas de savoir lire un dashboard — c\'est d\'accepter qu\'un chiffre qui dérange a souvent plus à apprendre qu\'un chiffre qui rassure.' },

      { type: 'h2', text: 'Enseigner oblige à se remettre en question' },
      { type: 'p', text: 'Le fait d\'enseigner le marketing digital à l\'université, en parallèle du terrain, a changé ma manière de pratiquer ce métier. Face à des étudiants qui posent des questions simples — « mais pourquoi on fait ça ? », « et si ça ne marche pas ? » — on est obligé de reformuler ce qu\'on fait au quotidien sans le jargon, et souvent, cette reformulation révèle des raccourcis qu\'on avait pris sans s\'en rendre compte.' },
      { type: 'p', text: 'Transmettre un savoir-faire, c\'est aussi le meilleur moyen de vérifier qu\'on le maîtrise vraiment, et pas seulement qu\'on sait l\'appliquer par habitude.' },

      { type: 'h2', text: 'Ce qui reste vrai, année après année' },
      { type: 'p', text: 'Les canaux changent, les algorithmes changent, les outils changent — et vont continuer à changer, plus vite encore avec l\'arrivée de l\'IA dans les pratiques marketing. Mais certains principes n\'ont pas bougé en douze ans : comprendre profondément l\'utilisateur avant d\'optimiser quoi que ce soit, aligner marketing et produit plutôt que les opposer, et préférer une croissance plus lente mais qui tient, à une croissance rapide qui s\'effondre au premier changement de contexte.' },
      { type: 'p', text: 'C\'est, au fond, ce qui définit pour moi le growth marketing bien fait : moins une collection de tactiques qu\'une discipline qui refuse les raccourcis.' },
    ],
  },
]

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}
