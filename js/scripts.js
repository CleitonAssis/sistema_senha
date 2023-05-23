function pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

jQuery(document).ready(function($) {// Executa a função somente quando o DOM estiver totalmente carregado

	$("body").on('keydown', function(e) {// Função que adiciona um evento quando uma tecla é pressionada
		let senhaAtual   = $("#senhaAtualNumero");
		let senhaNormal  = $("#senhaNormal");
		let senhaPrior   = $("#senhaPrioridade");
		let ultimaSenha  = $("#ultimaSenhaNumero");
		let audioChamada = $("#audioChamada");

        if(e.keyCode == 39){// Função seta direcional direita # Chama senha 
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaNormal.val()) + 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
            audioChamada.trigger("play");
        }
        if(e.keyCode == 38){// Função seta direcional pra cima # Chama senha preferencial
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaPrior.val().replace("P","")) + 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrior.val("P" + pad(senha, 3));
            audioChamada.trigger("play");
        }
        if(e.keyCode == 80){// Função tecla P # Toca som
            audioChamada.trigger("play");
        }
        if(e.keyCode == 65){//Função tecla A # Decrementa 1 na senha
            senha = parseInt(senhaNormal.val()) - 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
        }
        if(e.keyCode == 90){//Função tecla Z # Incrementa 1 na senha
            senha = parseInt(senhaNormal.val()) + 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
        }
        if(e.keyCode == 83){// Função letra S # Decrementa 1 na senha preferencial
            senha = parseInt(senhaPrior.val().replace("P","")) - 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrior.val("P" + pad(senha, 3));
        }
        if(e.keyCode == 88){// Função letra X # Decrementa 1 na senha preferencial
            senha = parseInt(senhaPrior.val().replace("P","")) + 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrior.val("P" + pad(senha, 3));
        }
    });
});