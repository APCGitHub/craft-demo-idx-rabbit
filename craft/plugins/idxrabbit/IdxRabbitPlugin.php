<?php

namespace Craft;

use IdxRabbit\Twig\TwigService;

class IdxRabbitPlugin extends BasePlugin 
{
	public function getName()
	{
		return Craft::t('IDX Rabbit');
	}

	public function getVersion()
	{
		return '0.0.1';
	}

	public function getDeveloper()
	{
		return 'Anecka';
	}

	public function getDeveloperUrl()
	{
		return 'http://anecka.com';
	}

	public function init()
	{
		require_once __DIR__ .'/vendor/autoload.php';

		$path = craft()->path->getPluginsPath() . 'idxrabbit/templates/idxrabbit';

		TwigService::getInstance($path, 'craft');
	}

	public function defineSettings()
	{
		return array(
			'key' => array(AttributeType::String, 'required' => true),
		);
	}

	public function getSettingsHtml()
	{
		return craft()->templates->render('idxrabbit/settings', array(
			'settings' => $this->getSettings(),
		));
	}
}