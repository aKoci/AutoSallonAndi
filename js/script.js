// Të dhënat e makinave (përdoren te faqja e detajeve)
const makinat = [
    {
        id: "audi-a3",
        emri: "Audi A3",
        cmimi: "15,500 €",
        viti: 2017,
        karburanti: "Dizel",
        kilometrat: "250,000 km",
        transmisioni: "Automatik",
        lloji: "Sportback",
        pershkrimi: "Audi A3 Sportback me motor dizel dhe transmision automatik, e importuar nga Evropa. Veturë e kontrolluar dhe e gatshme për shitje.",
        pajisjet: ["Quattro", "Senzorë parkimi", "Gjantë alumini"],
        fotot: ["images/audi-a3.jpg"]
    },
    {
        id: "mercedes-e220",
        emri: "Mercedes-Benz E-Class",
        cmimi: "28,000 €",
        viti: 2020,
        karburanti: "Dizel",
        kilometrat: "190,000 km",
        transmisioni: "Automatik",
        lloji: "Limuzinë",
        pershkrimi: "Mercedes-Benz E 220d me motor dizel dhe transmision automatik, e importuar nga Evropa. Veturë e kontrolluar dhe e gatshme për shitje.",
        pajisjet: ["Senzorë parkimi", "Gjantë alumini"],
        fotot: ["images/mercedes-e220.jpg"]
    },
    {
        id: "bmw-320d",
        emri: "BMW 320d",
        cmimi: "19,500 €",
        viti: 2018,
        karburanti: "Dizel",
        kilometrat: "160,000 km",
        transmisioni: "Automatik",
        lloji: "Limuzinë",
        pershkrimi: "BMW 320d me motor dizel dhe transmision automatik, e importuar nga Evropa. Veturë e kontrolluar dhe e gatshme për shitje.",
        pajisjet: ["Senzorë parkimi", "Gjantë alumini"],
        fotot: ["images/bmw-320d.jpg"]
    },
    {
        id: "vw-golf-7",
        emri: "Volkswagen Golf 7",
        cmimi: "13,500 €",
        viti: 2017,
        karburanti: "Dizel",
        kilometrat: "180,000 km",
        transmisioni: "Manual",
        lloji: "Karavan",
        pershkrimi: "Volkswagen Golf 7 me motor dizel dhe transmision manual, e importuar nga Evropa. Veturë e kontrolluar dhe e gatshme për shitje.",
        pajisjet: ["Senzorë parkimi", "Gjantë alumini"],
        fotot: ["images/vw-golf-7.jpg"]
    },
    {
        id: "range-rover",
        emri: "Range Rover Evoque",
        cmimi: "13,900 €",
        viti: 2016,
        karburanti: "Dizel",
        kilometrat: "190,000 km",
        transmisioni: "Automatik",
        lloji: "SUV",
        pershkrimi: "Range Rover Evoque me motor dizel dhe transmision automatik, e importuar nga Evropa. Veturë e kontrolluar dhe e gatshme për shitje.",
        pajisjet: ["Senzorë parkimi", "Gjantë alumini"],
        fotot: ["images/range-rover.jpg"]
    },
    {
        id: "audi-q5",
        emri: "Audi Q5",
        cmimi: "24,000 €",
        viti: 2016,
        karburanti: "Dizel",
        kilometrat: "130,000 km",
        transmisioni: "Automatik",
        lloji: "SUV",
        pershkrimi: "Audi Q5 me motor dizel dhe transmision automatik, e importuar nga Evropa. Veturë e kontrolluar dhe e gatshme për shitje.",
        pajisjet: ["Quattro", "Senzorë parkimi", "Gjantë alumini"],
        fotot: ["images/audi-q5.jpg"]
    }
];

// 1. Show/Hide fjalekalimi (login dhe register)
const butonatFjalekalimi = document.querySelectorAll(".shfaq-fjalekalimin");

for (const buton of butonatFjalekalimi) {
    buton.addEventListener("click", function () {
        const fusha = buton.previousElementSibling;

        if (fusha.type === "password") {
            fusha.type = "text";
            buton.textContent = "Fshih";
        } else {
            fusha.type = "password";
            buton.textContent = "Shfaq";
        }
    });
}

// 3. Validimi i formularit Register
const formaRegister = document.querySelector("#forma-register");

if (formaRegister !== null) {
    const fushaFjalekalimi = document.querySelector("#password");
    const fushaKonfirmo = document.querySelector("#konfirmo-password");
    const mesazhiGabimit = document.querySelector("#mesazhi-gabimit");
    const gjatesiaMinimale = 6;

    function gjejGabimin() {
        if (fushaFjalekalimi.value.length < gjatesiaMinimale) {
            return "Fjalëkalimi duhet të ketë të paktën " + gjatesiaMinimale + " karaktere.";
        }
        if (fushaFjalekalimi.value !== fushaKonfirmo.value) {
            return "Fjalëkalimet nuk përputhen.";
        }
        return "";
    }

    formaRegister.addEventListener("submit", function (event) {
        const gabimi = gjejGabimin();

        if (gabimi !== "") {
            event.preventDefault();
            mesazhiGabimit.textContent = gabimi;
        } else {
            event.preventDefault();
            mesazhiGabimit.textContent = "";
            localStorage.setItem("perdoruesiKyqur", "po");
            window.location.href = "index.html";
        }
    });

    // Kur përdoruesi korrigjon, mesazhi përditësohet ose fshihet
    function perditesoMesazhin() {
        if (mesazhiGabimit.textContent !== "") {
            mesazhiGabimit.textContent = gjejGabimin();
        }
    }

    fushaFjalekalimi.addEventListener("input", perditesoMesazhin);
    fushaKonfirmo.addEventListener("input", perditesoMesazhin);
}

// 4. Filtri i katalogut (makinat.html)
const filtriMarka = document.querySelector("#filtri-marka");

if (filtriMarka !== null) {
    const kartelatMakinave = document.querySelectorAll(".makina");

    filtriMarka.addEventListener("change", function () {
        const markaZgjedhur = filtriMarka.value;

        for (const kartela of kartelatMakinave) {
            const emriMakines = kartela.querySelector("h2").textContent;

            if (markaZgjedhur === "te-gjitha" || emriMakines.startsWith(markaZgjedhur)) {
                kartela.classList.remove("hidden");
            } else {
                kartela.classList.add("hidden");
            }
        }
    });
}

// 5. Login: pas "Hyr" kalon te faqja kryesore
const formaLogin = document.querySelector("#forma-login");

if (formaLogin !== null) {
    formaLogin.addEventListener("submit", function (event) {
        event.preventDefault();
        localStorage.setItem("perdoruesiKyqur", "po");
        window.location.href = "index.html";
    });
}

// 6. Kur përdoruesi është kyçur, fshihen Log In dhe Register
const lidhjaLogin = document.querySelector('nav a[href="login.html"]');
const lidhjaRegister = document.querySelector('nav a[href="register.html"]');

if (localStorage.getItem("perdoruesiKyqur") === "po" &&
    lidhjaLogin !== null && lidhjaRegister !== null) {

    const listaMenyse = lidhjaLogin.parentElement.parentElement;

    lidhjaLogin.parentElement.remove();
    lidhjaRegister.parentElement.remove();

    const elementiDil = document.createElement("li");
    const lidhjaDil = document.createElement("a");
    lidhjaDil.href = "index.html";
    lidhjaDil.textContent = "Dil";

    lidhjaDil.addEventListener("click", function () {
        localStorage.removeItem("perdoruesiKyqur");
    });

    elementiDil.appendChild(lidhjaDil);
    listaMenyse.appendChild(elementiDil);
}

// 7. Faqja e detajeve të makinës (makina.html)
const detajEmri = document.querySelector("#detaj-emri");

if (detajEmri !== null) {
    const detajPermbajtja = document.querySelector("#detajet-makines");
    const mesazhiMakines = document.querySelector("#mesazhi-makines");
    const detajFoto = document.querySelector("#detaj-foto");
    const detajPershkrimi = document.querySelector("#detaj-pershkrimi");
    const detajCmimi = document.querySelector("#detaj-cmimi");
    const detajPajisjet = document.querySelector("#detaj-pajisjet");
    const detajSpecifikat = document.querySelector("#detaj-specifikat");
    const galeriaPara = document.querySelector("#galeria-para");
    const galeriaPas = document.querySelector("#galeria-pas");

    const parametrat = new URLSearchParams(window.location.search);
    const idMakines = parametrat.get("id");

    const makina = makinat.find(function (elementi) {
        return elementi.id === idMakines;
    });

    if (makina === undefined) {
        detajPermbajtja.classList.add("hidden");
        mesazhiMakines.textContent = "Kjo makinë nuk u gjet.";
    } else {
        document.title = makina.emri + " | ANDI Premium Cars";
        detajEmri.textContent = makina.emri;
        detajPershkrimi.textContent = makina.pershkrimi;
        detajCmimi.textContent = makina.cmimi;

        const specifikat = [
            ["Viti", makina.viti],
            ["Kilometrat", makina.kilometrat],
            ["Karburanti", makina.karburanti],
            ["Marshi", makina.transmisioni],
            ["Lloji", makina.lloji]
        ];

        for (const specifika of specifikat) {
            const elementi = document.createElement("li");
            const etiketa = document.createElement("span");
            const vlera = document.createElement("strong");

            etiketa.textContent = specifika[0];
            vlera.textContent = specifika[1];

            elementi.appendChild(etiketa);
            elementi.appendChild(vlera);
            detajSpecifikat.appendChild(elementi);
        }

        for (const pajisja of makina.pajisjet) {
            const elementi = document.createElement("li");
            elementi.textContent = pajisja;
            detajPajisjet.appendChild(elementi);
        }

        let indeksiFotos = 0;

        function shfaqFoton() {
            detajFoto.src = makina.fotot[indeksiFotos];
            detajFoto.alt = makina.emri;
        }

        if (makina.fotot.length < 2) {
            galeriaPara.classList.add("hidden");
            galeriaPas.classList.add("hidden");
        }

        galeriaPas.addEventListener("click", function () {
            indeksiFotos++;
            if (indeksiFotos === makina.fotot.length) {
                indeksiFotos = 0;
            }
            shfaqFoton();
        });

        galeriaPara.addEventListener("click", function () {
            if (indeksiFotos === 0) {
                indeksiFotos = makina.fotot.length - 1;
            } else {
                indeksiFotos--;
            }
            shfaqFoton();
        });

        shfaqFoton();
    }
}

// 8. Kartelat te makinat.html hapin faqen e detajeve kur klikohen
const kartelatKlikueshme = document.querySelectorAll(".makina");

for (const kartela of kartelatKlikueshme) {
    const lidhja = kartela.querySelector("a");

    if (lidhja !== null) {
        kartela.addEventListener("click", function () {
            window.location.href = lidhja.href;
        });
    }
}