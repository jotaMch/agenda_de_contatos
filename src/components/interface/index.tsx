import Cabecalho from "../Header";
import ListContacts from "../List";
import { Container } from "./style";

const InterfaceAgenda: React.FC = () => {
    
    return (
        <Container>
            <Cabecalho/>
            <ListContacts/>
        </Container>
    );
};

export default InterfaceAgenda;
