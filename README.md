Homepage: https://warriorsarenabynuc.herokuapp.com/

Wariors game uses dependencies:
npm i express express-async-errors express-handlebars method-override mysql2 uuid
npm i -D @types/express @types/node @types/uuid @types/method-override ts-node ts-node-dev typescript

tsconfig.json
{
"compilerOptions": {
"noImplicitAny": true,
"preserveConstEnums": true,
"sourceMap": true,
"target": "es6",
"downlevelIteration": true,
"lib": ["es6", "dom.iterable"],
"outDir": "dist",
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"moduleResolution": "Node"
}
}

package.json
"scripts": {
"start1": "ts-node index.ts",
"start2": "tsnd index.ts"
},

npm run start1
npm run start2

git push heroku master

Plan Wariors v1:

1. At the beginning, everyone has as many hit points (HP) as their toughness \* 10. Everyone has as many shields (DP) at the beginning equal to their defense.
2. A fighter that starts makes an attack equal to his strength
   3.If the attacked fighter has Shield + Agility greater than his attack power, then:
   3.1. His shield is deducted from the attack amount.
   3.2.A) If the attack was greater than the shield, the remaining amount of attack strength is deducted from its health.
   3.2.B) If the attack was up to the current target, no life is deducted.
   3.2. If the condition 3 is NOT FULFILLED, we simply subtract the attack from life
3. The order is changed and the attacker is now attacked and the attacker is attacked.
4. Repeat points 2 - 4 until someone dies, that is, his HP drops to min. 0. When one of the fighters dies, the attacker is the winner. We write him +1 to victories in the base.

us/en:
-Configure Webstorm / VSCODE

- Needed packages and TS configuration
  Express configuration and public folder - static files
  General routers - paths - plan the paths that will appear
  -Home
- /
  -Fighter registration
  -Form
  -Saving
  -Arena fights
  -Fighter selection form
  -Fighting in progress - combat log
  -The Hall of Fame
  List of the best fighters
  -View planning / general view structure

  -Records:

-- Database name: warrior_arena

-Tabels:
--warrior
--- ID - UUID (warchar 36)
--- Name - varchar (?) - unique!
--- Strength - tinyint (2)
--- Defense - tinyint (2)
--- Toughness - tinyint (2)
--- Agility - tinyint (2)
--- Number of wins: default 0 - INT (11)

-The logic of creating warriors
-The hall of fame logic
-Logic related to the battle arena

V2:
-Fight log: you can make a very nice version of this - by adding e.g. icons or other colors depending on the type of situation.
-Choose a Javascript front-end that will facilitate giving points to warriors.

---

1. Ka??dy na pocz??tku ma tyle punkt??w ??ycia (HP) ile wynosi jego wytrzyma??o???? \* 10. Ka??dy ma na ocz??tku tyle tarczy (DP) ile wynosi jego obrona.
2. Wojownik, kt??ry zaczyna wykonuje atak o warto??ci r??wnej jego sile
3. Je??eli wojownik atakowany ma tarcz?? + zwinno???? wi??ksz?? ni?? si??a ataku, to:
   3.1. Odejmowane mu jest tarcza w wysoko??ci ataku.
   3.2.A) Je??eli atak by?? wi??kszy ni?? tarcza, to odejmowana jest mu od ??ycia pozosta??a ilo???? si??y ataku.
   3.2.B) Je??eli atak by?? maksymalnie tyle ile wynosi aktualnie tarcza, to nie jest odejmowane ??ycie.
   3.2. Je??eli warunek 3 NIE JEST SPE??NIONY to po prostu od ??ycia odejmujemy atak
4. Nast??puje zmiana kolejno??ci i teraz atakowany zostaje atakuj??cym, a atakujacy zostaje atakowanym.
5. Powtarzamy punkty 2 - 4 tak d??ugo, dop??ki kto?? nie umrze, czyli jego HP nie spadnie do min. 0. Gdy jeden z wojownik??w umrze, to atakuj??cy zostaje zwyci??zc??. Zapisujemy mu w bazie +1 do zwyci??stw.

pl:
-Skonfigurowa?? Webstorm / VSCODE
-Potrzebne paczki i konfiguracja TS
Konfiguracja Express i folder publiczny - pliki statyczne
Og??lna str??kt??ra router??w - ??cie??ek - zaplanowa?? ??cie??ki jakie sie pojawi??
-Strona g??owna
-/
-Rejestracja wojownika
-Formularz
-Zapisanie
-Arena walk
-Formularz wyboru wojownika
-Przeprowadzeie walki - log walki
-Sala S??aw
Lista najlepszych wojownik??w
-Zaplanowanie widok??w / og??lna strukt??ra widok??w

-Rekordy:
--Nazwa bazy danych: warriors_arena

-Tabele:
--warrior
---ID - UUID (warchar 36)
---Imie - varchar(?) - unikatowe!
---Si??a - tinyint(2)
---Obrona - tinyint(2)
---Wytrzyma??o???? - tinyint(2)
---Zwinno???? - tinyint(2)
---Liczba zwyci??stw: domy??lnie 0 - INT(11)

-Logika zwi??zana z tworzeniem wojownik??w
-Logika zwi??zana z sal?? s??aw
-Logika zwi??zana z aren?? walk

V2:
-Log walki: mo??esz zrobi?? bardzo ??adn?? wersje tego - przez dodanie np. ikon czy innych kolor??w w zale??no??ci o typu sytu??acji.
-Dobra?? front-endowy Javascript, kt??ry u??atwi rozdawanie punkt??w u wojownik??w.
