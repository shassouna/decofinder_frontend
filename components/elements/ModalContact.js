
import {useState, useRef} from 'react'

const Gmap = () => {

    const emailRef = useRef(null)
    const precisionRef = useRef(null)

    const [stateDocumentation, setStateDocumentation] = useState(true)
    const [statePointsDeVente, setStatePointsDeVente] = useState(false)
    const [stateEtreContacte, setStateEtreContacte] = useState(false)

    const [stateParticulier, setStateParticulier] = useState(true)
    const [stateProfessionnel, setStateProfessionnel] = useState(false)

    const handleCheckBox = (value) => {

        if(value == "documentation"){
            setStateDocumentation(true)
            setStateEtreContacte(false)
            setStatePointsDeVente(false)
        }
        else if (value == "poinsDeVente"){
            setStateDocumentation(false)
            setStateEtreContacte(false)
            setStatePointsDeVente(true)
        }
        else if (value == "etreContacter"){
            setStateDocumentation(false)
            setStateEtreContacte(true)
            setStatePointsDeVente(false)            
        }
    }

    const handleCheckBox2 = (value) => {
        if(value == "particulier"){
            setStateParticulier(true)
            setStateProfessionnel(false)
        }
        else if (value == "professionnel"){
            setStateParticulier(false)
            setStateProfessionnel(true)            
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
    <form onSubmit={handleSubmit} style={{width:'100%'}}>
        <div className="custome-checkbox mb-20">
            <div key={'dlf'}>
                <div className="checkbox-container" onClick={(e) => handleCheckBox("documentation")}>
                    <div className="checkbox-label">
                    <input
                    type="checkbox"
                    className="form-check-input"
                    name={'eklnfdl'}
                    value={'ldkf,'}
                    checked={stateDocumentation}
                    id={'mdfok'}   
                />
                    <label className="form-check-label" htmlFor={'lkdfg'} style={{textTransform:"capitalize"}}>
                        Je souhaite recevoir votre documentation
                    </label>                            
                    </div>
                </div>
            </div>
            <div key={'dlf'}>
                <div className="checkbox-container" onClick={(e) => handleCheckBox("poinsDeVente")}>
                    <div className="checkbox-label">
                    <input
                    type="checkbox"
                    className="form-check-input"
                    name={'eklnfdl'}
                    value={'ldkf,'}
                    checked={statePointsDeVente}
                    onChange={'mdffg'}
                    id={'mdfok'}   
                />
                    <label className="form-check-label" htmlFor={'lkdfg'} style={{textTransform:"capitalize"}}>
                        Je souhaite recevoir la liste des points de vente    
                    </label>                            
                    </div>
                </div>
            </div>
            <div key={'dlf'}>
                <div className="checkbox-container" onClick={(e) => handleCheckBox("etreContacter")}>
                    <div className="checkbox-label">
                    <input
                    type="checkbox"
                    className="form-check-input"
                    name={'eklnfdl'}
                    value={'ldkf,'}
                    checked={stateEtreContacte}
                    onChange={'mdffg'}
                    id={'mdfok'}   
                />
                    <label className="form-check-label" htmlFor={'lkdfg'} style={{textTransform:"capitalize"}}>
                        Je souhaite être contacté    
                    </label>                            
                    </div>
                </div>
            </div>
        </div>
        <div className="textarea-style mb-20">
            <textarea ref={precisionRef} name="message" placeholder="Precisez votre demande (Facultatif)"></textarea>
        </div>
        <div className="custome-checkbox mb-25">
            <div className="checkbox-container">
                <div className="checkbox-label ml-3">
                    Vous êtes un : 
                </div>
                <div className="checkbox-label" onClick={(e) => handleCheckBox2("particulier")}>
                    <input
                    type="checkbox"
                    className="form-check-input"
                    name={'eklnfdl'}
                    value={'ldkf,'}
                    checked={stateParticulier}
                    onChange={'mdffg'}
                    id={'mdfok'}   
                    />
                    <label className="form-check-label" htmlFor={'lkdfg'} style={{textTransform:"capitalize"}}>
                        Particulier   
                    </label>                            
                </div>
                <div className="checkbox-label" onClick={(e) => handleCheckBox2("professionnel")}>
                    <input
                    type="checkbox"
                    className="form-check-input"
                    name={'eklnfdl'}
                    value={'ldkf,'}
                    checked={stateProfessionnel}
                    onChange={'mdffg'}
                    id={'mdfok'}   
                    />
                    <label className="form-check-label" htmlFor={'lkdfg'} style={{textTransform:"capitalize"}}>
                        Professionnel   
                    </label>                            
                </div>
            </div>
        </div>
        <div className="checkbox-label mb-5 ml-3">
            Votre email * 
        </div>
        <div className="mb-40">
            <input ref={emailRef} name="email" placeholder="exemple@domaine.com" type="email" />
        </div>
        <div className="mb-20">
        <button className="submit submit-auto-width" type="submit">Next</button>
        </div>
    </form>
    )
}

export default Gmap