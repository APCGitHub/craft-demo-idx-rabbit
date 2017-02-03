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
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',
    ),

    '.app' => array(
        'siteName' => getenv('APP_NAME', ''),
        'siteUrl' => getenv('APP_URL', ''),
        'environmentVariables' => array(
        ),
        'devMode' => getenv('APP_DEBUG', TRUE),
    ),

    '.dev' => array(
        'siteName' => getenv('APP_NAME', ''),
        'siteUrl' => getenv('APP_URL', ''),
        'environmentVariables' => array(
        ),
        'devMode' => getenv('APP_DEBUG', TRUE),
    ),

    '.com' => array(
        'siteName' => getenv('APP_NAME', ''),
        'siteUrl' => getenv('APP_URL', ''),
        'environmentVariables' => array(
        ),
        'devMode' => getenv('APP_DEBUG', false),
    )    
);
