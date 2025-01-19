// Define a function to remove unwanted ad elements based on the provided structure
(function() {
    // This function will be used to remove specific DOM elements by their reference or id
    function removeAdElements() {
        // Remove any elements with the class or id that seem related to ads
        const adElements = [
            'zsyhLianghao',         // Class/ID related to ad
            'lianghaoDelete',       // Another class/ID related to ad
            'zsyhLianghaoDelete',   // Delete stored ad data
            'zsyhLianghaoDeleteSC'  // Additional ad data deletion
        ];

        // Loop through all ad elements and remove them from the DOM
        adElements.forEach(elementId => {
            const adElement = document.getElementById(elementId) || document.querySelector(`.${elementId}`);
            if (adElement) {
                adElement.style.display = 'none'; // Hide the element instead of removing it directly
            }
        });
    }

    // Call the function to remove the ad elements after the page is loaded
    window.addEventListener('load', removeAdElements);
    
    // Additional function to clean up stored data related to ads (optional)
    function clearAdData() {
        const adDataKeys = [
            'zsyhLianghaoDelete',
            'zsyhLianghaoDeleteSC'
        ];

        adDataKeys.forEach(key => {
            if (localStorage.getItem(key)) {
                localStorage.removeItem(key); // Remove ad-related data from localStorage
            }
        });
    }

    // Clear stored ad data on page load
    window.addEventListener('load', clearAdData);

})();