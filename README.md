# Web-Storage



## What are local storage and session storage and what is the difference between the two?
	
Local Storage, Session Storage and Cookies both extend storage. and all are used to store data on the client side. Each one has its own storage and expiration limit.

#### local-Storage
	
The data stored in local-storage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.

stores data with no expiration data,and gets cleared only through JavaScript, or clearing the Browser Cashe / Locally Stored Data.

#### session-Storage

Similar to Local-Storage ....
Changes are only available per window. Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted.


#### Cookies
	
stores data that has to be sent back to the server with subsequent requests. Its 
expiration varies based on the type and the expiration duration can be set from either
server-side or client-side (normally from server-side).

Cookies are primarily for server-side reading (can also be read on client-side), 
localStorage and sessionStorage can only be read on client-side.



