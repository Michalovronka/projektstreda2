const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeClickButton = document.getElementById("upgradeClickButton");
const upgradeAutoClickButton = document.getElementById(
  "upgradeAutoClickButton"
);

let clickIncrease = 1;
let clickUpgradePrice = 50;
let numberOfCookies = 0;
let autoclickIncrease = 0;
let autoclicker;
let autoclickerPrice = 50;

//.onclick - na kliknuti
// () => arrow funkce
// {} - scope
cookie.onclick = () => {
  console.log("click");
  //++ pricte jednicku - inkrement
  numberOfCookies += clickIncrease;
  //numberOfCookies = numberOfCookies + 1;
  //numberOfCookies += 1
  console.log(numberOfCookies);
  counter.innerHTML = "Počet smrtí po 48%: " + numberOfCookies;
};

upgradeClickButton.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odectu cenu upgradu
    numberOfCookies -= clickUpgradePrice;
    //numberOfCookies = numberOfCookies - 50
    counter.innerHTML = "Počet smrtí po 48%: " + numberOfCookies;

    clickUpgradePrice += 50;
    upgradeClickButton.innerHTML = "Víc zoufalství: " + clickUpgradePrice + " úmrtí";

    clickIncrease++;
  }
};

upgradeAutoClickButton.onclick = () => {
  if (numberOfCookies >= autoclickerPrice) {
    //odectu stovku
    numberOfCookies -= autoclickerPrice;

    //aktualizuju odstavec
    counter.innerText = "Počet smrtí po 48%: " + numberOfCookies;

    autoclickerPrice += 50;
    upgradeAutoClickButton.innerHTML =
      "SpaceUk aktivita (MegaHackv7): " + autoclickerPrice + " úmrtí";

    //opakovani po čase pro pridani susenky
    autoclickIncrease++;
    //setInterval bere dva intervaly - funkci, opakovani v milisekundach
    clearInterval(autoclicker);
    autoclicker = setInterval(() => {
      numberOfCookies += autoclickIncrease;
      counter.innerText = "Počet smrtí po 48%: " + numberOfCookies;
    }, 1000);
  }
};

//cheaty

/*
const turnOnCheats = () => {
  numberOfCookies += 1000000;
  counter.innerHTML = "Počet smrtí po 48%: " + numberOfCookies;
};

turnOnCheats(); //spuštěni cheatů

function turnOnSuperCheats() {
  numberOfCookies += 100000000;
  counter.innerHTML = "Počet smrtí po 48%: " + numberOfCookies;
}

turnOnSuperCheats();

//cheats - do konzole numberOfCookies=číslo
//alt+shift+f = formatovaní

*/
