import logo from '../src/assets/img/fadeout-logo.png';
import "./Logo.css";

export default function Logo(){
    return (
        <div id="logo">
            <img src={logo}/>
        </div>
    )
}