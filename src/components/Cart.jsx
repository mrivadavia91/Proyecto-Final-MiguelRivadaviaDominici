import { useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import Container from "react-bootstrap/esm/Container";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
    phone: "",
    email: "",
    name: "",
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { Items, removeItem, reset } = useContext(ItemsContext);
    const [errors, setErrors] = useState({});

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setBuyer((prev) => ({
            ...prev,
            [name]: value,
        }));

        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "name":
                if (!/^[a-zA-Z\s]+$/.test(value)) {
                    error = "El nombre solo debe contener letras y espacios.";
                }
                break;
            case "phone":
                if (!/^\d{10}$/.test(value)) {
                    error = "El teléfono debe ser un número de 10 dígitos.";
                }
                break;
            case "email":
                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
                    error = "El email no es válido.";
                }
                break;
            default:
                break;
        }

        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const isFormValid = () => {
        return (
            buyer.name &&
            buyer.phone &&
            buyer.email &&
            !errors.name &&
            !errors.phone &&
            !errors.email
        );
    };

    const total = Items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const sendOrder = () => {
        if (!isFormValid()) {
            alert("Por favor, completa correctamente todos los campos.");
            return;
        }

        const order = {
            buyer,
            Items,
            total,
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then(({ id }) => {
                if (id) {
                    alert("¡Su orden: " + id + " ha sido completada!");
                }
            })
            .finally(() => {
                reset();
                setBuyer(initialValues);
            });
    };

    return (
        <Container>
            <button onClick={reset}>Vaciar</button>
            {Items.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <img src={item.imagenId} alt="imagen" height={200} />
                        <p>{item.quantity}</p>
                        <p onClick={() => removeItem(item.id)}>X</p>
                    </div>
                );
            })}
            <br />
            <div>Total ${total}</div>
            <br />
            <form>
                <div>
                    <label>Nombre</label>
                    <input
                        value={buyer.name}
                        name="name"
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                        value={buyer.phone}
                        name="phone"
                        onChange={handleChange}
                    />
                    {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        value={buyer.email}
                        name="email"
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>
                <button
                    type="button"
                    onClick={sendOrder}
                    disabled={!isFormValid()}
                >
                    Comprar
                </button>
            </form>
        </Container>
    );
};
