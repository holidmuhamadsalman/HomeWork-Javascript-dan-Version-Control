const randomValues = [];

for (let i = 0; i < 100; i++) {
      const randomValue = Math.floor(Math.random() * 50) + 1;
      randomValues.push(randomValue);
}

const randomValuesAsString = randomValues.join(", ");
const randomValuesElement = document.getElementById("nilairandom");
randomValuesElement.textContent = randomValuesAsString;

// Pecahan nilai random ke Ganjil dan Genap
const genap = [];
const ganjil = [];
for (let i = 0; i < randomValues.length; i++) {
      if (i % 2 === 0) {
            genap.push(randomValues[i]);
      } else {
            ganjil.push(randomValues[i]);
      }
}
const genapAsString = genap.join(", ");
const genapElement = document.getElementById("nilaigenap");
genapElement.textContent = genapAsString;
const ganjilAsString = ganjil.join(", ");
const ganjilElement = document.getElementById("nilaiganjil");
ganjilElement.textContent = ganjilAsString;

// Min, Max, Total dan Rata-rata
function Min(array) {
      let min = array[0];
      for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                  min = array[i];
            }
      }
      return min;
}

function Max(array) {
      let max = array[0];
      for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                  max = array[i];
            }
      }
      return max;
}

function Total(array) {
      let total = 0;
      for (let i = 0; i < array.length; i++) {
            total += array[i];
      }
      return total;
}

function Average(array) {
      if (array.length === 0) {
            return 0;
      }
      const total = Total(array);
      return total / array.length;
}

const mingenap = Min(genap);
const maxgenap = Max(genap);
const totalgenap = Total(genap);
const averagegenap = Average(genap);

const minganjil = Min(ganjil);
const maxganjil = Max(ganjil);
const totalganjil = Total(ganjil);
const averageganjil = Average(ganjil);

document.getElementById("minnilaigenap").textContent = mingenap;
document.getElementById("maxnilaigenap").textContent = maxgenap;
document.getElementById("totalnilaigenap").textContent = totalgenap;
document.getElementById("rataratanilaigenap").textContent = averagegenap;

document.getElementById("minnilaiganjil").textContent = minganjil;
document.getElementById("maxnilaiganjil").textContent = maxganjil;
document.getElementById("totalnilaiganjil").textContent = totalganjil;
document.getElementById("rataratanilaiganjil").textContent = averageganjil;

// Perbandingan statistik function perbandingan() {
if (mingenap > minganjil) {
      document.getElementById("minComparison").innerText = "Min lebih besar pada array genap";
} else if (mingenap < minganjil) {
      document.getElementById("minComparison").innerText = "Min lebih besar pada array ganjil";
} else {
      document.getElementById("minComparison").innerText = "Min memiliki nilai yang sama pada kedua array";
}

if (maxgenap > maxganjil) {
      document.getElementById("maxComparison").innerText = "Max lebih besar pada array genap";
} else if (maxgenap < maxganjil) {
      document.getElementById("maxComparison").innerText = "Max lebih besar pada array ganjil";
} else {
      document.getElementById("maxComparison").innerText = "Max memiliki nilai yang sama pada kedua array";
}

if (totalgenap === totalganjil) {
      document.getElementById("totalComparison").innerText = "Total memiliki nilai yang sama antara array genap dan ganjil";
} else {
      document.getElementById("totalComparison").innerText = "Total memiliki nilai yang berbeda antara array genap dan ganjil";
}

if (averagegenap > averageganjil) {
      document.getElementById("ratarataComparison").innerText = "Rata-rata lebih besar pada array genap";
} else if (averagegenap < averageganjil) {
      document.getElementById("ratarataComparison").innerText = "Rata-rata lebih besar pada array ganjil";
} else {
      document.getElementById("ratarataComparison").innerText = "Rata-rata memiliki nilai yang sama pada kedua array";
}
