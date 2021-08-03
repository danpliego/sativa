import * as React from "react";
import Layout from "../components/layout";
import Subscribe from "../src/components/subscribe";

// markup
const AsesoriasPage = () => {
  return (
    <>
      <Layout>
        <div className="hero">
          <div className="section container">
            <div className="col-lg-10 mx-auto">
              <h1 className="hero-title text-center">
                Agenda una asesoria
              </h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AsesoriasPage;
