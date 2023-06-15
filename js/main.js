const tabItems = document.querySelectorAll(".tab-item");
const tabContentItemms = document.querySelectorAll(".tab-content-item");

// Select tab content
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add("tab-border");
    //grab content item from dom
    const tabContentItemms = document.querySelector('#${thid.id}-content-item');

    // add show class
    tabContentItemms.classList.add("show");
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow(){
    tabContentItemms.forEach(item => item.classList.remove("show"));
}
// listen for tab click 
tabItems.forEach(item => item.addEventListener("click", selectItem));