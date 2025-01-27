function Form() {
  return (
    <>
      <h1>Donnez votre avis </h1>
      <hr />
      <form>
        <label id="nickname">Pseudo</label>
        <input type="text" id="nickname" placeholder="Pseudo"></input>
        <label id="feedback">Commentaire</label>
        <input type="textarea" placeholder="Un avis ? Une remarque ?"></input>
        <input type="submit" value="Envoyer"></input>
      </form>
    </>
  );
}

export default Form;
