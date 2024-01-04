<!DOCTYPE html> 
<html>
<body>


<?php


//$dsn = "mysql:host=localhost;dbname=toncekova;charset=UTF8";
//$user = "toncek";
//$password = "Ktm^>e7bz;H?J!3un/-(";
//
//try{
//    $pdo = new PDO ($dsn, $user, $password);
//    if ($pdo){
//        echo "Connected to the database successfully! <br/>";
//    }
//} catch (PDOException $e){
//    echo "$e->getMessage()";
//}
//
//$sadrzaj=$_GET['Unos'];
//$sql= "INSERT INTO upis (sadrzaj) VALUES (?)";
//$pdo->exec($sql);
//$query=$pdo->prepare($sql);
//$query->bindValue(':sadrzaj',$sadrzaj);
//$query->execute(
////    [':sadrzaj' => $sadrzaj]
//);
//$result = $query->fetchAll(\PDO::FETCH_ASSOC);
//$dsn=null;
//header("Location index.html");

$mysqli = mysqli_connect("localhost", "toncek", 'Ktm^>e7bz;H?J!3un/-(',"toncekova");

if (!mysqli_connect_errno()) {

    $sadrzaj=$_GET['Unos'];
    $sql= "INSERT INTO upis (sadrzaj) VALUES (?)";
    $stmt = mysqli_prepare($mysqli,$sql);
    mysqli_stmt_bind_param($stmt,"s", $sadrzaj);
    $result = mysqli_stmt_execute($stmt);




    print("<p>Dobro je</p>");
/*    print($_GET["Unos"]);
$sql = "INSERT INTO upis(sadrzaj) VALUES ('".$_GET["Unos"]."')";
print($sql);
$result = mysqli_query($mysqli, $sql);*/

mysqli_close($mysqli);

header("Location: index.html");
exit();

}
else{
    printf("<p> Greska </p>", mysqli_connect_error());

    };

/*

*/
/*
if ($mysqli) {
    print("<p>Connection succseeded!</p>")




    $sql = "INSERT INTO upis(id, sadrzaj) VALUES (".$_GET['sadrzaj'].")";

} else {
    print("<p>Connection connection failed!</p>")

}
$result = mysqli_query($mysqli, $sql);

*/

?>
</body>
</html>