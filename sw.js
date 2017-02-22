var CACHE_NAME="my-site-cahe-version1";
var urlToCache=['./css/commanCss.css','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'];


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