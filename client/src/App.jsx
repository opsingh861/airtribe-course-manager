import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Demo from './Test';

function App() {
  const [courseId, setCourseId] = useState('');
  const [maxSeats, setMaxSeats] = useState('');

  return (
    <>
      <form>
        <input type="text" placeholder="Course ID" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
        <input type="text" placeholder="Max Seats" value={maxSeats} onChange={(e) => setMaxSeats(e.target.value)} />
        <button type="submit" onClick={async (e) => {
          e.preventDefault();
          try {
            const response = await axios.put('http://localhost:8080/api/instructor/updatecourse', {
              courseId,
              maxSeats
            });
            alert(response.data.message);
          } catch (error) {
            alert('Something went wrong');
          }

        }}>Add Course</button>
      </form>
      <Demo />
    </>
  )
}

export default App
