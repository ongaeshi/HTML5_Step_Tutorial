//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/03

function changeCpick(obj){
  setBGColor(obj.nodes.target.value);
  updateBGColorIfEnd();
}

window.addEventListener("load", function() {
  if (!isSetBGColor())
    setBGColor(document.getElementById("t2").value);
  else
    document.getElementById("t2").value = getBGColor();
  
  if (getStateKind() == STATE_END)
    updateBGColor();
}, true);
