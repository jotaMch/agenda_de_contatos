import React from 'react';
import { Main } from './style';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <Main>
            <div className="flex">
                <small>Leste Contact</small>
                <h2>Olá, me chamo</h2>
                <h1>Antonio Jânderson</h1>
                <p>Construí uma agenda de contatos baseada nas informações requisitadas, <span>conheça a Leste Contact.</span></p>
                <Link to='/agenda'> 
                    <button>
                        Agenda
                    </button>
                </Link>
            </div>
        </Main>
    );
};

export default Home;
