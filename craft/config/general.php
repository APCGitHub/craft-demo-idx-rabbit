<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs (true, false, "auto")
        'omitScriptNameInUrls' => 'auto',

        // Control Panel trigger word
        'cpTrigger' => 'admin',
    ),

    '.dev' => array(
        'siteUrl' => 'http://craft.idxrabbit.dev',
        'environmentVariables' => array(),
        'devMode' => true,
    ),

    '.com' => array(
        'siteUrl' => 'http://craft.idxrabbit.com',
        'environmentVariables' => array(),
        'devMode' => false,
    )    
);
