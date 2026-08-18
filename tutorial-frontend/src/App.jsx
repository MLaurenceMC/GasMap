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

  const handleOpenModal = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };
  const handleSubmit = (mode) => {
    if (modalMode === 'add') {
      console.log('modal add');
    } else {
      console.log('modal edit');
    }
  };

  return (
    <div data-theme="dracula">
      {/* <html data-theme="dracula"></html> */}
      <NavBar onOpen={() => handleOpenModal('add')} onSearch = {setSearchTerm}/>
      <TableList handleOpen={handleOpenModal} searchTerm={searchTerm}/>
      <ModalForm
        isOpen = {isOpen}
        onSubmit = {handleSubmit}
        onClose = {() => setIsOpen(false)}
        mode = {modalMode}
      />
    </div>
  );
}

export default App;
