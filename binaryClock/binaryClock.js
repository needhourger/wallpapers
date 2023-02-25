Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
setInterval(() => {
  // console.log("tick");
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let second = date.getSeconds();
  document.getElementById("text").innerText = `${date.format("hh:mm")}`;
  document.getElementById("date").innerText = `${date.format("—— yyyy/MM/dd")}`
  const list = [
    second % 10,
    parseInt(second / 10),
    min % 10,
    parseInt(min / 10),
    hour % 10,
    parseInt(hour / 10),
  ];
  let index = 0;
  while (list.length > 0) {
    let tmp = list.pop();
    for (let i = 0; i < 4; i++) {
      if (tmp % 2 === 1) document.getElementById(`${index}`).className = "show";
      else document.getElementById(`${index}`).className = "";
      tmp >>= 1;
      index += 1;
    }
  }
}, 1000);
