<?php

namespace App\Helpers;

class APIHelper
{
    //  API url constants.
    const DEV_API = '';
    const PRODUCTION_API = '';

    /**
     * Function Case: Get data from the API.
     * @return string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public static function GetApi($url, $body = null)
    {
        // Get the header information from the client ID.
        $headers = self::ClientHeaders();

        // Query the API with the header and the url.
        $client = new \GuzzleHttp\Client(['headers' => $headers]);
        $request = $client->get(self::getApiEnv() . $url, $body);

        if ($response = $request->getStatusCode() !== 200) {
            dd('Something has gone wrong.');
        }

        // Get the content.
        $response = $request->getBody()->getContents();

        // Return the data.
        return $response;
    }

    /**
     * Function Case: Post data to the API.
     * @return \Psr\Http\Message\ResponseInterface
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public static function PostApi($url, $body)
    {
        // Get the header information from the client ID.
        $headers = self::ClientHeaders();

        $client = new \GuzzleHttp\Client(['headers' => $headers]);

        $response = $client->request("POST", self::getApiEnv() . $url, $body);

        return $response;
    }

    /**
     * Function Case: Update data through the APi.
     * @return \Psr\Http\Message\ResponseInterface
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public static function PutApi($url, $body)
    {
        // Get the header information from the client ID.
        $headers = self::ClientHeaders();

        $client = new \GuzzleHttp\Client(['headers' => $headers]);

        $response = $client->request("PUT", self::getApiEnv() . $url, $body);

        return $response;
    }

    /**
     * Function Case:  header details.
     * @return  array
     */
    private static function ClientHeaders()
    {
        // Return the client information.
        return [
            'Content-Type' => 'application/json'
        ];

    }

    /**
     * Function Case: Set the API link.
     * @return string
     */
    private static function getApiEnv()
    {
        if (config('app.env') === 'production') {
            return self::PRODUCTION_API;
        }

        return self::DEV_API;
    }
}
