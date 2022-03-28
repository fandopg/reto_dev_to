let fecha = new Date();

const buscarInput = document.querySelector('input');
const mainContainer = document.getElementById('mainContainer');

let tagsArray = ['#1', '#2', '#3'];
let post = {
    titulo: "post diciembre del 2021",
    imagenPortada: "https://media.bitdegree.org/storage/media/images/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg",
    contenido: "este es un texto de ejemplo",
    fechaCreacion: new Date("december 1 2021"),
    tags: tagsArray
};



const crearPost = (post) => {
    postPost(
        post.titulo,
        post.imagenPortada,
        post.contenido,
        post.fechaCreacion,
        post.tags,
        (body) => {
            alert(body.name);
        }
    )
}


const buscarPost = e => {
    e.preventDefault();
    const terminoBusqueda = buscarInput.value;
    mainContainer.innerHTML = `<h1 class="ms-5">Search results for ${terminoBusqueda}</h1>`;

    getPost((body) => {
        let arregloPost = Object.values(body);
        let resultadoBusqueda = arregloPost.filter((post) =>
            post.titulo.toLowerCase().indexOf(terminoBusqueda.toLowerCase()) > -1)
        console.log(resultadoBusqueda); //aui esta el resultado de la busqueda

        resultadoBusqueda.forEach(post => {
            let fechaPost = new Date(post.fechaCreacion);
            fechaPost = fechaPost.toDateString();
            const card = `<div class="container col-sm-6 mt-3">
                            <div class="card my-3">
                                <a class="text-decoration-none text-dark" href="#">
                                    <div class="card-body px-0">
                                        <div class="d-flex container p-0">
                                            <div>
                                                <img class="mt-2 ms-3 border rounded-circle"
                                                    src="https://www.shareicon.net/data/512x512/2016/07/26/802009_man_512x512.png"
                                                    alt="Dev.to" width="35" height="35">
                                            </div>
                                            <div class="d-flex flex-column container ps-2">
                                                <span class="fw-bold">RefaccionariApp-Team</span>
                                                <span class="fw-light">${fechaPost}</span>
                                                <h2 class="my-2 fw-bold">${post.titulo}</h2>
                                                <div class="d-flex">
                                                    <button type="button" class="btn fw-light button-tags">${post.tags[0]}</button>
                                                    <button type="button"
                                                        class="btn fw-light button-tags">${post.tags[1]}</button>
                                                    <button type="button"
                                                        class="btn fw-light button-tags">${post.tags[2]}</button>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <div class="mt-2">
                                                        <button type="button" class="btn button-comment"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="icon icon-tabler icon-tabler-heart" width="24"
                                                                height="24" viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="#2c3e50" fill="none" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path
                                                                    d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                                            </svg> 27 Reactions</button>
                                                        <button type="button" class="btn button-comment"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="icon icon-tabler icon-tabler-message-circle"
                                                                width="24" height="24" viewBox="0 0 24 24"
                                                                stroke-width="1.5" stroke="#2c3e50" fill="none"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                                                <line x1="12" y1="12" x2="12" y2="12.01" />
                                                                <line x1="8" y1="12" x2="8" y2="12.01" />
                                                                <line x1="16" y1="12" x2="16" y2="12.01" />
                                                            </svg> 3 Comments</button>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="fw-light me-2 mt-2">3 min read</span>
                                                        <button type="button"
                                                            class="btn btn-light mt-2 button-save">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>`;

            mainContainer.insertAdjacentHTML('beforeend', card);
        });
    })
}

const cardsTop = document.getElementById('cardsTop');


const creaCardTop = (e) => {
    e.preventDefault();
    cardsTop.innerHTML = '';
    getPost((body) => {
        let arregloPost = Object.values(body);

        arregloPost.forEach((post, index) => {
            let fechaPost = new Date(post.fechaCreacion);
            fechaPost = fechaPost.toDateString();
            let imagenCard = '';
            if (index == 0) {
                imagenCard = `
                <img src = ${post.imagenPortada}
                class = "card-img-top"
                alt = "main_image">
                `;
            } else {
                imagenCard = '';
            }
            let card = `  
                            <div class="card mb-3">
                                <a class="text-decoration-none text-dark" href="#">
                                   ${imagenCard}
                                    <div class="card-body px-0">
                                        <div class="d-flex container p-0">
                                            <div>
                                                <img class="mt-2 ms-3 border rounded-circle"
                                                    src="https://www.shareicon.net/data/512x512/2016/07/26/802009_man_512x512.png"
                                                    alt="Dev.to" width="35" height="35">
                                            </div>
                                            <div class="d-flex flex-column container ps-2">
                                                <span class="fw-bold">RefaccionariApp-Team</span>
                                                <span class="fw-light">${fechaPost}</span>
                                                <h2 class="my-2 fw-bold">${post.titulo}</h2>
                                                <div class="d-flex">
                                                    <button type="button" class="btn fw-light button-tags">${post.tags[0]}</button>
                                                    <button type="button"
                                                        class="btn fw-light button-tags">${post.tags[1]}</button>
                                                    <button type="button"
                                                        class="btn fw-light button-tags">${post.tags[2]}</button>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <div class="mt-2">
                                                        <button type="button" class="btn button-comment"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="icon icon-tabler icon-tabler-heart" width="24"
                                                                height="24" viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="#2c3e50" fill="none" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path
                                                                    d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                                            </svg> 27 Reactions</button>
                                                        <button type="button" class="btn button-comment"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="icon icon-tabler icon-tabler-message-circle"
                                                                width="24" height="24" viewBox="0 0 24 24"
                                                                stroke-width="1.5" stroke="#2c3e50" fill="none"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                                                                <line x1="12" y1="12" x2="12" y2="12.01" />
                                                                <line x1="8" y1="12" x2="8" y2="12.01" />
                                                                <line x1="16" y1="12" x2="16" y2="12.01" />
                                                            </svg> 3 Comments</button>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="fw-light me-2 mt-2">3 min read</span>
                                                        <button type="button"
                                                            class="btn btn-light mt-2 button-save">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        `;

            cardsTop.insertAdjacentHTML('beforeend', card);
        });
    })
}