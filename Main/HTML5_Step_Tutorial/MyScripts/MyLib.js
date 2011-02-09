//
// @file 
// @brief
// @author ongaeshi
// @date   2011/01/30

// --- Event ------------------------------------

// Eventオブジェクトの互換性を上げる
var fixEvent = function(ev) {
  // IE don't have ev
  ev = ev || window.event;
  
  // IE, Chrome, Safari has offsetX
  // Firefox has layerX/Y
  if (ev.offsetX == undefined)
    ev.offsetX = ev.layerX;
  if (ev.offsetY == undefined)
    ev.offsetY = ev.layerY;

  return ev;
}

// --- Math ------------------------------------  

var MyMath = (function() {
  return {
    rate: function(from, to, value) {
      return (value - from) / (to - from);
    },

    lerp: function(from, to, rate) {
      return (to - from) * rate + from;
    },

    // 整数値を返す
    // randi(v1)    ...  0 <= value <= v1
    // randi(v1,v2) ... v1 <= value <  v2
    randi: function(v1, v2) {
      if (v2 == null)
        return Math.floor(Math.random() * v1);
      else
        return Math.floor(Math.random() * (v2 - v1) + v1 + 1);
    },

    deg2rad: function(degree) {
      return ( degree * Math.PI / 180 );
    },

    rad2deg: function(radian) {
      return ( radian * 180 / Math.PI );
    },
  };
})();

// --- background color ------------------------------------

var isSetBGColor = function(color) {
  return getBGColor() != null;
}

var setBGColor = function(color) {
  window.localStorage.setItem("BackGroundColor", color);
}

var getBGColor = function(color) {
  return window.localStorage.getItem("BackGroundColor");
}

var updateBGColor = function() {
  document.body.style.background = getBGColor();
}
  
