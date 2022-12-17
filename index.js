const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-button-background">
    <div className="card">
      <h1 className="heading">Social Buttons</h1>
      <div className="Social-buttons">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="Comment" className="Comment-button" />
        <Button buttonText="Share" className="Share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
