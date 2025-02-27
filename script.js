let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    // Verifica si la sección de habilidades está visible en la ventana
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");

        // Añadir clases de animación o configuraciones a cada barra de habilidad
        habilidades[0].classList.add("Configuración");
        habilidades[1].classList.add("Estetica");
        habilidades[2].classList.add("Creatividad");
        habilidades[3].classList.add("Experiencia");
        habilidades[5].classList.add("TrabajoEnEquipo");
        habilidades[6].classList.add("Liderazgo");
        habilidades[7].classList.add("ResoluciónProblemas");
        habilidades[9].classList.add("Gestión");

        // Si deseas aplicar algún efecto de animación con un intervalo o algo similar,
        // puedes hacerlo aquí para que las barras crezcan gradualmente.
    }
}

// Llamar a la función cada vez que se haga scroll
window.addEventListener('scroll', efectoHabilidades);
