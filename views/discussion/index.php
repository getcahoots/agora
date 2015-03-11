<?php if (!defined('APPLICATION')) exit();
$Session = Gdn::Session();
if (!function_exists('WriteComment'))
   include $this->FetchViewLocation('helper_functions', 'discussion');
?>

<div class="container">
    <div class="row">
        <div class="discussion">
            <div class="discussion-header">
                <?php $this->FireEvent('BeforeDiscussionOptions'); ?>

                <h1 class="discussion-header--title"><?php echo $this->Data('Discussion.Name'); ?></h1>

                <div class="discussion-header--star">
                    <?php echo WriteBookmarkLink(); ?>
                </div>


                <div class="discussion-header--options">
                    <?php echo WriteDiscussionOptions(); ?>
                    <?php echo WriteAdminCheck(); ?>
                </div>

                <?php $this->FireEvent('AfterDiscussionTitle'); ?>
                <?php $this->FireEvent('AfterPageTitle'); ?>
            </div>

            <div class="discussion-body">
                <?php include $this->FetchViewLocation('discussion', 'discussion'); ?>

                <?php $this->FireEvent('AfterDiscussion'); ?>
            </div>
        </div>

        <?php $this->FireEvent('CommentHeading'); ?>

        <ul class="comments">
            <?php include $this->FetchViewLocation('comments'); ?>
        </ul>

        <?php $this->FireEvent('AfterComments'); ?>

        <?php echo WriteCommentForm(); ?>

    </div>
</div>
