<?php


var_dump($_POST);
// header('Location: http://localhost:3000/gp-chat-sample-interaction');

if($_SERVER["REQUEST_METHOD"] == "POST") {
        $user_query = $_POST['chatmessage'];
        $response = searchWithChat4($user_query);
       echo  json_encode($response);
}

function searchWithChat4($user_query)
{
    $url = "https://api.openai.com/v1/chat/completions";
    // $apiKey = API_KEY;

    $messages = [
        ["role" => "system", "content" => "You are a helpful assistant to help small businesses find a solution or student to assist the business from our platform, LocalBoost'"],
        ["role" => "user", "content" => $user_query]
    ];

    // Create request body
    $requestBody = [
        "model" => "gpt-4",
        "messages" => $messages,
        "max_tokens" => 120
    ];

    // Encode request body as JSON
    $jsonRequest = json_encode($requestBody);



    // Set request headers
    $headers = [
        "Content-Type: application/json",
        "Authorization: Bearer " . $apiKey
    ];

    // Initialize cURL session
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonRequest);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);


    // Execute cURL request
    $response = curl_exec($ch);

    // Close cURL session
    curl_close($ch);

    // Decode JSON response into an associative array
    $responseDataArray = json_decode($response, true);
    // echo var_dump($responseDataArray);
    // return null;
    $message = $responseDataArray['choices'][0]['message']['content'];

    // Return the system message
    return $message;
}

?>