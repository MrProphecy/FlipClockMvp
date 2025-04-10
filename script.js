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

let alarmTime = null;

function setAlarm() {
  const input = document.getElementById('alarm-time');
  if (input.value) {
    alarmTime = input.value;
    document.getElementById('alarm-status').textContent = 'Alarma configurada para ' + alarmTime;
  }
}

function checkAlarm(now) {
  if (alarmTime) {
    const current = now.getHours().toString().padStart(2, '0') + ':' +
                    now.getMinutes().toString().padStart(2, '0');
    if (current === alarmTime) {
      document.getElementById('alarm-sound').play();
      document.getElementById('alarm-status').textContent = '¡Alarma!';
      alarmTime = null; // desactivar luego de sonar
    }
  }
}
