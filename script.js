(function (u, z, a) {
  if (u["a_id"]) {
    return;
  }
  u["a_id"] = a;
  u["dm"] = u.location.hostname;
  var s = z.createElement("script");
  s.async = true;
  s.src = "https://assets.gainserv.in/wrapper.dev.min.js";
  var t = z.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(s, t);
})(window, document, "I84N7SQKE7");
