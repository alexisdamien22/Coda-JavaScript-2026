<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/styles/css/style.css?v=<?php echo filemtime('assets/styles/css/style.css'); ?>">
        <title>Document</title>
    </head>
    <body>
        <section>
            <div id="display">00:00:000</div>
            <div class="stopwatch-container">
                <button id="startButton" class="btn left" onclick="startTimer()">Start/Stop</button>
                <div class="stopwatch">
                    <div class="face">
                        <div class="hand-giant" id="hand-giant"></div>
                    <div class="hand-big" id="hand-big"></div>
                    <div class="hand-small" id="hand-small"></div>
                    </div>
                </div>
                <button id="resetButton" class="btn right" onclick="resetTimer()">Reset</button>
            </div>
        </secion>
        <script src="./js/timer.js"></script>
    </body>
</html>