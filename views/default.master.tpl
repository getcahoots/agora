<!DOCTYPE html>
<html lang="en" class="sticky-footer-html">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="/themes/forumize/js/vendor/classie.js"></script>
    <script src="/themes/forumize/js/vendor/modernizr.js"></script>
    {asset name="Head"}

    <link href='//fonts.googleapis.com/css?family=Ubuntu:300,400' rel='stylesheet' type='text/css'>
  </head>
  <body id="{$BodyID}" class="{$BodyClass}">
      <div class="headerbar">
          <nav class="navbar navbar-default navbar-static-top" role="navigation">
              <div class="container">
                  <div class="navbar-header">
                      <a class="navbar-brand" href="{link path="home"}">{logo}</a>
                  </div>

                  <div class="navbar-collapse collapse">

                      {if $User.SignedIn}
                      <ul class="nav navbar-nav navbar-right hidden-xs">
                          {module name="MeModule"}
                      </ul>
                      <ul class="nav navbar-nav navbar-right visible-xs">
                          {profile_link}
                          {inbox_link}
                          {bookmarks_link}
                          {dashboard_link}
                          {signinout_link}
                      </ul>
                      {else}
                      <ul class="nav navbar-nav navbar-right">
                          {signin_link}
                      </ul>
                      {/if}
                  </div>
              </div>
          </nav>
      </div>

      {if !$User.SignedIn}
          {$Assets.Panel.GuestModule}
      {else}
          {if $smarty.server.REQUEST_URI == '/'}
          <div class="greeting greeting-streamline">
              <section class="container">
                  <div class="greeting--header">
                      <h1 class="greeting--header-title">Hallo {$User.Name}!</h1>

                      <p class="greeting--header-description">Als Mitglied der Cahoots-Community kannst Du mit­ent­schei­den, welche Verbindungen in der Extension verfügbar sein sollen.</p>
                  </div>
              </section>
          </div>
          {/if}
      {/if}

      {$Assets.Content.Discussions}

      <div id="codex" class="dialog">
          <div class="dialog__overlay"></div>
          <div class="dialog__content">
              <h2>Unser <strong>Kodex</strong></h2>

              <h3>No. 1</h3>
              <p>Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben.</p>

              <h3>No. 2</h3>
              <p>Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben.</p>

              <div class="dialog-buttons">
                  <button class="Button Primary Action" data-dialog-close>okidoki</button>
              </div>
          </div>
      </div>

      <section class="container">
          <div class="row">
              <div class="suggestor">
                  <a href="http://cahoots.pw" class="Button Primary Action">+ Verbindung vorschlagen</a>
                  <button data-dialog="codex" class="Button Primary Action">Kodex</button>
              </div>

              <main class="page-content" role="main">
                  {asset name="Content"}
              </main>
          </div>
      </section>
  </body>
</html>
