<?php 
    require_once 'autenticazione.php';
    if (!$userid = checkAuth()) {
        header("Location: accesso.php");
        exit;
    }
?>

<!DOCTYPE html>
<html>
<head>
  <title>LetteralMente</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" type="text/css" href="homepage.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="home.js" defer="true"></script>
</head>

<body>
  <header class="cover">
    <div id="overlay">
      <nav>
        <div class="navbar-container">
          <h1 class="navbar-title"><span class="title-colored">Letteral</span><span class="navbar-subtitle">Mente</span></h1>
          <ul class="navbar-menu">
            <li><a href="#overlay" class="navbar-link">Home</a></li>
            <li><a href="#footer" class="navbar-link">Contatti</a></li>
            <li><a href="profile.php" class="navbar-link-scaffale">Profilo</a></li>
            <li><a href="scaffale.php" class="navbar-link-scaffale">Scaffale</a></li>
            <li><a href="logout.php" class="navbar-link-profile">Disconnetti</a></li>
          </ul>
        </div>
      </nav>
      <h1 class="cover-title">Scopri il mondo della letteratura</h1>
      <p class="cover-subtitle">La letteratura è una difesa contro le offese della vita.</p>
      <p class="cover-subtitle">- Cesare Pavese</p>
    </div>
  </header>

  <section id="search">
      <form autocomplete="off">
        <div class="search">
          <label for='search'>Cerca</label>
          <input type='text' name="search" placeholder="Cerca un libro per autore" class="searchBar">
          <input type="submit" value="Invia">
        </div>
      </form>      
    </section>
<section id="modal-view" class="hidden">
  </section>

<section class="container">
   <div id="results" >  
   </div>
</section>  
<div class='title-vetrina'>
  <h3>I migliori titoli ti aspettano</h3>
</div>
<section class="vetrina">
   <h4>Gialli</h4>
  <div class="libriGialli-vetrina">
  </div>
  <h4>Narrativa</h4>
  <div class="libriNarrativa-vetrina">
  </div>
  <h4>Fantasy</h4>
  <div class="libriFantasy-vetrina">
  </div>
  <h4>Storie d'amore</h4>
  <div class="libriRosa-vetrina">
  </div>
  <h4>Poesia</h4>
  <div class="libriPoesia-vetrina">
  </div>
  <h4>Scienza</h4>
  <div class="libriScienza-vetrina">
  </div>
  <h4>Storia</h4>
  <div class="libriStoria-vetrina">
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
