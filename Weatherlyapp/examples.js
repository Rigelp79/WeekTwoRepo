$(function () {
    $("#add").click(function () {
        addContent("http://google.com");
    }).addClass('blue');

    var addContent = function (url) {
        var container = $("#container");
        var span = $("<span></span>");
        span.html("Hello, ");
        span.append("World!");
        var link = $("<a></a>");
        link.attr("href", url);
        link.attr("target", "_blank");
        link.html(" (Google That) ");
        span.append(link);
        container.append(span);

        container.append('<span>Hello, World!<a href="' + url + '"> (Google That) </a></span>');
    };

    var friendsUrl = "http://rest.learncode.academy/api/learncode/friends";
    var addFriend = function (name, drink) {
        $.ajax(friendsUrl, {
            method: "POST",
            data: { name: name, drink: drink }
        }).done(function (data) {
            var id = data.id;
            showFriend(id);
        });
    };
    var showFriend = function (id) {
        $.ajax(friendsUrl + "/" + id).done(function (data) {
            var div = $("<div></div>");
            div.append(data.name)
                .append(" likes ")
                .append(data.drink);
            $("#friend").append(div);
        });
    };

    $("#showFriend").click(function () {
        var id = $("#friendId").val();
        showFriend(id);
    });

    $("#addFriend").click(function () {
        // Read input fields
        var name = $("#name").val();
        var drink = $("#drink").val();
        if (name && drink) {
            // Call web service
            addFriend(name, drink);
            // Clear input fields
            $("#name").val("");
            $("#drink").val("");
        }
    });

});
