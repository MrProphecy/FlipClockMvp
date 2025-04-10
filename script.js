function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = hours + minutes + seconds;
  
  const clock = document.getElementById('clock');
  clock.innerHTML = '';
  timeString.split('').forEach(digit => {
    const span = document.createElement('span');
    span.className = 'digit';
    span.textContent = digit;
    clock.appendChild(span);
  });
}

setInterval(updateClock, 1000);
updateClock();
