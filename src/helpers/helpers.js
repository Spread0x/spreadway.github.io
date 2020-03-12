export const getLocationClass = () => {
  var loc;
  if (typeof window !== "undefined") {
    loc = window.location.pathname
  } else {
    loc = '/'
  }

  if (loc == '/') {
    return 'root'
  } else {
    return replaceAll(loc, '/', '')
  }
}

function replaceAll(originalString, find, replace) {
  return originalString.replace(new RegExp(find, 'g'), replace);
};
