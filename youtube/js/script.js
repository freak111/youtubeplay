var channelName = "TechGuyWeb"
$(document).ready(function(){
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",{
            part:"contentDetails",
        forUsername : channelName,
        key : 'AIzaSyAhziuaJ-Tyv-frID9RyKU872_0FiCk6nU'
        },
        function(data){
            $.each(data.items,function(i,item){
                pid=item.contentDetails.relatedPlaylists.uploads;
                getVid(pid)
            })
        }
    );
    function getVid(x){
        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems",{
                part:"snippet",
            maxResults : 10,
            playlistId : x,
            key : 'AIzaSyAhziuaJ-Tyv-frID9RyKU872_0FiCk6nU'
            },
            function(data){
                var output;
                $.each(data.items,function(i,item){
                    console.log(item.snippet);
                   let videoTitle = item.snippet.resourceId.videoId;
                output = '<li> <iframe src=https://www.youtube.com/embed/'+videoTitle+'> </iframe></li>';
                $('#results').append(output)
                })
            }
        );
    }
})