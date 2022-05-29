function t(t, e) {
  return function () {
    window.dashlyasync.push(t, arguments);
  };
}
if ("undefined" == typeof dashly) {
  var e = document.createElement("script");
  (e.type = "text/javascript"),
    (e.async = !0),
    (e.src = "https://cdn.dashly.app/api.min.js"),
    document.getElementsByTagName("head")[0].appendChild(e),
    (window.dashly = {}),
    (window.dashlyasync = []),
    (dashly.settings = {});
  for (var n = ["connect", "track", "identify", "auth", "onReady", "addCallback", "removeCallback", "trackMessageInteraction"], a = 0; a < n.length; a++) dashly[n[a]] = t(n[a]);
}
dashly.connect("4842-bfab1138692de29ad813e25bb4e");
