//console.log("Esta funcionando!");

let btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", () => {
     //console.log("Ouvinte na escuta");

     let inputName = $("#name_team").val();
     let inputSigla = $("#initials_team").val();
     let inputApelido = $("#apelido_team").val();
     let inputCidade = $("#city_team").val();

     if (inputName === '' || inputSigla === '' || inputApelido === '' || inputCidade === '') {
          M.toast({ html: "Preencha todos os campos do formulário!" });
     } else {
          sendData();
     }

});

function sendData() {
     // Variável que os dados dos inputs serão armazenados
     let dadosForm = {}

     dadosForm.dadosNome = $("#name_team").val();
     dadosForm.dadosSigla = $("#initials_team").val();
     dadosForm.dadosApelido = $("#apelido_team").val();
     dadosForm.dadosCidade = $("#city_team").val();

     dadosNome = $("#name_team").val("");
     dadosSigla = $("#initials_team").val("");
     dadosApelido = $("#apelido_team").val("");
     dadosCidade = $("#city_team").val("");

     console.log(dadosForm);

     let jsonDados = JSON.stringify(dadosForm);
     console.log(jsonDados);

     google.script.run.addSheet(jsonDados);
}