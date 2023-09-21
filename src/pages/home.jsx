import { Link } from "react-router-dom";

export function HOME() { 

    return (
        <>
            <div className="nav__bar">
                <nav className="navigation">
                    <Link to="/patient" className="single">
                        <label className="list__label">
                            <span>MIS PACIENTES</span>
                        </label>
                    </Link>
                    <Link to="/flyer" className="double">
                        <label className="list__label correction">
                            <span>PROGRAMAS</span>
                        </label>
                    </Link>
                    <Link to="/equivalents" className="double">
                        <label className="list__label correction">
                            <span>SMAE</span>
                        </label>
                    </Link>
                    <Link to="/metrics" className="double margin__correction">
                        <label className="list__label correction">
                            <span>INDICADORES</span>
                        </label>
                    </Link>
                    <Link to="/dates" className="double margin__correction">
                        <label className="list__label correction">
                            <span>MIS CITAS</span>
                        </label>
                    </Link>
                </nav>
            </div>
        </> 
    ) 
}