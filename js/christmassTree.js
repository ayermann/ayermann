const right__box = document.querySelector('.rightbox__content');
const tree = document.querySelector('.footer__christmassTree');
const treeBox = document.querySelector('.tree');
right__box.style.display = 'flex';

function showTree(){
	if(right__box.style.display === 'flex'){
		right__box.style.display = 'none'
		treeBox.style.display='block';
	}else{
		right__box.style.display = 'flex';
		treeBox.style.display='none';
	}};





	var ball = document.querySelector('.charm1');

ball.onmousedown = function(e) {
  ball.style.position = 'absolute';
  moveAt(e);
  document.body.appendChild(ball);
  ball.style.zIndex = 1000;
  function moveAt(e) {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
  }
  document.onmousemove = function(e) {
    moveAt(e);
	}
  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  }
}