
var events = null;
var now = new Date();

$.getTime = function(zone, success) {
    var url = 'http://json-time.appspot.com/time.json?tz='
            + zone + '&callback=?';
    $.getJSON(url, function(o){
        success && success(new Date(o.datetime), o);
    });
};

function getParameterByName( name, href )
{
	if (href === undefined || href === null)
		href = window.location;
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( href );
	if( results === null )
		return null;
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getJSONEvents(url, callback) {
	console.log("getJSONEvents: " + url);
	$.getJSON(url, function(data) {
		var eventList = [];
		events = [];
		for (var idx = 0; idx < data.length; idx++) {
			var event = data[idx];
			var date = new Date(event.date);
			event.date = date;
			// console.log("Date: " + date);
			eventList.push(event);
		}
		events = sortEvents(eventList);
		events.forEach(function (e) {console.log(e.date);});
		console.log(events);
		callback();
	});
}

function displayNoEventUI() {
	console.log("displayNoEventUI");
	$("#content").load('/fr/ #events', function () {
		loadEventsForMainPage();
	});

}

function displayEvent(event) {
	console.log("Displaying Event: " + event.ident);
	var root = $("#event");
	var htitle = $("<h1 />");
	htitle.html(event.title);
	var hdate = $("<h4 />");
	hdate.html(event.date.format("dddd dd mmmm"));
	var habstract = $("<div />");
	habstract.html(event.abstract);
	var hdescription = $("<div id='event-description' />");

	root.append(htitle);
	root.append(hdate);
	root.append(habstract);
	root.append(hdescription);

	if (event.description_id !== undefined) {
		var load_url = '/events/templates/' + event.description_id + '/index.html';
		console.log("loading data: " + load_url);
		$('#event-description').load(load_url);
	} else {
		hdescription.html(event.description);
	}
}

function eventsLoaded() {
	console.log("eventsLoaded");

	// get event_id;
	var event_id = getParameterByName("event");
	console.log("event_id: " + event_id);
	if (event_id === null) {
		console.log("No event ID supplied. Display Errror Message");
		return displayNoEventUI();
	}

	for (var idx = 0; idx < events.length; idx++) {
		var event = events[idx];
		if (event.ident == event_id) {
			displayEvent(event);
			return;
		} else
			console.log(event.ident);
	}
	return displayNoEventUI();
}

function sortEvents(eventList) {
	return eventList.sort(function(a, b) {
		return a.date<b.date?-1:a.date>b.date?1:0;
	});
}

function pastEvents() {
	var past_list = [];
	for (var idx=0; idx<events.length; idx++) {
		if (events[idx].date < now)
			past_list.push(events[idx]);
		else
			break;
	}
	return past_list;
}

function futureEvents() {
	var future_list = [];
	for (var idx=0; idx<events.length; idx++) {
		if (events[idx].date > now)
			future_list.push(events[idx]);
	}
	return future_list;
}

function nextEvent() {
	console.log("nextEvent");
	previous_event = null;
	for (var idx=0; idx<events.length; idx++) {
		if (events[idx].date > now) {
			return events[idx];
		}
	}
	if (events.length > 0) {
		return events[events.length - 1];
	}
}

function loadEvents() {
	console.log("loadEvents");
	getJSONEvents('/events/events.json', eventsLoaded);
}

function loadEventsForMainPage() {
	console.log("loadEventsForMainPage");
	getJSONEvents('/events/events.json', prepareEventsForMainPage);
}

function addEventToTable(eventList, target) {
	eventList.forEach(function (event) {
		var row = $("<tr />");
		var hDate = $("<td />");
		hDate.html(event.date.format("dd mmmm"));
		var link = $("<a />");
		link.attr('href', "/events/?event=" + event.ident);
		link.html(event.title);
		var hTitle = $("<td />");
		hTitle.append(link);
		row.append(hDate);
		row.append(hTitle);
		target.append(row);
	});
}

function prepareEventsForMainPage() {
	console.log("prepareEventsForMainPage");

	// set next event
	var next_event = nextEvent();
	console.log("next_event: " + next_event);
	console.log("next_event: " + next_event.ident);
	var hnextTitle = $("<h3>Cette semaine</h3>");
	var hnextSubTitle = $("<h4 />");
	hnextSubTitle.html(next_event.date.format("dd mmmm") + " – " + next_event.title);
	var hnextAbstract = $(next_event.abstract);
	var hnextLink = $("<p><a href='/events/?event=" + next_event.ident + "'>En savoir plus</a></p>");

	var root = $(".next-event");
	root.append(hnextTitle);
	root.append(hnextSubTitle);
	root.append(hnextAbstract);
	root.append(hnextLink);

	// set events to come
	var future_events = futureEvents();
	addEventToTable(future_events, $("#tab1 tbody"));

	// set past events
	var past_events = pastEvents();
	addEventToTable(past_events, $("#tab2 tbody"));
}

$.getTime('GMT', function(time){
	now = time;
});