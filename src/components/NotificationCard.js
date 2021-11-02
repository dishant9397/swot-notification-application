// this function will show the notification data and will render a different
// type of UI if the notifications are "READ" and default UI if "UNREAD"
function NotificationCard({cardData}) {
    return(
        <div style={cardData.status === "READ" ? styles.card : {...styles.card, ...styles.unreadCards}}>
            <span style={styles.title}>
                {cardData.title}
            </span>
            <br/>{cardData.message}
        </div>
    );
}

// this is the styling constant that acts as a css for various components
const styles = {
    card: {
        margin: '5px',
        padding: '5px',
    },
    unreadCards:{
        backgroundColor: '#B6D7DD',
        borderRadius: '15px'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '20px'
    }
};

// renders the whole component and exports it
export default NotificationCard
