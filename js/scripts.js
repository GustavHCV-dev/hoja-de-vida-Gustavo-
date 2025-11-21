// Script simple para interacción básica
document.addEventListener('DOMContentLoaded', function(){
  // menú móvil
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if(btn){ btn.addEventListener('click', function(){
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  }); }

  // Formulario contacto - demostración (no envía nada, muestra alerta)
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value || 'Amigo';
      alert('Gracias, ' + name + '. Tu mensaje fue recibido (demo).');
      form.reset();
    });
  }

  // Pequeño efecto al cargar
  var hero = document.querySelector('.hero');
  if(hero){ hero.style.transform = 'translateY(6px)'; hero.style.opacity = '0'; setTimeout(function(){ hero.style.transition = 'all 500ms ease'; hero.style.transform='translateY(0)'; hero.style.opacity='1'; }, 80); }
});
