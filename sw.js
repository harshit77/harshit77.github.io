var CACHE_NAME="my-site-cahe-version1";
var urlToCache=['https://harshit77.github.io/css/commonCss.css','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'];


self.addEventListener('install',function(event){
	event.waitUntil(
	caches.open(CACHE_NAME).then(function(cache){
		console.log("Opened Cache");
		return cache.addAll(urlToCache);
	}).catch(function(error){
		console.log("Error in installation"+ error);
		
	})
	);
	
	
});


self.addEventListener('fetch',function(event){
	
	event.respondWith(
	caches.match(event.request).then(function(response){
		if (response)
		{return response;
		}
var fetchRequest=event.request.clone();	
		return fetch(fetchRequest).then(function(response){

		if(!response || response.status!==200)
		{return response;
		}
		var responseTocache=response.clone();
		
		caches.open(CACHE_NAME).then(function(cache){
			cache.put(event.request,responseTocache);
			
		});
		return response;
		});

		
	}));
	
});


self.addEventListener('push', function(event) {  

 event.waitUntil(  
    fetch("http://www.json-generator.com/api/json/get/ctSVbNVCGa").then(function(response) {  
      if (response.status !== 200) {  
        // Either show a message to the user explaining the error  
        // or enter a generic message and handle the
        // onnotificationclick event to direct the user to a web page  
        console.log('Looks like there was a problem. Status Code: ' + response.status);  
        throw new Error();  
      }

      // Examine the text in the response  
      return response.json().then(function(data) {  
       
        var title = data.title;  
        var message = data.message;  
        var icon = './images/service-img-6.jpg';  
        var notificationTag = data.notificationTag;

        return self.registration.showNotification(title, {  
          body: message,  
          icon: icon,  
          tag: notificationTag  
        });  
      });  
    }).catch(function(err) {  
      console.error('Unable to retrieve data', err);

      var title = 'An error occurred';
      var message = 'We were unable to get the information for this push message';  
      var icon = './images/service-img-6.jpg';  
      var notificationTag = 'notification-error';  
      return self.registration.showNotification(title, {  
          body: message,  
          icon: icon,  
          tag: notificationTag  
        });  
    })  
  );  
});
self.addEventListener('notificationclick',function(event){
	console.log("Received Notification Click"+event);
	event.notification.close();
	event.waitUntil(
	clients.openWindow('http://google.co.in')
	);
	
	
	
});