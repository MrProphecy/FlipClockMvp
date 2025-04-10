
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  const clock = document.getElementById('clock');
  clock.innerHTML = '';

  const timeStr = h + ':' + m + ':' + s;

  timeStr.split('').forEach(char => {
    const span = document.createElement('span');
    span.className = (char === ':' ? 'colon' : 'digit');
    span.textContent = char;
    clock.appendChild(span);
  });

  checkAlarm(now);
}

setInterval(updateClock, 1000);
updateClock();

let alarmTime = localStorage.getItem('alarmTime');

if (alarmTime) {
  document.getElementById('alarm-time').value = alarmTime;
  document.getElementById('alarm-status').textContent = 'Alarma configurada para ' + alarmTime;
}

function setAlarm() {
  const input = document.getElementById('alarm-time');
  if (input.value) {
    alarmTime = input.value;
    localStorage.setItem('alarmTime', alarmTime);
    document.getElementById('alarm-status').textContent = 'Alarma configurada para ' + alarmTime;
  }
}

function checkAlarm(now) {
  if (alarmTime) {
    const current = now.getHours().toString().padStart(2, '0') + ':' +
                    now.getMinutes().toString().padStart(2, '0');
    if (current === alarmTime) {
      document.getElementById('alarm-sound').play();
      document.body.style.backgroundColor = '#ff0040';
      setTimeout(() => {
        document.body.style.background = 'linear-gradient(to right, #000000, #1e1e1e)';
      }, 2000);
      document.getElementById('alarm-status').textContent = '¡Alarma!';
      alarmTime = null;
      localStorage.removeItem('alarmTime');
    }
  }
}

function share() {
  const url = window.location.href;
  const text = '⏰ Mirá este reloj retro con alarma y donaciones: ' + url;
  navigator.clipboard.writeText(text);
  alert('🔗 ¡Link copiado! Pegalo donde quieras compartirlo.');
}
