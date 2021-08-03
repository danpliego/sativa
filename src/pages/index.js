import * as React from "react";
import Cursos from "../components/cursos";
import Layout from "../components/layout";
import Redes from "../images/we_are_sativa.png";
import Asesorias from "../components/asesorias";
import Tienda from "../components/tienda";

// markup
const IndexPage = () => {
  return (
    <>
      <Layout homepage>
      <div className="section section-gradient">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="display mb-4 text-light text-shadow">Cannabis Self-care para la mente, cuerpo y espíritu</h1>
                <p className="font-lg text-dark">
                  Somos una comunidad inclusiva sobre el uso responsable, recreativo y creativo del Cannabis.
                </p>
              </div>
              <div className="col-md-6">
                <img src={Redes} className="img-fluid mx-auto" width="500" />
              </div>
            </div>
          </div>
        </div>
        <div id="tienda">
          <Tienda />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
