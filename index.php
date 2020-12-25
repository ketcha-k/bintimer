<!doctype html>
<title>binT</title>
<head>
    <title></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- ウェブアプリマニフェストの読み込み -->
    <link rel="manifest" href="manifest.json">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"
            integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f"
            crossorigin="anonymous"></script>
    <script src="./static/honoka/js/bootstrap.js"></script>
    <?php include("g_fonts.php"); ?>
    <link rel="stylesheet" href="static/honoka/css/bootstrap.css">
	
    <link rel="stylesheet" href="./static/css/style1.css">
    <script type=text/javascript src="./static/js/sync.js"></script>
    <script type=text/javascript src="./static/js/binTmain.js"></script>
    <script type=text/javascript src="./static/js/lib/ketJSview.js"></script>
    <script type=text/javascript src="./static/js/binTdisp.js"></script>
    <script type=text/javascript src="./static/js/key.js"></script>
    <!--<script src=""></script>-->
    <script>
            if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').then(function(registration) {
                // 登録成功
                console.log('ServiceWorker の登録に成功しました。スコープ: ', registration.scope);
            }).catch(function(err) {
                // 登録失敗
                console.log('ServiceWorker の登録に失敗しました。', err);
            });
        }
    </script>
</head>
 
<body class="text-white kt-bg">
    <header class=""></header>
    <div class="content container">
        
        <div class="ketv demo-0026-tx-1" id="ketv0" >  </div>

        <div class="text-muted" style="text-align: center">
            tap!
        </div>
    </div>
 
    
</body>
</html>
