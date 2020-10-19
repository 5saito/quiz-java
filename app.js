const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [ 'スーパーファミコン','プレイステーション２','ニンテンドースイッチ','ニンテンドーDS'],
    correct:'ニンテンドーDS'
  }, {
    question: 'Appleの現最高責任者は次のうちどれ？',
    answers: [ 'マーク・ザッカーバーグ','スティーブ・ジョブズ','ティム・クック','孫正義'],
    correct:'ティム・クック'
  }, {
    question: '第二次世界大戦で、日本に原子爆弾が落とされた時のアメリカ大統領は誰でしょう？',
    answers: [ 'トルーマン','アイゼンハワー','ウィルソン','ルーズベルト'],
    correct:'トルーマン'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//定数の文字列をHTMLに反映させる
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;

  if(quizIndex < quizLength){    
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}