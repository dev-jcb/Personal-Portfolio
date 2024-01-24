import logo from '../src/assets/img/sample-avatar.png';
import "./Logo.css";

export default function Logo(){
    return (
        <div id="logo">
            <img src={logo}/>
        </div>
    )
}