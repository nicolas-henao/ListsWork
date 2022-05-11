let fecha = document.querySelector('.fecha')
let texto = document.querySelector('#text1');
let texto2 = document.querySelector('#text2');
let buton = document.querySelector('.addbtn');
let list = document.querySelector('ul');
let pendiente = document.querySelector('.tareas');

const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-CO', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'});

function addList(btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (texto !== '') {
            let text = texto.value;
            let text2 = texto2.value;
            let data = { name: text, work: text2 };
            localStorage.setItem(text, text2, JSON.stringify(data));
            let lista = document.createElement('li');
            let paragraph = document.createElement('p');
            let paragraph2 = document.createElement('p');
            paragraph.innerHTML = "Nombre de la tarea: " + text;
            paragraph2.innerHTML = "Tarea: " + text2;
            lista.appendChild(paragraph);
            lista.appendChild(paragraph2);
            lista.appendChild(delet());
            list.appendChild(lista);
            texto.value = '';
            texto2.value = '';
        }
    })
}

addList(buton)

function delet() {
    let deletButon = document.createElement('button');
    deletButon.innerHTML = 'X';
    deletButon.className = 'btn-delet';
    deletButon.addEventListener('click', (e) => {
        let item = e.target.parentElement;
        list.removeChild(item);
        let elements = document.querySelectorAll('li');
        if (elements.length === 0) {
        }

    })
    return deletButon;
}