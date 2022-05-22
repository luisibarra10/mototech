function registre(){
    document.getElementById('DivRegistro').style.display="block";
    document.getElementById('DivLogin').style.display="none";
}
function guardar(){
    document.getElementById('DivLogin').style.display="block";
    document.getElementById('DivRegistro').style.display="none";
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'El usuario ha sido guardado correctamente',
        showConfirmButton: false,
        timer: 2500
      })
}

