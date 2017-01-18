<?php

namespace Craft;

use IdxRabbit\Api\ApiService;
use IdxRabbit\Bridge\CraftBridge;
use IdxRabbit\SocialService;

class IdxRabbit_ProspectsController extends BaseController
{
	protected $allowAnonymous = true;

	public function actionSocialLogin()
	{
		$this->requirePostRequest();

		$data = craft()->request->getPost();
		$provider = $data['provider'];
		$bridge = new CraftBridge();

		$current_url = craft()->request->getPath();
		$current_url = craft()->getSiteUrl() . $current_url;

		$url = SocialService::buildLoginUrl(array(
			'redirect' => $current_url,
			'api_token' => $bridge->key(),
			'action_redirect' => craft()->getSiteUrl() . "actions/idxRabbit/prospects/saveSession",
		), $provider);

		$this->redirect($url);
	}

	public function actionSaveSession()
	{
		$query = craft()->request->query;

		if(!isset($query['prospect_id']) || !isset($query['redirect'])){
			$this->redirect('/');
		}

		$prospect_id = $query['prospect_id'];
		$redirect = $query['redirect'];

		SocialService::update(new CraftBridge, $prospect_id);

		$this->redirect($redirect);
	}

	public function actionFavoriteListing()
	{
		$this->requirePostRequest();

		/**
		 * Must be logged in to perform this action
		 */
		if(!SocialService::loggedIn()) {
			return $this->redirectToPostedUrl();
		}

		$sess_prospect = craft()->httpSession->get('prospect');
		$data = craft()->request->getPost();
		$current_url = craft()->request->getPath();
		$current_url = craft()->getSiteUrl() . $current_url;

		$data['listing_url'] = $current_url;

		$apiService = new ApiService(new CraftBridge);

		$res = $apiService->favoriteListing($sess_prospect['id'], $data);

		SocialService::update(new CraftBridge, $sess_prospect['id']);

		if(isset($res['error'])){
			IdxRabbitPlugin::log(print_r($res['error']));
		} elseif(isset($res['errors'])) {
			IdxRabbitPlugin::log(print_r($res['errors']));
		}

		$this->redirectToPostedUrl();
	}
}