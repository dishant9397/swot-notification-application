// imports the NotificationCard that will be used to show each card
import NotificationCard from './NotificationCard';

// this function will breakdown the list of all the notifications to each 
// notification card and will render individual components
function NotificationList({data}) {
    return(
        <div style={styles.container}>
            {data.map((data) => <NotificationCard cardData={data}/>)}
        </div>
    );
}

// this is the styling constant that acts as a css for various components
const styles = {
    container: {
      padding: '2%',
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
      borderRadius: '15px',
      marginTop: '4px',
    }
};

// renders the whole component and exports it
export default NotificationList
