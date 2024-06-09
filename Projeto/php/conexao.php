<?php
    $dbhost = "localhost";
    $dbutilizador = "root";
    $bdpassword = "";
    $dbdatabase = "bd_projeto";

    // Cria a conexão
    $conexao = new mysqli($dbhost, $dbutilizador, $bdpassword, $dbdatabase);

    // Verifica se houve erro na conexão
    if ($conexao->connect_error) {
        die("Falha ao conectar ao banco de dados: " . $conexao->connect_error);
    }else{
        echo("Conectado!");
    }
?>