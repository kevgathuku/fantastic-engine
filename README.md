###  Testing URL changes with Jest
[![Build Status](https://semaphoreci.com/api/v1/kevgathuku/fantastic-engine/branches/master/shields_badge.svg)](https://semaphoreci.com/kevgathuku/fantastic-engine)

Common scenarios for page URL changes in a React app + tests   
Included examples:

- Changing the URL hash

```javascript
  window.location.hash = '#newHash';
```

- Redirecting to a different site

```javascript
  const newURL = "https://kevgathuku.me";
  window.location.assign(newURL);
```


Options available for redirect:
1. `window.location.assign(newURL)`

 Notes:
  - Preserves the history   
      i.e. the user can go back to the page they were on before the redirect
  - Easy to test
  - My preferred method 😃

2. Directly modify the location

  ```javascript
    window.location.href = "https://kevgathuku.me"
  ```
  
  Notes: 
  - Not easily testable

3. `window.location.replace(newURL)`

Notes:
 - Easy to test
 - Replaces the current page in the session history  
 i.e. Not possible to use the back button to navigate to the previous page
