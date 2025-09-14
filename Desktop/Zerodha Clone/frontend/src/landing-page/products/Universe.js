import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className=" fs-3 mt-5">The Zerodha Universe</h1>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-5">
          <img src="media/images/smallcaseLogo.png"></img>
          <p className="text-small text-muted mt-2" style={{ fontSize: "0.85rem" }}>
            Thematic investing platform
            <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/streakLogo.png" className="img-fluid w-50"></img>
          <p className="text-small text-muted mt-2" style={{ fontSize: "0.85rem" }}>Algo & strategy platform</p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/sensibullLogo.svg" className="img-fluid w-50"></img>
          <p className="text-small text-muted mt-2" style={{ fontSize: "0.85rem" }}>Options trading platform</p>
        </div>

        <div className="col-4 mt-5">
          <img src="media/images/zerodhaFundhouse.png" className="img-fluid w-50"></img>
          <p className="text-small text-muted mt-2" style={{ fontSize: "0.85rem" }}>Asset management</p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/goldenpiLogo.png" className="img-fluid w-50"></img>
          <p className="text-small text-muted mt-2" style={{ fontSize: "0.85rem" }}>Bonds trading platform</p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/images/dittoLogo.png" className="img-fluid w-25"></img>
          <p className="text-small text-muted mt-2" style={{ fontSize: "0.85rem" }}>Insurance</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
