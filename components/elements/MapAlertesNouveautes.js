
import {useState, useRef} from 'react'

const Gmap = () => {

    const emailRef = useRef(null)
    const nomRef = useRef(null)
    const prenomRef = useRef(null)

    const [stateTenuInforme, setStateEtreInforme] = useState(false)

    const [stateMonsieur, setStateMonsieur] = useState(false)
    const [stateMadame, setStateMadame] = useState(false)

    const [stateParticulier, setStateParticulier] = useState(true)
    const [stateProfessionnel, setStateProfessionnel] = useState(false)

    const [stateBonPlan, setStateBonPlan]  = useState(false)

    const handleCheckBox = () => {
        setStateEtreInforme(!stateTenuInforme)
    }

    const handleCheckBox2 = (value) => {
        if(value == "M"){
            setStateMonsieur(!stateMonsieur)
        }
        else if (value == "Mme"){
            setStateMadame(!stateMadame)
        }
    }

    const handleCheckBox3 = (value) => {
        if(value == "particulier"){
            setStateParticulier(true)
            setStateProfessionnel(false)
        }
        else if (value == "professionnel"){
            setStateParticulier(false)
            setStateProfessionnel(true)            
        }

    }

    const handleCheckBox4 = () => {
        setStateBonPlan(!stateBonPlan)
    }

    const handleSubmit = (e) => {
        e.preventDefault()   
    }

    return (
    <form onSubmit={handleSubmit} style={{width:'100%'}}>
        <div className="custome-checkbox mb-20">
            <div className="checkbox-label mb-20" onClick={()=>handleCheckBox()}>
                <input
                type="checkbox"
                className="form-check-input"
                checked={stateTenuInforme}
                required={true}
                id="nv"
            />
                <label className="form-check-label" style={{textTransform:"capitalize"}}>
                    Je souhaite être tenu informé des nouveaux produits de cette entreprise
                </label>                            
            </div>
            <div className="checkbox-container mb-20">
                <div className="checkbox-label ml-3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Civilité : 
                </div>
                <div className="checkbox-label" onClick={(e) => handleCheckBox2("Mme")}>
                    <input
                    type="checkbox"
                    className="form-check-input"
                    checked={stateMadame}
                    id="professionnel"  
                    />
                    <label className="form-check-label" style={{textTransform:"capitalize"}}>
                        Mme  
                    </label>                            
                </div>
                <div className="checkbox-label" onClick={(e) => handleCheckBox2("M")}>
                    <input
                    type="checkbox"
                    className="form-check-input"
                    name={'eklnfdl'}
                    value={'ldkf,'}
                    checked={stateMonsieur}
                    onChange={'mdffg'}
                    id={'mdfok'}   
                    />
                    <label className="form-check-label" htmlFor={'lkdfg'} style={{textTransform:"capitalize"}}>
                        M  
                    </label>                            
                </div>
            </div>
            <div className="mb-10">
                <input ref={prenomRef} name="text" placeholder="Prénom" type="email" />
            </div>
            <div className="mb-10">
                <input ref={nomRef} name="text" placeholder="Nom" type="email" />
            </div>
            <div className="mb-10">
                <input ref={emailRef} name="email" placeholder="Email" type="email" />
            </div>
        </div>
        <div className="custome-checkbox mb-25">
            <div className="checkbox-container ">
                <div className="checkbox-label ml-3">
                    Je suis un : 
                </div>
                <div className="checkbox-label" onClick={(e) => handleCheckBox3("professionnel")}>
                    <input
                    type="checkbox"
                    className="form-check-input"
                    checked={stateProfessionnel}
                    id={'professionnel'}   
                    />
                    <label className="form-check-label" style={{textTransform:"capitalize"}}>
                        professionnel de la déco   
                    </label>                            
                </div>
                <div className="checkbox-label" onClick={(e) => handleCheckBox3("particulier")}>
                    <input
                    type="checkbox"
                    className="form-check-input"
                    checked={stateParticulier}
                    id={'particulier'}   
                    />
                    <label className="form-check-label" style={{textTransform:"capitalize"}}>
                        particulier  
                    </label>                            
                </div>
            </div>
        </div>
        <p className='mb-20'>Decofinder sélectionne pour vous les meilleures offres de ses partenaires. Profitez de ventes privées, d'invitations personnelles aux événements déco et design ou d'offres promotionnelles exclusives.</p>
        <div className="custome-checkbox mb-20">
            <div className="checkbox-label mb-20" onClick={()=>handleCheckBox4()}>
                <input
                type="checkbox"
                className="form-check-input"
                checked={stateBonPlan}
                id={'bp'}   
                />
                <label className="form-check-label" htmlFor={'lkdfg'} style={{textTransform:"capitalize"}}>
                    Je souhaite également recevoir par email les bons plans de la déco et du design des partenaires de Decofinder.com.
                </label>                            
            </div>
        </div>
        <div className="mb-20">
        <button className="submit submit-auto-width" type="submit">Next</button>
        </div>
    </form>
    )
}

export default Gmap