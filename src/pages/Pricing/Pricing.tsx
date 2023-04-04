import './Pricing.scss'

const Pricing = () => {
    return (
        <div className='pricing-screen'>
            <h1>Prissättning</h1>
            <h2>Våra prispaket</h2>
            <p>Priserna nedan är ungefärliga. Jag jobbar för <span>120 kr/h</span> och priserna nedan är en <span>uppskattning</span> på priset baserat på antal arbetstimmar som projektet tar.</p>
            <table>
                <thead>
                    <tr>
                        <th>Tjänst</th>
                        <th>Basic</th>
                        <th>Standard</th>
                        <th>Premium</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Webbdesign</td>
                        <td>
                            <ul>
                                <li>En anpassad hemsida</li>
                                <li>Upp till 3 ytterligare sidor</li>
                                <li>Grundläggande designelement, t.ex. val av typsnitt och färgscheman</li>
                            </ul>
                            <span>1500-2500</span>
                        </td>
                        <td>
                            <ul>
                                <li>En anpassad hemsida</li>
                                <li>Upp till 5 ytterligare sidor</li>
                                <li>Mer avancerade designelement, t.ex. grafisk design, responsiv design och användarupplevelse</li>
                            </ul>
                            <span>2500-7500</span>
                        </td>
                        <td>
                            <ul>
                                <li>En anpassad hemsida</li>
                                <li>Upp till 10 sidor</li>
                                <li>Avancerade designelement, t.ex. animationer och multimedia</li>
                            </ul>
                            <span>7500-15000</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Webbutveckling</td>
                        <td>
                            <ul>
                                <li>Grundläggande webbapplikation</li>
                                <li>Begränsad funktionalitet och funktioner</li>
                            </ul>
                            <span>2500-7500</span>
                        </td>
                        <td>
                            <ul>
                                <li>Komplex webbapplikation</li>
                                <li>Funktioner som användarautentisering och integration med databaser</li>
                            </ul>
                            <span>7500-15000</span>
                        </td>
                        <td>
                            <ul>
                                <li>Utveckling av en högst komplex webbapplikation</li>
                                <li>Avancerade funktioner som realtidsdataprocessering och integration med tredjeparts-API:er</li>
                            </ul>
                            <span>15000-25000</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Apputveckling</td>
                        <td>
                            <ul>
                                <li>Grundläggande app</li>
                                <li>Begränsad funktionalitet och funktioner</li>
                            </ul>
                            <span>2500-7500</span>
                        </td>
                        <td>
                            <ul>
                                <li>Komplex app</li>
                                <li>Funktioner som användarautentisering och push-notifikationer</li>
                            </ul>
                            <span>7500-15000</span>
                        </td>
                        <td>
                            <ul>
                                <li>Utveckling av en högst komplex app</li>
                                <li>Avancerade funktioner som realtidsdataprocessering och integration med tredjeparts-API:er</li>
                            </ul>
                            <span>15000-25000</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Pricing