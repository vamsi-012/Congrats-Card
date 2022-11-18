const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="greeting">Congratulations</h1>
    <div class="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-img"
      />
      <h1 className="name">Kiran V</h1>
      <p className="college">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="prize-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
