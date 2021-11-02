// import statements to run the main application
import './App.css';
import Notification from './components/Notification';

// function that will render the main application and will call Notification
// to render the Notification on the screen
function App() {
  return (
    <div style={styles.container}>
        <Notification></Notification>
    </div>
  );
}

// this is the styling constant that acts as a css for various components
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    padding: '16px'
  }
};

// renders the whole component and exports it
export default App;
