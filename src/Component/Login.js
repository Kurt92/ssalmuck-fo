import "./css/login.scss";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui.css";
import "jquery-ui-dist/jquery-ui.min.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  let [user, setUser] = useState({
    user_id: "",
    password: "",
    name: "",
  });

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let login = () => {
    axios
      .post("http://localhost:8099/login", user, axiosConfig)
      .then((result) => {
        console.log("login post" + result);
        let aaa = getCookie("accessToken");
        console.log("cookie", aaa);

        //setUser((user.name = result.data.list.name));

        /*setUser({
          ...user,
          user: {
            id: result.data.list.id,
            password: result.data.list.password,
            name: result.data.list.name,
          },
        });*/

        /*setUser((prevState) => {
          return {
            ...prevState,
            id: result.data.list.id,
            password: result.data.list.password,
            name: result.data.list.name,
          };
        });*/
        console.log("set state :" + user);
        console.log({ user });
        console.log(user);
      })
      .catch(() => {
        console.log("fail");
      });
  };

  function getCookie(name) {
    var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? unescape(value[2]) : null;
  }

  let result = () => {
    if (user.name != null) {
      return (
        <>
          <div className="success">
            <h2>Authentication Success</h2>
            <p>Welcome back</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="fail">
            <h2>login fail</h2>
            <p>go back</p>
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    $('input[type="submit"]').click(function () {
      console.log("click");
      setUser((user.user_id = $("#id").val()));
      setUser((user.password = $("#password").val()));
      console.log("!!!!!", user);
      login();
      $(".login").addClass("test");
      setTimeout(function () {
        $(".login").addClass("testtwo");
      }, 300);
      setTimeout(function () {
        $(".authent")
          .show()
          .animate(
            { right: -320 },
            { easing: "easeOutQuint", duration: 600, queue: false }
          );
        $(".authent")
          .animate({ opacity: 1 }, { duration: 200, queue: false })
          .addClass("visible");
      }, 500);
      setTimeout(function () {
        $(".authent")
          .show()
          .animate(
            { right: 90 },
            { easing: "easeOutQuint", duration: 600, queue: false }
          );
        $(".authent")
          .animate({ opacity: 0 }, { duration: 200, queue: false })
          .addClass("visible");
        $(".login").removeClass("testtwo");
      }, 2500);
      setTimeout(function () {
        $(".login").removeClass("test");
        $(".login div").fadeOut(123);
      }, 2800);
      setTimeout(function () {
        $(".success").fadeIn();
      }, 3200);
    });

    $('input[type="text"],input[type="password"]').focus(function () {
      $(this).prev().animate({ opacity: "1" }, 200);
    });
    $('input[type="text"],input[type="password"]').blur(function () {
      $(this).prev().animate({ opacity: ".5" }, 200);
    });

    $('input[type="text"],input[type="password"]').keyup(function () {
      if (!$(this).val() == "") {
        $(this).next().animate({ opacity: "1", right: "30" }, 200);
      } else {
        $(this).next().animate({ opacity: "0", right: "20" }, 200);
      }
    });

    var open = 0;
    $(".tab").click(function () {
      $(this).fadeOut(200, function () {
        $(this).parent().animate({ left: "0" });
      });
    });
  }, []);

  return (
    <>
      <div className="brand">
        <a href="https://www.jamiecoulter.co.uk" target="_blank">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/logo.png" />
        </a>
      </div>
      <div className="login">
        <div className="login_title">
          <span>Login to your account</span>
        </div>
        <div className="login_fields">
          <div className="login_fields__user">
            <div className="icon">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png" />
            </div>
            <input placeholder="Username" type="text" id="id" />
            <div className="validation">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
          </div>
          <div className="login_fields__password">
            <div className="icon">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png" />
            </div>
            <input placeholder="Password" type="password" id="password" />
            <div className="validation">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
            </div>
          </div>
          <div className="login_fields__submit">
            <input type="submit" value="Log In" />
            <div className="forgot">
              <a href="#">Forgotten password?</a>
            </div>
            <div className="forgot">
              <Link className="nav-link" to="/ChatGptSignUp">
                SignIn
              </Link>
            </div>
          </div>
        </div>
        {/*1 === 2 ? <div className="success"><h2>Authentication Success</h2><p>Welcome back</p></div>:<div className="fail"><h2>fail</h2><p>go back</p></div>*/}
        {result}
        {/* <div className="success">
          <h2>Authentication Success</h2>
          <p>Welcome back</p>
        </div>*/}
        <div className="disclaimer"></div>
      </div>
      <div className="authent">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg" />
        <p>Authenticating...</p>
      </div>
      <div className="love">
        <p></p>
      </div>
    </>
  );
}
