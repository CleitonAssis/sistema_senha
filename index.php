<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<!-- Meta tags Obrigatórias -->
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>SENHAS</title>
		<link rel="shortcut icon" href="img/logorel.jpg">
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
	</head>

	<body>
		<div class="barraTop">&nbsp;</div>
		<div class="container page">
			<div class="row barraSuperior">
				<div class="col-xs-1">
					<img src="img/logobo.png" class="Logo">
				</div>
				<div class="col-xs-11" style="text-align: right;"><p></p>
					<span class="uespiTexto">PREFEITURA MUNICIPAL DE BELO ORIENTE</span><br>
					<span class="subtitulo">Atendimento <strong>Estratégia Saúde da Família 01</strong></span>
					<!--<img src="imagens/sisu.png" class="sisuLogo">-->
				</div>
			</div>
			<div class="row">
				<div class="senhaAtual">
					<div class="row">
						<div class="col-xs-5 col-xs-offset-1" style="text-align: right;"><br><br>
							<span class="senhaAtualTexto">SENHA &nbsp;</span>
						</div>
						<div class="col-xs-5"  style="text-align: left;">
							<span id="senhaAtualNumero">0000</span>
						</div>
						<input type="hidden" id="senhaNormal" value="0000">
						<input type="hidden" id="senhaPrioridade" value="P000">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-4 col-xs-offset-4 ultimaSenha">
					<br>
					<span id="ultimaSenhaTexto">ÚLTIMA SENHA CHAMADA</span><br>
					<span>Senha </span>
					<span id="ultimaSenhaNumero">0000</span>
				</div>
			</div>
		</div>
		<audio id="audioChamada" src="audio/chamada.wav"></audio>
		<br>
		<footer>
		  <figure class="text-center">
		    <a style="text-decoration: none; color: black;" href="https://www.cvacentertech.com.br"><img class="text-muted fw-light" style="width: 15rem;" src="img/lg2.png"><strong><?= date('Y');?></strong></a>
		  </figure>
		</footer>

		<script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/scripts.js"></script>
	</body>
</html>