import Card from '../Card/Card';
import useFetch from '../../hook/useFetch';


const CardContainer = () => {

    const { data, error, loading } = useFetch('/cards.json');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div id="cards">
            {
                data &&
                data["cards"].map((item) => {
                    return <Card key={item.id} title={item.title} description={item.description} cardType={item.cardType} />
                })
            }
        </div>
    );
};

export default CardContainer;
