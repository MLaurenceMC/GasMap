import { useState } from 'react';
import './App.css';
import ModalForm from './components/Modalform';
import NavBar from './components/NavBar';
import TableList from './components/TableList';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

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
    <>
      <html data-theme="dracula"></html>
      <NavBar onOpen={() => handleOpenModal('add')} />
      <TableList handleOpen={handleOpenModal} />
      <ModalForm
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)}
        mode ={modalMode}
      />
    </>
  );
}

export default App;
