    addEventListener("scroll", function () {
        //Get Menu Document
        var menu = document.getElementById("menu");
        //Get Menu Classes
        var navClasses = menu.getAttribute("class");
        //If Menu Hasn't Any Classes Set Empty Class
        if (!navClasses) {
            menu.setAttribute("class", " ");
        }
        //If Distance From Top <= Distance Menu From Top , Remove Sticky Menu Class
        if (scrollY <= menu.offsetTop) {
            menu.setAttribute("class", navClasses.replace("topMenu", ""))
        }
        //If Distance From Top > Distance Menu From Top , Add Sticky Menu Class
        else {
            //If There Sticky Class not Defined
            if (navClasses.indexOf("topMenu") == -1) {
                //Set Sticky Menu Class To Nav
                menu.setAttribute("class", navClasses + " topMenu");
            }
        }
    })