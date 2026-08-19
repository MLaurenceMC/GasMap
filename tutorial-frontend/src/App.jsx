import { useState, useEffect } from 'react';
import './App.css';
import ModalForm from './components/Modalform';
import NavBar from './components/NavBar';
import TableList from './components/TableList';
import axios from 'axios';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/clients`
      );
      setTableData(response.data);
    } catch (error) {
      console.log("Error fetching client list", error);
    }
  } 

  useEffect(() => {
    fetchClients();
  }, []);


  const handleOpenModal = (mode,client) => {
    setClientData(client);
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add') {
      console.log('modal add');
      try {
        const response = await axios.post(
          `http://localhost:3000/api/clients`, newClientData);
          console.log(`Client added: `, response.data);
      } catch (error) {
        console.log("Error adding client", error);
      }
    } else {
      console.log('modal edit');
    }
  };

  return (
    <div data-theme="dracula">
      <NavBar onOpen={() => handleOpenModal('add')} onSearch = {setSearchTerm}/>
      <TableList handleOpen={handleOpenModal} searchTerm={searchTerm}/>
      <ModalForm
        isOpen = {isOpen}
        onSubmit = {handleSubmit}
        onClose = {() => setIsOpen(false)}
        mode = {modalMode} clientData = {clientData}
      />
    </div>
  );
}

export default App;
