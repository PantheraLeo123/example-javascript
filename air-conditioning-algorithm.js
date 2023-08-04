// ------- Klima Algoritması -------
// Ortamdaki sıcaklık değerine göre klimanın kaç derecede çalışacağı
// belirlemek veya klimanın çalışmayacağını belirlemek için bir fonksiyon
// üreteceğiz

// --Test sıcaklıkları--

// ortam sıcaklığı = < 14 derece == klima çıktısı "Sıcaklık çok düşük Klima yetersiz"
// ortam sıcaklığı =15-25 derece == klima çıktısı "Sıcaklık düşük Klima 30 derecede çalışacak"
// ortam sıcaklığı == 25  derece == klima çıktısı "Optimum Sıcaklık değeri-Klima Kapalı"
// ortam sıcaklığı =26-35 derece == klima çıktısı "Sıcaklık yüksek Klima 24 derecede çalışacak"
// ortam sıcaklığı = > 36 derece == klima çıktısı "Sıcaklık çok yüksek Klima yetersiz"

function AirConditioning(temperature) {
    if (typeof temperature == "number") {
        if (temperature <= 14) {
            console.log("Sıcaklık çok düşük Klima yetersiz")
        }
        else if (temperature >= 15 && temperature < 25) {
            console.log("Sıcaklık düşük Klima 30 derecede çalışacak")

        }
        else if (temperature == 25) {
            console.log("Optimum Sıcaklık değeri-Klima Kapalı")
        }
        else if (temperature >= 26 && temperature <= 35) {
            console.log("Sıcaklık yüksek Klima 24 derecede çalışacak")
        }
        else {
            console.log("Sıcaklık çok yüksek Klima yetersiz")
        }

    } else {
        console.log("Sıcaklık Değeri Hatalı")
    }
}


AirConditioning(36)