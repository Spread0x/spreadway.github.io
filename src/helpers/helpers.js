export const getLocationClass = () => {
  let loc = window.location.pathname
  if (loc == '/') {
    return 'root'
  } else {
    return loc.replace('/', '')
  }
}
