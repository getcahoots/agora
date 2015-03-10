<!DOCTYPE html>
<html lang="en" class="sticky-footer-html">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {asset name="Head"}
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
          <div class="greeting">
              <section class="container">
                      <div class="greeting--header">
                          <h1 class="greeting--header-title">Hallo {$User.Name}!</h1>

                          <p class="greeting--header-description">Schön, dass Du den Weg hierher gefunden hast. Ich merke gerade, dass wir da in jedem Fall noch einen Text brauchen. Hat jemand Ideen?</p>
                      </div>
              </section>
          </div>
          {/if}
      {/if}

      {$Assets.Content.Discussions}

      <section class="container">
          <div class="row">
              <main class="page-content" role="main">
                  {asset name="Content"}
              </main>
          </div>
      </section>
  </body>
</html>
