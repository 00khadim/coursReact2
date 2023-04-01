
export default function Item(props) {
    return (
        <div>
            <li className="container mx-auto">
                <div className="grid grid-rows-2 grid-flow-col gap-3 m-10">
                    <div className="p*3">{props.name}</div>
                    <button className="btn btn-danger p-2 h-50"
                        onClick={() => props.delFunc(props.id)}
                    >Supprimer</button>

                </div>
            </li>
        </div>
    )
}
