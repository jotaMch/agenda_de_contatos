import { useState } from "react";
import { Buttons, StyleFormNewUser } from "./style";


interface AddContactProps {
    //Diz ao ts que essa função não retorna nada
    myFormTrue: () => void;
}

const AddContact: React.FC<AddContactProps> = ({ myFormTrue }) => {
    const [newUser, setNewUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        language: "",
        birthday: ""
    });

    const handleValue = (e: any) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    };
    console.log(newUser)

    /*  */

    return (
        <StyleFormNewUser >
            <h2>Adicionar novo contato</h2>
            <input
                type="text"
                name="first_name"
                placeholder="First name"
                value={newUser.first_name}
                onChange={handleValue}
            />
            <input
                type="text"
                name="last_name"
                placeholder="Last name"
                value={newUser.last_name}
                onChange={handleValue}
            />
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleValue}
            />
            <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={newUser.gender}
                onChange={handleValue}
            />
            <input
                type="text"
                name="language"
                placeholder="Language"
                value={newUser.language}
                onChange={handleValue}
            />
            <input
                type="text"
                name="birthday"
                placeholder="Birthday"
                value={newUser.birthday}
                onChange={handleValue}
            />
            <Buttons>
                <button type="submit">Salvar</button>
                <button type="button" onClick={myFormTrue}>Voltar</button>
            </Buttons>
        </StyleFormNewUser>
    );
}

export default AddContact;
