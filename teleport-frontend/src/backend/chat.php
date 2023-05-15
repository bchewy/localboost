<?php


var_dump($_POST);
// header('Location: http://localhost:3000/gp-chat-sample-interaction');

if($_SERVER["REQUEST_METHOD"] == "POST") {
        $user_query = $_POST['chatmessage'];
        $response = searchWithChat4($user_query);
//     $searchQuery = $_POST["search-field"];
//     $searchMethod = $_POST["search-method"];
//     if ($searchMethod == "completions") {
//         $response = searchWithCompletion($searchQuery);
//     } else if ($searchMethod == "chat4") {
//         $response = searchWithChat4($searchQuery);
//     }
//                                  else if ($searchMethod == "chat35") {
//         $response = searchWithChat35($searchQuery);
//     }

    echo '<div class="container-fluid mt-4 text-center">';
    echo '<h2>Some tools/tech/frameworks you can use:</h2>';
    echo '<div id="result" class="alert alert-primary">' . $response . '</div>';
    echo '</div>';

}




function searchWithChat4($user_query)
{
    $url = "https://api.openai.com/v1/chat/completions";
    $apiKey = "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";

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

function searchWithChat35($user_query)
{
    $url = "https://api.openai.com/v1/chat/completions";
    $apiKey = "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";

    $messages = [
        ["role" => "system", "content" => "You are here to help the user find web technologies, frameworks and tools based on what they are trying to build.  If the user asks for frameworks, provide frameworks, same for tools or web technologies. Do not say more than the names of the tools, technologies or frameworks. Do not provide extra text like 'Some tools could be.'"],
        ["role" => "user", "content" => $user_query]
    ];

    // Create request body
    $requestBody = [
        "model" => "gpt-3.5-turbo",
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


function searchWithCompletion($searchQuery)
{
    $url = "https://api.openai.com/v1/engines/text-davinci-003/completions";
    $apiKey = "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";

    $data = [
        "prompt" => "What web technologies can i use to build " . $searchQuery . "in point form",
        "max_tokens" => 150,
        "n" => 1,
        // "stop" => null,
        "temperature" => 0.8,
    ];

    $headers = [
        "Content-Type: application/json",
        "Authorization: Bearer " . $apiKey
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode == 200) {
        $responseData = json_decode($response, true);
        $result = $responseData["choices"][0]["text"];
        return $result;
    } else {
        return $response;
    }
}


?>