import React from "react";
import { Link } from "react-router-dom";
import {HeaderLogo} from "../components/HeaderLogo";

export const PreparingRoom = () => {
    return (
        <div>
            <HeaderLogo />
            <div className="ui segment mt-10">
                <h2 className="ui header">
                    <i className="tools icon"></i>
                    <div className="content">
                        Készülj fel a csatára
                    </div>
                </h2>
                <p>Helyezd el a bábukat a táblán. A zöld mezőkre tudod felrakosgatni őket. A figurák felett tartva az egeret információkhoz juthatsz.</p>
                <div className="ui middle aligned vertically divided grid ">
                    <div className="two column row vertically-middle">
                        <div className="column">
                            <table className="ui celled table board">
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td className="negative"></td>
                                    <td className="negative"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="negative"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="negative"></td>
                                    <td className="negative"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                </tr>
                                <tr>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                </tr>
                                <tr>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                </tr>
                                <tr>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                    <td className="positive"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column">
                            <table className="ui celled table board">
                                <tbody>
                                <tr>
                                    <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                    <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                    <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                    <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                    <td><em data-emoji="bomb" title="bomba: aki rálép, az felrobban, a bomba viszont megmarad. Csak az aknász képes leszedni a tábláról."></em></td>
                                    <td><em data-emoji="triangular_flag_on_post" title="zászló"></em></td>
                                    <td><em data-emoji="t_rex" title="tábornagy: 10-es erősségű katona"></em></td>
                                    <td><em data-emoji="lion_face" title="tábornok: 9-es erősségű katona"></em></td>
                                    <td><em data-emoji="tiger" title="ezredes: 8-as erősségű katona"></em></td>
                                    <td><em data-emoji="tiger" title="ezredes: 8-as erősségű katona"></em></td>
                                </tr>
                                <tr>
                                    <td><em data-emoji="wolf" title="őrnagy: 7-es erősségű katona"></em></td>
                                    <td><em data-emoji="wolf" title="őrnagy: 7-es erősségű katona"></em></td>
                                    <td><em data-emoji="wolf" title="őrnagy: 7-es erősségű katona"></em></td>
                                    <td><em data-emoji="water_buffalo" title="kapitány: 6-os erősségű katona"></em></td>
                                    <td><em data-emoji="water_buffalo" title="kapitány: 6-os erősségű katona"></em></td>
                                    <td><em data-emoji="water_buffalo" title="kapitány: 6-os erősségű katona"></em></td>
                                    <td><em data-emoji="water_buffalo" title="kapitány: 6-os erősségű katona"></em></td>
                                    <td><em data-emoji="ox" title="főhadnagy: 5-ős erősségű katona"></em></td>
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
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="raccoon" title="felderítő: 2-es erősségű katona, ő akárhány mezőt átugorva léphet vagy támadhat. Tavat ő sem tudja átugrani."></em></td>
                                    <td><em data-emoji="lizard" title="kém: 1-es erősségű katona, ha ő támadja meg az ellenfél 10-esét, akkor megöli."></em></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Link to="/gameroom" className="ui button">Kezdődhet a játék!</Link>
            </div>

        </div>

    );
};
