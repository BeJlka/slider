const color = {
  text: {
    blue: 0,
    red: 0,
    green: 0,
  },
  background: {
    blue: 250,
    red: 250,
    green: 250,
  },
};
let typeButton = 'text';

const options = {
  animate: 'slow',
  range: 'min',
  min: 0,
  max: 255,
  slide: (event, ui) => {
    color[typeButton][event.target.id.split('-')[1]] = ui.value;
    $(`#${event.target.id}`).text(ui.value); 
    typeButton === 'text'
      ? $('#lorem').css(
          'color',
          `rgb(${color.text.red}, ${color.text.green}, ${color.text.blue})`
        )
      : $('#lorem').css(
          'background-color',
          `rgb(${color.background.red}, ${color.background.green}, ${color.background.blue})`
        );
  },
};

$(function () {
  $('button').click((event) => {
    if (event.target.id === 'text') {
      typeButton = 'text';
      $('#text').addClass('active');
      $('#background').removeClass('active');
    } else {
      typeButton = 'background';
      $('#background').addClass('active');
      $('#text').removeClass('active');
    }

    $('#slider-green').slider({ value: color[typeButton].green });
    $('#slider-blue').slider({ value: color[typeButton].blue });
    $('#slider-red').slider({ value: color[typeButton].red });
  });

  $('#slider-green').slider({ ...options, value: color[typeButton].green });
  $('#slider-blue').slider({ ...options, value: color[typeButton].blue });
  $('#slider-red').slider({ ...options, value: color[typeButton].red });
});
