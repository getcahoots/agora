<?php if (!defined('APPLICATION')) exit();
    $Session = Gdn::Session();
    $NewOrDraft = !isset($this->Comment) || property_exists($this->Comment, 'DraftID') ? TRUE : FALSE;
    $Editing = isset($this->Comment);

    $this->EventArguments['FormCssClass'] = 'MessageForm CommentForm FormTitleWrapper';
    $this->FireEvent('BeforeCommentForm');
?>

<div class="container">
    <div class="row">
        <?php if (Gdn::Session()->IsValid()): ?>
            <div class="commenter">
                <div class="commenter-body">
                    <div class="commenter-body--meta">
                        <?php
                            WriteCommentFormHeader();
                        ?>
                    </div>

                    <div class="commenter-body--form">

                        <?php echo $this->Form->Open(array('id' => 'Form_Comment')); ?>
                        <?php echo $this->Form->Errors(); ?>
                        <?php $this->FireEvent('BeforeBodyField'); ?>

                        <?php echo $this->Form->BodyBox('Body', array('Table' => 'Comment', 'tabindex' => 1, 'FileUpload' => true)); ?>

                        <?php $this->FireEvent('AfterBodyField'); ?>

                        <div class="commenter-body--form-buttons">
                            <?php $this->FireEvent('BeforeFormButtons');


                           echo "<div class=\"Buttons\">\n";
                           $this->FireEvent('BeforeFormButtons');
                           $CancelClass = 'Back';
                           if (!$NewOrDraft || $Editing) {
                              $CancelText = T('Cancel');
                              $CancelClass = 'Cancel';
                           }

                           if ($CategoryID = $this->Data('Discussion.CategoryID')) {
                              $Category = CategoryModel::Categories($CategoryID);
                           }

                           echo '</span>';

                           $ButtonOptions = array('class' => 'Button Primary CommentButton');
                           $ButtonOptions['tabindex'] = 2;

                           if (!$Editing && $Session->IsValid()) {
                              echo ' '.Anchor(T('Edit'), '#', 'Button WriteButton Hidden')."\n";
                           }
                           if ($Session->IsValid())
                              echo $this->Form->Button($Editing ? 'Save Comment' : 'Post Comment', $ButtonOptions);
                           else {
                              $AllowSigninPopup = C('Garden.SignIn.Popup');
                              $Attributes = array('tabindex' => '-1');
                              if (!$AllowSigninPopup)
                                 $Attributes['target'] = '_parent';

                              $AuthenticationUrl = SignInUrl($this->Data('ForeignUrl', '/'));
                              $CssClass = 'Button Primary Stash';
                              if ($AllowSigninPopup)
                                 $CssClass .= ' SignInPopup';

                              echo Anchor(T('Comment As ...'), $AuthenticationUrl, $CssClass, $Attributes);
                           }

                           $this->FireEvent('AfterFormButtons');
                           echo "</div>\n";
                           echo $this->Form->Close();
            //               echo '</div>';
                           ?>

                            <?php $this->FireEvent('AfterFormButtons'); ?>
                        </div>

                        <?php echo $this->Form->Close(); ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>
