let sp = SpreadsheetApp;
//https://docs.google.com/spreadsheets/d/1VOZ8ALtG5VzrLduCdd4nP3SiGXfddqdmdfcawsCgpYPkkY4/edit#gid=548579777
let spreadsheet = sp.openByUrl("https://docs.google.com/spreadsheets/d/1VOZ8dALtrHGVzfgffL55edfMnP3SiGgfgXLBqmcawsCgpYjjY4/edit#gid=54333777");
let sheet = spreadsheet.getSheetByName("UfNovaEstrutura");

function obterDados() {
  let range = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1);
  let values = range.getValues();
  //Logger.log(values);

  //let rangeBranco = sheet.getRange("C2:C" + sheet.getLastRow());
  //Logger.log(rangeBranco.getValues());

  for(let count = 0; count < values.length; count++) {
    for(let countS = 0; countS < values[count].length; countS++) {
      let dadoUf = values[count][countS].substring(values[count][countS].length - 2, values[count][countS].length)
      let line = count + 2;

      switch(dadoUf) {
        case 'AC':
          //Logger.log("Encontrado extensão AC");
          sheet.getRange("C" + line).setValue("Acre");
        break;

        case 'AL':
          //Logger.log("Encontrado extensão AL");
          sheet.getRange("C" + line).setValue("Alagoas");
        break;

        case 'AP':
          //Logger.log("Encontrado extensão AP");
          sheet.getRange("C" + line).setValue("Amapá");
        break;

        case 'AM':
          //Logger.log("Encontrado extensão AM");
          sheet.getRange("C" + line).setValue("Amazonas");
        break;

        case 'BA':
          //Logger.log("Encontrado extensão BA");
          sheet.getRange("C" + line).setValue("Bahia");
        break;

        case 'CE':
          //Logger.log("Encontrado extensão CE");
          sheet.getRange("C" + line).setValue("Ceará");
        break;

        case 'DF':
          //Logger.log("Encontrado extensão DF");
          sheet.getRange("C" + line).setValue("Distrito Federal");
        break;

        case 'ES':
          //Logger.log("Encontrado extensão ES");
          sheet.getRange("C" + line).setValue("Espírito Santo");
        break;

        case 'GO':
          //Logger.log("Encontrado extensão GO");
          sheet.getRange("C" + line).setValue("Goiás");
        break;

        case 'MA':
          //Logger.log("Encontrado extensão MA");
          sheet.getRange("C" + line).setValue("Maranhão");
        break;

        case 'MT':
          //Logger.log("Encontrado extensão MT");
          sheet.getRange("C" + line).setValue("Mato Grosso");
        break;

        case 'MS':
          //Logger.log("Encontrado extensão MS");
          sheet.getRange("C" + line).setValue("Mato Grosso do Sul");
        break;

        case 'MG':
          //Logger.log("Encontrado extensão MG");
          sheet.getRange("C" + line).setValue("Minas Gerais");
        break;

        case 'PA':
          //Logger.log("Encontrado extensão PA");
          sheet.getRange("C" + line).setValue("Pará");
        break;

        case 'PB':
          //Logger.log("Encontrado extensão PB");
          sheet.getRange("C" + line).setValue("Paraíba");
        break;

        case 'PR':
          //Logger.log("Encontrado extensão PR");
          sheet.getRange("C" + line).setValue("Paraná");
        break;

        case 'PE':
          //Logger.log("Encontrado extensão PE");
          sheet.getRange("C" + line).setValue("Pernambuco");
        break;

        case 'PI':
          //Logger.log("Encontrado extensão PI");
          sheet.getRange("C" + line).setValue("Piauí");
        break;

        case 'RJ':
          //Logger.log("Encontrado extensão RJ");
          sheet.getRange("C" + line).setValue("Rio de Janeiro");
        break;

        case 'RN':
          //Logger.log("Encontrado extensão RN");
          sheet.getRange("C" + line).setValue("Rio Grande do Norte");
        break;

        case 'RS':
          //Logger.log("Encontrado extensão RS");
          sheet.getRange("C" + line).setValue("Rio Grande do Sul");
        break;

        case 'RO':
          //Logger.log("Encontrado extensão RO");
          sheet.getRange("C" + line).setValue("Rondônia");
        break;

        case 'RR':
          //Logger.log("Encontrado extensão RR");
          sheet.getRange("C" + line).setValue("Roraima");
        break;

        case 'SC':
          //Logger.log("Encontrado extensão SC");
          sheet.getRange("C" + line).setValue("Santa Catarina");
        break;

        case 'SP':
          //Logger.log("Encontrado extensão SP");
          sheet.getRange("C" + line).setValue("São Paulo");
        break;

        case 'SE':
          //Logger.log("Encontrado extensão SE");
          sheet.getRange("C" + line).setValue("Sergipe");
        break;

        case 'TO':
          //Logger.log("Encontrado extensão TO");
          sheet.getRange("C" + line).setValue("Tocantins");
        break;

        default:
          //Logger.log("Sem UF para a extensão: " + dadoUf);
          sheet.getRange("C" + line).setValue("Não consta");
        break; 
      }
    }
  }
}