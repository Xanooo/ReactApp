interface FooterProps {
  discordPath: string;
  githubPath: string;
}

function Footer({ discordPath, githubPath }: FooterProps) {
  return (
    <footer>
      <h1>Nous contacter</h1>
      <img src={discordPath} />
      <img src={githubPath} />
    </footer>
  );
}

export default Footer;
