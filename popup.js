var tabId;

$(window).on("load",function(){
	//url check

	console.log("popupLoaded");
	chrome.tabs.query({"active":true},function(tab){
		tab.forEach(function(value, index, array){
			if (value.url.indexOf("https://www.mirrativ.com/live/") == 0) {
				tabId = value.id;
			}
		});
	});
	console.error(tabId);
	if (!tabId) {
		console.error("Invalid Url.");
	}
});


$("#startButton").click(function(){
	console.log("startButton pressed.");
	chrome.tabs.sendMessage(tabId, {"text":"recStart"});
});
	

$("#stopButton").click(function(){
	chrome.tabs.query({"active":true},function(tab){
		console.log("stopButton pressed.");
		chrome.tabs.sendMessage(tabId, {"text":"recStop"});
	});
});