import './styles.css';
import carImg from '../../assets/carImg.png'

export default function CarCard()
{
    return (
        <div className="car-card">
            <img src={carImg} alt="carro" />
            <p>Lorem ipsum dolor</p>
        </div>
    );
}
