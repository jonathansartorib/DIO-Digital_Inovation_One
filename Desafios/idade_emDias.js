//Idade em Dias

let idadeDias = parseInt(gets());
let anos, meses, dias;

    
  anos = idadeDias / 365;
  meses = (idadeDias % 365) / 30;
  dias = (idadeDias % 365) % 30;

  anos = Math.trunc(anos);
  meses = Math.trunc(meses);
  dias = Math.trunc(dias);


let resultado = 
(
anos + " ano(s) " + '\n' + 
meses +" mes(es)" + '\n' +
dias + " dia(s)"
);


print(resultado);
quadrado(n);