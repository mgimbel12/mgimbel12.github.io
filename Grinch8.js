// Christmas target: Dec 25 at 00:00 local
const target = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0);

// Handle post-Christmas: set next year
(function ensureNextChristmas(){
  const now = new Date();
  if (now > target) {
    target.setFullYear(now.getFullYear() + 1);
  }
})();

function pad(n){return String(n).padStart(2,"0")}

function renderCountdown(){
  const now = new Date();
  const diff = target - now;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById("days").textContent = pad(Math.max(days,0));
  document.getElementById("hours").textContent = pad(Math.max(hours,0));
  document.getElementById("minutes").textContent = pad(Math.max(minutes,0));
  document.getElementById("seconds").textContent = pad(Math.max(seconds,0));
}
setInterval(renderCountdown, 1000);
renderCountdown();

// Live local date/time
function renderNow(){
  const now = new Date();
  const date = now.toLocaleDateString(undefined, { weekday:"long", month:"long", day:"numeric", year:"numeric" });
  const time = now.toLocaleTimeString(undefined, { hour:"2-digit", minute:"2-digit", second:"2-digit" });
  document.getElementById("now").textContent = `${date} • ${time}`;
}
setInterval(renderNow, 1000);
renderNow();

// Place + Hour form
const dtpForm = document.getElementById("dtpForm");
const placeInput = document.getElementById("place");
const hourInput = document.getElementById("hour");
const dtpSummary = document.getElementById("dtpSummary");

dtpForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const place = placeInput.value.trim() || "Somewhere cozy";
  const hour = hourInput.value ? hourInput.value : "—";
  const now = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local Time";
  dtpSummary.textContent = `Place: ${place} • Hour: ${hour} • Time zone: ${tz} • Set on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
});

// One act of kindness system
const kindForm = document.getElementById("kindForm");
const kindInput = document.getElementById("kindAct");
const kindList = document.getElementById("kindList");
const meterFill = document.getElementById("meterFill");

let kindnessLogged = 0;

kindForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  const text = kindInput.value.trim();
  if(!text) return;

  // Add to list (cap at 5 for today to keep it intentional)
  const li = document.createElement("li");
  li.textContent = text;
  kindList.prepend(li);
  kindnessLogged = Math.min(kindnessLogged + 1, 5);

  // Grinch-to-heart meter (20% per act)
  meterFill.style.width = `${kindnessLogged * 20}%`;

  // playful nudge
  if (kindnessLogged === 1) {
    toast("The Grinch scoffs… then pauses. One warm cookie changes the air.");
  } else if (kindnessLogged === 3) {
    toast("Okay fine. Maybe Who-joy isn’t so terrible.");
  } else if (kindnessLogged === 5) {
    toast("Heart grew three sizes. Proceed with twinkle.");
  }

  kindInput.value = "";
});

// Simple toast
function toast(message){
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = message;
  Object.assign(t.style,{
    position:"fixed",
    left:"50%",
    bottom:"18px",
    transform:"translateX(-50%)",
    background:"#0f2e1b",
    border:"1px solid #14522f",
    color:"#c7f5e6",
    padding:"8px 12px",
    borderRadius:"10px",
    boxShadow:"0 10px 24px rgba(0,0,0,.35)",
    zIndex:9999,
    opacity:"0",
    transition:"opacity .2s ease"
  });
  document.body.appendChild(t);
  requestAnimationFrame(()=>{t.style.opacity="1"});
  setTimeout(()=>{t.style.opacity="0"; setTimeout(()=>t.remove(),200)}, 2600);
}
