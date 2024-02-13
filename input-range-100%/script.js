const slider = document.querySelector('#myRange');
const output = document.querySelector('#value');

output.innerHTML = parseInt(slider.value);

slider.addEventListener('input', () => {
  const value = parseFloat(slider.value);

  const displayValue = Math.round(value);
  output.innerHTML = displayValue;

  const x = (value / slider.max) * 100;
  const color = `linear-gradient(
    90deg,
    rgb(136, 0, 255) ${x}%,
    rgb(177, 177, 207) ${x}%,
    rgb(177, 177, 207) 100%
  )`;

  console.log(value);

  slider.style.background = color;
});
