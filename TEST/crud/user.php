<?php
include_once 'userfunction.php';
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap css -->
    <title> Crud Operation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body>
    <div class="container my-5">
        <form method="post">
            <div class="mb-3">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Please enter your Name" name="name"
                    autocomplete="off">
            </div>

            <div class="mb-3">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Please enter your Email Address" name="email"
                    autocomplete="off">
            </div>

            <div class="mb-3">
                <label>Mobile</label>
                <input type="text" class="form-control" placeholder="Please enter your Mobile Number" name="mobile"
                    autocomplete="off">
            </div>

            <div class="mb-3">
                <label>Password</label>
                <input type="text" class="form-control" placeholder="Please enter your Password" name="password"
                    autocomplete="off">
            </div>

            <button type="submit" class="btn btn-primary" name="submit">Submit</button>
        </form>
    </div>

</body>

</html>
