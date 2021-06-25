//arrays do dia da semana e do mês com os seus nomes
dayNome = new Array("Domingo", "Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");
mesNome = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Outubro", "Novembro", "Dezembro");
now = new Date;
  function Data(){
    document.write("<h1> Hoje é "+ dayNome[now.getDay()] + ", " + now.getDate () +" de "+ mesNome [now.getMonth()] + " de " + now.getFullYear() + ". </h1>");
 }
 document.getElementById("Data()").innerHTML = Data();
