import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./QRCodePayment.css";

const QRCodePayment = ({ handleCloseQRCodeModal, handleQRCodeSuccess }) => {
  const [qrScannedSuccess, setQrScannedSuccess] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "scanned") {
        setQrScannedSuccess(true);
        handleQRCodeSuccess();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleQRCodeSuccess]);

  return (
    <div className={`qr-modal ${qrScannedSuccess ? "hidden" : ""}`}>
      <div className="qr-modal-content">
        <button className="qr-modal-close" onClick={handleCloseQRCodeModal}>
          &times;
        </button>
        {!qrScannedSuccess && (
          <iframe
            className="qr-iframe"
            title="QR Code Payment"
            srcDoc={`
              <div style="text-align: center; padding: 20px; box-sizing: border-box;">
                <div id="content">
                  <div id="qrcode" style="margin: 0 auto 20px; width: 150px; height: 150px;"></div>
                  <p>Bank Name: Your Bank</p>
                  <p>Account Number: 123456789</p>
                  <p>Account Holder: Bakerz Bite</p>
                  <button id="scannedButton" style="
                    background-color: #4caf50;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    margin: 10px;
                    transition: background-color 0.3s ease;
                  ">I have scanned the QR code</button>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
                <script>
                  window.addEventListener('DOMContentLoaded', (event) => {
                    var qrcode = new QRCode(document.getElementById("qrcode"), {
                      text: "your-bank-account-information",
                      width: 128,
                      height: 128
                    });
                    document.getElementById("scannedButton").addEventListener("click", () => {
                      window.parent.postMessage("scanned", "*");
                    });
                  });
                </script>
              </div>
            `}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              overflow: "hidden",
            }}
          ></iframe>
        )}
      </div>
    </div>
  );
};

QRCodePayment.propTypes = {
  handleCloseQRCodeModal: PropTypes.func.isRequired,
  handleQRCodeSuccess: PropTypes.func.isRequired,
};

export default QRCodePayment;
