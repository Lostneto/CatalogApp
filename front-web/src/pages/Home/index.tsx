import './styles.scss';
import { ReactComponent as Desenho } from '../../core/assets/images/desenho.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <div className="row home-content">
            <div className="col-6">
                <h1 className="text-title">
                    Conheça o melhor <br /> catálogo de produtos
                </h1>
                <p className="text-subtitle">
                    Ajudaremos você a encontrar os melhores <br /> produtos disponíveis no mercado
                </p>
                <Link to="/catalog">
                    <ButtonIcon text="inicie agora a sua busca"/>
                </Link>
            </div>
            <div className="col-6">
                <Desenho  className="desenho"/>
            </div>
        </div>

    </div>

);

export default Home;