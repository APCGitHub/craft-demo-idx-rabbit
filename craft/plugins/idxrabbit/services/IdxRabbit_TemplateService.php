<?php

namespace Craft;

use IdxRabbit\Twig\TwigService;

class IdxRabbit_TemplateService extends BaseApplicationComponent
{
	/**
	 * Twig service to render templates.
	 * 
	 * @var IdxRabbit\Services\TwigService;
	 */
	private $twigService;

	public function __construct()
	{
		$this->twigService = TwigService::getInstance();

		if(is_null($this->twigService)){
			throw new Exception('The IDX Rabbit Twig service was not properly instantiated.');
		}
	}

	/**
	 * Use the standalone twig library to parse the given template with params
	 * 
	 * @param  string $template
	 * @param  array  $params  
	 * @return html          
	 */
	public function render($template = '', $params = array())
	{
		if(empty($template))
			throw new Exception('You must pass in a template');

		if(strpos($template, '.html') === FALSE){
			$template .= '.html';
		}
		
		return $this->twigService->twig->render($template, $params);
	}
}