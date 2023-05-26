import CarCard from '../../components/CarCard';
import CommentCard from '../../components/CommentCard';
import Footer from '../../components/Footer';
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

                <section id="comments-section" className="ct-container">
                    <h2>O que estão dizendo</h2>
                    <div className="comment-cards-container">
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </div>
                </section>
            </main>
            
            <Footer />
        </>
    );
}