<?php 
    require_once 'autenticazione.php';
    if (!$userid = checkAuth()) {
        header("Location: accesso.php");
        exit;
    }
?>

<!DOCTYPE html>
<html>

<?php 
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        $userid = mysqli_real_escape_string($conn, $userid);
        $query = "SELECT * FROM users WHERE id = $userid";
        $res_1 = mysqli_query($conn, $query);
        $userinfo = mysqli_fetch_assoc($res_1);   
?>

<head>
  <title>LetteralMente</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" type="text/css" href="homepage.css">
  <script src='scaffale.js' defer></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
</head>
<body>
  <header>
    
      <nav>
        <div class="navbar-container">
          <h1 class="navbar-title"><span class="title-colored">Letteral</span><span class="navbar-subtitle">Mente</span></h1>
          <ul class="navbar-menu">
            <li><a href="home.php" class="navbar-link">Home</a></li>
            <li><a href="#footer" class="navbar-link">Contatti</a></li>
            <li><a href="profile.php" class="navbar-link-scaffale">Profilo</a></li>
            <li><a href="logout.php" class="navbar-link-profile">Disconnetti</a></li>
          </ul>
        </div>
      </nav>          
  </header>
  
  <section class="section-scaffale">
  <div class="info-scaffale">
    <span>Lo scaffale di <?php echo $userinfo['name']." ".$userinfo['surname'] ?></span>
  </div>
 <div class="mio-scaffale">

    <div id="results-scaffale">
    </div>

 
 
</div>
  </section> 

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

<?php mysqli_close($conn); ?>