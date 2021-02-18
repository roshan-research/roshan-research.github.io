// handle show code as type writer in hazm
var lines = $('.lines');
const lines_array = Array.from(lines[0].children);
var i = 0;
var j = 0;
var t;
var line = [];
var speed = 50;
const height_of_lines = lines.height();

lines.empty();
lines.height(height_of_lines);

function sleep_for_addChild(ms, line_children) {
  return new Promise(resolve => {
    t = setTimeout(function () {
      add_line_child(line_children);
    }, ms)
  }).then(function () {
    clearTimeout(t);
  });
}

function sleep_for_addLine(ms) {
  return new Promise(resolve => {
    t = setTimeout(add_line, ms)
  }).then(function () {
    clearTimeout(t);
  });
}

async function add_line_child(line_children) {
  if (j < line_children.length) {
    $(".lines div").last().append(line_children[j].outerHTML);
    j++;
    await sleep_for_addChild(speed, line_children);
  } else {
    j = 0;
    await sleep_for_addLine(speed)
  }
}

async function add_line() {
  if (i < lines_array.length) {
    line = lines_array[i];
    var className = line ? line.className : '';
    var line_children = Array.from(line ? line.children : []);
    lines.append('<div class="' + className + '"></div>');
    i++;
    await add_line_child(line_children);
  }
  else {
    i = 0;
    lines.empty();
    await sleep_for_addLine()
  }
}


$(document).ready(function () {
  return add_line()
});
