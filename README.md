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

## The difference between the two ?
localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time,
data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.


### Why would you use cookies vs local/session storage?
Cookies are primarily for reading server-side, local storage can only be read by the client-side.
so in your app, who needs this data — the client or the server?
If it's your client (your JavaScript), then by all means switch. You're wasting bandwidth by sending all the data in each HTTP header.
If it's your server, local storage isn't so useful because you'd have to forward the data along somehow (with Ajax or hidden form fields or something). This might be okay if the server only needs a small subset of the total data for each request.
