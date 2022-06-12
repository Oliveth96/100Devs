<?php
//Connection string
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=product_crud', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 

$statement = $pdo->prepare('SELECT * FROM product ORDER BY create_date DESC');
$statement->execute();
$products = $statement->fetchAll(PDO::FETCH_ASSOC);


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
    <h1>Products Crud</h1>

    <p>
        <a href="create.php" class="btn btn-success">Create Product</a>
    </p>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Create Date</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($products as $i => $product): ?>
            <tr>
                <th scope="row"><?php echo $i + 1 ?></th>
                <td> <img class="thumb-image" src="<?php echo $product['Image'] ?>"> </td>
                <td><?php echo $product['Title'] ?></td>
                <td><?php echo $product['Price'] ?></td>
                <td><?php echo $product['Create_date'] ?></td>
                <td>
                    <button type="button" class="btn btn-sm btn-primary">Edit</button>
                    <form style="display: inline-block" method="post" action="delete.php">
                        <input type="hidden" name="id" value="<? echo $product['id'] ?>">
                        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                    </form>
                </td>
            </tr>

            <?php endforeach; ?>

        </tbody>
    </table>
</body>

</html>