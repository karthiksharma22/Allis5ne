let sum = 0,
  abs;
let b = 0;

let fun = (value) => {
  let temp = value.children;
  temp = Array.from(temp);
  temp.forEach((value2) => {
    if (value2.checked) {
      sum += Number.parseInt(value2.value);
    }
  });
};

let disp = (value) => {
  sum = 0;
  abs = document.getElementsByClassName("form");
  abs = Array.from(abs);
  abs.forEach(fun);

  if (value === "d") {
    localStorage.setItem("depscore", sum);
    if (sum <= 9) {
      localStorage.setItem("depressionstatus", "Normal");
    } else if (sum <= 13) {
      localStorage.setItem("depressionstatus", "Mild");
    } else if (sum <= 20) {
      localStorage.setItem("depressionstatus", "Moderate");
    } else if (sum <= 27) {
      localStorage.setItem("depressionstatus", "Severe");
    } else {
      localStorage.setItem("depressionstatus", "Extremely Severe");
    }
  } else if (value === "s") {
    localStorage.setItem("stressscore", sum);
    if (sum <= 14) {
      localStorage.setItem("stressstatus", "Normal");
    } else if (sum <= 18) {
      localStorage.setItem("stressstatus", "Mild");
    } else if (sum <= 25) {
      localStorage.setItem("stressstatus", "Moderate");
    } else if (sum <= 33) {
      localStorage.setItem("stressstatus", "Severe");
    } else {
      localStorage.setItem("stressstatus", "Extremely Severe");
    }
  } else {
    localStorage.setItem("anxietyscore", sum);
    if (sum <= 7) {
      localStorage.setItem("anxietystatus", "Normal");
    } else if (sum <= 9) {
      localStorage.setItem("anxietystatus", "Mild");
    } else if (sum <= 14) {
      localStorage.setItem("anxietystatus", "Moderate");
    } else if (sum <= 19) {
      localStorage.setItem("anxietystatus", "Severe");
    } else {
      localStorage.setItem("anxietystatus", "Extremely Severe");
    }
  }

  window.location.replace("test.html");
};

let submit = () => {
  b.style.display = "none";
};
