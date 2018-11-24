//-----creating search menu
chrome.contextMenus.create({
  title: "جستجو %s در لنز", 
  contexts:["selection"], 
  onclick: search
});

//----creating search function
function search(info,tab){
	chrome.tabs.create({
		url:"http://lenz.ir/search/" + info.selectionText
	})
}
