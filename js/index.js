window.addEventListener('load', function () {
  const mario = document.querySelector('.app__playground__mario');
  const ctrlHeight = mario.offsetHeight;
  const ctrlWidth = mario.offsetWidth;

  mario.addEventListener('keydown', event => {
    let topKey = mario.offsetTop;
    let leftKey = mario.offsetLeft;
    const defaultBorder = `5px solid rgb(248, 120, 0)`;
    const borderBlue = '5px solid blue';

    //space
    if (!event.repeat) {
      if (!event.ctrlKey) {
        if (event.keyCode == 32) {
          event.target.style.top = topKey - 50 + 'px';
          setTimeout(function () {
            event.target.style.top = topKey + 0 + 'px';
          }, 50);
        }
      }
    }

    // ctrl
    if (!event.repeat) {
      if (event.keyCode == 17) {
        event.target.style.width = (ctrlWidth / 100) * 115 + 'px';
        event.target.style.height = (ctrlHeight / 100) * 60 + 'px';
      }
    }

    //reset style
    if (!event.repeat) {
      setTimeout(function () {
        event.target.style.border = defaultBorder;
        event.target.style.background = `url(./img/icon/New_Super_Mario_Bros_U_Deluxe.png) no-repeat center / contain`;
      }, 2000);
    }

    if (!playground__block()) {
      return (event.target.style.background = `url(./img/icon/oops.png) no-repeat center / contain`);
    }

    //Bottom
    if (event.keyCode == 40) {
      if (!event.ctrlKey) {
        event.target.style.top = topKey + 20 + 'px';
        event.target.style.borderBottom = borderBlue;
        event.target.style.background = `url(./img/icon/mario_top.png) no-repeat center / contain`;
      }
    }

    //Top
    if (event.keyCode == 38) {
      if (!event.ctrlKey) {
        event.target.style.top = topKey - 20 + 'px';
        event.target.style.borderTop = borderBlue;
        event.target.style.background = `url(./img/icon/mario_top.png) no-repeat center / contain`;
      }
    }

    // Left
    if (event.keyCode == 37) {
      event.target.style.left = leftKey - 20 + 'px';
      event.target.style.borderLeft = borderBlue;
      event.target.style.background = `url(./img/icon/Mario_left.png) no-repeat center / contain`;
    }

    //right
    if (event.keyCode == 39) {
      event.target.style.left = leftKey + 20 + 'px';
      event.target.style.borderRight = borderBlue;
      event.target.style.background = `url(./img/icon/mario_right.png) no-repeat center / contain`;
    }
  });

  mario.addEventListener('keyup', eventUp => {
    //ctrl
    if (!eventUp.repeat) {
      if (eventUp.keyCode == 17) {
        eventUp.target.style.width = ctrlWidth + 'px';
        eventUp.target.style.height = ctrlHeight + 'px';
      }
    }
  });

  function playground__block() {
    const playground = document.querySelector('.app__playground');
    // Right wall
    if (mario.offsetLeft + mario.offsetWidth >= playground.clientWidth) {
      mario.style.left = playground.clientWidth - mario.offsetWidth - 1 + 'px';
      return false;
    }

    // Left wall
    if (mario.offsetLeft <= 0) {
      mario.style.left = 1 + 'px';
      return false;
    }

    // Bottom wall
    if (mario.offsetTop + mario.offsetHeight - 10 >= playground.clientHeight) {
      mario.style.top = playground.clientHeight - mario.offsetHeight - 1 + 'px';
      return false;
    }

    //Top wall
    if (mario.offsetTop <= 0) {
      mario.style.top = 1 + 'px';
      return false;
    }
    return true;
  }
});
