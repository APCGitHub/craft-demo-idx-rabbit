<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
	'*' => array(
		'tablePrefix' => 'craft'
	),

	'.dev' => array(
		'server' => 'localhost',
		'database' => 'craft_demo_idxrabbit',
		'user' => 'root',
		'password' => 'root',
	),

	'.com' => array(
		'server' => 'localhost',
		'database' => 'craft_demo_idxrabbit',
		'user' => 'forge',
		'password' => 'tCNjL1EhCIIHGFLHpWeA',
	)
);
