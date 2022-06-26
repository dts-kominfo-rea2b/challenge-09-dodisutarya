import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import contacts from './data/contacts';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header img="https://yt3.ggpht.com/ytc/AAUvwnjnrWSUgUDaEJfvpuXpeauIty08AvRgmpAaxRYBGA=s900-c-k-c0x00ffffff-no-rj" />
      <Contact
        name={contacts[0].name}
        photo={contacts[0].photo}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Contact
        name={contacts[1].name}
        photo={contacts[1].photo}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Contact
        name={contacts[2].name}
        photo={contacts[2].photo}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
      <Contact
        name={contacts[3].name}
        photo={contacts[3].photo}
        phone={contacts[3].phone}
        email={contacts[3].email}
      />
      <Contact
        name={contacts[4].name}
        photo={contacts[4].photo}
        phone={contacts[4].phone}
        email={contacts[4].email}
      />
      <Contact
        name={contacts[5].name}
        photo={contacts[5].photo}
        phone={contacts[5].phone}
        email={contacts[5].email}
      />
    </div>
  );
}

export default App;
