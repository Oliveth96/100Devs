<?php
include 'connect.php';
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $mobile=$_POST['mobile'];
    $password=$_POST['password'];

    $sql="insert into `crud` (name,email,mobile,password)values('$name','$email','$mobile','$password')";
    $result=mysqli_query($con,$sql);
    if($result){
        echo "Data Inserted Successfully";
    }else{
        die(mysqli_error($con));
    }
}

?>