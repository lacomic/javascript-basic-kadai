//定数に代入する
const btnItem = document.getElementById('btn');

//定数に代入する
const textItem = document.getElementById('text');

btnItem.addEventListener('click', () => {
  setTimeout(() => {
    //textItemの文字を2秒後に置き換える
    textItem.textContent = "ボタンをクリックしました";
  }, 2000);
});
