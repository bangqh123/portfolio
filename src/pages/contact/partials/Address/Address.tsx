import "./Address.scss"

import React from "react"

type TAddressProps = {
    address: string;
}

const Address: React.FC<TAddressProps> = ( {address} ) => {
    return (
        <div>{address}</div>
    )
}

export default Address;
