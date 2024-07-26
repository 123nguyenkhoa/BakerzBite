import React, { useState, useEffect, useRef } from "react";
import "./CSS/LoginSignup.css";
import google_logo from "../Components/Assets/google-logo.png";
import facebook_logo from "../Components/Assets/facebook.jpg";
import successIcon from "../Components/Assets/check.png";
import errorIcon from "../Components/Assets/error.png";
import loginImage from "../Components/Assets/bakery-store.jpg";
import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../FireBase/FireBase";

const LoginSignup = ({ onUserUpdate }) => {
  useEffect(() => {
    const pwShowHide = document.querySelectorAll(".eye-icon");
    const links = document.querySelectorAll(".link");

    const togglePasswordVisibility = (eyeIcon) => {
      let pwFields =
        eyeIcon.parentElement.parentElement.querySelectorAll(".password");

      pwFields.forEach((password) => {
        if (password.type === "password") {
          password.type = "text";
          eyeIcon.classList.replace("uil-eye-slash", "uil-eye");
          return;
        }
        password.type = "password";
        eyeIcon.classList.replace("uil-eye", "uil-eye-slash");
      });
    };

    pwShowHide.forEach((eyeIcon) => {
      eyeIcon.addEventListener("click", () =>
        togglePasswordVisibility(eyeIcon)
      );
    });

    const toggleForm = (e) => {
      e.preventDefault();
      const forms = document.querySelector(".forms");
      forms.classList.toggle("show-signup");
    };

    links.forEach((link) => {
      link.addEventListener("click", toggleForm);
    });

    return () => {
      pwShowHide.forEach((eyeIcon) => {
        eyeIcon.removeEventListener("click", () => {});
      });
      links.forEach((link) => {
        link.removeEventListener("click", toggleForm);
      });
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [notification, setNotification] = useState({
    message: "",
    type: "",
  });
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordHint, setPasswordHint] = useState("");
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    setNotification({ message: "", type: "" });
    setPassword("");
    setConfirmPassword("");
    setPasswordStrength("");
    setPasswordHint("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setNotification({ message: "Login successful!", type: "success" });
      setEmail("");
      setPassword("");
      if (onUserUpdate) {
        onUserUpdate(userCredential.user);
      }
    } catch (error) {
      setNotification({
        message: error.message,
        type: "error",
      });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setNotification({
        message: "Passwords do not match. Please try again.",
        type: "error",
      });
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setNotification({ message: "Signup successful!", type: "success" });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAvatar(null); // Reset avatar after successful signup
      if (onUserUpdate) {
        onUserUpdate(userCredential.user, avatar);
      }
    } catch (error) {
      setNotification({
        message: error.message,
        type: "error",
      });
    }
  };

  const handleNotificationClick = () => {
    setNotification({ message: "", type: "" });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setNotification({ message: "Google login successful!", type: "success" });
      if (onUserUpdate) {
        onUserUpdate(result.user);
      }
    } catch (error) {
      setNotification({
        message: error.message,
        type: "error",
      });
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setUser(result.user);
      setNotification({
        message: "Facebook login successful!",
        type: "success",
      });
      if (onUserUpdate) {
        onUserUpdate(result.user);
      }
    } catch (error) {
      setNotification({
        message: error.message,
        type: "error",
      });
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = "";
    let hint = "";
    const regexWeak = /.{6,}/;
    const regexMedium = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,8}$/;
    const regexStrong = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{9,}$/;

    if (password.length < 6) {
      strength = "very-weak";
      hint = "Enter at least 6 characters.";
    } else if (regexStrong.test(password)) {
      strength = "strong";
      hint = "Strong password!";
    } else if (regexMedium.test(password)) {
      strength = "medium";
      hint = "Password must include at least one number or special character.";
    } else if (regexWeak.test(password)) {
      strength = "weak";
      hint = "Use a number or special character to strengthen your password.";
    }

    setPasswordStrength(strength);
    setPasswordHint(hint);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setAvatar(file);
    }
  };

  const clearAvatar = () => {
    setAvatar(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="container15 forms">
      <div className={`form ${isLogin ? "login" : "signup"}`}>
        <div className="form-content">
          <header>{isLogin ? "Login" : "Signup"}</header>
          <form onSubmit={isLogin ? handleLogin : handleSignup}>
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
                value={password}
                onChange={
                  isLogin
                    ? (e) => setPassword(e.target.value)
                    : handlePasswordChange
                }
              />
              <i className="uil uil-eye-slash eye-icon"></i>
              {!isLogin && (
                <>
                  <div className="password-strength">
                    <div className={`strength-bar ${passwordStrength}`}></div>
                  </div>
                  <p className="password-hint">{passwordHint}</p>
                </>
              )}
            </div>
            {!isLogin && (
              <>
                <div className="field input-field">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <i className="uil uil-eye-slash eye-icon"></i>
                </div>
                <div className="field input-field" id="input-field">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    ref={fileInputRef}
                  />
                  {avatar && (
                    <div className="avatar-name">
                      {avatar.name}
                      <button
                        type="button"
                        className="clear-avatar-btn"
                        onClick={clearAvatar}
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
            {notification.message && (
              <div className="notification" onClick={handleNotificationClick}>
                <div className="popup">
                  <img
                    src={
                      notification.type === "success" ? successIcon : errorIcon
                    }
                    alt="icon"
                    className="icon"
                  />
                  <p>{notification.message}</p>
                  <button onClick={handleNotificationClick}>OK</button>
                </div>
              </div>
            )}
            <div className="field input-field">
              <button type="submit">{isLogin ? "Login" : "Signup"}</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <a
                href="#0"
                className="link signup-link"
                onClick={handleToggleForm}
              >
                {isLogin ? "Signup" : "Login"}
              </a>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#0" className="field google" onClick={handleGoogleLogin}>
            <img src={google_logo} alt="Google Logo" className="google-img" />
            <span>Login with Google</span>
          </a>
          <a href="#0" className="field facebook" onClick={handleFacebookLogin}>
            <img
              src={facebook_logo}
              alt="Facebook Logo"
              className="facebook-img"
            />
            <span>Login with Facebook</span>
          </a>
        </div>
      </div>
      <div className="form-image">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default LoginSignup;
