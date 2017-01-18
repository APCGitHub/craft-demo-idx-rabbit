<?php

namespace Craft;

use IdxRabbit\Api\ApiService;
use IdxRabbit\Bridge\CraftBridge;

class IdxRabbit_LeadsController extends BaseController
{
	protected $allowAnonymous = array(
		'actionSendLead',
	);
	
	public function actionSendLead()
	{
		$this->requirePostRequest();

		$data = craft()->request->getPost();

		//Set up Services
		$apiService = new ApiService(new CraftBridge);

		$res = $apiService->sendLead($data);

		//Get the request path
		$url = craft()->request->getPath();

		if(isset($data['redirect']))
			$url = $data['redirect'];

		//If successful then append the search id to the url
		if($res['success'])
			$url .= "?success=true";
		else //TODO: Need to revisit what should happen here
			return $this->redirectToPostedUrl();

		$this->redirect($url);
	}
}