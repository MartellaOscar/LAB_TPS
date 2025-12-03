<?php

$file = "dati.json";
$json_data = file_get_contents($file);

$persone = json_decode($json_data, true);

echo "<table border='1' cellpadding='5'>";
echo "<tr><th>Nome</th><th>Cognome</th><th>Età</th></tr>";

foreach ($persone as $p) {
    echo "<tr>";
    echo "<td>" . $p['nome'] . "</td>";
    echo "<td>" . $p['cognome'] . "</td>";
    echo "<td>" . $p['eta'] . "</td>";
    echo "</tr>";
}

echo "</table>";

$nuova_persona = [
    "nome" => "Anna",
    "cognome" => "Verdi",
    "eta" => 22
];

$persone[] = $nuova_persona;

$nuovo_json = json_encode($persone, JSON_PRETTY_PRINT);

file_put_contents($file, $nuovo_json);

echo "<p>Nuova persona aggiunta con successo.</p>";
?>
