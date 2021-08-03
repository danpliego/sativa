import React from "react";

const btnStyle = {
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
  height: 46,
  marginLeft: "1rem",
};

const Subscribe = () => {
  return (
    <div className="text-center pt-3">
      <div className="container">
        <p clasName="font-lg">
          Suscríbete a nuestro boletín y recibe un <span>10% de descuento</span>{" "}
          en tu primer curso
        </p>
        <div className="mt-3 mb-5 mx-auto" style={{ maxWidth: 500 }}>
          <form
            action="https://lahorasat.podia.com/email_lists/226925/subscriptions"
            accept-charset="UTF-8"
            method="post"
            className="d-flex align-items-center"
          >
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Email"
              className="form-control"
            />
            <input
              type="submit"
              value="Suscribirme"
              className="btn btn-primary"
              style={btnStyle}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
