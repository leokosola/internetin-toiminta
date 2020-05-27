// random quote

const quotes = [
  "Tietoverkko koostuu laitteista, jotka kommunikoivat toistensa kanssa. Internet puolestaan koostuu tietoverkoista, joissa sijaitsevat laitteet kykenevät kommunikoimaan toisten laitteiden kanssa, vaikka ne sijaitsevat toisessa verkossa, riippumatta siitä kuinka monen verkon kautta kommunikaatio kulkee. (Lähde: Jyväskylän yliopiston Tietoverkot-kurssi.)", 
  "Internet (netti) on maailmanlaajuinen toisiinsa kytkettyjen tietoverkkojen järjestelmä, joka käyttää internet-protokollaa (TCP/IP) yhdistämään tietoteknisiä laitetta toisiinsa. (Lähde: Wikipedia)", 
  "Lyhyesti Internetin voisi määritellä maailmanlaajuiseksi verkkojen verkoksi eli tietoverkoksi, joka muodostuu toisiinsa kytketyistä pienemmistä verkoista. (Lähde: Peda.net)"];
console.log(quotes);

let firstQuote;
firstQuote = Math.floor(Math.random()*Math.floor(3));
console.log(firstQuote);

function randomQuote () {
  print("Mooooi");
  let x = Math.floor(Math.random()*Math.floor(3));
  document.getElementById("rdm-qt").innerHTML = quotes[x];
}


// p5

let x1 = 150
let x2 = 100
let x3 = 240
let y3 = 240
let halk = 30

function setup() {
  const cnv = createCanvas(640, 480)
  cnv.parent('p5-sketch1')
}

function draw() {
  background(236)
  if(x1 < 640) {
    x1 = x1 + floor(random(5))
    x2 = x2 + 2.5
  }
  else {
    x1 = 0
    x2 = 0
  }
  stroke(0)
  strokeWeight(2)
  fill(235, 10, 15, 168)
  ellipse(x1,50,halk,halk)

  fill(15, 10, 235, 168)
  ellipse(x2, 100, halk, halk)

  fill(10, 235, 15, 168)
  ellipse(x3, y3, halk, halk)

  let r = floor(random(0, 4))

  switch(r) {
    case 0:
      x3++
      break
    case 1:
      x3--
      break
    case 2:
      y3++
      break
    case 3:
      y3--
      break
  }
  // print(x3, y3)
}


// console.log(navigator.onLine);

// console.log(navigator.userAgent);

// console.log(new Date());

// console.log(history.length);

// console.log(document.referrer);

// console.log(navigator.appName);
// console.log(navigator.product);
// console.log(navigator.platform);

// console.log(screen.width);
// console.log(screen.height);

// console.log(location.port);

// document.body.addEventListener(onclick, function() {
//   console.log(innerWidth);
// });

// console.log(scrollX, scrollY);

// function scroll () {
//   console.log("arse");

//   if(pageYOffset > 100) {
//     console.log("perse");
//   }

// }

// scroll();

