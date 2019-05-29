// Grab all tab & tab content items to create node list (like an array - so can loop thru)
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Function to select tab content item (takes an event paramater)
function selectItem(e) {
 // Remove border from original tab before placing at new position
 removeBorder();
 // Add border to current tab
 this.classList.add("tab-border");
}

// Remove border function
function removeBorder() {
 tabItems.forEach(item => item.classList.remove("tab-border"));
}

// Loop through the nodelist(array) & listen for event
tabItems.forEach(item => item.addEventListener("click", selectItem));

console.log("Cunts");