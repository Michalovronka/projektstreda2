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
  counter.innerHTML = "Шайлушай:" + numberOfCookies;
};

upgradeClickButton.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odectu cenu upgradu
    numberOfCookies -= clickUpgradePrice;
    //numberOfCookies = numberOfCookies - 50
    counter.innerHTML = "Шайлушай:" + numberOfCookies;

    clickUpgradePrice += 50;
    upgradeClickButton.innerHTML = "Upgrade: " + clickUpgradePrice + " Шайлушай";

    clickIncrease++;
  }
};

upgradeAutoClickButton.onclick = () => {
  if (numberOfCookies >= autoclickerPrice) {
    //odectu stovku
    numberOfCookies -= autoclickerPrice;

    //aktualizuju odstavec
    counter.innerText = "Шайлушай:" + numberOfCookies;

    autoclickerPrice +=50;
    upgradeAutoClickButton.innerHTML = "AutoШайлушай: " + autoclickerPrice + " Шайлушай" ;

    //opakovani po čase pro pridani susenky
    autoclickIncrease++;
    //setInterval bere dva intervaly - funkci, opakovani v milisekundach
    clearInterval(autoclicker);
    autoclicker = setInterval(() => {
      numberOfCookies += autoclickIncrease;
      counter.innerText = "Шайлушай:" + numberOfCookies;
    }, 1000);
  }
};

//cheaty

const turnOnCheats = () =>{
    numberOfCookies += 1000000;
    counter.innerHTML = "Шайлушай:" + numberOfCookies;
}

turnOnCheats(); //spuštěni cheatů

function turnOnSuperCheats() {
    numberOfCookies += 100000000;
    counter.innerHTML = "Шайлушай:" + numberOfCookies;
}

turnOnSuperCheats();

//cheats - do konzole numberOfCookies=číslo
//alt+shift+f = formatovaní
