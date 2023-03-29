import { useEffect, useState } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/Theme';


function App() {
 const [notes, setNotes] = useState([
  // {
  //   id: crypto.randomUUID(),
  //   text: 'This is my first note!',
  //   date: '15/04/2021',
  // },
  // {
  //   id: crypto.randomUUID(),
  //   text: 'This is my second note!',
  //   date: '21/04/2021',
  // },
  // {
  //   id: crypto.randomUUID(),
  //   text: 'This is my third note!',
  //   date: '28/04/2021',
  // },
  // {
  //   id: crypto.randomUUID(),
  //   text: 'This is my new note!',
  //   date: '30/04/2021',
  // },
 ]);

 const [searchText, setSearchText] = useState('');
const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)

console.log('theme:', theme)

 useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes){
      setNotes(savedNotes);
    }
 }, [])




 useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data', 
    JSON.stringify(notes)
    );
 }, [notes])

 const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: crypto.randomUUID(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
 }

 const deleteNote = (id) => {
  const newNotes = notes.filter(note => note.id !== id);
  setNotes(newNotes);
 }
 
  return (
   
    <div style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
    <div className='container'>
      <Header toggleTheme={toggleTheme} />
      <Search handleSearchNote={setSearchText}/>
     <NoteList 
     notes={notes.filter((note) => 
      note.text.toLowerCase().includes(searchText))}
     handleAddNote={addNote}
     handleDeleteNote={deleteNote}
     />
    </div>
    </div>
  )
}

export default App
