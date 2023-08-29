        // Attribute
        function hello() {
            alert("Hello, world!")
        };

        // contoh addEventListener()
        
        const btnLogin = document.getElementById("hello-rmt002");
        btnLogin.addEventListener("click", () => {
            alert("Hello, FTGO2!");
        });

        const btnDua = document.getElementById("btn-double");
        btnDua.addEventListener("dblclick", function() {
            alert("Terima kasih sudah mengklik 2 kali!");
        });

        const btnEnter = document.getElementById("btn-enter");
        btnEnter.addEventListener("mouseenter", function(event){
            event.target.innerText = "Cursor sudah masuk";
        });
        btnEnter.addEventListener("click", (event) => {
            event.target.innerText = "Pointer Enter";
        });

        const btnHover = document.getElementById("btn-hover");
        btnHover.addEventListener("mouseover", function(event){
            event.target.innerText = "Pointer sudah di atas element";
        });

        const btnOut = document.getElementById("btn-out");
        btnOut.addEventListener("mouseout", (event) => {
            event.target.innerText = "Pointer sudah keluar dari element";
        });
