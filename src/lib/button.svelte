<script>
  import Icon from '@iconify/svelte';
</script>

<button class="next">
  <span class="i"><Icon icon="si:double-arrow-right-fill"/></span>
</button> 

<style>
button {
  position: fixed;
  display: flex;
  left: 95%;
  bottom: 20px;
  cursor: pointer;
  border: 0;
  padding: 0;
}

button.next {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
}

.i {
  position: relative;
  font-size: 25px;
  top: 3.5px;
  color: white;
  transition: transform 0.3s ease;
}

button.next:hover {
  background: transparent;
  border: 2px solid black; 
  background-color: rgb(218, 218, 218);
}

button.next:hover .i {
  color: black;
  transform: translateX(3px)
}

/* En móvil/tablet el botón se desplaza a la izquierda para no cortarse
   en el borde derecho; en escritorio (>= 1024px) se mantiene intacto. */
@media (max-width: 1023px) {
  button {
    left: auto;
    right: 20px;
    bottom: 20px;
    z-index: 999;
  }
}

@media (max-width: 767px) {
  button {
    right: 16px;
    bottom: 16px;
  }

  button.next {
    width: 44px;
    height: 44px;
  }
}

</style>
