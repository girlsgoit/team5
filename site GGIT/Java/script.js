var form = document.getElementById('mesaje');
form.addEventListener("submit", e => {
  e.preventDefault();
  let data = {
    Numele: document.getElementById('numele').value,
    Mesajul: document.getElementById('mesaj').value,
  }
  axios.post(form.action,{
    "data": data
}).then( response => {
    form.reset();
    alert("Mesajul a fost trimis")
});
});

function show(){
  document.getElementById('descriere').style.display="inline-block";
  document.getElementById('show').style.display="none";
  document.getElementById('hide').style.display="inline-block";
}

function hide(){
  document.getElementById('descriere').style.display="none";
  document.getElementById('show').style.display="inline-block";
  document.getElementById('hide').style.display="none";
}

function showmed(){
  document.getElementById('descriere').style.display="inline-block";
  document.getElementById('showmed').style.display="none";
  document.getElementById('hidemed').style.display="inline-block";
}

function hidemed(){
  document.getElementById('descriere').style.display="none";
  document.getElementById('showmed').style.display="inline-block";
  document.getElementById('hidemed').style.display="none";
}






function openbar(){
  document.getElementById("menu").style.display = "inline-block"
  document.getElementById("bar").style.display = "none"
}

function closebar(){
  document.getElementById("menu").style.display = "none"
  document.getElementById("bar").style.display = "inline-block"
}

function ok(){
  document.getElementById("dis").style.display = "none"
}