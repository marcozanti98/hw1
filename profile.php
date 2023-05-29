<?php 
    require_once 'autenticazione.php';
    if (!$userid = checkAuth()) {
        header("Location: accesso.php");
        exit;  }
if(!empty($_POST["password_old"]) && !empty($_POST["password"]) && !empty($_POST["confirm_password"]) )
{
  $error=array();
  $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
  $userid = $_SESSION['_agora_user_id'];

  if(strlen($_POST["password"]) <8 ){
    $error[]='La password deve avere minimo 8 caratteri';
  }

$query= "SELECT * FROM users WHERE id = $userid";
$res = mysqli_query($conn, $query) or die(mysqli_error($conn));
$entry= mysqli_fetch_assoc($res);

if (password_verify( $_POST['password_old'], $entry['password'] ) ){

  if( strcmp( $_POST['password'],$_POST['confirm_password']) != 0 ){
    $error[]= "Le password non sono identiche";
  }

  if( password_verify ($_POST['password_old'],$entry['password']) 
  && $_POST['password_old'] === $_POST['password'] ){
    $error[]= "Password già in uso";
  }

  if(count($error) == 0){
    $userid=$_SESSION['_agora_user_id'];
    $nuovo=mysqli_real_escape_string($conn, $_POST['password']);
    $nuovo=password_hash($nuovo, PASSWORD_BCRYPT);

    $query = "UPDATE users set password = '$nuovo' where id = $userid ";

    if (mysqli_query($conn, $query)){
      $_SESSION['_agora_username'] = $_POST['username'];
      mysqli_close($conn);
      header("Location: home.php");
      exit;
    } else{
      $error[]="Connessione al database fallita";
    }
  }
}else{
  $error[]="Password attuale errata";
}
mysqli_close($conn);
}
else if(isset($_POST["password_old"])) {
$error=array("Riempi tutti i campi");
}
?>

<?php 
        //recupero le info dell'utente
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        $userid = mysqli_real_escape_string($conn, $userid);
        $query = "SELECT * FROM users WHERE id = $userid";
        $res_1 = mysqli_query($conn, $query);
        $userinfo = mysqli_fetch_assoc($res_1);   
?>

<!DOCTYPE html>
<html>
<head>

  <title>Il tuo profilo</title>
  <link rel="stylesheet" type="text/css" href="homepage.css">
  <script src='profile.js' defer></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">

</head>
<body>
  <nav>
    <div class="navbar-container">
      <h1 class="navbar-title"><span class="title-colored">Letteral</span><span class="navbar-subtitle">Mente</span></h1>
      <ul class="navbar-menu">
        <li><a href="home.php" class="navbar-link">Home</a></li>
        <li><a href="#footer" class="navbar-link">Contatti</a></li>
        <li><a href="recensioni.php" class="navbar-link-scaffale">Recensioni</a></li>
        <li><a href="scaffale.php" class="navbar-link-scaffale">Scaffale</a></li>
      </ul>
    </div>
  </nav>
  
  <div class="center-container">
  <h2>Il mio profilo</h2>  

  <div class="login-container">
  <div class="standard-set">
        <h5>Nome:</h5>
        <span>
        <?php echo $userinfo['name'] ?>
        </span>
      </div>
      <div class="standard-set">
        <h5>Cognome:</h5>
        <span>
        <?php echo $userinfo['surname'] ?>
        </span>
      </div>
      <div class="standard-set">
        <h5>Username:</h5>
        <span>
        <?php echo $userinfo['username'] ?>
        </span>
      </div>
      <div class="standard-set">
        <h5>Email:</h5>
        <span>
        <?php echo $userinfo['email'] ?>
        </span>
      </div>

  <form name='signup' method='post' enctype="multipart/form-data" autocomplete="off">     
  <div class="password-old">  
        <input id='password-old' type='password' name='password_old' placeholder="Vecchia password" 
               <?php if(isset($_POST["password_old"])){echo "value=".$_POST["password_old"];} ?>
               required>        
       </div>  

        <div class="password">        
        <input id='password' type='password' name='password' placeholder="Nuova password" 
        <?php if(isset($_POST["password"])){echo "value=".$_POST["password"];} ?>
        required >        
       </div>

       <div class="confirm-password">       
        <input id='confirm-password' type='password' name='confirm_password' placeholder="Conferma nuova password" 
        <?php if(isset($_POST["confirm_password"])){echo "value=".$_POST["confirm_password"];} ?>
        required>
       </div>

       <button type="submit">Cambia password</button> 
  </form>

    </div>
    <?php if(isset($error)) {
                    foreach($error as $err) {
                        echo "<div class='errorj'><span>".$err."</span></div>";
                    }
                } 
    ?>
</div>
<footer id="footer">
    <div class="footer-container">
      <div class="footer-column">
      <h1><span class="title-colored">Letteral</span><span class="login-title">Mente</span></h1>
      <p>La letteratura a portata di mano</p>      
    </div>    
      <div class="footer-column">
        <p>Marco Zanti</p>
        <p>1000012126</p>
      </div>
    </div>
  </footer>
</body>
</html>