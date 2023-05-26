import CarCard from '../../components/CarCard';
import Header from '../../components/Header';
import './styles.css';

export default function DSCarrosTop()
{
    return (
        <>
            <Header />
            <main>
                <section id="cars-section" className="ct-container">
                    <h2>Venha nos visitar</h2>
                    <div className="car-cards-container">
                        <CarCard />
                        <CarCard />
                    </div>
                </section>

                <section id="comments-section">

                </section>
            </main>
        </>
    );
}