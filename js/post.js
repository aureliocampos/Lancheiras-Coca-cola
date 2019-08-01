window.addEventListener('load', carregado);

function carregado() {
  document.getElementById('botao').addEventListener('click', enviarForm);
}

function enviarForm() {
  var email = document.getElementById("form-input").value;
  var obj = {
    email: email
  };

  var myJSON = JSON.stringify(obj);

  // $.post("url do endpoint", obj, function (data) {
  //   console.log(data.email);
  // }, "json"); 
  // console.log(obj);

  $.ajax({
    type: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: teste = JSON.stringify ({email: email}),
    success: function (data ) {
      alert('data: ' + data);
      console.log(teste);
    },
    contentType: "application/json",
    dataType: 'json'
  });

}