import React from 'react';
import logo from '../src/assets/logo.png'
import apple from '../src/assets/apple.png'
import googlePlay from '../src/assets/googlePlay.png'
import phone from '../src/assets/phone.avif'
import phoneMain from '../src/assets/phoneMain.png'
import phone3 from '../src/assets/phone3.png'
import phone4 from '../src/assets/phone4.png'
import graphs from '../src/assets/graphs.png'
import maps from '../src/assets/maps.png'
import marionImg from '../src/assets/marion.avif';


const LandingPage = () => {


    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 md:px-12">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <span className="text-xl font-semibold text-gray-800">Amme</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                    Nous contacter
                </button>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-6 md:px-12 py-12">
                <div className="flex flex-col lg:flex-col ">
                    {/* Left Content */}
                    <div className="space-y-8 display-flex mb-10">
                        <div className="flex justify-center items-center flex-col space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600">
                                Soins Maîtrisés,
                                <br />
                                <span className="text-blue-500">Sans Obstacle.</span>
                            </h1>

                            <div className="space-y-4 text-blue-600 text-lg leading-relaxed">
                                <p>
                                    Simplifiez votre quotidien d'infirmier libéral grâce à notre application dédiée. Gérez facilement
                                </p>
                                <p>
                                    vos tournées, assurez un suivi optimal de vos patients à domicile, facilitez la coordination avec
                                </p>
                                <p>
                                    les pharmacies et pilotez votre compatibilité en toute simplicité.
                                </p>
                                <p>
                                    Gagnez du temps, sécurisez vos transmissions et concentrez-vous sur l'essentiel : le soin.
                                </p>
                            </div>
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex flex-col justify-center sm:flex-row gap-4">
                            <img src={apple} alt="Apple Store" className="h-15 w-40" />
                            <img src={googlePlay} alt="Google Play" className="h-15 w-40" />
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="flex justify-center">
                        <img src={phone} alt="Phone Mockup" className="w-1/2 h-auto" />
                    </div>
                </div>
            </div>

            {/* SS section */}
            <div className="bg-[#f2f8ff] py-12 flex justify-center items-center">
                <div className="container mx-auto px-4 md:px-12 text-center w-full">
                    <h1 className="text-3xl md:text-5xl font-semibold mb-12 leading-tight">
                        À vous les soins.<br />À nous l’organisation.
                    </h1>

                    <div className="flex flex-col items-center justify-center space-y-8">
                        {/* Top Section */}
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl shadow-md p-9 flex flex-col items-center w-[370px]">
                                <h4 className="font-medium mb-4">Gérez vos rendez-vous.<br />
                                    <span className='text-gray-500'>
                                        Pour une organisation efficace.
                                    </span>
                                </h4>
                                <img src={phoneMain} alt="Phone Main" className="w-[300px] max-w-full" />
                            </div>

                            <div className="flex flex-col space-y-10">
                                {/* Card 2 */}
                                <div className="bg-white rounded-xl shadow-md p-9 flex flex-col items-center w-[370px]">
                                    <h4 className="font-medium mb-4">Suivi kilométrique simplifié.<br />
                                        <span className='text-gray-500'>
                                            Vos trajets et remboursements, en un clin d'œil.
                                        </span>
                                    </h4>
                                    <img src={graphs} alt="Graphs" className="w-[300px] max-w-full" />
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white rounded-xl shadow-md p-9 flex flex-col items-center w-[370px]">
                                    <h4 className="font-medium mb-4">Optimisez vos déplacements.<br />
                                        <span className='text-gray-500'>
                                            Simplifiez vos trajets grâce à nos intégrations.
                                        </span>
                                    </h4>
                                    <img src={maps} alt="Maps Integration" className="w-[300px] max-w-full" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
                            {/* Card 4 */}
                            <div className="bg-white rounded-xl shadow-md p-9 flex flex-col items-center w-[370px]">
                                <h4 className="font-medium mb-4">Connexion Lecteur Vitale.<br />
                                    <span className='text-gray-500'>
                                        Synchronisation rapide et sécurisée via Bluetooth.
                                    </span>
                                </h4>
                                <img src={phone3} alt="Phone with Vitale" className="w-[300px] max-w-full" />
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white rounded-xl shadow-md p-9 flex flex-col items-center w-[370px]">
                                <h4 className="font-medium mb-4">Numérisez vos ordonnances.<br />
                                    <span className='text-gray-500'>
                                        Générez automatiquement les soins à administrer.
                                    </span>
                                </h4>
                                <img src={phone4} alt="Scan Prescription" className="w-[300px] max-w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* featureSection */}
            <div className="bg-white py-16 flex justify-center items-center">
                <div className="container mx-auto px-4 md:px-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-16">
                        Fonctionnalités clés pour les infirmiers<br /> libéraux.
                    </h2>

                    <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
                        {/* Feature 1 */}
                        <div className="w-64 text-left">
                            <div className="text-2xl mb-2 text-blue-600">📅</div>
                            <h4 className="font-semibold mb-1">Gestion des rendez-vous</h4>
                            <p className="text-gray-600 text-sm">Organisez facilement vos plannings et optimisez vos tournées en quelques clics.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="w-64 text-left">
                            <div className="text-2xl mb-2 text-purple-400">📄</div>
                            <h4 className="font-semibold mb-1">Gestion des ordonnances</h4>
                            <p className="text-gray-600 text-sm">Numérisez, centralisez et transmettez les prescriptions médicales en toute sécurité.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="w-64 text-left">
                            <div className="text-2xl mb-2 text-purple-700">👤</div>
                            <h4 className="font-semibold mb-1">Suivi patient</h4>
                            <p className="text-gray-600 text-sm">Accédez à l’historique des soins, aux constantes et aux dossiers patients à tout moment.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="w-64 text-left">
                            <div className="text-2xl mb-2 text-sky-500">💶</div>
                            <h4 className="font-semibold mb-1">Facturation simplifiée</h4>
                            <p className="text-gray-600 text-sm">Générez vos factures et télétransmettez-les directement à la Sécurité sociale.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="w-64 text-left">
                            <div className="text-2xl mb-2 text-pink-500">📍</div>
                            <h4 className="font-semibold mb-1">Optimisation des déplacements</h4>
                            <p className="text-gray-600 text-sm">Planifiez vos itinéraires pour réduire les temps de trajet et les kilomètres parcourus.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="w-64 text-left">
                            <div className="text-2xl mb-2 text-violet-400">💬</div>
                            <h4 className="font-semibold mb-1">Coordination avec les pharmacies</h4>
                            <p className="text-gray-600 text-sm">Collaborez facilement avec les pharmacies pour une prise en charge rapide des patients.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* price and testimonials section */}
            <div>
                {/* Pricing Section */}
                <div className="bg-[#f2f8ff] py-16 flex justify-center items-center">
                    <div className="text-center w-full px-4">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-12">Nos tarifications</h2>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            {/* Monthly */}
                            <div className="bg-white rounded-xl shadow-md p-6 w-80 text-left">
                                <h4 className="font-semibold text-sm mb-2">Mensuel</h4>
                                <p className="text-sm mb-4 text-gray-600">Idéal pour tester le service sans engagement.</p>
                                <p className="text-3xl font-semibold mb-1">40€ <span className="text-base font-normal text-gray-600">/mois</span></p>
                                <p className="text-sm text-gray-500 mb-6">
                                    Premier mois gratuit, sans engagement, 40€ par mois ensuite avec la possibilité d’annuler à tout moment.
                                </p>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">Commencer</button>
                            </div>

                            {/* Annual */}
                            <div className="bg-white rounded-xl shadow-md p-6 w-80 text-left relative">
                                <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">Populaire</div>
                                <h4 className="font-semibold text-sm mb-2">Annuel</h4>
                                <p className="text-sm mb-4 text-gray-600">Équipement immédiat, tarif réduit ensuite.</p>
                                <p className="text-3xl font-semibold mb-1">400€ <span className="text-base font-normal text-gray-600">/an au lieu de 480€ <span className="text-blue-500">(2 mois offert)</span></span></p>
                                <p className="text-sm text-gray-500 mb-6">
                                    Cet abonnement souligne la flexibilité, parfait pour ceux qui veulent essayer le service sans engagement.
                                </p>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">Commencer</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="bg-white py-16 flex justify-center items-center">
                    <div className="text-center max-w-4xl px-6">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-12">Ce que pensent nos utilisateurs.</h2>

                        <div className="flex flex-col items-center">
                            <img src={marionImg} alt="Marion Petit" className="w-16 h-16 rounded-full mb-4" />
                            <div className="mb-2 font-semibold text-sm">Marion Petit</div>
                            <div className="text-xs text-gray-500 mb-6">Infirmière libérale</div>
                            <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
                                « AMME a vraiment simplifié mon quotidien d’infirmière libérale. Je reçois les ordonnances de mes patients
                                directement sur l’application, je planifie mes tournées en quelques clics et je gagne du temps grâce à la géolocalisation.
                                La coordination avec la pharmacie est fluide, et toute la gestion administrative est centralisée. Je peux ainsi me
                                concentrer sur mes patients, tout en optimisant mon organisation. »
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <footer className="bg-white border-t border-gray-200 py-6 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Amme Logo" className="w-6 h-6" />
                        <span className="font-medium text-base text-blue-600">Amme</span>
                    </div>

                    {/* Center: Copyright */}
                    <div className="text-center md:text-left">
                        © 2025 AMME. Tous droits réservés.
                    </div>

                    {/* Right: Links */}
                    {/* <div className="flex"> */}
                    <a href="#" className="hover:underline">Politique de confidentialité</a>
                    <a href="#" className="hover:underline">Conditions d'utilisation

                    </a>
                    {/* </div> */}
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
