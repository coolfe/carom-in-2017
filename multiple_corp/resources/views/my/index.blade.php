<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>EC营销即时通|工作台</title>
    <link href="{$staticfile_domain.my}css/global.css" rel="stylesheet" type="text/css" />
    <link href="{$staticfile_domain.my}images/favicon.ico" type="image/ico" rel="shortcut icon" />
</head>

<body>
    <div class="wrapper">
        <!--左边菜单 开始-->
        {include file="templates/work/side.html" page="telcount_today"}
        <!--左边菜单 end-->
        <!--右边内容 开始-->
        <div class="rightContent" id="root">
            <div id="react-content">
            </div>
        </div>
      </div>
<div id="confirm-wrapper"></div>
<script>
    var USERID = '{$smarty.session.ec.userid}';
    var CORPID = '{$smarty.session.ec.corpid}'
    var ISPERSON = {if $person}true{else}false{/if};//用于区分是个人视图还是管理视图
</script>
</body>