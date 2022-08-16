import { Button, Cards } from './styled/card.style'

export default function Card(props) {
    console.log(props)
    return(
        <Cards className={`card-${props.count}`}>
            <img src={ props.imgUrl } alt="" />
            <h2>{ props.title }</h2>
            <p>{ props.description }</p>
            <Button className={`btn-${props.count}`}>Learn More</Button>
        </Cards>
    )
}