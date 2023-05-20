import { useEffect } from 'react';
import { CgAdidas, SiCdprojekt, RiHeartLine } from 'react-icons/all';

// eslint-disable-next-line react/prop-types
const Card = ({ title = 'unicorn', description = 'A single corn. Er, I mean horn.', cardType = 'cdprojekt' }) => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cardsContainer = document.getElementById('cards');
            const cards = cardsContainer.getElementsByClassName('card');
            for (const card of cards) {
                if (card === e.target) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            }
        };

        const cardsContainer = document.getElementById('cards');
        cardsContainer.addEventListener('mousemove', handleMouseMove);

        return () => {
            cardsContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const iconMap = {
        adidas: <CgAdidas color="#fff" />,
        cdprojekt: <SiCdprojekt color="#fff" />,
        heart: <RiHeartLine color="#fff" />,
    };

    const renderIcon = () => {
        const IconComponent = iconMap[cardType];
        if (IconComponent) {
            return IconComponent;
        }
        return null;
    };

    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    {renderIcon()}
                </div>
                <div className="card-info-wrapper">
                    <div className="card-info">
                        <i className="fa-duotone fa-unicorn"></i>
                        <div className="card-info-title">
                            <h3>{title}</h3>
                            <h4>{description}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
