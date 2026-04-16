  <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") 
            {
            $name= $_POST['user-name'];
            $age= $_POST['user-age'];
            $currentyear = 2026;
        function checkEligibility($name,$age,$currentyear)
            {
            /* "dot variables aur text ko alg krny k liye huta, professional words mein php aur tag ko alg krta ha,
            is tareqa double quotes mein tag, text wagra aur dots se seprate kru variables ko */
                echo "<h2 style='color: black';>".$name. "</h2>";
                $age= ($currentyear - $age);
                /* ak dosra tareeqa ye ha is mein start se end mein doble quotes lagu.
                echo "<h2 style='color: green;'>$name</h2>"; */
                
                
// Output: Name (Green color mein)

            if($age>=18){

                echo "<h2 style='color: green;' text alignmnet >Your are Eligible to Voting</h2>";
            }
            else{
                echo "<h2 style='color: red;'>Your are Not Eligible to Voting</h2>";
            }
        }
        checkEligibility($name,$age,$currentyear);
        }
    ?>