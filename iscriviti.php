<?php
    require_once 'autenticazione.php';

    if (checkAuth()) {
        header("Location: home.php");
        exit;
    }   

    // Verifica l'esistenza di dati POST
    if (!empty($_POST["username"]) && !empty($_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["name"]) && 
        !empty($_POST["surname"]) && !empty($_POST["confirm_password"]) )
    {
        $error = array();
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

        
        # USERNAME
        // Controlla che l'username rispetti il pattern specificato
        if(!preg_match('/^[a-zA-Z0-9_]{1,15}$/', $_POST['username'])) {
            $error[] = "Username non valido";
        } else {
            $username = mysqli_real_escape_string($conn, $_POST['username']);
            // Cerco se l'username esiste già o se appartiene a una delle 3 parole chiave indicate
            $query = "SELECT username FROM users WHERE username = '$username'";
            $res = mysqli_query($conn, $query);
            if (mysqli_num_rows($res) > 0) {
                $error[] = "Username già utilizzato";
            }
        }
        # PASSWORD
        if (strlen($_POST["password"]) < 8) {
            $error[] = "Caratteri password insufficienti";
        } 
        # CONFERMA PASSWORD
        if (strcmp($_POST["password"], $_POST["confirm_password"]) != 0) {
            $error[] = "Le password non coincidono";
        }
        # EMAIL
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $error[] = "Email non valida";
        } else {
            $email = mysqli_real_escape_string($conn, strtolower($_POST['email']));
            $res = mysqli_query($conn, "SELECT email FROM users WHERE email = '$email'");
            if (mysqli_num_rows($res) > 0) {
                $error[] = "Email già utilizzata";
            }
        }

    
        # REGISTRAZIONE NEL DATABASE
        if (count($error) == 0) {
            $name = mysqli_real_escape_string($conn, $_POST['name']);
            $surname = mysqli_real_escape_string($conn, $_POST['surname']);

            $password = mysqli_real_escape_string($conn, $_POST['password']);
            $password = password_hash($password, PASSWORD_BCRYPT);

            $query = "INSERT INTO users(username, password, name, surname, email) VALUES('$username', '$password', '$name', '$surname', '$email')";
            
            if (mysqli_query($conn, $query)) {
                $_SESSION["_agora_username"] = $_POST["username"];
                $_SESSION["_agora_user_id"] = mysqli_insert_id($conn);
                mysqli_close($conn);
                header("Location: home.php");
                exit;
            } else {
                $error[] = "Errore di connessione al Database";
            }
        }

        mysqli_close($conn);
    }
    else if (isset($_POST["username"])) {
        $error = array("Riempi tutti i campi");
    }

?>

<!DOCTYPE html>
<html>
<head>

  <title>Iscriviti a LetteralMente</title>
  <link rel="stylesheet" type="text/css" href="homepage.css">
  <script src='iscrizione.js' defer></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">

</head>
<body>
  <nav>
    <div class="navbar-container">
      <h1 class="navbar-title"><span class="title-colored">Letteral</span><span class="navbar-subtitle">Mente</span></h1>
      <ul class="navbar-menu">
        <li><a href="index_hw1.php" class="navbar-link-home">Home</a></li>
        <li><a href="#footer" class="navbar-link">Contatti</a></li>        
      </ul>
    </div>
  </nav>
  
  <div class="center-container">
    <h1><span class="title-colored">Letteral</span><span class="login-title">Mente</span></h1>
    <div class="login-container">
      <h2>Iscriviti</h2>

  <form name='signup' method='post' enctype="multipart/form-data" autocomplete="off">
        
        <div class="name">                   
         <input id="name-id" type="text" name="name" placeholder = "Nome" required 
          <?php if(isset($_POST["name"])){echo "value=".$_POST["name"];} ?> >
          <div><span>Inserisci nome</span></div>
        </div>

        <div class="surname">
          <input id="surname-id" type='text' name='surname' placeholder="Cognome" required
          <?php if(isset($_POST["surname"])){echo "value=".$_POST["surname"];} ?> >
          <div><span>Inserisci cognome</span></div>
        </div>

        <div class="username">
          <input id="username-id" type='text' name='username' placeholder="Username" required
          <?php if(isset($_POST["username"])){echo "value=".$_POST["username"];} ?>>
          <div><span>Inserisci username</span></div>
        </div>

        <div class="email">        
          <input id="email-id" type='text' name='email' placeholder="Email" required
          <?php if(isset($_POST["email"])){echo "value=".$_POST["email"];} ?>>
          <div><span>Inserisci email</span></div>
        </div>

        <div class="password">        
        <input id="password-id" type='password' name='password' placeholder="Password" required
        <?php if(isset($_POST["password"])){echo "value=".$_POST["password"];} ?>>
        <div><span>Password minima: 8 caratteri</span></div>
       </div>

       <div class="confirm-password">       
        <input id="confirm-password-id" type='password' name='confirm_password' placeholder="Conferma Password" required
        <?php if(isset($_POST["confirm_password"])){echo "value=".$_POST["confirm_password"];} ?>>
        <div><span>Password non coincidenti</span></div> 
      </div>

       <button type="submit">Registrati</button> 

      </form>

    </div>
    <?php if(isset($error)) {
                    foreach($error as $err) {
                        echo "<div class='errorj'><span>".$err."</span></div>";
                    }
                } ?>
    <div class="signup">Hai un account? <a href="accesso.php">Accedi</a></div>

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


