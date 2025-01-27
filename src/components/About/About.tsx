function About() {
  const list = [
    {
      nom: "Cyril",
      presentation:
        "Enchanté, ici l'un des créateurs d'Anime Central Hub, je m'appelle Cyril, mais j'utilise le pseudo Xano sur Internet. Passionné depuis toujours par l'animation japonaise et travaillant en informatique, ce site était donc l'occasion idéale de combiner mes compétences à ma passion. Vous pouvez me contacter personnellement sur mon Twitter @EliteXano en cas de problème ou de question.",
    },
    {
      nom: "Baptiste",
      presentation:
        "Bonjour et bienvenue sur Anime Central Hub,je suis Baptiste alias Soren . Fan d'animé depuis quelques années ce projet me permet de parler d'un sujet que j'adore tout en apprenant à developper. PS : Allez voir Jujutsu Kaisen c'est vraiment trop bien.",
    },
    {
      nom: "Estelle",
      presentation:
        "Bienvenue sur notre site de critiques d'animés ! Je m'appelle Estelle et fait partie des créateurs de la plateforme. Amatrice d'animés en tout genre, ce projet de dévelopement est une opportunité parfaite pour m'exercer au niveau professionnel mais aussi apprendre et discuter de ce sujet passionnant.",
    },
  ];
  return (
    <>
      <h1>A Propos</h1>
      <hr />

      <h2>Les créateurs</h2>
      {list.map((list) => (
        <>
          <h3>{list.nom}</h3>
          <p>{list.presentation}</p>
        </>
      ))}
    </>
  );
}

export default About;
