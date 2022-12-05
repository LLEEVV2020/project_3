<?php

$deadline = strtotime("2022-11-05 12:00:00");
echo round( 1000 * $deadline - 1000 * microtime(true)); // в миллисекундах

//https://qna.habr.com/q/429184

//var endDate = new Date(2022, 11, 5, 12, 0, 0, 0).getTime();
