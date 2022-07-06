let app = SpreadsheetApp;
let urlSpreadsheet = app.openByUrl("https://docs.google.com/spreadsheets/d/1ONp1GUD65aoQy6sBYTAHWNYaIRehRezPRRCzEuuTyiU/edit#gid=0");

function addSheet(dados) {
  let dadosTratados = JSON.parse(dados);

  let sheet = urlSpreadsheet.getSheetByName("Cadastro");
  Logger.log(dadosTratados);

  sheet.appendRow([dadosTratados.dadosNome, dadosTratados.dadosSigla, dadosTratados.dadosApelido, dadosTratados.dadosCidade]);
}
