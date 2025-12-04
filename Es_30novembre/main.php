<?php
$file = "dati.json";

$json_data = file_get_contents($file);
$persone = json_decode($json_data, true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nuova_persona = [
        "nome" => $_POST["nome"],
        "cognome" => $_POST["cognome"],
        "eta" => intval($_POST["eta"])
    ];

    $persone[] = $nuova_persona;

    $nuovo_json = json_encode($persone, JSON_PRETTY_PRINT);
    file_put_contents($file, $nuovo_json);

    echo "<p style='color: green;'>Persona aggiunta con successo!</p>";
}
?>

<h2>Aggiungi una nuova persona</h2>
<form method="POST">
    Nome: <input type="text" name="nome" required><br><br>
    Cognome: <input type="text" name="cognome" required><br><br>
    Età: <input type="number" name="eta" required><br><br>
    <button type="submit">Aggiungi</button>
</form>

<h2>Lista Persone</h2>
<table border="1" cellpadding="5">
    <tr>
        <th>Nome</th>
        <th>Cognome</th>
        <th>Età</th>
    </tr>

    <?php foreach ($persone as $p): ?>
        <tr>
            <td><?=  ($p['nome']) ?></td>
            <td><?=  ($p['cognome']) ?></td>
            <td><?=  ($p['eta']) ?></td>
        </tr>
    <?php endforeach; ?>
</table>
<?php
$file = "dati.json";

$json_data = file_get_contents($file);
$persone = json_decode($json_data, true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nuova_persona = [
        "nome" => $_POST["nome"],
        "cognome" => $_POST["cognome"],
        "eta" => intval($_POST["eta"])
    ];

    $persone[] = $nuova_persona;

    $nuovo_json = json_encode($persone, JSON_PRETTY_PRINT);
    file_put_contents($file, $nuovo_json);

    echo "<p style='color: green;'>Persona aggiunta con successo!</p>";
}
?>

<h2>Aggiungi una nuova persona</h2>
<form method="POST">
    Nome: <input type="text" name="nome" required><br><br>
    Cognome: <input type="text" name="cognome" required><br><br>
    Età: <input type="number" name="eta" required><br><br>
    <button type="submit">Aggiungi</button>
</form>

<h2>Lista Persone</h2>
<table border="1" cellpadding="5">
    <tr>
        <th>Nome</th>
        <th>Cognome</th>
        <th>Età</th>
    </tr>

    <?php foreach ($persone as $p): ?>
        <tr>
            <td><?=  ($p['nome']) ?></td>
            <td><?=  ($p['cognome']) ?></td>
            <td><?=  ($p['eta']) ?></td>
        </tr>
    <?php endforeach; ?>
</table>
<?php
$file = "dati.json";

$json_data = file_get_contents($file);
$persone = json_decode($json_data, true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nuova_persona = [
        "nome" => $_POST["nome"],
        "cognome" => $_POST["cognome"],
        "eta" => intval($_POST["eta"])
    ];

    $persone[] = $nuova_persona;

    $nuovo_json = json_encode($persone, JSON_PRETTY_PRINT);
    file_put_contents($file, $nuovo_json);

    echo "<p style='color: green;'>Persona aggiunta con successo!</p>";
}
?>

<h2>Aggiungi una nuova persona</h2>
<form method="POST">
    Nome: <input type="text" name="nome" required><br><br>
    Cognome: <input type="text" name="cognome" required><br><br>
    Età: <input type="number" name="eta" required><br><br>
    <button type="submit">Aggiungi</button>
</form>

<h2>Lista Persone</h2>
<table border="1" cellpadding="5">
    <tr>
        <th>Nome</th>
        <th>Cognome</th>
        <th>Età</th>
    </tr>

    <?php foreach ($persone as $p): ?>
        <tr>
            <td><?=  ($p['nome']) ?></td>
            <td><?=  ($p['cognome']) ?></td>
            <td><?=  ($p['eta']) ?></td>
        </tr>
    <?php endforeach; ?>
</table>

