import React, { useState, useEffect } from "react";
import { fetchAndStoreContacts } from "../api/api"; 
import { Details, IconsEdit, List, UlList } from "./style";
import { LiaTrashAlt, LiaUserEditSolid } from "react-icons/lia";

interface Contact {
    avatar: string;
    birthday: string;
    email: string;
    first_name: string;
    gender: string;
    id: number;
    language: string;
    last_name: string;
}

const ListContacts: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [highlightedContactId, setHighlightedContactId] = useState<number | null>(null);
    const [editContactId, setEditContactId] = useState<number | null>(null);
    const [editValues, setEditValues] = useState<Contact | null>(null);

    useEffect(() => {
        const loadContacts = async () => {
            const storedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
            if (storedContacts.length > 0) {
                setContacts(storedContacts);
            } else {
                try {
                    const data = await fetchAndStoreContacts();
                    setContacts(data);
                } catch (error) {
                    console.error("Erro ao buscar dados da API:", error);
                }
            }
        };

        loadContacts();
    }, []);

    const toggleHighlight = (id: number) => {
        setHighlightedContactId(prevId => (prevId === id ? null : id));
    };

    const toggleEdit = (id: number) => {
        if (editContactId === id) {
            setEditContactId(null);
            setEditValues(null);
        } else {
            setEditContactId(id);
            const contact = contacts.find(contact => contact.id === id);
            setEditValues(contact ? { ...contact } : null);
        }
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editValues) {
            const { name, value } = e.target;
            setEditValues({ ...editValues, [name]: value });
        }
    };

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editValues) {
            const updatedContacts = contacts.map(contact =>
                contact.id === editValues.id ? editValues : contact
            );
            setContacts(updatedContacts);
            localStorage.setItem("contacts", JSON.stringify(updatedContacts));
            setEditContactId(null);
            setEditValues(null);
        }
    };

    const handleDelete = (id: number) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    };

    return (
        <div>
            <i>

            </i>
            <UlList>
                {contacts.map((contact) => (
                    <List key={contact.id}>
                        <div className="inf">
                            <img src={contact.avatar} alt="Avatar" />
                        </div>
                        <div className="content-contact">
                            {highlightedContactId !== contact.id && (
                                <p>{contact.first_name} {contact.last_name}</p>
                            )}
                            {highlightedContactId === contact.id && (
                                <IconsEdit>
                                    <LiaUserEditSolid onClick={() => toggleEdit(contact.id)} />
                                    <LiaTrashAlt onClick={() => handleDelete(contact.id)} />
                                </IconsEdit>
                            )}
                            {editContactId === contact.id && editValues && (
                                <form onSubmit={handleEditSubmit}>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={editValues.first_name}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={editValues.last_name}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        value={editValues.email}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        type="text"
                                        name="gender"
                                        value={editValues.gender}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        type="text"
                                        name="language"
                                        value={editValues.language}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        type="text"
                                        name="birthday"
                                        value={editValues.birthday}
                                        onChange={handleEditChange}
                                    />
                                    <button type="submit">Save</button>
                                </form>
                            )}
                        </div>
                        <Details onClick={() => toggleHighlight(contact.id)}>
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                        </Details>
                    </List>
                ))}
            </UlList>
        </div>
    );
};

export default ListContacts;
