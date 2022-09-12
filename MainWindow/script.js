
let isMouseOver = false;





// include functions
function IncludeAllGroups(){
    $("#content-container").load("./modules/Groups/AllGroups/AllGroups.html");

}
function IncludeMyGroups(){
    $("#content-container").load("./modules/Groups/MyGroups/MyGroups.html");

}
function IncludeMyAccount(){
    $("#content-container").load("./modules/MyAccount/MyAccount.html");

}
function IncludeGeneralCalendar(){
    $("#content-container").load("./modules/Calendars/GeneralCalendar/GeneralCalendar.html");

}
function IncludeMyCalendar(){
    $("#content-container").load("./modules/Calendars/MyCalendar/MyCalendar.html");

}
function IncludeAllEvents(){
    $("#content-container").load("./modules/Events/AllEvents/AllEvents.html");
}
function IncludeMyEvents(){
    $("#content-container").load("./modules/Events/MyEvents/MyEvents.html");
}


// Menu Events section

function ShowGroupsMenu(){
    document.getElementById("groupsHiddenMenuDiv").style.height = "150px";
}

function ShowEventsMenu(){
    document.getElementById("eventsHiddenMenuDiv").style.height = "150px"; 
}

function ShowCalendarsMenu(){
    document.getElementById("calendarHiddenMenuDiv").style.height = "150px";  
}

function OnMouseClick(){
    if(!isMouseOver){
        document.getElementById("groupsHiddenMenuDiv").style.height = "48px";
        document.getElementById("eventsHiddenMenuDiv").style.height = "48px"; 
        document.getElementById("calendarHiddenMenuDiv").style.height = "48px";  

        

        

    }
    
}

function ChangeMouseOver(){
    isMouseOver = isMouseOver == true ? false : true;
}




