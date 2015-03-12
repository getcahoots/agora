<?php if (!defined('APPLICATION')) {
   exit();
}

$Discussion = $this->Data('Discussion');
$Author = Gdn::UserModel()->GetID($Discussion->InsertUserID);

$this->EventArguments['Discussion'] = &$Discussion;
$this->EventArguments['Author'] = &$Author;

// DEPRECATED ARGUMENTS (as of 2.1)
$this->EventArguments['Object'] = &$Discussion;
$this->EventArguments['Type'] = 'Discussion';

$this->FireEvent('BeforeDiscussionDisplay');
?>

<?php $this->FireEvent('BeforeDiscussionBody'); ?>
<div class="discussion-body--content">
    <?php
       echo FormatBody($Discussion);
    ?>
</div>
<?php $this->FireEvent('AfterDiscussionBody'); ?>

<div class="discussion-body--voting">
    <?php $this->FireEvent('AfterDiscussionMeta'); ?>
    <?php $this->FireEvent('DiscussionInfo'); ?>
</div>

<div class="discussion-body--appendix">

    <div class="discussion-body--appendix-author">

        <div class="discussion-body--appendix-author--details">
            Eingetragen von <?php echo $Author->Name; ?> • <?php echo Anchor(Gdn_Format::Date($Discussion->DateInserted, 'html'), $Discussion->Url, 'Permalink', array('rel' => 'nofollow'));?>
            •

            <?php
                if (GetValue('Attachments', $Discussion)) {
                   WriteAttachments($Discussion->Attachments);
                }
            ?>

        </div>

        <?php $this->FireEvent('AuthorInfo'); ?>
    </div>

    <?php
        WriteReactions($Discussion);
    ?>
</div>
