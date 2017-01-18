<?php

namespace Craft;

class IdxRabbitVariable
{
	/**
	 * Render an IDXRabbit template.
	 * 
	 * @param  string $template
	 * @return string          
	 */
	public function render($template = '', $params = array())
	{
		$html = craft()->idxRabbit_template->render($template, $params);

		$html = TemplateHelper::getRaw($html);

		return $html;
	}
}