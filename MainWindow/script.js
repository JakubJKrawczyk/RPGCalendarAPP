
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



function ShowHiddenMenu(sender, button){
    let height = sender.style.height;
    
    if(height == "155px"){
        sender.style.height = "47px";
        // button.style.color = "#c70d6a";
        
    }else{
        
        sender.style.height = "157px";
    //    button.style.color = "#2098D1";
    }
}


function OnMouseClick(){
    if(!isMouseOver){
        document.getElementById("groupsHiddenMenuDiv").style.height = "47px";
        document.getElementById("eventsHiddenMenuDiv").style.height = "47px"; 
        document.getElementById("calendarHiddenMenuDiv").style.height = "47px";   

        // let collection = document.getElementsByClassName("main-menu-button");

        // for(let i = 0; i<collection.length; i++){
        //     collection[i].style.color = "#c70d6a";
        // }
    }
    
}

function ChangeMouseOver(){
    isMouseOver = isMouseOver == true ? false : true;
}




