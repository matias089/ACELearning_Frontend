    function confirmarEliminacion() {
      swal({
        title: "¿Estás seguro?",
        text: "Esta acción eliminará el/los usuario(s) seleccionado(s). ¡No podrás revertirlo!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
      }, function(isConfirm) {
        if (isConfirm) {
          swal("Eliminado", "El usuario ha sido eliminado correctamente.", "success");
          // Aquí puedes agregar la lógica para eliminar en el backend
        }
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    });

    function validarFormulario() {
      const nombreApellido = document.getElementById("nombre_apellido").value.trim();
      if (nombreApellido.split(" ").length < 2) {
        swal("Error", "El campo Nombre y Apellido debe contener al menos dos palabras.", "error");
        return false;
      }
      return true;
    }