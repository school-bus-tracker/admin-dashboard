import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faInfo,  } from '@fortawesome/free-solid-svg-icons';

function notificationItem(NotificationURL, NotificationDate, NotificationContent){
  var Item = [];
  Item.push(<a className="dropdown-item d-flex align-items-center" href={NotificationURL}>
  <div className="mr-3">
    <div className="icon-circle bg-success">
      <i className="fas fa-donate text-white"></i>
    </div>
  </div>
  <div>
    <div className="small text-gray-500">{NotificationDate}</div>
    {NotificationContent}
  </div>
</a>);
  return Item;
}

function notificationCount(count){
  var NotificationCount = count, Notification=[];
  if(NotificationCount!=0){
      Notification.push(
        <span className="badge badge-danger badge-counter">{NotificationCount}+</span>
      )  
  }
  return Notification;
}

function getNotification(){
  return (<a className="dropdown-item d-flex align-items-center">
    Nothing to show
  </a>)
}

function notification() {
  
  return (
        <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <FontAwesomeIcon icon={faBell}/>
          {notificationCount(0)}
        </a>
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
          <h6 className="dropdown-header">
            Notifications
          </h6>
            {getNotification()}
        </div>
      </li>
    )
}

export default notification;