import React from "react";
import {Link} from "react-router-dom";
import {HeaderLogo} from "../components/HeaderLogo";

export const GameRoom = () => {
    return (
        <div>
            <HeaderLogo />
            <div className="ui internally celled grid">
                <div className="row">
                    <div className="three wide column">
                        <div className="ui card">
                            <div className="content">
                                <div className="header">1. Játékos (Te)</div>
                            </div>
                            <div className="content">
                                <div className="content">
                                    Kiesett játékosok:
                                    <div className="ui list">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ten wide column">
                        <div className="ui segment">
                            <h4 className="ui header">
                                <i className="dice icon"></i>
                                <div className="content">
                                    Lép: 1. játékos (Te)
                                </div>
                            </h4>
                        </div>
                        <div className="ui segment">
                            <table className="ui celled table board">
                                <tbody>
                                    <tr>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                    </tr>
                                    <tr>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                    </tr>
                                    <tr>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                    </tr>
                                    <tr>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                        <td className="enemy"><em data-emoji="crossed_swords"></em></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="negative"><em data-emoji="ocean"></em></td>
                                        <td className="negative"><em data-emoji="ocean"></em></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="negative"><em data-emoji="mountain"></em></td>
                                    </tr>
                                    <tr>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="negative"><em data-emoji="ocean"></em></td>
                                        <td className="negative"><em data-emoji="ocean"></em></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                        <td className="positive"></td>
                                    </tr>
                                    <tr>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="tiger" title="ezredes: 8-as erősségű katona"></em></td>
                                        <td><em data-emoji="t_rex" title="tábornagy: 10-es erősségű katona"></em></td>
                                        <td><em data-emoji="lion_face" title="tábornok: 9-es erősségű katona"></em></td>
                                        <td><em data-emoji="water_buffalo" title="kapitány: 6-os erősségű katona"></em></td>
                                        <td><em data-emoji="lizard" title="kém: 1-es erősségű katona, ha ő támadja meg az ellenfél 10-esét, akkor megöli."></em></td>
                                    </tr>
                                    <tr>
                                        <td><em data-emoji="wolf" title="őrnagy: 7-es erősségű katona"></em></td>
                                        <td><em data-emoji="wolf" title="őrnagy: 7-es erősségű katona"></em></td>
                                        <td><em data-emoji="wolf" title="őrnagy: 7-es erősségű katona"></em></td>
                                        <td><em data-emoji="water_buffalo" title="kapitány: 6-os erősségű katona"></em></td>
                                        <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                        <td><em data-emoji="water_buffalo" title="kapitány: 6-os erősségű katona"></em></td>
                                        <td><em data-emoji="water_buffalo" title="kapitány: 6-os erősségű katona"></em></td>
                                        <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                        <td><em data-emoji="ox" title="főhadnagy: 5-ős erősségű katona"></em></td>
                                        <td><em data-emoji="ox" title="főhadnagy: 5-ős erősségű katona"></em></td>
                                    </tr>
                                    <tr>
                                        <td><em data-emoji="ox" title="főhadnagy: 5-ős erősségű katona"></em></td>
                                        <td><em data-emoji="boar" title="őrmester: 4-es erősségű katona"></em></td>
                                        <td><em data-emoji="boar" title="őrmester: 4-es erősségű katona"></em></td>
                                        <td><em data-emoji="boar" title="őrmester: 4-es erősségű katona"></em></td>
                                        <td><em data-emoji="boar" title="őrmester: 4-es erősségű katona"></em></td>
                                        <td><em data-emoji="ant" title="aknász: 3-as erősségű katona. Csak ő tudja hatástalanítani a bombát"></em></td>
                                        <td><em data-emoji="ant" title="aknász: 3-as erősségű katona. Csak ő tudja hatástalanítani a bombát"></em></td>
                                        <td><em data-emoji="ant" title="aknász: 3-as erősségű katona. Csak ő tudja hatástalanítani a bombát"></em></td>
                                        <td><em data-emoji="ant" title="aknász: 3-as erősségű katona. Csak ő tudja hatástalanítani a bombát"></em></td>
                                        <td><em data-emoji="ant" title="aknász: 3-as erősségű katona. Csak ő tudja hatástalanítani a bombát"></em></td>
                                    </tr>
                                    <tr>
                                        <td><em data-emoji="ox" title="főhadnagy: 5-ős erősségű katona"></em></td>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                        <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                        <td><em data-emoji="triangular_flag_on_post" title="zászló"></em></td>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                        <td><em data-emoji="tiger" title="ezredes: 8-as erősségű katona"></em></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ui segment">
                            <Link  to="/">
                                Vissza a főoldalra
                            </Link>
                        </div>
                    </div>
                    <div className="three wide column">
                        <div className="ui card">
                            <div className="content">
                                <div className="header">2. Játékos</div>
                            </div>
                            <div className="content">
                                Kiesett játékosok:
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
