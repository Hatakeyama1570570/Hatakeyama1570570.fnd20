"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// elem.innerText = "JavaScriptで書く";

const tarea = document.querySelector("textarea"); //textareaの要素を変数に格納
const fipt = document.querySelector("#findtxt"); //findtxtの要素を変数に格納(idなので#)
const repipt = document.querySelector("#reptxt"); //reptxtの要素を変数に格納(idなので#)
const btn = document.querySelector("button"); //buttonの要素を変数に格納
const resultContainer = document.querySelector("#resultContainer"); //resultContainerの要素を変数に格納(idなので#)

btn.addEventListener("click", () => {
  const findtxt = fipt.value;
  const reptxt = repipt.value;
  const tagtxt = tarea.value;
  const resulttxt = tagtxt.replaceAll(findtxt, reptxt);
  const newelem = document.createElement("p");

  if (tagtxt !== resulttxt) {
    newelem.innerText = `${resulttxt}
    （成功!! 『${findtxt}』 を 『${reptxt}』 に置換しました）`;
    newelem.style.color = "blue";
  } else {
    newelem.innerText = `${resulttxt}
    （失敗!! 『${findtxt}』 は文字列に含まれていません）`;
    newelem.style.color = "red";
  }
  resultContainer.appendChild(newelem);
});

const refreshButton = document.querySelector("#refreshButton");
refreshButton.addEventListener("click", () => {
  location.reload(); // ページを再読み込み
});
