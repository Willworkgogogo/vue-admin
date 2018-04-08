// paramToObj
export function paramToObj(url) {
  const search = url.split('?')[1]
  if (!search) return {}
  // TODO 细看下
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}