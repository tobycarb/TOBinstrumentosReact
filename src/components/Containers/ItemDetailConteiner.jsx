import {useState , useEffect} from 'react';  
import ItemDetail from '../Detail/ItemDetail.jsx';
import Loader from '../Loader.jsx';
import { getItem } from '../Utils/AsyncMock.jsx'
import {useParams} from 'react-router-dom';

function ItemDetailConteiner(props) {
  const [product, setProduct] = useState([])
  const [loader, setLoading] = useState(false);
  const  {id}  = useParams();

  useEffect(() => {
    setLoading(true);
    getItem(Number(id))
      .then(snapshot => snapshot.docs.map(doc => setProduct(doc.data() )))
      .finally(() => setLoading(false));
  }, []);


return(
  <>{loader ? <Loader/> : <ItemDetail {...product} />}</>
)

}
export default ItemDetailConteiner;
