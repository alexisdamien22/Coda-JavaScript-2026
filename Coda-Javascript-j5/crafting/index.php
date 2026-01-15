<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/styles/css/style.css?v=<?php echo filemtime('assets/styles/css/style.css'); ?>">
        <title>Document</title>
    </head>
    <body>
        <div class="panel">
            <h2>Inventaire</h2>
            <div id="inventory"></div>
        </div>

        <div class="panel">
            <h2>Crafts disponibles</h2>
            <div id="craftList"></div>
        </div>

        <div class="panel">
            <h2>Logs</h2>
            <div id="logBox" class="log"></div>
        </div>

        <script src="./js/crafting.js"></script>
    </body>
</html>