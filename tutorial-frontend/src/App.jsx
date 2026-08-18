import { useState } from 'react';
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

  const handleOpenModal = (mode) => {
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
