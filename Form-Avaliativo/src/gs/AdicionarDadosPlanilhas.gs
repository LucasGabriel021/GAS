// Variáveis Globais
let app = SpreadsheetApp;
let urlPlanilha = "https://docs.google.com/spreadsheets/d/1eH_by8dCdYddbdK2JbaXss0cfOwOKbXA3hj0eoSb4k/edit#gid=0";
let planilha = app.openByUrl(urlPlanilha); 

// Função de inserir e mandar e-mails
function inserir(dados) {

// Inserir dados na tabela
  let avaliacaoPlanilha = planilha.getSheetByName("Avaliações");

  let dadosTratados = JSON.parse(dados);
  Logger.log(dadosTratados);

  avaliacaoPlanilha.appendRow([new Date, dadosTratados.nome, dadosTratados.email, dadosTratados.criatividade, dadosTratados.influencia, dadosTratados.google, dadosTratados.neurociencia, dadosTratados.planejamento, dadosTratados.oratoria, dadosTratados.storytelling]);

// Envio do e-mail
  let assuntoTeste = "INOVA - Coordenação de Inovação e Liderança.";
  let corpoTeste = "";
  let htmlTemplate = HtmlService.createTemplateFromFile("TemplateEmail");

  htmlTemplate.nomeCompleto = dadosTratados.nome;
  htmlTemplate.criatividadeEmail = dadosTratados.criatividade;
  htmlTemplate.influenciaEmail = dadosTratados.influencia;
  htmlTemplate.googleEmail = dadosTratados.google;
  htmlTemplate.neurocienciaEmail = dadosTratados.neurociencia;
  htmlTemplate.planejamentoEmail = dadosTratados.planejamento;
  htmlTemplate.oratoriaEmail = dadosTratados.oratoria;
  htmlTemplate.storytellingEmail = dadosTratados.storytelling;

  let htmlBody = htmlTemplate.evaluate().getContent();
  GmailApp.sendEmail(dadosTratados.email, assuntoTeste, corpoTeste, { htmlBody: htmlBody });
  
}