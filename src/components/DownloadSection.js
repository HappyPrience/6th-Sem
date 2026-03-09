import "../css/DownloadSection.css";

export default function DownloadSection() {
  return (
    <div className="download-section">
      <div className="download-section1">

        <div className="download-left">
          <h1>Download the app now!</h1>
          
          <p>
            Experience seamless online ordering <br />
            only on our mobile app
          </p>

          <div className="store-buttons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />

            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </div>

        </div>
        <div className="download-right">

          <div className="phone">
            <p className="qr-text">
              Scan the QR code to <br /> download the app
            </p>

            <img
              className="qr"
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://yourapp.com"
              alt="QR Code"
            />
          </div>
        </div>
      </div>


    </div>
  );
}