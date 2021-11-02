# SWOT Notification Application
This is the demo React application that shows notification from the provided json data in the res directory. If the notification icon is clicked for the first time then it will remember the data and will ignore those notifications when the component is rendered again.

# Features
The feature of this application is to show the notifications for the ones that are UNREAD.

# How to run the application
First clone the repo and then run below command to install all the packages from the root directory:
```
npm install
```

After running the above command, run the below command to run application and see the notification changes:
```
npm run start
```

# Screenshots
This are the screenshots of the application that I just developed for your references as below:
1. This is the default home page of the appliation where the json initially has 3 unread notifications as reflected as the badge
<img src="https://github.com/dishant9397/swot-notification-application/blob/master/src/res/screenshots/home_page.png" height="50%" width="50%"/>

2. This is the another example when we click the notification icon and we can still see the number of notifications that are not read yet but will be when we again click the icon
<img src="https://github.com/dishant9397/swot-notification-application/blob/master/src/res/screenshots/open_notification_menu.png" height="50%" width="50%"/>

3. This is the final screenshot when we again click the notification icon to dismiss all the unread notifications and hence the count will be 0 this time
<img src="https://github.com/dishant9397/swot-notification-application/blob/master/src/res/screenshots/default_notification_menu.png" height="50%" width="50%"/>

# Limitations
There are no limitations to run this application as of now.

# Citations
I used below resources from the web to develop this notification application:
1. https://www.flaticon.com (Used this link to download the image for notification)
2. https://www.npmjs.com/package/react-notification-badge (To show the count of notifications on the top of bell icon)
3. https://reactstrap.github.io/?path=/story/home-installation--page (This helps to render the notification detail as a separate card)