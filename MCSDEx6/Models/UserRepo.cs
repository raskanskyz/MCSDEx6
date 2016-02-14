using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCSDEx6.Models
{
    public class UserRepo
    {
        ctmedDBEntities db = new ctmedDBEntities();

        public Users GetUser(int id)
        {
            return db.Users.Find(id);
        }

        public void DeleteUser(Users usr)
        {
            db.Users.Remove(usr);
        }

        public IEnumerable<Users> GetAllUsers()
        {
            return db.Users;
        }

        public void AddUser(Users usr)
        {
            db.Users.Add(usr);
            db.SaveChanges();
        }

        public void UpdateUserDetails(Users usr)
        {
            var temp = GetUser(usr.ID);
            temp.username = usr.username;
            temp.password = usr.password;
            temp.role = usr.role;
            db.SaveChanges();
        }
    }
}