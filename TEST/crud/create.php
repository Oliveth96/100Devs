<?php
//require_once 'image.php';

//host = localhost, port=3306, database name = '', root= user, no pw= ''
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=product_crud', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 

$errors = [];
// echo $_SERVER['REQUEST_METHOD'].'<br>';

//To ensure the contents remain despite an error/empty field
$title = '';
$price = '';
$description = '';

// The statement below only runs where the request method is post.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title']; //test
    $description = $_POST['description'];
    $price = $_POST['price'];
    $date = date('Y-m-d H:i:s');

    $errors = [];

    if (!$title){
        $errors[] = 'Product title is required';
    }

    if (!$price){
        $errors[] = 'Product price is required';
    }

    if(!is_dir('images')) {
        mkdir('images');
    }

    //to ensure when the button is clicked on empty fields, no data is sent;
    if (empty($errors)){
        $image = $_FILES['image'] ?? null;
        $imagePath = '';
        if($image && $image['tmp_name']){

            $imagePath = 'images/'.randomString(8).'/'.$image['name'];
            mkdir(dirname($imagePath));
            

            move_uploaded_file($image['tmp_name'], $imagePath);
        }
        

        $statement = $pdo->prepare("INSERT INTO product (title, image, description, price, create_date) values (:title, :image, :description, :price, :date)");
        $statement->bindValue(':title', $title);
        $statement->bindValue(':image', '$imagePath');
        $statement->bindValue(':price', $price);
        $statement->bindValue(':description', $description);
        $statement->bindValue(':date', $date);
        $statement->execute();

        //Redirects user to the index page
        header('Location: index.php');
    }
}
//This function generates a random id/name for each uploaded image.
 function randomstring($n)
 {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $str = '';
    for ($i = 0; $i < $n; $i++){
        $index = rand(0, strlen($characters) -1);
        $str .= $characters[$index];
    }

    return $str;
 }


?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Product Crud</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="app.css">
</head>

<body>
    <h1>Create new Product</h1>

    <!--An if statement to ensure the errors only pop 
out when the submit button is clicked on empty fields. -->
    <?php if (!empty($errors)): ?>
    <div class="alert alert-danger">
        <?php foreach ($errors as $error): ?>
        <div> <?php echo $error?> </div>
        <?php endforeach; ?>

    </div>
    <?php endif; ?>

 <!-- The method used is POST for security reasons and because it is preferable. -->
    <form action="" method="post" enctype="multipart/form-data"> <!-- This enctype is necessary for images -->
        <div class="mb-3">
            <label>Product Image</label>
            <input type="file" name="image">
        </div>

        <div class="mb-3">
            <label>Product Title</label>
            <br>
            <input type="text" name="title" class="form-control" placeHolder="Create a Product"
            value = "<?php echo $title ?>">
        </div>

        <div class="mb-3">
            <label>Product Description</label>
            <textarea class="form-control" value = "<?php echo $description ?>" name="description"
            placeHolder="Make a description of the product"></textarea>
        </div>

        <div class="mb-3">
            <label>Product Price</label>
            <input type="number" name="price" step=".01" class="form-control"
            value = "<?php echo $price ?>">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</body>

</html>



