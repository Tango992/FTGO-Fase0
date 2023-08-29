        // membuat function JavaScript
        function tampilkan_nama(){
            return "FTGO RMT 002"
        }

        document.getElementById("hasil").innerHTML = tampilkan_nama();

        var namaFungsi = function(){
            console.log("RMT 002!")
        }

        var namaFungsi = () => {
            console.log("RMT 002!");
        }

        var namaFungsi = () => console.log("RMT 002!");

        // Tidak disarankan
        // var namaFungsi = new function('console.log("RMT 002!")');

        // Fungsi dengan parameter dan fungsi yang mengembalikan nilai

        function kali(a,b){
            hasilKali = a * b;
            console.log("hasil kali a*b = " + hasilKali);
        }

        function bagi(a,b){
            hasilBagi = a / b;
            return hasilBagi;
        }

        var nilai1 = 20;
        var nilai2 = 5;
        var hasilPembagian = bagi(nilai1, nilai2);
        console.log(hasilPembagian);