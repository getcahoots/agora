<div class="greeting">
    <section class="container">

        <div class="greeting--header">
            <h1 class="greeting--header-title"><?php echo T('Howdy, Stranger!'); ?></h1>

            <p class="greeting--header-description"><?php echo T($this->MessageCode, $this->MessageDefault); ?></p>
        </div>

        <?php
           $signInUrl = SignInUrl($this->_Sender->SelfUrl);
           if ($signInUrl) {
               echo '<div class="greeting--buttons">';
               echo Anchor(T('Sign In'), SignInUrl($this->_Sender->SelfUrl), 'button primary'.(SignInPopup() ? ' SignInPopup' : ''), array('rel' => 'nofollow'));
               $Url = RegisterUrl($this->_Sender->SelfUrl);

               if(!empty($Url))
                    echo ' '.Anchor(T('Register', T('Apply for Membership', 'Register')), $Url, 'button apply', array('rel' => 'nofollow'));

               echo '</div>';
           }
       ?>
   </div>
</div>
