<?php if (!defined('APPLICATION')) exit();

    $Session = Gdn::Session();
    include_once $this->FetchViewLocation('helper_functions', 'discussions', 'vanilla');

if ($Description = $this->Description()) {
   echo Wrap($Description, 'div', array('class' => 'P PageDescription'));
}

$this->FireEvent('AfterPageTitle');
include $this->FetchViewLocation('Subtree', 'Categories', 'Vanilla');
$this->FireEvent('AfterCategorySubtree');

$PagerOptions = array('Wrapper' => '<span class="PagerNub">&#160;</span><div %1$s>%2$s</div>', 'RecordCount' => $this->Data('CountDiscussions'), 'CurrentRecords' => $this->Data('Discussions')->NumRows());

if ($this->Data('_PagerUrl'))
   $PagerOptions['Url'] = $this->Data('_PagerUrl');

if ($this->DiscussionData->NumRows() > 0 || (isset($this->AnnounceData) && is_object($this->AnnounceData) && $this->AnnounceData->NumRows() > 0)) {
?>

<div class="container">

    <div class="discussions">

        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="discussions-header col-md-7">Vorschlag</th>
                    <th class="discussions-header col-md-1">Stimmen</th>
                    <th class="discussions-header col-md-1">Kommentare</th>
                    <th class="discussions-header col-md-1">Besuche</th>
                    <th class="discussions-header col-md-2">Letzte Aktivität</th>
                </tr>
            </thead>
            <tbody>
                <?php include($this->FetchViewLocation('discussions', 'Discussions', 'Vanilla')); ?>
            </tbody>
        </table>
    </div>
</div>

<?php

echo '<div class="PageControls Bottom">';
   PagerModule::Write($PagerOptions);
   echo Gdn_Theme::Module('NewDiscussionModule', $this->Data('_NewDiscussionProperties', array('CssClass' => 'Button Action Primary')));
echo '</div>';
} else {
   ?>
   <div class="Empty"><?php echo T('No discussions were found.'); ?></div>
   <?php
}
