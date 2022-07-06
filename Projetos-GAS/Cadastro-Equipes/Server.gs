// Função de criação do template HTML
function doGet() {
  return HtmlService.createTemplateFromFile("PaginaHome").evaluate();
}

// Função de incluir outros aquivos ao nosso template
function incluir(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}