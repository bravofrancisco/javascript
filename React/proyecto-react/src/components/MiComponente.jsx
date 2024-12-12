import { useState } from "react";

function MiComponente() {
    const [Contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(Contador + 1);
    };

    const decrementar = () => {
        if (Contador > 0) {
            setContador(Contador - 1);
        }
    };

    return (
        <>
            <h1>Contador: {Contador}</h1>
            <button onClick={incrementar}>Aumentar +</button>
            <button onClick={decrementar}>Decrementar -</button>
        </>
    );
}

export default MiComponente;
