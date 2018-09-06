export const removeLocationHash = () => {
  // Remove the hash preserving any query params
  const uri = window.location.toString();
  if (uri.indexOf("#") > 0) {
    const cleanUri = uri.substring(0, uri.indexOf("#"));
    window.history.replaceState({}, document.title, cleanUri);
  }
};

export const setLocationHash = newHash => {
  window.location.hash = newHash;
};

export const windowRedirect = (
  redirectURL = "https://jestjs.io/",
) => {
  // location.assign looks like the best option to use for a redirect
  // it preserves the previous history entry, unlike location.replace
  // and it's better to test rather than just setting the url directly
  //  i.e. window.location.href= ""
  window.location.assign(redirectURL);
};
