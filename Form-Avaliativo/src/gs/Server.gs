function doGet(e) {
  let html = HtmlService.createTemplateFromFile('PaginaInicialHtml').evaluate();
  html.addMetaTag('viewport', 'width=device-width, user-scale=no');
  return html;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}