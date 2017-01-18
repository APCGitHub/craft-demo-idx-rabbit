<?php

namespace Craft;

use IdxRabbit\Query\QueryService;
use IdxRabbit\Bridge\CraftBridge;
use IdxRabbit\Api\ApiService;

class IdxRabbit_SearchController extends BaseController
{
	protected $allowAnonymous = true;
	
	public function actionRunSearch()
	{
		$this->requirePostRequest();

		$data = craft()->request->getPost();

		//Set up Services
		$queryService = new QueryService;
		$apiService = new ApiService(new CraftBridge);

		//Parse the search query
		$query = $queryService->parse($data['filter']);

		//Save the query in IDX
		$res = $apiService->saveSearch($query);

		//Get the request path
		$url = craft()->request->getPath();

		if(isset($data['redirect']))
			$url = $data['redirect'];

		//If successful then append the search id to the url
		if($res['success'])
			$url .= "?search_id={$res['data']['id']}";

		$this->redirect($url);
	}
}