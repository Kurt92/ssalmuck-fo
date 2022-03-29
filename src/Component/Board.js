import { Tab, Tabs } from "react-bootstrap";

function Sonnet() {
  return null;
}

export default function Board() {
  return (
    <>
      <div style={{ margin: "0 auto", height: "100%", width: "80%" }}>
        <div
          style={{ display: "flex", height: "600px", paddingBottom: "100px" }}
        >
          <div
            className="container"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >
            <div className="row">
              <div
                className="col-md-4"
                style={{
                  height: "500px",
                  backgroundColor: "#6c757d",
                }}
              >
                div1
              </div>
              <div
                className="col-md-4"
                style={{
                  backgroundColor: "#3f6383",
                }}
              >
                div2
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Sonnet />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <Sonnet />
            </Tab>
          </Tabs>
        </div>
        <div
          style={{
            display: "flex",
            height: "600px",
            width: "100%",
          }}
        >
          <div style={{ margin: "0 auto", width: "80%", overflow: "auto" }}>
            <nav
              id="navbar-example2"
              className="navbar navbar-light bg-light px-3"
            >
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#scrollspyHeading1">
                    First
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#scrollspyHeading2">
                    Second
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading3">
                        Third
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading4">
                        Fourth
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading5">
                        Fifth
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-offset="0"
              className="scrollspy-example"
              tabIndex="0"
            >
              <h4 id="scrollspyHeading1">First heading</h4>
              <p>
                Request Routing - Documentationhttps://projectcontour.io › docs
                › config › request-routing Each Route can be configured to have
                a timeout policy and a retry policy as shown: ... If left
                unspecified, timeoutPolicy.request will be used. TimeoutPolicy
                (AIM4 1.0-SNAPSHOT API)https://www.cs.utexas.edu › site ›
                apidocs › aim4 › policy public class TimeoutPolicy extends
                Object implements Policy, V2IManagerCallback. The timeout
                policy. Nested Class Summary. Nested Classes ... TimeoutPolicy
                (carnot-engine)https://xy2401.com › org › stardust › engine ›
                api › query org.eclipse.stardust.engine.api.query. Class
                TimeoutPolicy ... Supports specification of a runtime constraint
                on query execution. If query execution exceeds the ... Machine
                Learning Extractor : Timeout policy Error - UiPath
                ...https://forum.uipath.com › Help › Activities 2021. 11. 20. —
                ... error : Machine Learning extractor : The delegate executed
                asynchronously through
              </p>
              <h4 id="scrollspyHeading2">Second heading</h4>
              <p>
                Request Routing - Documentationhttps://projectcontour.io › docs
                › config › request-routing Each Route can be configured to have
                a timeout policy and a retry policy as shown: ... If left
                unspecified, timeoutPolicy.request will be used. TimeoutPolicy
                (AIM4 1.0-SNAPSHOT API)https://www.cs.utexas.edu › site ›
                apidocs › aim4 › policy public class TimeoutPolicy extends
                Object implements Policy, V2IManagerCallback. The timeout
                policy. Nested Class Summary. Nested Classes ... TimeoutPolicy
                (carnot-engine)https://xy2401.com › org › stardust › engine ›
                api › query org.eclipse.stardust.engine.api.query. Class
                TimeoutPolicy ... Supports specification of a runtime constraint
                on query execution. If query execution exceeds the ... Machine
                Learning Extractor : Timeout policy Error - UiPath
                ...https://forum.uipath.com › Help › Activities 2021. 11. 20. —
                ... error : Machine Learning extractor : The delegate executed
                asynchronously through
              </p>
              <h4 id="scrollspyHeading3">Third heading</h4>
              <p>...</p>
              <h4 id="scrollspyHeading4">Fourth heading</h4>
              <p>
                Request Routing - Documentationhttps://projectcontour.io › docs
                › config › request-routing Each Route can be configured to have
                a timeout policy and a retry policy as shown: ... If left
                unspecified, timeoutPolicy.request will be used. TimeoutPolicy
                (AIM4 1.0-SNAPSHOT API)https://www.cs.utexas.edu › site ›
                apidocs › aim4 › policy public class TimeoutPolicy extends
                Object implements Policy, V2IManagerCallback. The timeout
                policy. Nested Class Summary. Nested Classes ... TimeoutPolicy
                (carnot-engine)https://xy2401.com › org › stardust › engine ›
                api › query org.eclipse.stardust.engine.api.query. Class
                TimeoutPolicy ... Supports specification of a runtime constraint
                on query execution. If query execution exceeds the ... Machine
                Learning Extractor : Timeout policy Error - UiPath
                ...https://forum.uipath.com › Help › Activities 2021. 11. 20. —
                ... error : Machine Learning extractor : The delegate executed
                asynchronously through
              </p>
              <h4 id="scrollspyHeading5">Fifth heading</h4>
              <p>...</p>
            </div>
            <div className="overflow-auto">...</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: "400px",
            width: "100%",
            paddingTop: "50px",
          }}
        >
          <div style={{ width: "20%" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#6c757d",
              }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#3f6383",
              }}
            />
          </div>

          <div style={{ width: "20%" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#6c757d",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
