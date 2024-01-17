import { Link } from "react-router-dom";

export function HOME() { 

    return (
        <>
            <div className="nav__bar">
                <nav className="navigation">
                    <Link to="/patient" className="link__all single">
                        <label className="list__label">
                            MIS PACIENTES
                        </label>
                    </Link>
                    <Link to="/flyer" className="link__all double">
                        <label className="list__label correction">
                            PROGRAMAS
                        </label>
                    </Link>
                    <Link to="/equivalents" className="link__all double">
                        <label className="list__label correction">
                            SMAE
                        </label>
                    </Link>
                    <Link to="/metrics" className="link__all double margin__correction">
                        <label className="list__label correction">
                            INDICADORES
                        </label>
                    </Link>
                    <Link to="/dates" className="link__all double margin__correction">
                        <label className="list__label correction">
                            MIS CITAS
                        </label>
                    </Link>
                </nav>
            </div>
        </> 
    ) 
}