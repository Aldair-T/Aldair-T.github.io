const inicio = document.getElementById('inicio');
const habilidades = document.getElementById('habilidades');
const proyectos = document.getElementById('proyectos');
const contacto = document.getElementById('contacto');

const detectarLugar = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            entrada.target.classList.add('visible');
            console.log('visible')
        }
    });
};

const observador = new IntersectionObserver(detectarLugar,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
});

observador.observe(inicio)
observador.observe(habilidades)
observador.observe(proyectos)
observador.observe(contacto)