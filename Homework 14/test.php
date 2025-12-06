<?php
print_r($_POST);
file_write_contents('data.txt', print_r($_POST,true));
echo "Thank you!";
?>