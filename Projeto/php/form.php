<?php
    include("conexao.php");

    // Obtém os dados do formulário
    $nome = $_POST['nome'];
    $email_tele = $_POST['email_tele'];
    $pass = $_POST['pass'];

    $sql = "INSERT INTO users(nome, email_tele, pass) VALUES ('$nome', '$email_tele', '$pass')";

    if (mysqli_query($conexao, $sql)) {
        echo ("Usuário criado com sucesso!");
    }else{
        echo ("ERRO!!!");
    }

    mysqli_close($conexao);
?>