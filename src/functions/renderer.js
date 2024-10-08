const userName = document.querySelector('input[id="Nome"]')

function handleOnChange({ target: { value }}){
    window.electron.setName(value)
}
source.addEventListener('change', handleOnChange)