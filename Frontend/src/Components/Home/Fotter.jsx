import { Link } from "react-router-dom";

export default function Fotter(props) {
  return (
    <div>
      <div className="remeber-forgot">
        <label>
          <input type="checkbox" /> I agree to the termes &conditions
        </label>
      </div>
      
      <Link to="/admins/books">
      <button className="btn" type="submit" >sign in</button> </Link>      
      
      <button
        className="btn"
        onClick={() => props.onFormSwitch(`${props.switchTo}`)}
      >
        {props.text}
      </button>
    </div>
  );
}
