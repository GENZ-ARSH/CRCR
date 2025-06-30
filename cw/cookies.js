// Function to check if a cookie exists by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Check if cw_cookies exists
const hasCwCookie = document.cookie
    .split(';')
    .some(cookie => cookie.trim().startsWith('cw_cookies='));

// If cw_cookies doesn't exist, redirect to login page
if (!hasCwCookie) {
    console.log('cw_cookies not found, redirecting to login page');
    window.location.replace("login.html");
}
