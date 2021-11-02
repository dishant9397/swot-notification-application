// import the different components from different libraries
import { useState, useEffect } from 'react';
import { UncontrolledCollapse, Button } from 'reactstrap';
import NotificationBadge from 'react-notification-badge';

// importing images and data from local directories
import bell from '../images/bell.png'
import jsonData from '../res/data.json'
import NotificationList from './NotificationList';

// this function will render the whole notification function and return its output
// to display to the users. Here I am getting data from the json and rendering the
// number of unread messages on the top of the notification icon.
function Notification() {

    // initiliazing the states
    const [notificationCount, setNotificationCount] = useState(0)
    const [data, setData] = useState(jsonData.data)
    const [showAllNotifications, setShowAllNotifications] = useState(true)

    // this is the default function that will be called whenever we need to get the 
    // latest notification count i.e., number of unread notifications
    const showNotification = () => {
        setNotificationCount(data.filter((record) => record.status === "UNREAD").length)
    }

    // this function will be triggered when we click the bell icon and will read all the
    // notifications if it is clicked again and on the first click it will just track
    const notificationButtonClicked = () => {
        if (showAllNotifications === true) {
            setShowAllNotifications(false)
        } else {
            setData((data) => data.map((data) => {
                data.status = "READ"
                return data
            }))
            showNotification()
        }
    }
    
    // this is the useEffect that renders the startup functions for this component
    useEffect(() => {
       showNotification() 
    }, [])

    // this return function is responsible for rendering the notification details and 
    // gives a detailed list of each notification when bell icon id clicked and clears
    // the notification if those are already read
    return (
        <div style={styles.container}>
            <Button
                color="primary"
                id="notification-button"
                style={styles.button}
                onClick={notificationButtonClicked}
            >
                <NotificationBadge count={notificationCount}/>
                <img src={bell} style={styles.icon}/>
            </Button>
            
            <UncontrolledCollapse  toggler="#notification-button">
                <NotificationList data={data}/>
            </UncontrolledCollapse>
        </div>
    )
}

// this is the styling constant that acts as a css for various components
const styles = {
    icon: {
      height: '5vh',
      width: '5vh',
    },
    container: {
        width: '80%',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: '15px',
    }
};

// renders the whole component and exports it
export default Notification
