//FOI USADO NO BOTÃO SAIBA MAIS DO NOSSO SITE


<script>
                function mostrarTexto() {
                  var textoAdicional = document.getElementById("texto-adicional");
                  textoAdicional.style.display = "block";
                  var botao = document.getElementsByTagName("button")[0];
                  botao.innerHTML = "Fechar";
                  botao.onclick = function() { ocultarTexto(); };
                }
                
                function ocultarTexto() {
                  var textoAdicional = document.getElementById("texto-adicional");
                  textoAdicional.style.display = "none";
                  var botao = document.getElementsByTagName("button")[0];
                  botao.innerHTML = "Saiba Mais";
                  botao.onclick = function() { mostrarTexto(); };
                }
              </script>