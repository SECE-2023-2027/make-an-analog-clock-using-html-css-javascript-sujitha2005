function updateClock() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secondAngle = sec * 6; // 360/60
  const minuteAngle = min * 6 + sec * 0.1; // 360/60 + smooth
  const hourAngle = (hr % 12) * 30 + min * 0.5; // 360/12 + smooth

  document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
  document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
  document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// Generate clock numbers dynamically
for (let num = 1; num <= 12; num++) {
  const number = document.createElement("div");
  number.className = "number";
  number.innerText = num;

  const angle = (num * 30) * (Math.PI / 180); // convert to radians
  const radius = 130; // radius to place numbers
  const x = 150 + radius * Math.sin(angle);
  const y = 150 - radius * Math.cos(angle);

  number.style.left=`${x}px`;
  number.style.top = `${y}px`;

  document.querySelector(".clock").appendChild(number);
}