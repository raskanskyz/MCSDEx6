$(document).ready(function () {
    $.ajax("/index.html", {
        success: function () {
            $('#users-table').bootstrapTable({
                url: '/users/getallusers',
                columns: [
                {
                    field: 'ID',
                    title: '#'
                },
                {
                    field: 'username',
                    title: 'User Name'
                },
                {
                    field: 'password',
                    title: 'User Password'
                },
                {
                    field: 'role',
                    title: 'User Role'
                }
                ]
            });
        },
        error: function () {
            $('#myError').text('An error occurred');
        }
    });

    $('#addUserBtn').on('click', function () {
        var users = {};
        users.username = $('#userName').val();
        users.password = $('#password').val();
        users.role = $('#role').val();
        $.ajax({
            url: "users/adduser",
            type: "POST",
            dataType: "text",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(users),
            success: function (data) {
                alert("inserted " + data);
            },
            error: function (err) {
                alert("oops: " + err);
            }
        });

    });

    $('#loadUserButton').on('click', function () {
        var userId = $('#userNameLoad').val();
        $.ajax({
            url: 'users/getuser',
            type: 'POST',
            data: JSON.stringify({ userId: userId }),//<-sent null when tried to send userId 
            dataType: "json",//<- The type of data that you're expecting back from the server
            contentType: "application/json; charset=utf-8",//<-When sending data to the server
            success: function (user) {
                $('#userName').val(user.username);
                $('#password').val(user.password);
                $('#role').val(user.role);
            },
            error: function (err) {
                alert(JSON.stringify(err));
            }
        });
    });

    $('#updateUserBtn').on('click', function () {
        var obj = {};
        obj.id = $('#userNameLoad').val();
        obj.username = $('#userName').val();
        obj.password = $('#password').val();
        obj.role = $('#role').val();
        $.ajax({
            url: "users/updateuser",
            type: "POST",
            data: JSON.stringify({ deserializedUser: obj}),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (msg) {
                alert(JSON.stringify(msg));
            },
            error: function (msg) {
                alert(JSON.stringify(msg));
            }
        });
    });


});