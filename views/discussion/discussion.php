<?php if (!defined('APPLICATION')) {
   exit();
}

$Discussion = $this->Data('Discussion');
$Author = Gdn::UserModel()->GetID($Discussion->InsertUserID);

$this->EventArguments['Discussion'] = &$Discussion;
$this->EventArguments['Author'] = &$Author;

$this->FireEvent('BeforeDiscussionDisplay');
?>

<?php $this->FireEvent('BeforeDiscussionBody'); ?>
<div class="discussion-body--content">
    <?php
       echo FormatBody($Discussion);
    ?>
</div>
<?php $this->FireEvent('AfterDiscussionBody'); ?>

<ul class="discussion-body--voting">
    <li class="discussion-body--voting-up"></li>
    <li class="discussion-body--voting-sum">20</li>
    <li class="discussion-body--voting-down"></li>
</ul>

<div class="discussion-body--appendix">

    <div class="discussion-body--appendix-author">
        <?php echo UserPhoto($Author);?>

        <div class="discussion-body--appendix-author--details">
            Eingetragen von <?php echo UserAnchor($Author, 'Username');?> • <?php echo Anchor(Gdn_Format::Date($Discussion->DateInserted, 'html'), $Discussion->Url, 'Permalink', array('rel' => 'nofollow'));?>
            •

            <?php
                if (GetValue('Attachments', $Discussion)) {
                   WriteAttachments($Discussion->Attachments);
                }
            ?>

        </div>
    </div>

    <?php $this->FireEvent('AuthorInfo'); ?>



    <?php $this->FireEvent('DiscussionInfo'); ?>

    <?php
        WriteReactions($Discussion);
    ?>
</div>
