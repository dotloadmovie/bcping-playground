<?php

header('Content-Type: application/json');

$data = array();

$data['name'] = 'Sample Data';
$data['value'] = 'This is a sample value';

echo json_encode($data);