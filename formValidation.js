let Fname = $('#formName');
let Faddress = $('#formEmail');
let Fmessage = $('formMessage');
let Error = $('#formError')

Fname.keyup(() => {
    let textContent = $('#formName').val().length
    if (textContent > 10) {
        console.log(textContent)
    }
})