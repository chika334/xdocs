
var searchPattern = {
    
    "./quick.html":["quick","QUICK","start","Start","START","welcome","payment","overview","business","netApp","merchants","Details"],
    "./fill.html":["fill","FILL","Fill","merchant","BANK","Bank","bank","BANK","customer","verification","Merchant"],
    "./company.html":["company","COMPANY","DEVELOPER","Details","Developer","UNDERSTANDING","understanding","upload","multiple"],
    "./live.html":["keys","KEYS","webhooks","PRIVATE","PUBLIC","private","public"],
    "./libraries.html":["PHP","Java","Python","WordPress","Node.js","Shopify","SDKs","Libraries"],
    
};

var cachedSearch = null;
var allMergekeys = [];

var getCacheSearch = () => {
    if (cachedSearch == null) {
        cachedSearch = {};
        allMergekeys = [];
        for (let key of Object.keys(searchPattern)) {
            const newKey = searchPattern[key].join(" ");
            cachedSearch[newKey] = key;
            allMergekeys.push(newKey);
        }
    }
    return cachedSearch;
};


var input = document.getElementById("search");

var handleChange = () => {

    searchProcessor(input.value);
};



var searchProcessor = (input) => {
    var cached = getCacheSearch();
    for (let k of allMergekeys) {
        console.log(cached[k]);

        if (isMatch(k, input)) {
            window.location.replace(cached[k]);
            return;
        }
    }

    window.location.replace("e404.html");
};

function isMatch(searchOnString, searchText) {
    searchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    return (
        // searchOnString.match(new RegExp("\\b" + searchText + "\\b", "i")) != null
        searchOnString.match(searchText) != null
    );
}
