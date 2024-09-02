import { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getFirestore, getDocs, where, query, collection} from "firebase/firestore"


export const ItemListContainer = (props) => {
    const[items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

const {id} = useParams()

useEffect(() =>{
    const db = getFirestore()
    const ref = !id ? collection(db, "items") : query(collection(db, "items"), where("categoryId", "==", id))
    
    getDocs(ref)
    .then ((snapshot) =>{
        setItems(
            snapshot.docs.map((doc)=> {
                return {id: doc.id, ...doc.data()}
            })
        )
    })
    .finally(() => setLoading(false))
}, [id])

    if(loading) return "wait";
    return <Container className='mt-4 d-flex' > 
        {items.map((i) => 
        <Card key={i.id }style={{ width: '18rem' }}>
      <Card.Img variant="top" src={i.imageId} />
      <Card.Body>
        <Card.Title>{i.title}</Card.Title>
        <Card.Text>
          {i.description}
          </Card.Text>
          <Card.Text>
          {i.categoryId}
        </Card.Text>
        <Link to={`/item/${i.id}`}><Button variant="primary">info</Button></Link>
      </Card.Body>
    </Card>)}
        </Container>
}



