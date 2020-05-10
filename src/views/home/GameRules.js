import React from "react";
import { Link } from "react-router-dom";

export const GameRules = () => {
    return (
        <div>
            <div className="ui internally celled grid">
                <div className="row">
                    <div className="three wide column">
                        <div className="ui segment">
                            <div className="ui secondary vertical pointing menu">
                                <a className="active item" href="#table">
                                    Tábla
                                </a>
                                <a className="item" href="#figures">
                                    Figurák
                                </a>
                                <a className="item" href="#new-game">
                                    Új játék indítása
                                </a>
                                <a className="item" href="#join-room">
                                    Csatlakozás szobához
                                </a>
                                <a className="item" href="#how-to-play">
                                    Játék folyamata
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ten wide column">
                        <div className="ui segment">
                            <h1 className="ui header">Játékszabály</h1>
                            <p>A játékban két játékos játszik egymással egy-egy hadsereg élén. Cél az ellenfél zászlójának megszerzése.</p>

                            <h4 id="table" className="ui header">Tábla</h4>
                            <p>A tábla 10x10 cellából áll.</p>
                            <div className="ui divider"></div>

                            <h4 id="figures" className="ui header">Figurák</h4>
                            <p>
                                Eredetileg mindkét félnek 40 bábuja van: 1 zászló, 5 bomba, és katonák 1-től 10-es erővel.
                                Egymás bábuit azonban nem látják, csak akkor, amikor két bábu csatázni kezd.
                                Ekkor az erősebb bábu marad a pályán, a gyengébbik leesik a tábláról. Ha két azonos bábu harcol egymással, akkor mindkettő lekerül a tábláról.<br/>
                                Minden bábu csak 1-et léphet előre, hátra, jobbra, balra. a zászló és az akna értelemszerűen nem tud lépni. A táblán lehetnek olyan mezők, amelyre nem lehet lépni (tó).
                            </p>
                            <ul>
                                Van pár speciális figura:
                                <li>a 2-es a felderítő, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani.</li>
                                <li>a 3-as az aknász. Csak ő tudja hatástalanítani a bombát</li>
                                <li>az 1-es a kém, ha ő támadja meg az ellenfél 10-esét, akkor megöli.</li>
                                <li>bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról.</li>
                            </ul>
                            <div className="ui divider"></div>

                            <h4 id="new-game" className="ui header">Új játék indítása</h4>
                            <p>"Új játék" gombra kattintva egy várakozó "szobába" kerülünk, ahol a megjelenik a szoba azonosítója.</p>
                            <div className="ui divider"></div>

                            <h4 id="join-room" className="ui header">Csatlakozás szobához</h4>
                            <p>A "szoba szám" szöveges beviteli mezőbe kell beírni a szoba azonosítóját, majd a "csatlakozás" gombot megnyomni. A gomb megnyomására az előkészítő oldalra kerülünk.</p>
                            <div className="ui divider"></div>

                            <h4 id="how-to-play" className="ui header">Játék folyamata</h4>
                            <p>
                                Az 1. játékos választ egy figurát. Ekkor opcionálisan jelezzük a táblán, hogy az adott bábu hova léphet.
                                Ha újra a kiválasztott figurára kattintunk, akkor a kijelölés megszűnik. Kiválasztás után választunk egy cellát.
                                Ha nem léphet az adott cellára, akkor nem történik semmi. Ha oda léphet a bábu, akkor odalép.
                                Ha ez ellenséges bábu volt, akkor csata lesz, ami azt jelenti, hogy 3mp-ig kiírjuk mindkét játékos bábujának számát a tábla mellé,
                                majd az erőviszonyoknak megfelelően leveszünk egy vagy két bábut. A levett bábu megjelenik az adott játékos listájában.
                                3mp után a 2. játékos jön. Ha nem volt csata, akkor lépés után a 2. játékos jön. Az aktuális játékost jelezzük a felületen.
                            </p>
                        </div>
                    </div>
                    <div className="three wide column">
                        <div className="ui segment">
                            <Link  to="/">
                                Vissza a főoldalra
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
