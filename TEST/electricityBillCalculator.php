<?php
$result_str = $result = '';
if (isset($_POST['unit-sub'])) { //isset basically checks if the value has been declared so this line of code checks if any inputs have any input has been given
    $units = $_POST['units']; //then you assign a post variable to the name of the input then you assign this to a variable in this case units
    if (!empty($units)) { //so i ran a condition if it's not empty i.e if it is given please kindly proceed
        $result = calculate($units); //then i created a new variable result and i ran it inside this function calculate 
        $result_str = $units . ' units '.' - ' . 'N'.$result; // created another variable to actually output a string like result y'know lol small ux
    }
}



    function calculate($units) {
     $unitForFirstCost = 3.50; //for the first 50 units
     $unitForSecondCost = 4.00; //for the next 100 units
     $unitForThirdCost = 5.20; //for the next 100
     $unitForFourthCost = 6.50; // for units above 250
     if($units <= 50) {
        $bill = $units * $unitForFirstCost;
        
 }
 else if($units > 50 && $units <= 100 ) {
    $counter = 50 * $unitForFirstCost;
    $remainingUnits = $units - 50;
    $bill = $counter + ($remainingUnits * $unitForSecondCost);
    
 }
 else if($units > 100 && $units <=200) {
     $counter = (50 * 3.5) + (100 * $unitForSecondCost);
     $remainingUnits = $units - 150;
     $bill = $counter + ($remainingUnits * $unitForThirdCost);
 }
 else {
     $counter = (50 *3.5) + (100 * $unitForSecondCost) + (100 * $unitForThirdCost);
     $remainingUnits = $units - 250;
     $bill = $counter + ($remainingUnits * $unitForThirdCost);
 }
 return $bill;


}
?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="This is where your description goes">
    <meta name="keywords" content="one, two, three">

	<title>CAPSTONE 46-ELECTRIC BILL CALCULATOR</title>

	<!-- external CSS link -->
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/style.css">
    
</head>
<body>
    <h1>ELECTRIC BILL CALCULATOR</h1>

    <form action="" method="post">
        <label> Please input units </label>
    <input type="text" name="units" placeholder="Please enter no. of Units">
    <button type="submit" name="unit-sub" >SUBMIT</button>

    <div>
   <?php echo $result_str; ?>
    </div>

    </form>

</body>

</html>
