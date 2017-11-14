$(document).ready(function() {
//
//    $("button").on("click", function(){
//    var sub = $("#subreddit").val();
//        $.get("https://www.reddit.com/r/" + sub + ".json").done(function(data){
//        var postARray = data.data.children;
//            postArray.forEach(function(post){
//                console.log(post.data.author, post.data.title);
//        $("body").append(`
//            <h4>` + post.data.title + `</h4>
//            <p>` + post.data.author + `</p>
//        `);
//        });
//    });
//});
//    
    
//    
//$("#SearchReddit").on("click", function(){
//    var inputInfo = $("#subreddit").val();
//    $.get("https://www.reddit.com/r/" + inputInfo + ".json").done(function(RedditInfo){
//        console.log(RedditInfo); 
//        var itemData = RedditInfo.data.children;
//        itemData.forEach(function(item){
//            console.log(item.data.author, item.data.title);
//            $("body").append(`
//                <h4>` + item.data.title + `</h4>
//                <p>` + item.data.author + `</p>
//            `);
//        });    
//    });
//    
//});
//    
    
    
//83d8e354725304b7

    
$("Button").on("click", function(){
    var city = $("#city").val();
    var state = $("#state").val();
    $.get("http://api.wunderground.com/api/83d8e354725304b7/hourly/q/" + state + "/" + city + ".json")
    .done(function(FullInfo){
        console.log(FullInfo);
        var fullArray = FullInfo.hourly_forecast;
        console.log(fullArray);
    fullArray.forEach(function(hourItem){
        if(hourItem.FCTTIME.hour%2 == 0){
            console.log(hourItem.FCTTIME.hour);
            $("#Col1").append(hourItem.FCTTIME.civil);
            $("#Col2").append(hourItem.condition);
            $("#Col3").append(hourItem.temp.english);
        }});
    });    
        
    });
    
    

    
    


    
    
    
    
});