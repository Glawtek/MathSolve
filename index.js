var result = "";
var piCheck = 0;
console.log(`Hello Sir, I am ready to help you!
But, This is not accurate 100%, we will work hard to make it 100%
Project By : Glawtek, GuckTubeYT, iFika\n\n`)
var KMtoCM = (km) => {
    km += "00000"
    return parseInt(km)
}
class lainnya {
    static perkalian (berapa, sampai) {
        for (var a = 1; a < sampai + 1; a++) {
            result += `${berapa} x ${a} = ${berapa * a}\n`;
        }
        return result;
    }
}

class diagonal {
    static persegiPanjang(panjang, lebar) {
        result = `d = √p^2 + l^2\nd = √${panjang}^2 + ${lebar}^2\nd = ${Math.sqrt((panjang * panjang) + (lebar * lebar))}`
        return result;
    }
    
}

class panjang {
    static kelilingPersegiPanjang(keliling, lebar) {
        result = `p = (K / 2) - l\np = (${keliling} / 2) - ${lebar}\np = ${keliling / 2} - ${lebar}\np = ${(keliling / 2) - lebar}`;
        return result;
    }
    static luasPersegiPanjang(luas, lebar) {
        result = `p = L / l\np = ${luas} / ${lebar}\np = ${luas / lebar}`;
        return result;
    }
}

class keliling {
    static persegiPanjang(panjang, lebar) {
        result = `K = 2 x (p + L)\nK = 2 x (${panjang} + ${lebar})\nK = 2 x ${panjang + lebar}\nK = ${2 * (panjang + lebar)}`
        return result;
    }
    static persegi(sisi) {
        result = `K = 4 x s\nK = 4 x ${sisi}\nK = ${4 * sisi}`
        return result;
    }
    static trapesium(a, b, c, d) {
        result = `K = AB + BC + CD + DA\nK = ${a} + ${b} + ${c} + ${d}\nK = ${a + b + c + d}`
        return result;
    }
    static jajargenjang(a, b, c, d) {
        result = `K = AB + BC + CD + DA\nK = ${a} + ${b} + ${c} + ${d}\nK = ${a + b + c + d}`
        return result;
    }
    static segitiga(a, b, c) {
        result = `K = A + B + C\nK = ${a} + ${b} + ${c}\nK = ${a + b + c}`
        return result;
    }
    static layangLayang(a, b, c, d) {
        result = `K = AB + BC + CD + DA\nK = ${a} + ${b} + ${c} + ${d}\nK = ${a + b + c + d}`
        return result;
    }
    static lingkaran(r) {
        piCheck = r / 7;
        if (piCheck.toString().includes(".")) {
            result = `K = 2 x π x r\nK = 2 x 3.14 x ${r}\nK = 2 x ${3.14 * r}\nK = ${2 * 3.14 * r}`
        } else {
            result = `K = 2 x π x r\nK = 2 x 22/7 x ${r}\nK = 2 x 22 x ${r / 7}\nK = 2 x ${(r / 7) * 22}\nK = ${(r / 7) * 2 * 22}`
        }
        return result;
    }
    static belahKetupat(a, b, c, d) {
        result = `K = AB + BC + CD + DA\nK = ${a} + ${b} + ${c} + ${d}\nK = ${a + b + c + d}`
        return result;
    }
}

class luas {
    static persegiPanjang(panjang, lebar) {
        result = `L = p x l\nL = ${panjang} x ${lebar}\nL = ${panjang * lebar}`
        return result;
    }
    static persegi(sisi) {
        result = `L = s x s\nL = ${sisi} x ${sisi}\nL = ${sisi * sisi}`
        return result;
    }
    static trapesium(rusukSejajar1, rusukSejajar2, tinggi) {
        result = `L = 1 / 2 x Jumlah Rusuk Sejajar x Tinggi\nL = 1 / 2 x (${rusukSejajar1} + ${rusukSejajar2}) x ${tinggi}\nL = 1 / 2 x ${rusukSejajar1 + rusukSejajar2} x ${tinggi}\nL = 1 / 2 x ${(rusukSejajar1 + rusukSejajar2) * tinggi}\nL = ${((rusukSejajar1 + rusukSejajar2) * tinggi) / 2}`;
        return result;
    }
    static jajargenjang(alas, tinggi) {
        result = `L = a x t\nL = ${alas} x ${tinggi}\nL = ${alas * tinggi}`;
        return result;
    }
    static segitiga(alas, tinggi) {
        result = `L = 1 / 2 x alas x tinggi\nL = 1 / 2 x ${alas} x ${tinggi}\nL = 1 / 2 x ${alas * tinggi}\nL = ${(alas * tinggi) / 2}`
        return result;
    }
    static lingkaran(r) {
        piCheck = r / 7;
        if (piCheck.toString().includes(".")) {
            result = `L = π x r x r\nL = 3.14 x ${r} x ${r}\nL = 3.14 x ${r * r}\nL = ${3.14 * r * r}`
        } else {
            result = `L = π x r x r\nL = 22/7 x ${r} x ${r}\nL = 22/7 x ${r * r}\nL = 22 x ${(r * r) / 7}\nL = ${(22 * r * r) / 7}`
        }
        return result;
    }
    static layangLayang(d1, d2) {
        result = `L = 1 / 2 x d1 x d2\nL = 1 / 2 x ${d1} x ${d2}\nL = 1 / 2 x ${d1 * d2}\nL = ${(d1 * d2) / 2}`
        return result;
    }
    static belahKetupat(d1, d2) {
        result = `L = 1 / 2 x d1 x d2\nL = 1 / 2 x ${d1} x ${d2}\nL = 1 / 2 x ${d1 * d2}\n L = ${(d1 * d2) / 2}`
        return result;
    }
    static kubus(rusuk) {
        result = `L = 6 x r x r\nL = 6 x ${rusuk} x ${rusuk}\nL = ${6 * rusuk * rusuk}`;
        return result;
    }
    static balok(panjang, lebar, tinggi) {
        result = `L = (2 x p x l) + (2 x p x t) + (2 x l x t)\nL = (2 x ${panjang} x ${lebar}) + (2 x ${panjang} x ${tinggi}) + (2 x ${lebar} x ${tinggi})\nL = ${2 * panjang * lebar} + ${2 * panjang * tinggi} + ${2 * lebar * tinggi}\nL = ${(2 * panjang * lebar) + (2 * panjang * tinggi) + (2 * lebar * tinggi)}`
        return result;
    }
    static layangLayang(d1, d2) {
        result = `L = 1/2 x d1 x d2\nL = 1/2 x ${d1} x ${d2}\nL = ${1/2 * d1 * d2}`
        return result;
    }
}
class luaspermukaan {
    static prismasegitiga(panjang, lebar, tinggi) {
        result = `LP = 2x(panjang x lebar) + (panjang x tinggi) + (lebar x tinggi)\nLP = 2x(${panjang} x ${lebar}) + (${panjang} x ${tinggi}) + (${lebar} x ${tinggi})\nLP = ${2 * panjang * lebar} + ${panjang * tinggi} + ${lebar * tinggi}\nLP = ${2 * panjang * lebar + panjang * tinggi + lebar * tinggi}`
        return result;
    }
    static prismasegiempat(panjang,lebar,tinggi)
    {
        result = `LP = 2x((p x l) + (p x t) + (l x t))\nLP = 2x((${panjang} x ${lebar}) + (${panjang} x ${tinggi}) + (${lebar} x ${tinggi}))\nLP = ${2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)}`
        return result;
    }
}
class volume {
    static kubus(rusuk) {
        result = `V = r x r x r\nV = ${rusuk} x ${rusuk} x ${rusuk}\nV = ${rusuk * rusuk * rusuk}`
        return result;
    }
    static balok(panjang, lebar, tinggi) {
        result = `V = p x l x t\nV = ${panjang} x ${lebar} x ${tinggi}\nV = ${panjang * lebar * tinggi}`
        return result;
    }
    static tabung(jarijari, tinggi)
    {
        result = `V = 22/7 x r x r x t\nV = 22/7 x ${jarijari} x ${jarijari} x ${tinggi}\nV = 22/7 x ${jarijari * jarijari * tinggi}\nV = ${(22 / 7) * jarijari * jarijari * tinggi}`
        return result;
    }
    static kerucut(jarijari, tinggi)
    {
        result = `V = 1/3 x 22/7 x r x r x t\nV = 1/3 x 22/7 x ${jarijari} x ${jarijari} x ${tinggi}\nV = 1/3 x 22/7 x ${jarijari * jarijari * tinggi}\nV = ${(1 / 3) * (22 / 7) * jarijari * jarijari * tinggi}`
        return result;
    }
    static bola(jarijari)
    {
        result = `V = 4/3 x 22/7 x r x r x r\nV = 4/3 x 22/7 x ${jarijari} x ${jarijari} x ${jarijari}\nV = 4/3 x 22/7 x ${jarijari * jarijari * jarijari}\nV = ${(4 / 3) * (22 / 7) * jarijari * jarijari * jarijari}`
        return result;
    }
    static limassegitiga(tinggialas, tinggilimas, alas)
    {
       result = `V = 1/3 x Alas x t\nV = 1/3 x (1/2 x alas x tinggialas) x tinggilimas\nV = 1/3 x (1/2 x ${alas} x ${tinggialas}) x ${tinggilimas}\nV = ${(1 / 3) * (alas * tinggialas) * tinggilimas}`
         return result;
    }
    static limassegiempat(panjang,lebar,tinggi)
    {
        result = `V = 1/3 x panjang x lebar x tinggi\nV = 1/3 x ${panjang} x ${lebar} x ${tinggi}\nV = 1/3 x ${panjang * lebar * tinggi}\nV = ${(1 / 3) * (panjang * lebar * tinggi)}`
        return result;
    }
static prismasegitiga(alas, tinggi, tinggiprisma)
{
    result = `V = (1/2 x alas x tinggi) x tinggiprisma\nV = (1/2 x ${alas} x ${tinggi}) x ${tinggiprisma}\nV = ${(1 / 2) * (alas * tinggi) * tinggiprisma}`
    return result;
}
static prismasegiempat(panjang,tinggi,lebar)
{
result = `V = panjang x lebar x tinggi\nV = ${panjang} x ${lebar} x ${tinggi}\nV = ${panjang * lebar * tinggi}`
return result;
}

}

class rumusKecepatan {
    static kecepatan(jarak, waktu) {
        result = `Kecepatan = Jarak / Waktu\nKecepatan = ${jarak} / ${waktu}\nKecepatan = ${jarak / waktu}`
        return result;
    }
    static jarak(kecepatan, waktu) {
        result = `Jarak = Kecepatan x Waktu\nJarak = ${kecepatan} x ${waktu}\nJarak = ${kecepatan * waktu}`
        return result;
    }
    static waktu(jarak, kecepatan) {
        result = `Waktu = Jarak / Kecepatan\nWaktu = ${jarak} / ${kecepatan}\nWaktu = ${jarak / kecepatan}`
        return result;
    }
}

class rumusDebit {
    static debit(volume, waktu) {
        result = `Debit = Volume / Waktu\nDebit = ${volume} / ${waktu}\nDebit = ${volume / waktu}`
    }
    static volume(debit, waktu) {
        result = `Volume = Debit x Waktu\nVolume = ${debit} x ${waktu}\nVolume = ${debit * waktu}`
        return result;
    }
    static waktu(volume, debit) {
        result = `Waktu = Volume / Debit\nWaktu = ${volume} / ${debit}\nWaktu = ${volume * debit}`
        return result;
    }
}

class rumusSkala {
    static skala(jp, js) {
        
        result = `Skala = Jarak Peta : Jarak Sebenarnya\nSkala = ${jp} CM : ${js} KM\nSkala = ${jp} CM : ${KMtoCM(js)} CM\nSkala = 1 : ${KMtoCM(js) / jp}`
        return result;
    }
    static jarakSebenarnya(jp, s) {
        result = `Jarak Sebenarnya = Jarak Peta / Skala\nJarak Sebenarnya = ${jp} / 1:${s}\nJarak Sebenarnya = ${jp} x ${s}\nJarak Sebenarnya = ${jp * s} CM\nJarak Sebenarnya = ${(jp * s).toString().slice(0, -5)} KM`
        return result;
    }
    static jarakPeta(js, s) {
        result = `Jarak Peta = Jarak Sebenarnya x Skala\nJarak Peta = ${js} KM x 1:${s}\nJarak Peta = ${KMtoCM(js)} CM x ${s}\nJarak Peta = ${KMtoCM(js) / s} CM`
        return result;
    }
}

module.exports = {
    diagonal : diagonal,
    panjang : panjang,
    luas : luas,
    keliling : keliling,
    volume : volume,
    luaspermukaan: luaspermukaan,
    rumusKecepatan : rumusKecepatan,
    rumusDebit : rumusDebit,
    rumusSkala : rumusSkala,
    lainnya
};
