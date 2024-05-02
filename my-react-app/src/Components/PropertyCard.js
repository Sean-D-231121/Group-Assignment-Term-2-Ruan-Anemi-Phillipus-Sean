import "bootstrap/dist/css/bootstrap.min.css"

const PropertyCard = (props) => {
    return(
        <div class="card" style="width: 18rem;">
            <img src="https://www.property24.com/for-sale/parkdene/boksburg/gauteng/1959/114169418?plId=1641213&plt=3&plsIds=1691756" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.propertyName}</h5>
                <p class="card-text">{props.description.length(50)}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: {props.price}</li>
                <li class="list-group-item">Location: {props.location} </li>

            </ul>
        </div>
    )
}

export default PropertyCard