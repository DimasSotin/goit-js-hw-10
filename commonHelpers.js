import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as y,i as f}from"./assets/vendor-651d7991.js";const c=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let l=null;e.setAttribute("disabled","true");const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<Date.now()?(e.setAttribute("disabled","true"),f.error({position:"topRight",message:"Please choose a date in the future"})):(l=t[0],e.removeAttribute("disabled"))}};y("#datetime-picker",b);e.addEventListener("click",p);function p(){e.setAttribute("disabled","true");const t=setInterval(()=>{const i=Date.now(),r=l.getTime()-i;if(r>0){c.setAttribute("disabled","true");const{days:u,hours:d,minutes:s,seconds:a}=S(r);o.days.textContent=u,o.hours.textContent=d,o.minutes.textContent=s,o.seconds.textContent=a}else clearInterval(t),c.removeAttribute("disabled")},1e3)}function n(t){return String(t).padStart(2,"0")}function S(t){const s=n(Math.floor(t/864e5)),a=n(Math.floor(t%864e5/36e5)),m=n(Math.floor(t%864e5%36e5/6e4)),h=n(Math.floor(t%864e5%36e5%6e4/1e3));return{days:s,hours:a,minutes:m,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map