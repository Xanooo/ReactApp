function Connect() {
  return (
    <>
      <h1>Se connecter </h1>
      <hr />
      <form>
        <label id="email">Email</label>
        <input type="text" id="email" placeholder="Votre email"></input>
        <label id="feedback">Mot de passe</label>
        <input type="textarea" placeholder="Votre mot de passe"></input>
        <input type="submit" value="Se connecter"></input>
      </form>
      <p>Ce formulaire est seulement esthétique, il ne fonctionne pas :).</p>
    </>
  );
}

export default Connect;
