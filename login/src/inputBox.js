import { DEFAULT_ICON_COLOR } from "@expo/vector-icons/build/createIconSet";
import "./formBox";

function InputBox(props) {
  return (
    <div className="input-box">
      <span className="icon">
        <ion-icon name={props.iconName}></ion-icon>
      </span>
      <input type={props.type} required />
      <label>{props.label}</label>
    </div>
  );
}
export default InputBox;
