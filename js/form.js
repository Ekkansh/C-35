class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(width/2-200, 100);

        var input = createInput("Name");
        input.position(width/2-200, 200);
        
        var greeting = createElement("h3");//position will be fixed when mouse pressed happens
        var button = createButton("Start");
        button.position(width/2-200, 250);
        button.mousePressed(function(){
            input.hide();
            title.hide();
            var name = input.value();
        
            //we have to increase playerCount in the DB
            playerCount+=1;
            player.updateCount(playerCount);

            //we also have to store the name in DB
            player.update(name);
        
            greeting.html("Hello "+ name+"\n Please wait for Others");
            greeting.position(width/2-200, 300);
            
        
        
        })

    }
}