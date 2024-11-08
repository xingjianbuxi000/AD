// Quantumult X Script to remove "首页" (Home) tab in bottom bar

var body = $response.body;

// Regex pattern to find and remove "首页" entry in the code
body = body.replace(/"首页".*?\},?/g, "");

// Return the modified response body
$done({ body });