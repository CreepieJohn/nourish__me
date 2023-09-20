export function HOME() { 

    return (
        <>
            <div className="nav__bar">
                <nav className="navigation">
                    <button className="single"><label className="list__label"><span>MIS PACIENTES</span></label></button>
                    <button className="double"><label className="list__label correction"><span>MIS FOLLETOS</span></label></button>
                    <button className="double"><label className="list__label correction"><span>MIS EQUIVALENTES</span></label></button>
                    <button className="double margin__correction"><label className="list__label correction"><span>MIS METRICAS</span></label></button>
                    <button className="double margin__correction"><label className="list__label correction"><span>MIS CITAS</span></label></button>
                </nav>
            </div>
        </> 
    ) 
}