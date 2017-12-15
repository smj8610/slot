var timers = [];

//イベントの登録
document.getElementById("stop1").onclick = function(){
  stopSlot(0);
}
document.getElementById("stop2").onclick = function(){
  stopSlot(1);
}

//スロット開始
startSlot();

function startSlot(){
  //タイマーを有効
  runSlot(0);
  runSlot(1);
}

//スロットの値を0~9で変化
function runSlot(num){
  var slotValue = document.getElementById("slot" + num);

  if(slotValue.innerHTML < 9){
    slotValue.innerHTML ++;
  }else{
    slotValue.innerHTML = 0;
  }

  timers[num] = setTimeout(function(){
    runSlot(num);
  },400);
}

//タイマーを止める
function stopSlot(num){
  clearTimeout(timers[num]);
}
