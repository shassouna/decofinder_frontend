
import React, { useState } from "react"
import LeftSideBar from "../../components/elements/LeftSiseBar"
import RightSideBar from "../../components/elements/RightSideBar"
function Account() {

    const [activeIndex, setActiveIndex] = useState(2)

    return (
        <>
            <div className="page-content pt-40 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 m-auto">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="dashboard-menu">
                                        <LeftSideBar activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="tab-content account dashboard-content pl-50">
                                        <div className="tab-pane fade active show">
                                            <div className="card">
                                                <div className="card-header mb-20">
                                                    <h1 className="mb-10">DECOFINDER UTILE POUR L'EXPOSANT</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Le bon Chiffre d'Affaires</h2>
                                                        <p>Lorsqu'elle est à l'équilibre, une entreprise qui augmente son chiffre d'affaire de 5%, voit bien souvent son profit augmenter de 40%.</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand mb-15">&#x25cf; Quelques "rappels" utiles : Ne pas surestimer sa notoriété</h2>
                                                        <div className="single-content">            
                                                            <ul>
                                                                <li>Dans le secteur de l'ameublement décoratif, seules une dizaine d'entreprises bénéficient d'une notoriété spontanée : Ikea, Habitat, Roche Bobois../.. Genevieve Lethu.</li>
                                                                <li>Elles seules pourront être recherchées par leur nom.</li>
                                                                <li>Malgré leur notoriété ces entreprises ne peuvent être assurées que leur nom sera automatiquement associé aux produits qu'elles proposent.</li>
                                                                <li>Pour les autres entreprises (35 000 en France), si elles sont évidemment connues de leurs clients, ce n'est qu'en assurant la visibilité de leurs produits qu'elles pourront être choisies par de nouveaux acheteurs.</li>
                                                                <li>S'il ne suffit pas de voir un produit pour l'acheter, jamais personne n'a pu acheter le moindre produit de décoration sans l'avoir vu au préalable.</li>
                                                                <li>Même s'il s'adresse à un de vos distributeurs, n'oubliez pas que c'est le consommateur final qui achète vos produits. Montrez-les lui.</li>
                                                                <li>Même vos propres clients ne connaissent pas tous les produits qu'ils pourraient vous acheter.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Les cibles de clientèle</h2>
                                                        <div className="single-content mb-20">   
                                                            <ul>
                                                                <li>1 - Celle qui assure votre chiffre d'affaires actuel : vos clients.</li>
                                                                <li>2 - Celle qui est en phase d'achat et qui ne vous connaît pas.</li>
                                                                <li>3 - Celle qui est susceptible de devenir votre client plus tard.</li>
                                                            </ul>
                                                        </div>
                                                        <div className="mb-20">
                                                            <h3 className="mb-5">Vos clients actuels</h3>
                                                            <p>
                                                                Il importe de consolider l'acquis fidéliser sa clientèle pour augmenter (ou maintenir) son chiffre d'affaire ou panier moyen. Ne pas perdre de parts de marché au profit d'un concurrent plus actif.
                                                                S'agissant d'un réseau de distribution, le fidéliser c'est lui faire connaître les produits qu'il ne connaîtrait pas encore et lui apporter une clientèle additionnelle.
                                                            </p>
                                                        </div>
                                                        <div className="mb-20">
                                                            <h3 className="mb-5">Acheteurs en phase d'achat</h3>
                                                            <p>
                                                                Cette cible qui ne vous connaît pas est en demande d'information : c'est le moment de lui montrer vos produits.
                                                                C'est un phénomène nouveau : grâce à Internet l'acheteur peut maintenant manifester son besoin et il s'attend à ce qu'une réponse pertinente lui soit apportée à ce moment là  pas la veille ni le lendemain. Cette clientèle additionnelle est en cela nouvelle d'une part , extrêmement ciblée d'autre part.
                                                                Elle est enfin de plus en plus nombreuse. Et il sera toujours plus rentable de satisfaire les besoins d'un acheteur que de chercher à les provoquer.
                                                            </p>
                                                        </div>
                                                        <div className="mb-20">
                                                            <h3 className="mb-5">Vos clients de demain</h3>
                                                            <p>
                                                                Les moyens dont on disposait jusqu'alors pour toucher cette cible sont connus : presse (publicité ou rédactionnels) et salons (professionnels ou non). Leurs principaux inconvénients : leur côut et leurs retombées limitées dans le temps et difficilement quantifiables. Mais ils ont leur spécificité et leur utilité.
                                                            </p>
                                                            <p>
                                                                Pour les mêmes raisons que les acheteurs en phase d'achat, ils sont de plus en plus nombreux à utiliser Internet pour préparer au calme leurs futurs achats, la visite d'un salon etc.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <h2 className="mb-2 text-brand">&#x25cf; Le bon support : Decofinder</h2>
                                                        <p>Conçu pour satisfaire les besoins des acheteurs (cf Utile pour l'acheteur), son audience traduit sa popularité et la pertinence de son approche. Utile pour l'acheteur, DF est utile pour l'exposant.</p>
                                                        <p>DF facteur permanent de visibilité et de notoriété auprès d'une clientèle additionnelle, internationale et à haut pouvoir d'achat.(cf Audience).</p>
                                                    </div>
                                                    <div className="col-lg-12 mb-lg-0 mb-25">
                                                        <ul>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">vous touchez la bonne clientèle</h3>
                                                                <p>Grâce au Decofinder, vous répondez présent chaque fois qu'un acheteur recherche un produit que vous fabriquez.</p>
                                                                <p>Decofinder permet aux internautes en situation d'achat de découvrir vos produits alors même qu'ils ne vous connaissaient pas 5 mn auparavant.</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">des acheteurs de qualité</h3>
                                                                <p>Les utilisateurs du Decofinder appartiennent aux catégories CSP+ (cf audience) et sont en recherche de produits. Grâce au Decofinder, ils ont déjà fait le tour du marché et vu vos produits : lorsqu'ils vous contactent, ils sont pratiquement décidés.</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">vous fidélisez votre réseau de revendeurs</h3>
                                                                <p>Si, comme beaucoup, vous ne vendez pas au particulier ou disposez d'un réseau de revendeurs, montrez néanmoins vos produits à ceux qui peuvent les acheter !</p>
                                                                <p>Indiquez sur votre page-partenaire "Vente aux professionnels exclusivement" et listez gratuitement les coordonnées de vos revendeurs qui seront contactés par des acheteurs informés et décidés.</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">votre site gagne en popularité</h3>
                                                                <p>Chaque produit présenté comporte 2 liens externes vers votre site d'où une augmentation sensible de sa " popularité" et un renforcement de son "ranking" sur les moteurs.</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">vous gagnez en notoriété</h3>
                                                                <p>Votre nom est systématiquement affiché en même temps que le visuel du produit recherché.</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">présence dans les rédactionnels</h3>
                                                                <p>Vous êtes systématiquement contactés et présents lors de l'élaboration de nos dossiers thématiques rédactionnels.</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">vous avez un contact direct avec le client</h3>
                                                                <p> 
                                                                    Vos coordonnées (adresses, show room, téléphone, fax, email) sont clairement indiquées.
                                                                    Votre documentation électronique (votre site) est accessible à partir de chaque produit.
                                                                    Les formulaires de demandes et contacts remplis sur Decofinder vous sont également transmis avec visualisation des produits sélectionnés par l'acheteur.
                                                                </p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">votre espace est personnalisé, complet et modifiable en ligne.</h3>
                                                                <p>Votre nom figure sous chacun de vos visuels-produits pour chaque produit :</p>
                                                                <p>- Un zoom, un descriptif et deux liens vers votre site.</p>
                                                                <p>- Un lien vers votre page-partenaire avec visuel pleine page, coordonnées, collection, liste des revendeurs, nouveautés, promotions, communiqués.</p>
                                                                <p>Vous mettez à jour en ligne sans coût ni délai Grâce au Decopro. Vous modifiez vous mêmes et très facilement les informations- produits et entreprise</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">vous avez accès à vos statistiques en temps réel</h3>
                                                                <p>Affichages, zoom, produit par produit. Affichage de vos bandeaux et bannières, nombre d'accès à votre page, à votre site.</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">des emplacements privilégiés pour "faire la différence"</h3>
                                                                <p>Pour vos produits phares ou stratégiques (Espaces Premiums sur Home page, pages Univers/Catégories/Produits)</p>
                                                                <p>Pour votre entreprise : bandeaux et bannières</p>
                                                            </li>
                                                            <li className="mb-15">
                                                                <h3 className="mb-5">un investissement rentable avant même le 1er client</h3>
                                                                <p>Des formules d'abonnement complètes, souples et économiques vous apportent dès le début les avantages suivants : visibilité des produits, notoriété de votre Marque, renforcement du ranking et du trafic de votre site, communiqués de presse et indication des points de vente.</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <RightSideBar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
