using MCSDEx6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
namespace MCSDEx6.Controllers
{
    public class UsersController : Controller
    {
        UserRepo repo = new UserRepo();
        // GET: Users
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetAllUsers()
        {
            List<Users> myUsers = new List<Users>();
            myUsers = repo.GetAllUsers().ToList();
            return Json(myUsers, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult GetUser(string userId)
        {
            return Json(repo.GetUser(Int32.Parse(userId)), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AddUser(Users deserializedUser)
        {
            repo.AddUser(deserializedUser);
            return Json(new {success = true, message = "some message from server!" });
        }

        public JsonResult UpdateUser(Users deserializedUser)
        {
            repo.UpdateUserDetails(deserializedUser);
            return Json(new { success = true, message = "updated info!"});
        }
    }
}