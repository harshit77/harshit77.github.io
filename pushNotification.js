
var isPushEnabled=false;

window.addEventListener('load',function(){
var pushButton=document.querySelector(".js-pushButton");
pushButton.addEventListener('click',function(){
if(isPushEnabled){
unsubscribe();
console.log("Push is  not Enabled ");
}
else
{subscribe();

console.log("Push Enabled ");
}
});

if('serviceWorker' in navigator)
{
navigator.serviceWorker.register('./sw.js').then(initialiseState);
}
else{
console.log("Buddy Move to chrome");
}

/* Start of Initalise State */
//once the serviceWorker is registered set the initial state
function initialiseState()
{
if(!('showNotification' in ServiceWorkerRegistration.prototype)){
console.warn('showNotification is not supported');
return;
}
if(Notification.permission=="denied"){
console.log("Buddy You choose Not to notify me");
return;
}
//Checking Whether Push Manger is globally Available
if(!('PushManager' in window)){
console.log("Push Manager is not support");
return;
}

navigator.serviceWorker.ready.then(function(serviceWorkerRegisteration){

serviceWorkerRegisteration.pushManager.getSubscription()
.then(function(subscription){

pushButton.disabled=false;
if(!subscription)
{pushButton.disabled=false;
return;
}
sendSubscriptionToServer(subscription);
pushButton.textContent="Disable Push Message";
pushButton.disabled=true;


});

}).catch(function(err){

console.warn("Error in get Subscription",err);
});




}

/* End of Initalise State */

/*Start of Subscribe Method */
function subscribe(){
pushButton.disabled=true;
navigator.serviceWorker.ready.then(function(serviceWorkerRegisteration){
serviceWorkerRegisteration.pushManager.subscription().then(function(subscribe){
isPushEnabled=true;
pushButton.textContent="Disable Push Message";
pushButton.disabled=true;
sendSubscriptionToServer(subscribe);

}).catch(function(error){

if(Notification.permission==="denied")
{
pushButton.disabled=true;
console.warn("Buddy Permission is denied");
}
else{
pushButton.textContent="Enable Push Message";
pushButton.disabled=false;
console.log("Something goes Wrong may network requerst or gcm Sender"); 
}



});


});
}

/*End of Subscribe Method */

});

