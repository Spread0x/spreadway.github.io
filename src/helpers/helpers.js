export const getLocationClass = () => {
  let loc = window.location.pathname
  if (loc == '/') {
    return 'root'
  } else {
    return replaceAll(loc, '/', '')
  }
}

function replaceAll(originalString, find, replace) {
  return originalString.replace(new RegExp(find, 'g'), replace);
};
