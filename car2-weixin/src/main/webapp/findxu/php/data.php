<?php
    $db = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
    mysql_select_db(SAE_MYSQL_DB);
    mysql_query("SET NAMES UTF8");
    $action = $_GET["action"];
    switch ($action) {
        case 'add':{
            foreach ($_GET as $key => $value) {
                $$key=$value;
            }
            $insert_sql="INSERT INTO pricemes(names,tel) VALUES('$names','$tel')";
            if (mysql_query($insert_sql)){
                echo '{"err":0}';
            }else {
                echo '{"err":1}';
            }
            break;
        }
        default:
            break;
    }
    mysql_close($db);

 ?>
