import { MyHeader } from "./style";
import { CiSearch, CiFilter } from "react-icons/ci";
import { TbChartInfographic } from "react-icons/tb";
import { IoPersonAddOutline } from "react-icons/io5";
import AddContact from "../Add/index";
import { useState } from "react";

const Cabecalho: React.FC = () => {
    const [stateFormUser, setStateFormUser] = useState<boolean>(false);

    function myFormTrue() {
        setStateFormUser(prevStateFormUser => !prevStateFormUser);
    }

    return (
        <MyHeader>
            <div className="flex">
                <small>Leste Contact</small>
                <ul>
                    <li><IoPersonAddOutline onClick={myFormTrue} /></li>
                    <li><CiFilter /></li>
                    <li><TbChartInfographic /></li>
                </ul>
            </div>
            <form className="form-search">
                <input type="search" name="search" />
                <button type="button"><CiSearch size={20} /></button>
            </form>
            
            {stateFormUser && <AddContact myFormTrue={myFormTrue} />}
        </MyHeader>
    );
};

export default Cabecalho;
