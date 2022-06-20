function generadorDominio() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var paginaweb = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        paginaweb += pronoun[i] + adj[a] + noun[b] + ".com" + " ";
      }
    }
  }
  return paginaweb;
}
console.log(generadorDominio());
