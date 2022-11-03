
import Link from "next/link"

function LeftSideBar({activeIndex, setActiveIndex}) {

    const handleOnClick = (index) => {
        setActiveIndex(index) // remove the curly braces
    }


    return (
        <ul className="nav flex-column" role="tablist">
            <li className="nav-item">
            <Link href="/a-propos"><a className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}>A propos</a></Link>
            </li>
            <li className="nav-item">
            <Link href="/utile-exposant"><a className={activeIndex === 2 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(2)}>Utile pour l'exposant</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 3 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(3)}>Utile pour l'internaute</a></Link>
            </li>
            <li className="nav-item">
            <Link href="/revuedepresse"><a className={activeIndex === 4 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(4)}>La presse et le web en parlent</a></Link>
            </li>
            <li className="nav-item">
            <Link href="/testimoniaux_exposants"><a className={activeIndex === 5 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(5)}>Témoignages Exposants</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 6 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(6)}>Témoignages Acheteurs</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 7 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(7)}>Sondage OpinionWay</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 8 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(8)}>Audience et visitorat</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 9 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(9)}>Recrutement</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 10 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(10)}>Exposer</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 11 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(11)}>Vendre</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 12 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(12)}>Conditions générales de vente</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 13 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(13)}>FAQ Acheteur</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 14 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(14)}>FAQ Exposant</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 15 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(15)}>L'équipe</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 16 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(16)}>Contacts</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 17 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(17)}>Mentions légales</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 18 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(18)}>Informations Cookies</a></Link>
            </li>
            <li className="nav-item">
            <Link href="#"><a className={activeIndex === 19 ? "nav-link active" : "nav-link"}  onClick={() => handleOnClick(19)}>Politique de confidentialité</a></Link>
            </li>
        </ul>
    )
}

export default LeftSideBar
