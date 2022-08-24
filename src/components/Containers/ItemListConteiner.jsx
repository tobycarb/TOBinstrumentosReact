import {useState , useEffect} from 'react';  
import ItemList from '../Item/ItemList';
import Loader from '../Loader';
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs} from 'firebase/firestore'

function ItemListConteiner(props) {

  const {serie} = useParams();
  const [funkos , setFunkos] = useState([]);
  const [loading, setLoading] = useState(false)
  

  useEffect(()=>{
      setLoading(true)
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        if(serie){
          setFunkos(data.filter((product) => product.series == serie))
        }else{
          setFunkos(data)
        }
      })
      .finally(()=> setLoading(false));
  },[serie])


  return (<>
    { loading ? <Loader/>
    : <ItemList funkos={funkos}/>}
    </>
  )
}

export default ItemListConteiner;
