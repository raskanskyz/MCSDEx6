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
                    title: 'username'
                },
                {
                    field: 'password',
                    title: 'password'
                },
                {
                    field: 'role',
                    title: 'role'
                }
                ]
            });
        },
        error: function () {
            $('#myError').text('An error occurred');
        }
    });

    $('#addUserBtn').on('click', function () {
        var user = {};
        user.username = $('#userName').val();
        user.password = $('#password').val();
        user.role = $('#role').val();
        $.ajax({
            url: "users/adduser",
            type: "POST",
            dataType: "text",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ user: JSON.stringify(user) }),
            success: function () {
                alert("inserted" + JSON.stringify(user));
            },
            error: function (err) {
                alert("oops: " + JSON.stringify(err));
            }
        });
    });
});

