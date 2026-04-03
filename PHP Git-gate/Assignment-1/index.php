<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
    <main>
        <?php
        $phone = "OPPO";
        $price = "25000";
        $finalPrice = "0";
        $isimported = "yes";
                echo "<h1>The phone with Tax =". $phone. "</h1>";
                echo "<br>";
         if ($isimported == "yes"){
            $finalPrice = $price + 30000;
            echo "<h3>Total Price =" . $finalPrice. "</h3>";
         }
         else{
            echo "Total Price =". ($price + 000);
         }
         ?>
</body>
</html>