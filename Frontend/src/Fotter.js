export default function Fotter(props) {
  return (
    <div>
      <div className="remeber-forgot">
        <label>
          <input type="checkbox" /> I agree to the termes &conditions
        </label>
      </div>
      <button className="btn" type="submit">
        Log in
      </button>
      <button
        className="btn"
        onClick={() => props.onFormSwitch(`${props.switchTo}`)}
      >
        {props.text}
      </button>
    </div>
  );
}
