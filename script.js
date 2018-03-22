console.log("script.js loaded!");

var comNum = 0;
var observer = new MutationObserver(function (MutationRecord, MutationObserver){
	var now = new Date();
  	var time = now.toLocaleTimeString();

  	MutationRecord.forEach(function(MutRec,index,ar){
  		if (MutRec.target.nodeName == "SPAN") {
  			MutRec.addedNodes.forEach(function(div,index,ar){
  				var message = $(div.children[1])[0];
  				var data = JSON.stringify({cnt:comNum, time:time, user:$(message.children[0]).text() , comment:$(message.children[1]).text()});
  				sessionStorage['com' + comNum] = data;
  				console.log(data);
  				comNum = comNum + 1;
  			});
  		}
  	});
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	console.log(message);
	if (message.text == "recStart") {
		alert("comment recording started.");
		console.log("recStart");
		sessionStorage.clear();
		var now = new Date();
		sessionStorage.info = now.toLocaleString(); 
		observer.observe($(".mrWrapper")[0], {
			childList: true,
			subtree: true
		});
	} else if (message.text == "recStop") {
		console.log("recStop");
		observer.disconnect();

		//export
		var saveData;
		saveData = {info:sessionStorage.info};
		for (var i = 0; i <= comNum-1; i++) {
			saveData['com'+i] = JSON.parse(sessionStorage['com'+i]);
		}
		var saveBlob = new window.Blob([JSON.stringify(saveData,undefined,2)], {"type":"application/json"});
		var saveLink = $("<a></a>");
		saveLink.prop("href",window.URL.createObjectURL(saveBlob));
		saveLink.prop("download", "comment.json");
		saveLink[0].click();

		sessionStorage.clear();
	} else {
		console.error("Invalid Message");
	}
});
